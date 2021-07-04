import axios from 'axios'

const apiRequest = async (request) => {
  request.method = request.method || 'get'
  request.url = `https://newsapi.org/v2/${request.url}`
  request.data = request.data || {}
  if (request.data && request.method === 'get') {
    // If data is set the get request won't be made
    request.data = null
  }
  request.headers = {
    ...request.headers,
    Authorization: `9d82a4c4e28b427a9f2f1330b3591c1e`,
  }
  return axios(request)
}

export default apiRequest;
