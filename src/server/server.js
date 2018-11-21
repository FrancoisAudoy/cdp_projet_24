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
      res.status(201).json({msg : 'Added project'});
  });
});

// obtient un projet à partir de son identifiant
app.get('/projects/:project', (req,res) => {
  // TODO
});

// modifie un projet
app.put('/projects:project', (req, res) => {
  // TODO
});

// supprime un projet
app.delete('/projects:project', (req,res) => {
  // TODO
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

// crée un backlog appartenant au projet
app.post('/backlogs', (req, res) => {
  var backlog = new models.Backlog();
  // TODO check if there is a project, check if it already has a backlog
  backlog.projectID = req.body.projectID;
  backlog.name = req.body.name;
  backlog.save(function(error, backlog){
    if(error)
      res.status(400).json(error);
    else
      res.status(201).json({msg : 'Added Backlog'});
  });
});

// obtient un backlog à partir de son identifiant
app.get('/backlogs/:backlog', (req,res) => {
  // TODO
});

// modifie un backlog
app.put('/backlogs/:backlog', (req, res) => {
  // TODO
});

// supprime un backlog
app.delete('/backlogs/:backlog', (req,res) => {
  // TODO
});

// ajoute une issue à un backlog
app.post('/backlogs/:backlog/issue', (req, res) => {
  // TODO
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
