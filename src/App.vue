<template>
 <q-layout>
  <div >
    <NavBar />
  </div>
  <q-drawer show-if-above side="left" bordered>
    <ItemDraw />
  </q-drawer>
   <div>
  <Home />
  </div>

  </q-layout>
</template>
<script>
// import { ref } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
import NavBar from "./components/Navbar.vue";
import Home from "./views/Home.vue"
import ItemDraw from "./components/EsqDraw.vue"

export default {
  name: "LayoutDefault",

  components: {
    NavBar,
    Home,
    ItemDraw
  },

  /* setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  } */
};
</script>
