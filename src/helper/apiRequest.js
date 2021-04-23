import axios from 'axios'

const apiRequest = async (request) => {
  request.method = request.method || 'get'
  request.url = `https://api.themoviedb.org/3/${request.url}?api_key=dd322652c42868c10b61ebd375bd5305`
  request.data = request.data || {}
  if (request.data && request.method === 'get') {
    // If data is set the get request won't be made
    request.data = null
  }

  return axios(request)
}

export default apiRequest;
