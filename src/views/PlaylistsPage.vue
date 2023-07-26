<script setup lang="ts">
import { ref } from "vue";

import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  onIonViewWillEnter,
  onIonViewWillLeave,
} from "@ionic/vue";
import SettingsButton from "@/components/SettingsButton.vue";

const playlistList = ref([
  { id: "1", title: "All" },
  { id: "2", title: "The" },
  { id: "3", title: "Things" },
]);

onIonViewWillEnter(() => {
  console.log("Enter: Playlists Index");
});

onIonViewWillLeave(() => {
  console.log("Leave: Playlists Index");
});
</script>

<template>
  <ion-page id="page-playlists">
    <ion-header>
      <ion-toolbar>
        <ion-title>Playlists</ion-title>
        <ion-buttons slot="primary">
          <SettingsButton />
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item
          v-for="playlist in playlistList"
          :key="playlist.id"
          :button="true"
          :detail="false"
          @click="
            () =>
              $router.push({ name: 'Playlist', params: { id: playlist.id } })
          "
        >
          <ion-label>
            {{ playlist.title }}
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<style scoped lang="scss"></style>
