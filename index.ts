import Hapi from '@hapi/hapi';
import Joi from '@hapi/joi';
import Mongoose from 'mongoose';


const init = async () => {
  const server = new Hapi.Server({
    port: 3000,
    host: '0.0.0.0',
  });

  Mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

init();
