<script setup lang="ts">
import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
} from "@ionic/vue";

import { playCircle, list } from "ionicons/icons";
</script>

<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="index" href="/index">
          <ion-icon :icon="playCircle" aria-hidden="true" />
          <ion-label>Index</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="playlists" href="/playlists">
          <ion-icon :icon="list" aria-hidden="true" />
          <ion-label>Playlists</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>
