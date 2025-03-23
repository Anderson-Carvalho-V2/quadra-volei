
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/quadra-volei/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/quadra-volei"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 454, hash: '337b2eb12a9871de3161adce8f46755a1b63d708532604482c2559baa31e8e12', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 994, hash: '5261b1e4c58940053226560a60fb738c2031fa2f49926babadddd200c9ce7040', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21702, hash: 'a60e12d2ff81581a9a033e00c4ef16741ac8732f26929a75deb5f7bb3fbe45ed', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}
  },
};
