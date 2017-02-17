import path from 'path';
import Express from 'express';

const app = new Express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../../../src/server/views'));

app.use(Express.static(path.join(__dirname, '..')));
app.use(Express.static(path.join(__dirname, '../..')));
app.use(Express.static(path.join(__dirname, '../../../src')));

export default app;
