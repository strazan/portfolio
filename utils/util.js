import fetch from 'isomorphic-unfetch'

export const fetcher = (urlToFetch) => {
  return fetch(urlToFetch).then((r) => r.json())
}

export const url = 'https://sigge.me'
// 'https://sigge.me'
/*  process.env.NODE_ENV !== 'production'
  ? 'http://localhost:3000'
  : 'https://sigge.me'
*/
