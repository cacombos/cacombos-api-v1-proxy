const Proxy = require('cloudworker-proxy');

config = [{
    handlerName: 'loadbalancer',
    path: '/:file\*',
    options: {
      sources: [
          {
            url: 'https://api.cacombos.com/{file}'
          }
        ]
      }
  }];

const proxy = new Proxy(config);

async function fetchAndApply(event) {
    return await proxy.resolve(event);
}

addEventListener('fetch', (event) => {
  event.respondWith(fetchAndApply(event));
});