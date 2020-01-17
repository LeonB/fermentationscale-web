<template>
  <div class="home">
    <Menu />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Menu from '@/components/Menu.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Menu
  }
}
</script>
