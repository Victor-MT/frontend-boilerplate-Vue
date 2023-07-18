import axios from 'axios';
import { DEFAULT_API_URLS, ENDPOINT_PREFIX } from '../utils/constants.js';

const withBaseURLContext = () => process.env.NODE_ENV
? DEFAULT_API_URLS[process.env.NODE_ENV.toUpperCase()] + ENDPOINT_PREFIX
: DEFAULT_API_URLS.LOCAL + ENDPOINT_PREFIX;

const HTTPClient = axios.create({
    baseURL: withBaseURLContext(),
});

export { HTTPClient };
