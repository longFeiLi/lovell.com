import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const defaultState = {
  topics: [],
  count: 0,
  cineList: [],
  cineMovie: []
}

const inBrowser = typeof window !== 'undefined'

// if in browser, use pre-fetched state injected by SSR
const state = (inBrowser && window.__INITIAL_STATE__) || defaultState

const mutations = {
  TOPICS_LIST: (state, topics) => {
    state.topics = topics
  },
  CINE_LIST: (state, cineList) => {
    state.cineList = cineList
  },
  MOVIE_LIST: (state, cineMovie) => {
    state.cineMovie = cineMovie
  },
  INCREMENT: (state) => {
    state.count++
  },
  DECREMENT: (state) => {
    state.count--
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
