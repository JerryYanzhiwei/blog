import axios from 'axios'

export default {
  namespaced: true,
  state () {
    return {
    }
  },
  mutations: {
  },
  actions: {
    // 获取文章列表
    async getArticle (store, data) {
      let {
        data: res
      } = await axios.get('article/get_artical')
      return res
    }
  }
}
