<template>
  <div class="q-pa-md">
    <q-table
      flat
      dense
      :rows="rows"
      :columns="columns"
      row-key="name"
      :selected-rows-label="getSelectedString"
      @row-dblclick="icon = true"
    >
    <template #header-cell="props">
    <q-th
      style="font-size: 12px; font-weight:bold; color:#595959"
      
      :props="props"
    >
      {{ props.col.label }}
    </q-th>
  </template>
   <template #body-cell-nome="props">
     
       <q-td :props="props">
      <q-icon
        name="description"
        style="color: #919191"
        size="17px"
        class="q-mr-sm"
      />{{ props.col.label }}
    </q-td>
    <q-popup-proxy>
            <q-banner>
              <template v-slot:avatar>
                <p>{{ props.row.link }}</p>
              </template>
            </q-banner>
          </q-popup-proxy>
     
    
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