<script setup lang="ts">
import { IonButton, IonIcon } from "@ionic/vue";

import { settings } from "ionicons/icons";
</script>

<template>
  <ion-button
    :router-link="{ name: 'Settings' }"
    aria-label="Go to the settings page"
  >
    <ion-icon :icon="settings" slot="icon-only" aria-hidden="true" />
  </ion-button>
</template>
