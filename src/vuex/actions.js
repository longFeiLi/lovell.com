import request from 'axios'
import querystring from 'querystring'

request.defaults.baseURL = 'http://www.lovell.com.cn:3001'
request.defaults.method = 'post'
let headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  'Access-Control-Allow-Origin': '*'
}
request.defaults.headers = headers
const config = headers
const sApi = {
  getAdvItemList: '/adv/item',
  getCineMaList: '/api/getCineMaList', // 查询所有电影
  getMovieSite: '/api/getMovieSiteByid' // 根据id 查询电影场次
}

/**
 * post请求
 * @param  {String} options.url   api地址
 * @param  {String} options.query query参数
 * @return {Promise}               Promise + getRealToken()
 */
const _post = ({ url, query }, commit) => {
  return request.post(url, querystring.stringify(query))
    .then((res) => {
      // if (commit) commit('FINISH_LOADING')
      if (res.status >= 200 && res.status < 300) {
        return res.data
      }
      return Promise.reject(new Error(res.status))
    })
}
export const getTopics = ({ commit, state }) => {
  // 是否运用缓存
  if (state.topics.length > 0) {
    return Promise.resolve(state.topics)
  }
  return request.get(sApi.getAdvItemList, {}, config).then((response) => {
    if (response.data.code === 0) {
      commit('TOPICS_LIST', response.data.data)
    }
  }).catch(() => {
    // commit('TOPICS_LIST', data)
  })
}

/**
 * [获取电影院名字]
 * @param  {[type]} options.commit [description]
 * @param  {[type]} options.state  [description]
 * @return {[type]}                [description]
 */
export const getCineList = ({ commit, state }) => {
  // 是否运用缓存
  if (state.cineList.length > 0) {
    return Promise.resolve(state.cineList)
  }
  let url = sApi.getCineMaList
  let query = {}
  return _post({url, query}, commit).then((response) => {
    if (response.code === 0) {
      commit('CINE_LIST', response.data)
    }
  }).catch((err) => {
    console.log(err)
  })
}
/**
 * [getMovielist 根据id 获取电影院场次]
 */
export const getMovielist = ({ commit, state }, query) => {
  // 是否运用缓存
  // if (state.cineMovie.length > 0) {
  //   return Promise.resolve(state.cineMovie)
  // }
  let url = sApi.getMovieSite
  return _post({url, query}, commit).then((response) => {
    if (response.code === 0) {
      commit('MOVIE_LIST', response.data)
      return Promise.resolve(response.data)
    }
  }).catch((err) => {
    console.log(err)
  })
}

export const increment = ({ commit }) => commit('INCREMENT')
export const decrement = ({ commit }) => commit('DECREMENT')
