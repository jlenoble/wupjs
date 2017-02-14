import path from 'path';
import Express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';
import routes from './routes';
import PageNotFound from './components/page-not-found';

const app = new Express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../../src/views'));

app.use(Express.static(__dirname));
app.use(Express.static(path.join(__dirname, '..')));
app.use(Express.static(path.join(__dirname, '../../src')));

app.get('*', (req, res) => {
  match(
    {routes, location: req.url},
    (err, redirectLocation, renderProps) => {
      if (err) {
        return res.status(500).send(err.message);
      }

      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname +
          redirectLocation.search);
      }

      let markup;
      if (renderProps) {
        markup = renderToString(<RouterContext {...renderProps}/>);
      } else {
        markup = renderToString(<PageNotFound/>);
        res.status(404);
      }

      return res.render('index', {markup});
    }
  );
});

app.listen(5000);
