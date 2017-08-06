const axios = require('axios')
const querystring = require('querystring')

const headers = {'Content-Type': 'application/x-www-form-urlencoded'}

/**
 * ajax http get request
 *
 * @param url
 * @param params
 */
exports.get = (url, params) => axios.get(url, {params})

/**
 * ajax http post request
 *
 * @param url
 * @param params
 */
exports.post = (url, params) => axios.post(url, querystring.stringify(params), {headers})

/**
 * ajax http put request
 *
 * @param url
 * @param params
 */
exports.put = (url, params) => axios.put(url, querystring.stringify(params), {headers})

/**
 * ajax http patch request
 *
 * @param url
 * @param params
 */
exports.patch = (url, params) => axios.patch(url, querystring.stringify(params), {headers})

/**
 * ajax http delete request
 *
 * @param url
 * @param params
 */
exports.delete = (url, params) => axios.delete(url, {params})
