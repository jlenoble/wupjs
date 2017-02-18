import app from '../express-instance';
import {Item} from '../db';

app.delete('/api/items/:id', (req, res) => {
  const _id = req.params.id;

  Item.remove({_id}, err => {
    if (err) {
      return res.json({
        status: err.status || 500,
        message: err.message || 'Internal server error',
      });
    }

    res.json({_id});
  });
});
