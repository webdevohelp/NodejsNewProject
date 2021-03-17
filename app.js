const path = require('path');
const x = require('./util/path');
const express = require('express');
const errorController = require('./controllers/error');
const db = require('./util/database');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// to send the data via localhost/admin route if req = 'localhost/admin'
app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use(errorController.get404);

app.listen(8000);

//require.main.filename
