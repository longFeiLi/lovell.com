import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const defaultState = {
  screeningList: [],
  count: 0,
  cineList: [],
  cineMovie: []
}

const inBrowser = typeof window !== 'undefined'

// if in browser, use pre-fetched state injected by SSR
const state = (inBrowser && window.__INITIAL_STATE__) || defaultState

const mutations = {
  SCREENING_LIST: (state, screening) => {
    state.screeningList = screening
  },
  CINE_LIST: (state, cineList) => {
    state.cineList = cineList
  },
  MOVIE_LIST: (state, cineMovie) => {
    state.cineMovie = cineMovie
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
