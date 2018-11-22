const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var IssueSchema = new Schema({
  description: {type: String, required: true, max: 1000},
  difficulty: {type: String, enum: ['', 'easy', 'medium', 'hard'], default: ''},
  priority: {type: Number, default: 0}
},{ _id : false });
module.exports.Issue = mongoose.model('Issue', IssueSchema);// TODO delete

var BacklogSchema = new Schema({
  project: {type: Schema.Types.ObjectId, ref: 'Project', required: true},
  name: {type: String, required: true, max: 100},
  issues: [IssueSchema]
});
module.exports.Backlog = mongoose.model('Backlog', BacklogSchema);

var ProjectSchema = new Schema({
  name: {type: String, required: true, max: 100},
});
module.exports.Project = mongoose.model('Project', ProjectSchema);
