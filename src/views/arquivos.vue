<template>
  <q-card flat>
    <q-card-section>
      <q-toggle v-model="val" />
    </q-card-section>
    <q-separator />
  </q-card>

  <div v-if="val" class="q-gutter-md">
    <q-card flat>
      <q-card-section>
        <p class="my-card" style="text-align: ; color: gray; font-weight: bold">
        Arquivos
      </p>
      <q-separator /> 
      </q-card-section>
    </q-card>
    <PastaList />
  </div>
  <div v-else>
    <q-card-section>
      <p class="my-card" style="text-align: ; color: gray; font-weight: bold">
        Arquivos
      </p>
      <q-separator></q-separator
    ></q-card-section>
    <PastaGrid />
  </div>
</template>
<script>
import { ref } from "vue";
import { itensStore } from "../store/arquivos.js";
import { copyToClipboard } from "quasar";
//import { colors } from "quasar";
import PastaList from "../components/pastaList.vue"
import PastaGrid from "../components/pastaGrid.vue"
//import Org from "@/components/organizar.vue";

export default {
  components: {
    // Org,
    PastaList,
    PastaGrid
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
    const val = ref(false);
    
     return {
      val,
      //val: ref(true),
      icon: ref(false),
      icon2: ref(false),
      
      
      copyToClipboard,
      

      onResetClick() {
        val.value = "lista";
      },
    };
  },
};
</script>