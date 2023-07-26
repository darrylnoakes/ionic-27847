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

onIonViewWillEnter(() => {
  console.log("Enter: Settings");
});

onIonViewWillLeave(() => {
  console.log("Leave: Settings");
});
</script>

<template>
  <ion-page id="page-settings">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/index" />
        </ion-buttons>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content> Just some placeholder content. </ion-content>
  </ion-page>
</template>

<style scoped lang="scss"></style>
