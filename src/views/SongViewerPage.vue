<script setup lang="ts">
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  onIonViewWillEnter,
  onIonViewWillLeave,
} from "@ionic/vue";

import SettingsButton from "@/components/SettingsButton.vue";

import { getMode as getIonicMode } from "@ionic/core";

const props = defineProps<{ id: string }>();

const backButtonText = getIonicMode() === "ios" ? "Index" : "";

onIonViewWillEnter(() => {
  console.log("Enter: Song");
});

onIonViewWillLeave(() => {
  console.log("Leave: Song");
});
</script>

<template>
  <ion-page id="page-song-viewer">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button
            :text="backButtonText"
            default-href="/index"
          ></ion-back-button>
        </ion-buttons>
        <ion-title>Song: {{ props.id }}</ion-title>
        <ion-buttons slot="primary">
          <SettingsButton />
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content> Some placeholder content... </ion-content>
  </ion-page>
</template>

<style scoped lang="scss"></style>
