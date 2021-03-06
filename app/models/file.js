'use strict';

const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  name: String,
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // file tags
  tags: {
    type: Array
  },
  // materialized path for virtual file system
  path: {
    type: String
  },
  // URL for file on amazon s3
  location: {
    type: String
  },
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
