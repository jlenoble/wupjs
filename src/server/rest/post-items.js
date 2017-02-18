import app from '../express-instance';
import {Item} from '../db';

app.post('/api/items', (req, res) => {
  const item = new Item();
  item.title = req.body.title;

  item.save(err => {
    if (err) {
      res.send(err);
    }

    res.json(item);
  });
});
