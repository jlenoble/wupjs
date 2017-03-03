import app from '../express-instance';
import {Selection} from '../db';

app.post('/api/selections', (req, res) => {
  const selection = new Selection();
  selection.itemId = req.body.itemId;
  selection.items = req.body.items;

  selection.save(err => {
    if (err) {
      return res.json({
        status: err.status || 500,
        message: err.message || 'Internal server error',
      });
    }

    res.json(selection);
  });
});
