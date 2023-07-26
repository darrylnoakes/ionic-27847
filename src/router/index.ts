import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

import MainPages from "@/components/MainPages.vue";
import IndexPage from "@/views/IndexPage.vue";
import PlaylistsPage from "@/views/PlaylistsPage.vue";
import PlaylistViewerPage from "@/views/PlaylistViewerPage.vue";
import SettingsPage from "@/views/SettingsPage.vue";
import SongViewerPage from "@/views/SongViewerPage.vue";

export const routeNames = {
  Index: "Index",
  Playlist: "Playlist",
  Playlists: "Playlists",
  Settings: "Settings",
  Song: "Song",
} as const;

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: { name: "Index" },
  },
  {
    path: "/",
    component: MainPages,
    children: [
      {
        path: "",
        redirect: { name: "Index" },
      },
      {
        path: "index",
        name: "Index",
        component: IndexPage,
      },
      {
        path: "playlists",
        name: "Playlists",
        component: PlaylistsPage,
      },
      {
        path: "playlists/:id",
        name: "Playlist",
        component: PlaylistViewerPage,
        props: true,
      },
    ],
  },
  {
    path: "/settings",
    name: "Settings",
    component: SettingsPage,
  },

  {
    path: "/song/:id",
    name: "Song",
    component: SongViewerPage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
