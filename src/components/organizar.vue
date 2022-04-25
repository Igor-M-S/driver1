<template>
  <div >
    <q-item>
      <q-item-section>
        <q-checkbox v-model="val" style="font-weight:bold;  color: #686a6e " label="Organizar por nome" />
      </q-item-section>
      <q-item-section>
        <q-toggle
      false-value="Galeria"
      true-value="lista"
      v-model="blueModel"
      :label="blueModel"
    />
      </q-item-section>

    </q-item>
    
  </div>
</template>
<script>
import { ref } from "vue";


export default {
  setup() {
    return {
      val: ref(false),
      blueModel: ref('Galeria'),
    };
  },
  methods:{
 //   organizarNome: function()
  }
};
</script>
