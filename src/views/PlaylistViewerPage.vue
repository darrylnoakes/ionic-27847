<script setup lang="ts">
import { ref } from "vue";

import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import SettingsButton from "@/components/SettingsButton.vue";

import { getMode as getIonicMode } from "@ionic/core";
import { onIonViewWillEnter, onIonViewWillLeave } from "@ionic/vue";

const props = defineProps<{ id: string }>();

const backButtonText = getIonicMode() === "ios" ? "Index" : "";

const songList = ref([
  { id: "a", title: "Foo" },
  { id: "b", title: "Bar" },
  { id: "c", title: "Baz" },
]);

onIonViewWillEnter(() => {
  console.log("Enter: Playlist");
});

onIonViewWillLeave(() => {
  console.log("Leave: Playlist");
});
</script>

<template>
  <ion-page id="page-playlist-viewer">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button
            :text="backButtonText"
            default-href="/index"
          ></ion-back-button>
        </ion-buttons>
        <ion-title>Playlist: {{ props.id }}</ion-title>
        <ion-buttons slot="primary">
          <SettingsButton />
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item
          v-for="song in songList"
          :key="song.id"
          :button="true"
          :detail="false"
          @click="() => $router.push({ name: 'Song', params: { id: song.id } })"
        >
          <ion-label>
            {{ song.title }}
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<style scoped lang="scss"></style>
