'use strict';

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const models = require('./models');

const PORT = 8080;
const HOST = '0.0.0.0';
var DBURL = 'mongodb://mongodb:27017/cdp';

// MongoDB driver autoreconnects only after the first successfull connect.
// So we need to implement this ourselves.
var connectOrRetryLater = function(){
  mongoose.connect(DBURL, { useNewUrlParser: true }).catch(function (error) {
    if (error && error.message.match(/failed to connect to server .* on first connect/)) {
      console.log('Can\'t connect to MongoDB, error : ', error);
      setTimeout(connectOrRetryLater, 2000);
    }
  });
};
connectOrRetryLater();
mongoose.set('bufferCommands', false); // Disabling buffering for now

const app = express();

app.use(cors());
app.use(express.json());

// obtient la liste des projets
app.get('/projects', (req, res) => {
  models.Project.find(function(error, projects){
    if (error)
      res.status(400).json(error);
    else
      res.json(projects);
  });
});

// crée un projet
app.post('/projects', (req, res) => {
    var project = new models.Project();
    project.name = req.body.name;
    project.save(function(error, project){
    if(error)
      res.status(400).json(error);
    else
      res.status(201).json({msg : 'Added project', project: project});
  });
});

// obtient un projet à partir de son identifiant
app.get('/projects/:project', (req,res) => {
  models.Project.findById(req.params.project, function(error, project){
    if (error)
      res.status(400).json(error);
    else
      res.json(project);
  });
});

// modifie un projet
app.put('/projects/:project', (req, res) => {
  // TODO
});

// supprime un projet
app.delete('/projects/:project', (req,res) => {
  models.Project.findOneAndDelete({_id: req.params.project}, function(error, project){
    if (error)
      res.status(400).json(error);
    else if (project)
      res.json(project);
    else
      res.status(401).json({});
  });
});

// obtient la liste des backlogs
app.get('/backlogs', (req, res) => {
  models.Backlog.find(function(error, backlogs){
    if (error)
      res.status(400).json(error);
    else
      res.json(backlogs);
  });
});

// obtient un backlog en fonction de son projectId, le crée si il n'existe pas
app.get('/backlogs/fromProjectId/:projectId', (req, res) => {
  var r = models.Backlog.findOne({projectId: req.params.projectId}, function(error, backlog){
    if (error){
      res.status(400).json(error);
    }
    else if(backlog == null){
      var backlog = new models.Backlog();
      // TODO check if there is a project, check if it already has a backlog
      backlog.projectId = req.params.projectId;
      backlog.save(function(error, backlog){
        if(error)
          res.status(400).json(error);
        else
          res.status(201).json(backlog);
      });
    }
    else {
      res.json(backlog);
    }
  });
  if(r == null)
    res.status(400).json(null);
});

// modifie un backlog
app.put('/backlogs/:backlog', (req, res) => {
  // TODO
});

// supprime un backlog
app.delete('/backlogs/:backlog', (req,res) => {
  models.Backlog.findOneAndDelete({_id: req.params.backlog}, function(error, backlog){
    if (error)
      res.status(400).json(error);
    else if (backlog)
      res.json(backlog);
    else
      res.status(401).json({});
  });
});

// ajoute une issue à un backlog
app.post('/backlogs/:backlog/issue', (req, res) => {
  var issue = new models.Issue(req.body.issue);
  console.log('ROAD');
  console.log(issue);
  var r = models.Backlog.findOneAndUpdate({_id: req.params.backlog}, {$push: {issues: issue}}, {upsert:true}, function(error, backlog){
    if (error)
      res.status(400).json(error);
    else if (backlog)
      res.json(backlog);
    else
      res.status(401).json({});
  });
  console.log('r = ' + r);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
