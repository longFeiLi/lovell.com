import request from 'axios'

request.defaults.baseURL = '//sapi.seeedstudio.com'
request.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
const config = { headers: { 'Content-Type': 'application/json;charset=utf-8', 'access-control-allow-origin': '*' } }
const seeedApi = {
  getAdvItemList: '/adv/item'
}
// .set('Accept', 'application/json')
export const getTopics = ({ commit, state }) => {
  console.log(state.topics)
  // 是否运用缓存
  if (state.topics.length > 0) {
    return Promise.resolve(state.topics)
  }
  return request.post(seeedApi.getAdvItemList, {}, config).then((response) => {
    if (response.data.code === 0) {
      commit('TOPICS_LIST', response.data.data)
    }
  }).catch(() => {
    let data = [
      { 'basic': {
        'id': '18',
        'item_name': 'NEW PRODUCTS',
        'item_desc': 'NEW PRODUCTS',
        'item_sort': '4',
        'item_status': '1',
        'item_has_sign': '0',
        'item_sign_position': 'top',
        'start_time': '1471449600',
        'end_time': '1502985600',
        'is_see_more': '1',
        'see_more_url': 'https://www.seeedstudio.com/act-4.html'
      },
        'product': [{
          'id': '355',
          'item_id': '18',
          'products_id': '2771',
          'item_product_photo': '/seeed/img/2016-12/VnI0u7WqVyDsZYoIK7FgmF3M.jpg',
          'item_product_name': 'Raspberry Pi Pioneer600',
          'item_product_add_time': '1474626414',
          'item_product_start_time': '1474560000',
          'item_product_end_time': '1483113600',
          'is_top': '0',
          'item_product_sort': '10',
          'item_product_status': '1',
          'item_product_url': 'https://www.seeedstudio.com/Raspberry-Pi-Pioneer600-p-2771.html',
          'product_detail': {
            'products_id': '2771',
            'products_name': 'Raspberry Pi Pioneer600',
            'products_model': '114990832',
            'products_price': 31.99,
            'products_image': '/seeed/img/2016-12/VnI0u7WqVyDsZYoIK7FgmF3M.jpg',
            'discount_price': 31.99
          }
        }
        ]
      }]
    commit('TOPICS_LIST', data)
  })
}

export const increment = ({ commit }) => commit('INCREMENT')
export const decrement = ({ commit }) => commit('DECREMENT')
