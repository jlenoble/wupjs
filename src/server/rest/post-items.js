import app from '../express-instance';
import {Item} from '../db';

app.post('/api/items', (req, res) => {
  const item = new Item();
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
