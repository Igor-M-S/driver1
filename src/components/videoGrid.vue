<template>
  <q-table
    grid
    dense
    :rows="rows"
    :columns="columns"
    row-key="name"
    :selected-rows-label="getSelectedString"
    @row-dblclick="icon = true"
  >
    <template #item="props">
      <div class="q-pa-xs col-xs-12 col-sm-6 col-md-3">
        <q-card class="cardo" @click="icon = true" style="width: 130px">
          <q-card-section class="text-center">
            <q-icon name="play_circle" class="q-mr-sm" size="100px" style="color: #919191"/>
          </q-card-section>
          <q-separator />
          <q-card-section
            class="flex flex-center"
            :style="{ fontSize: props.row.calories + 'px' }"
          >
            <div>{{ props.row.nome }}</div>
          </q-card-section>
        </q-card>
      </div>
    </template>
  </q-table>
</template>
<script>
import { ref } from "vue";

import { itensStore } from "../store/videos.js";

export default {
  data() {
    const store = itensStore();
    const rows = store.rows;
    const columns = store.columns;
    const link = rows.link;

    return {
      val: ref(false),
      icon: ref(false),
      getSelectedString: Boolean,
      rows,
      columns,
      link,
    };
  },
};
</script>
<style scoped>
.cardo:hover {
  background-color: rgb(228, 227, 227);
}
</style>

