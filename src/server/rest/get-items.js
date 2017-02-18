import app from '../express-instance';
import {Item} from '../db';

app.get('/api/items', (req, res) => {
  Item.find({}, (err, items) => {
    if (err) {
      res.send(err);
    }

    res.json(items);
  });
});
