<template>
  <div class="q-pa-md">
    <q-table
      grid
      :rows="rows"
      :columns="columns"
      row-key="name"
      :selected-rows-label="getSelectedString"
      @row-click="icon = true"
    >
      <template #item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-3">
          <div style="width:130px">
          <q-card class="cardo" style="width: 130px">
            <q-icon
              name="description"
              style="color: #919191"
              size="130px"
              class="column"
            ></q-icon>

            <q-card-section class="flex flex-center">
              <p q-mr-sm>{{ props.row.nome }}.{{ props.row.tipo }}</p>
            </q-card-section>
          </q-card>
          </div>
          <q-popup-proxy>
            <q-banner>
              <template v-slot:avatar>
                <p>{{ props.row.link }}</p>
              </template>
            </q-banner>
          </q-popup-proxy>
        </div>
      </template>
    </q-table>
  </div>
</template>
<script>
import { ref } from "vue";
import { itensStore } from "../store/arquivos.js";
import { copyToClipboard } from "quasar";
//import { colors } from "quasar";

//import Org from "@/components/organizar.vue";

export default {
  components: {
    // Org,
  },
  data() {
    return {
      maximized: true,
      tab: "one",
      inLoading: true,
      useData: false,
      useWifi: false,
      getSelectedString: Boolean,
    };
  },
  setup() {
    const store = itensStore();
    const val = ref(true);
    const rows = store.rows;
    const columns = store.columns;

    return {
      val,
      //val: ref(true),
      icon: ref(false),
      icon2: ref(false),
      rows,
      copyToClipboard,
      columns,
      onResetClick() {
        val.value = "lista";
      },
    };
  },
};
</script>
<style scoped>
.cardo:hover {
  background-color: rgb(228, 227, 227);
}
</style>
