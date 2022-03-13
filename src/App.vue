<template>
  <div>
    <h1>Bestandsliste</h1><br>
    <ItemList/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions } from 'vuex'
import ItemList from './components/VItemList.vue'

export default defineComponent({
  name: 'App',
  components: {
    ItemList
  },
  methods: {
    ...mapActions(['fetchItems'])
  },
  mounted () {
    this.fetchItems()
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
