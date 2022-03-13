import { Item } from '@/item'
import { createStore } from 'vuex'

export default createStore({
  state: {
    liste: Array<Item>()
  },
  getters: {
  },
  mutations: {
    setItem (state, item) {
      for (let i = 0; i < state.liste.length; i++) {
        if (state.liste[i].id === item.id) {
          state.liste.splice(i, 1, item)
          break
        }
      }
    },
    addItem (state, item) {
      state.liste.push(item)
    },
    setList (state, liste) {
      state.liste = liste
    },
    deleteItem (state, item) {
      for (let i = 0; i < state.liste.length; i++) {
        if (state.liste[i].id === item.id) {
          state.liste.splice(i, 1)
          break
        }
      }
    }
  },
  actions: {
    async fetchItems ({ commit }) {
      const items = await fetch('/entries').then(rest => rest.json())
      const converted = items.map((entry: any) => new Item(entry.id, entry.name, entry.verpackung, entry.gewicht, new Date(entry.mhd), entry.anzahl))
      commit('setList', converted)
    },
    async newItem ({ commit }) {
      const entry = await fetch('/newentry').then(rest => rest.json())
      const converted = new Item(entry.id, entry.name, entry.verpackung, entry.gewicht, new Date(entry.mhd), entry.anzahl)
      commit('addItem', converted)
    },
    async setItem ({ commit }, item: Item) {
      commit('setItem', item)
      const converted = { ...item, mhd: item.mhd.toISOString(), gewicht: isNaN(parseInt(String(item.gewicht))) ? 0 : item.gewicht, anzahl: isNaN(parseInt(String(item.anzahl))) ? 0 : item.anzahl }
      await fetch('/entries', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify([converted]) })
    },
    async deleteItem ({ commit }, item: Item) {
      await fetch('/deleteentry?id=' + item.id, { method: 'DELETE' })
      commit('deleteItem', item)
    }
  },
  modules: {
  }
})
