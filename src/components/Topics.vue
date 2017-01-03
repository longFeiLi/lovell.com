<template>
  <div>
     <p>222222222222222</p>
     <div class="p-list">
       <item-list v-for="list in topics" :item="list"></item-list>
     </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ItemList from './itemList'

const fetchInitialData = store => {
  return store.dispatch(`getTopics`)
}
export default {
  prefetch: fetchInitialData,
  computed: {
    ...mapGetters({
      topics: 'getTopics'
    })
  },
  beforeMount () {
    fetchInitialData(this.$store)
  },
  components: {
    ItemList
  }
}
</script>