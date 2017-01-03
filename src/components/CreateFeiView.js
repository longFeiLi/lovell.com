import topics from './Topics.vue'

// This is a factory function for dynamically creating root-level list views,
// since they share most of the logic except for the type of items to display.
// They are essentially higher order components wrapping ItemList.vue.
export function createFeiView (type) {
  return {
    name: `${type}-stories-view`,
    preFetch (store) {
      return store.dispatch('getTopics')
    },
    render (h) {
      return h(topics, {props: {type}})
    }
  }
}
