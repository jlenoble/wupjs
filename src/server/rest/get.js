import app from '../express-instance';
import collections from '../collections';

Object.keys(collections).forEach(key => {
  const Collection = collections[key];

  app.get(`/api/${key}`, (req, res) => {
    Collection.find({}, (err, items) => {
      if (err) {
        return res.json({
          status: err.status || 500,
          message: err.message || 'Internal server error',
        });
      }

      res.json(items);
    });
  });

  app.get(`/api/${key}/:id`, (req, res) => {
    const _id = req.params.id;

    Collection.find({_id}, (err, items) => {
      if (err) {
        return res.json({
          status: err.status || 500,
          message: err.message || 'Internal server error',
        });
      }

      res.json(items);
    });
  });
});
