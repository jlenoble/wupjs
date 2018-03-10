import app from '../express-instance';
import collections from '../collections';

Object.keys(collections).forEach(key => {
  const Collection = collections[key];

  app.delete(`/api/${key}/:id`, (req, res) => {
    const _id = req.params.id;

    Collection.remove({_id}, err => {
      if (err) {
        return res.json({
          status: err.status || 500,
          message: err.message || 'Internal server error',
        });
      }

      res.json({_id});
    });
  });
});
