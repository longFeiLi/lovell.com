import cine from './main.vue'

// This is a factory function for dynamically creating root-level list views,
// since they share most of the logic except for the type of items to display.
// They are essentially higher order components wrapping ItemList.vue.
export function createCineView (type) {
  return {
    name: `${type}-stories-view`,
    preFetch (store) {
      return store.dispatch('getMovielist')
    },
    render (h) {
      return h(cine, {props: {type}})
    }
  }
}
