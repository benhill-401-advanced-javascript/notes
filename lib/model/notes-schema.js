'use strict';

const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:27017/notesy';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



