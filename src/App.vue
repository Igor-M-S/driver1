<template>
  <q-layout>
    <q-header >
    <q-item>
      <q-toolbar>
        <q-item-section>
          <q-toolbar-title>Driver</q-toolbar-title>
        </q-item-section>
        <BarraPesquisa />

        <q-item-section><PerfilFt /></q-item-section>
      </q-toolbar>
    </q-item>
  </q-header>
    <q-page>
      <q-page-container>
        <router-view />
      </q-page-container>
      <q-page-container>
        <ItemDraw />
      </q-page-container>
    </q-page>
  </q-layout>
</template>
<script>
import ItemDraw from "./components/EsqDraw.vue";
import BarraPesquisa from "@/components/NavbarComponents/BarraP.vue";
import PerfilFt from "@/components/NavbarComponents/user.vue";

export default {
  name: "LayoutDefault",

  components: {
    ItemDraw,
    BarraPesquisa,
    PerfilFt,
  },

  /* setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  } */
};
</script>
