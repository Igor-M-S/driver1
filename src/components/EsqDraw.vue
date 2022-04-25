<template>
<q-drawer show-if-above side="left" bordered>
  <div>
  <q-list class="rounded-borders">
    <q-expansion-item switch-toggle-side expand-separator v-model="val" label="Meu drive">
      <q-card flat>
        <div v-for="item in itemsComp" :key="item.id">
          <router-link :to="item.link">
          <q-btn rounded flat class="full-width" :label="item.nome" />
          </router-link>
          
        </div>
      </q-card>
    </q-expansion-item>
  </q-list>
  
  </div>
</q-drawer>
</template>

<script>
import { itensStore } from "../store/compStore";
import { ref } from 'vue'

export default {
  setup() {

    const store = itensStore();
    return {
      itemsComp: store.itemsComp,
      val: ref(false)
    };
  },
};
</script>
