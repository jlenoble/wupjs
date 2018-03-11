import app from '../express-instance';
import collections from '../collections';

Object.keys(collections).forEach(key => {
  const Collection = collections[key];

  app.post(`/api/${key}`, (req, res) => {
    const item = new Collection();
    const body = req.body;
    const keys = Object.keys(Collection.schema.paths).filter(key => {
      return body[key] !== undefined && key !== '_id' && key !== '__v';
    });
    keys.forEach(key => {
      item[key] = body[key];
    });

    item.save(err => {
      if (err) {
        return res.json({
          status: err.status || 500,
          message: err.message || 'Internal server error',
        });
      }

      res.json(item);
    });
  });
});
