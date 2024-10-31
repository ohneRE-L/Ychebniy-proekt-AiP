const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Real');
const real = mongoose.model('real', { name: String });
const giпшrl = new real({ name: 'Ри-Л' });
girl.save().then(() => console.log('Die'));