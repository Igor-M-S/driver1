<template>
  <q-list class="rounded-borders">
    <q-expansion-item switch-toggle-side expand-separator label="Computador">
      <q-card flat>
        <div v-for="item in itemsComp" :key="item.id">
          <q-btn rounded flat class="full-width">
            {{ item.nome }}
          </q-btn>
        </div>
      </q-card>
    </q-expansion-item>
  </q-list>
  <q-separator />
</template>

<script>
import { itensStore } from "../store/compStore";

export default {
  setup() {
    const store = itensStore();
    return {
      itemsComp: store.itemsComp,
    };
  },
};
</script>
