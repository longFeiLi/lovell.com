import request from 'axios'
import querystring from 'querystring'

request.defaults.baseURL = 'http://www.lovell.com.cn:3001'
// request.defaults.baseURL = 'http://localhost:3001'
request.defaults.method = 'post'
let headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
  // 'Access-Control-Allow-Origin': '*'
}
request.defaults.headers = headers
const config = headers
const sApi = {
  getCineMaList: '/api/getCineMaList', // 查询所有电影
  getMovieSite: '/api/getMovieSiteByid', // 根据id 查询电影场次
  getScreeningList : '/api/getScreeningList' // 根据名称查询
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
export const getMovielist = ({ commit, state}) => {

  let query = {
    'mid': 36086
  }
  let url = sApi.getMovieSite
  return _post({url, query}, commit).then((response) => {
    if (response.code === 0) {
      commit('MOVIE_LIST', response.data);
      return Promise.resolve(response.data);
    }
  }).catch((err) => {
    return Promise.resolve(err)
  })
}

/**
 * 
 * @param {*查询所有电影排期} param0 
 * @param {*} query 
 */
export const getScreening = ({ commit, state }, query) => {
  // 是否运用缓存
  let url = sApi.getScreeningList;
  return _post({url, query}, commit).then((res) => {
    if (res.code === 0) {
      commit('SCREENING_LIST', res.data);
      return Promise.resolve(res.data);
    }
  }).catch((err) => {
    return Promise.resolve(err)
  })
}





// export const increment = ({ commit }) => commit('INCREMENT')
// export const decrement = ({ commit }) => commit('DECREMENT')
