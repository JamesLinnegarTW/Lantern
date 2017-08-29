import express from 'express';
import bodyparser from 'body-parser';
import lightRoutes from './routes/Lights';
import animations from './routes/Animations';
import lightDataValidator from './validators/validators';


const createApplication = (lighting) => {
  const app = express();
  app.use(express.static('public'));
  app.use(bodyparser.json());

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  app.use('/api/lights', lightRoutes(lighting));
  app.use('/api/animations', animations());

  return app;
}

module.exports = {
  createApplication: createApplication
}