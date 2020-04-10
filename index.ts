import Hapi from '@hapi/hapi';

const init = async () => {
  const server = new Hapi.Server({
    port: 3000,
    host: '0.0.0.0'
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

init();
