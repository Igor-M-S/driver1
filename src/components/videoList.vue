<template>
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
        name="play_circle"
        
        class="q-mr-sm"
      />{{ props.row.nome }}
    </q-td>
    <q-popup-proxy>
            <q-banner>
              <template v-slot:avatar>
                <q-video :src="props.row.link"></q-video>
              </template>
            </q-banner>
          </q-popup-proxy>
     
    
   </template>
   <template #body-cell="props">
     <td :props="props">{{props.row.tipo}}</td>
     

   </template>

    </q-table>
</template>
<script>
import { ref } from "vue";
import { itensStore } from "../store/videos.js";

export default {
  components: {
    
  },
  data() {
    const store = itensStore();
    const rows = store.rows
    const columns = store.columns
    const link = rows.link
    
    return {
      icon: ref(false),
       getSelectedString: Boolean,
      rows,
      columns,
      link
      
    };
  },
};
</script>