import app from './server/express-instance';

import './server/catch-all-get';

app.listen(5000, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Server started on port 5000');
  }
});
