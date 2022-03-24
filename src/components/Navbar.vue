<template>
    <q-header>
      <q-item>
        <q-toolbar style="height: 70px">
          <q-item-section>
            <q-toolbar-title>Driver</q-toolbar-title>
          </q-item-section>
          <BarraPesquisa style="width: 40%" />

          <q-item-section><PerfilFt /></q-item-section>
        </q-toolbar>
      </q-item>
    </q-header>
</template>

<script>
import BarraPesquisa from "@/components/NavbarComponents/BarraP.vue";
import PerfilFt from "@/components/NavbarComponents/user.vue";

export default {
  components: {
    BarraPesquisa,
    PerfilFt,
  },
};
</script>
<style>
</style>