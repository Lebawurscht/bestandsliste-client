<template>
  <tr class="Item">
    <td><input type="text" v-model="item_name"/></td>
    <td><select v-model="item_verpackung"><option v-for="(typ, key) of verpackunstypen" :key="key" :value="typ" v-text="typ"/></select></td>
    <td><input type="number" v-model="item_gewicht"/></td>
    <td><input type="date" v-model="item_mhd"/></td>
    <td><input type="number" v-model="item_anzahl"/></td>
    <td><button @click="deleteItem(data)">-</button></td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { mapActions } from 'vuex'
import { Item, verpachungstyp, verpackunstypen } from '../item'

export default defineComponent({
  props: {
    data: {
      type: Object as PropType<Item>,
      required: true
    }
  },
  methods: {
    ...mapActions(['setItem', 'deleteItem'])
  },
  computed: {
    verpackunstypen () { return verpackunstypen },
    item: {
      get (): Item {
        return this.data
      },
      set (value: Item) {
        this.setItem(value)
      }
    },
    item_name: {
      get () {
        return this.item.name
      },
      set (value: string) {
        const item = { ...this.item }
        item.name = value
        this.item = item
      }
    },
    item_verpackung: {
      get () {
        return this.item.verpackung
      },
      set (value: verpachungstyp) {
        const item = { ...this.item }
        item.verpackung = value
        this.item = item
      }
    },
    item_gewicht: {
      get () {
        return this.item.gewicht
      },
      set (value: number) {
        const item = { ...this.item }
        item.gewicht = value
        this.item = item
      }
    },
    item_mhd: {
      get () {
        return this.item.mhd.toISOString().substring(0, 10)
      },
      set (value: string) {
        const item = { ...this.item }
        item.mhd = new Date(value)
        this.item = item
      }
    },
    item_anzahl: {
      get () {
        return this.item.anzahl
      },
      set (value: number) {
        const item = { ...this.item }
        item.anzahl = value
        this.item = item
      }
    }
  }
})
</script>

<style scoped>

</style>
