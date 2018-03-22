import app from './server/express-instance';

import './server/rest';
import './server/catch-all-get';

app.listen(3000, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Server started on port 3000');
  }
});
