const express = require('express');
const path = require('path');

const checklistRouter = require('./src/routes/checklist');
const rootRouter = require('./src/routes/index');


const app = express();
require('./config/database');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use('/checklists', checklistRouter);
app.use('/', rootRouter);

app.get('/', (req, res) => {
  res.json({title: 'oi'})
})



app.listen(3333, () => console.log('backend init =)'))