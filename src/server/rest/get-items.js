import app from '../express-instance';
import {Item} from '../db';

app.get('/api/items', (req, res) => {
  Item.find({}, (err, items) => {
    if (err) {
      return res.json({
        status: err.status || 500,
        message: err.message || 'Internal server error',
      });
    }

    res.json(items);
  });
});
