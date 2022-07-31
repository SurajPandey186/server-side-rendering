import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import proxy from 'express-http-proxy';

const _app = express();

_app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
   proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000';
      return opts;
   }
})
);

_app.use(express.static('public'));

_app.get('*', (req, res) => {
   const _store = createStore(req);

   const promises = matchRoutes(Routes, req.path).map(({ route }) => {
      return route.loadData ? route.loadData(_store) : null;
   });

   Promise.allSettled(promises).then(() => {
      const context = {};
      const content = renderer(req, _store, context);

      if(context.url) {
         return res.redirect(301, context.url);
      }

      if (context.notFound) {
         res.status(404);
      }

      res.send(content);
   })
})
/** */


_app.listen(3000, () => {
   console.log('Server started at port 3001');
});