import app from '../express-instance';
import collections from '../collections';

Object.keys(collections).forEach(key => {
  const Collection = collections[key];

  app.put(`/api/${key}/:id`, (req, res) => {
    const _id = req.params.id;
    const body = req.body;
    const keys = Object.keys(Collection.schema.paths).filter(key => {
      return body[key] !== undefined && key !== '_id' && key !== '__v';
    });
    const item = {};
    keys.forEach(key => {
      item[key] = body[key];
    });

    if (_id !== req.body._id) {
      return res.json({
        status: 400,
        message: `uri and data ids don't match`,
      });
    }

    Collection.update({_id}, {$set: item}, err => {
      if (err) {
        return res.json({
          status: err.status || 500,
          message: err.message || 'Internal server error',
        });
      }

      res.json({_id, ...item});
    });
  });
});
