import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://einkofen.herokuapp.com'
})

export default instance
