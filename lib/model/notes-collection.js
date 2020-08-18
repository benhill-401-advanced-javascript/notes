'use strict';

const mongoose = require('mongoose');

const notesy = mongoose.Schema({
  name: { type: String, required: true }
})