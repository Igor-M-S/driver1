<template>
  <div>
    <q-card flat>
      <q-card-section>
        <q-toggle v-model="val" />
      </q-card-section>
      <q-separator />
    </q-card>
    <q-card flat style="max-width: 800px">
      <q-card-section>
        <p class="" style="text-align: ; color: gray; font-weight: bold">
          Arquivos
        </p>
        <q-separator />
      </q-card-section>
      <div class="q-pa-md">
        <div v-if="val">
          <FotoList />
        </div>

        <div v-else>
          <FotoGrid />
        </div>
      </div>
    </q-card>
  </div>
</template>
<script>
import { ref } from "vue";

import { itensStore } from "../store/fotos.js";
import FotoList from "../components/fotoList.vue";
import FotoGrid from "@/components/fotoGrid.vue";

export default {
  components: {
    FotoList,
    FotoGrid
  },
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

