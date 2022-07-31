import React from 'react';
import Routes from '../client/Routes';
import { Provider } from "react-redux";
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { renderToString } from 'react-dom/server';
import serializeJavascript from 'serialize-javascript';


export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  return `
      <html>
       <head>
         <title>Server Side Rendering</title>
       </head>
       <body>
         <div id="root">${content}</div>
         <script>
           window.INITIAL_STATE = ${JSON.stringify(store.getState())}
         </script>
         <script src="bundle.js"></script>
       </body>
      </html> 
     `;
};
