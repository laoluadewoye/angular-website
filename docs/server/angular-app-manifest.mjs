
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-website/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-website"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 455, hash: 'c37885b460cb60433ca941faf2297d457d55c6e6885df2bad3ff3db050860144', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 968, hash: '352fd5d9a9141d5a6d133ca6ba9e021ffe7d2568c2d812667e4da07fb1be9165', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21593, hash: '91b734899f5cc3886b7ddea48224635fdc12925f988dd20241f3a3efbca69a2f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
