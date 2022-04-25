<template>
  
  <div v-if="val" class="q-pa-md">
    <p class="my-card" style="text-align: ; color: gray; font-weight: bold">
        Arquivos
      </p>
      <q-separator />
    <q-table
      flat
      dense
      :rows="rows"
      :columns="columns"
      row-key="name"
      :selected-rows-label="getSelectedString"
      @row-dblclick="icon = true"
    > 
    
 </q-table>
 <q-dialog v-model="icon">
        <q-card>
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">hetre</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>

          <p>nome</p>
        </q-card>
      </q-dialog>
  </div>
  <div v-else >
    <q-card-section>
      <p class="my-card" style="text-align: ; color: gray; font-weight: bold">
        Arquivos
      </p>
      <q-separator></q-separator></q-card-section>
    <q-item v-for="item in arquivo" :key="item.id" class="row inline">
      <q-item-section> </q-item-section>
      <q-btn flat @click="icon = true">
        <q-card>
          <q-card class="row inline">
            <q-card-section>
              <img src="@/assets/arq.png" style="width: 100px" />
              <p>{{ item.nome }}.{{ item.tipo }}</p>
              <p style="color: #828782">tipo: {{ item.tipo }}</p>
              <q-tooltip>
                <p>descrição: {{ item.descricao }}</p>
              </q-tooltip>
            </q-card-section>
          </q-card>
        </q-card>
      </q-btn>
      <q-dialog v-model="icon">
        <q-card>
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">{{ item.nome }}.{{ item.tipo }}</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>

          <p>{{ item.link }}</p>
        </q-card>
      </q-dialog>
    </q-item>
  </div>
</template>
<script>
import { ref } from "vue";
//import Org from "@/components/organizar.vue";
import { itensStore } from "../store/fotos.js";

export default {
  components: {
    // Org,
  },
  data(){
     return{
    alert: false,
    maximized: true,
    align: 'right',
    tab: 'one',
    inLoading: true,
    useData: false,
    useWifi: false,
    getSelectedString: Boolean,
    columns: [
      {
        
        name:'nome',
        label:'Nome',
        field:'nome',
      },
      {
        name:'data',
        label:'Data de modificao',
        field: 'data',
      },
      {
        name:'tipo',
        label:'Tipo',
        field: 'tipo',
      },
      
      ],
    rows:[
      {
        nome:'LOREM.TEXT',
        data: '00/00/0000',
        tipo:'text'
      },
      {
        nome:'LOREM.TEXT',
        data: '00/00/0000',
        tipo:'text'
      },
      {
        nome:'LOREM.TEXT',
        data: '00/00/0000',
        tipo:'text'
      }
    ]
    
     }
  },

  setup() {
    const store = itensStore();
    const val = ref(true);
    return {
      val,
      //val: ref(true),
      icon: ref(false),
      icon2: ref(false),
      arquivo: store.arquivo,
      

      onResetClick() {
        val.value = "lista";
      },
    };
  },
};
</script>
<style scoped>
.botao {
border:none!important;
  background-color:white;

}
.botao:hover {
  background-color: rgb(209, 204, 204);
}
</style>