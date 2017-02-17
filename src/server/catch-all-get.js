import {match} from 'react-router';

import app from './express-instance';
import routes from '../routes';
import makeMarkup from './make-markup';

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

      return res.render('index', {
        markup: makeMarkup(renderProps),
      });
    }
  );
});
