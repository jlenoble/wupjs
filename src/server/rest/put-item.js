import app from '../express-instance';
import {Item} from '../db';

app.put('/api/items/:id', (req, res) => {
  const _id = req.params.id;
  const title = req.body.title;

  if (_id !== req.body._id) {
    return res.json({
      status: 400,
      message: `uri and data ids don't match`,
    });
  }

  Item.update({_id}, {$set: {title}}, err => {
    if (err) {
      return res.json({
        status: err.status || 500,
        message: err.message || 'Internal server error',
      });
    }

    res.json({_id, title});
  });
});
