import axios from 'axios'
console.log(process.env.NODE_ENV)

const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : 'http://192.168.5.100:3000/api'

axios.defaults.baseURL = BASE_URL



/**
 * @author zyk 
 * @description 获取菜单的相关项
 * @returns 返回promise对象，可以获取到对应请求的参数
 */
const getMenu = () => {
  return axios.get('/types')
}


/**
 * @author zyk
 * @description 获取文章列表
 * @param {number} [id=1] 表示请求的文章类别
 * @param {number} [page=1] 表示请求的文章页面
 * @returns
 */
const getChannelList = (id = 1, page = 1) => {
  return axios.get(`/articles/${id}/page/${page}`)
}

const getChannelListTop10 = (id) => {
  return axios.get(`/articles/${id}/top10`)
}

const getArticle = (id) => {
  return axios.get(`/article/${id}`)
}

// 请求20条随机文章数据
const getArticles = () => {
  return axios.get(`/articles/rand`)
}

// 请求5条数据
const getArticlesRand5 = (id = 1) => {
  return axios.get(`/articles/${id}/rand`)
}

/* 
  axios.get(url, {
    params: {

    }
  })


  axios.post(url, {

  })
*/

const login = (email, password) => {
  return axios.post('/user/login', {
    email, password
  })
}

const checkToken = (token) => {
  return axios.post('/user/token', {}, {
    headers: {
      "Authorization": 'Bearer ' + token
    }
  })
  // return axios.post('/user/token', {})
}

const getComments = (id, page = 1) => {
  return axios.get(`/comments/${id}/page/${page}`)
}


const delComment = (id) => {
  return axios.delete(`/comment/${id}`)
}

const addComment = (article_id, content) => {
  return axios.post('/comment', {
    article_id, content
  })
}

axios.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  // config中就是我们对应的配置选项
  // 获取当前的token
  const token = localStorage.getItem('token')

  // 获取到token后验证是否有效，如果有效才设置对应的头部
  config.headers.Authorization = "Bearer " + token
  return config
  // if (token) {
  //   checkToken(token).then(res => {
  //     if (res.data.code === 200) {
  //       return config;

  //     }
  //   })
  // } else {
  //   localStorage.removeItem('token')
  //   localStorage.removeItem('user')
  //   return config;

  // }
  // config.headers.Authorization = 1
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


export {
  getMenu,
  getArticle,
  getChannelList,
  getChannelListTop10,
  getArticles,
  getArticlesRand5,
  login,
  checkToken,
  getComments,
  delComment,
  addComment
}