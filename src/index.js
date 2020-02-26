const express = require('express');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omni:omni@clustermongo-56nrn.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);