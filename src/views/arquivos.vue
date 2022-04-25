<template>
  <q-card flat>
    <q-card-section>
      <q-toggle v-model="val" />
    </q-card-section>
    <q-separator />
  </q-card>

  <div v-if="val" class="q-gutter-md">
    <p class="q-gutter-md" style="text-align: ; color: gray; font-weight: bold">
      Arquivos
    </p>
    <q-separator />
    <q-table
      color="green"
      flat
      :columns="columns"
      :rows="rows"
      :selected-rows-label="getSelectedString"
      @row-dblclick="icon = true"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input> 
      </template>

      <template #body-cell-nome="props">
        <q-td :props="props">
          <q-icon name="font_download" />
          {{ props.value }}
          </q-td>  
      </template>
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
  <div v-else>
    <q-card-section>
      <p class="my-card" style="text-align: ; color: gray; font-weight: bold">
        Arquivos
      </p>
      <q-separator></q-separator
    ></q-card-section>
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
import { itensStore } from "../store/fotos.js";
import { copyToClipboard } from "quasar";
import { colors } from "quasar";
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
    const rows = ref([
      {
        nome: "LOREM.TEXT",
        tipo: "text",
        link: "Lorem ipsum dolor sit amet, consectetur adipiscing eli sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcoaboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum",
      },
    ]);
    const columns = ref([
      {
        label: "Nome do arquivo",
        name:"nome",
        align: "left",
        field: "nome",
      },
      {
        name: "tipo",
        label: "Tipo",
        field: "tipo",
      },
      {},
      {},
      {},
    ]);
    return {
      val,
      //val: ref(true),
      icon: ref(false),
      icon2: ref(false),
      arquivo: store.arquivo,
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