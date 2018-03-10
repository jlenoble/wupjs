import app from '../express-instance';
import collections from '../collections';

Object.keys(collections).forEach(key => {
  const Collection = collections[key];

  app.post(`/api/${key}`, (req, res) => {
    const item = new Collection();
    item.title = req.body.title;

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
