import { HTTPClient } from '../baseApi';

const endpoint = 'user'
export default { 
  create: ({ payload }) => HTTPClient.post(`/${endpoint}`, payload),
  getById: ({ id }) => HTTPClient.get(`/${endpoint}/${id}`),
  getAll: ({}) => HTTPClient.get(`/${endpoint}/`),
  userLoggin: ({ payload }) => HTTPClient.post(`/${endpoint}/loggin`, payload),
};