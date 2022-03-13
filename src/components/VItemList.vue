<template>
  <div class="ItemList">
    <table class="table">
      <tr><th>Name</th><th>Verpackung</th><th>Gewicht in Gramm</th><th>MHD</th><th>Anzahl</th></tr>
      <item v-for="item of liste" :key="item.id" :data="item"/>
    </table>
    <button @click="newItem">+</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions, mapState } from 'vuex'
import Item from './VItem.vue'

export default defineComponent({
  components: {
    Item
  },
  computed: {
    ...mapState(['liste'])
  },
  methods: {
    ...mapActions(['newItem'])
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table{
  margin-left: auto;
  margin-right: auto;
}
</style>
