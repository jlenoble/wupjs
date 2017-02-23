import app from '../express-instance';
import {Selection} from '../db';

app.get('/api/selections', (req, res) => {
  Selection.find({}, (err, selections) => {
    if (err) {
      return res.json({
        status: err.status || 500,
        message: err.message || 'Internal server error',
      });
    }

    res.json(selections);
  });
});
