const express = require('express');
const app = express();
const btyControllers = require('./controllers/btyControllers');
const ejs = require('ejs');
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const cors = require('cors');

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(cors());


app.use('/bty', btyControllers);

const port = process.env.PORT || 3003;

app.listen(port, () => {
    console.log(`running on port ${port}`)
});