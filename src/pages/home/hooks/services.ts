import axios from 'axios'

export const service = async (payload: any) =>
  axios.post('https://jsonplaceholder.typicode.com/posts', payload)
