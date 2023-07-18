import * as methods from './index';

const { stringify, parse } = JSON;

export const parseNetworkError = error => parse(stringify(error));

async function  api({
    entity, action, payload = {}, query, params,
  }){
    try {
      const response = await methods[entity][action]({ payload, query, params });
      return response;
    } catch (error) {
      const errorPayload = { [`${entity}_${action}_request`]: parseNetworkError(error) };
      return errorPayload;
    }
}

/* 
USAGE:
const response = await this.api({
  entity: 'users',
  action: 'getById',
  params: { id },
}); 
*/

export { api };