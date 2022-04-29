<template>
  <div class="q-pa-md">
    <q-table
      grid
      :rows="rows"
      :columns="columns"
      row-key="name"
      :selected-rows-label="getSelectedString"
      @row-dblclick="icon = true"
    >
   <template v:slot:item="props">
      <div class="">
        <q-card v-for="item in rows" :key="item.id" class="text-center" >
          <img :src="item.link" />
        </q-card>
      </div>

   </template>
   <template #body-cell-nome="props">
     
       <q-td :props="props">
      <q-icon
        name="font_download"
        class="q-mr-sm"
      />{{ props.col.label }}
    </q-td>
     
    
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
