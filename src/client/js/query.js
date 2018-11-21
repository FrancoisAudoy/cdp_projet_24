// TODO IMPLEMENT ISSUE CLASS : CONTAINS String description, int difficulte, String priorite
// TODO Refactoring
// TODO rendre les fonctions asynchrones

let projects = [];
let backlogs = [];

if(JSON.parse(sessionStorage.getItem('projects')) != null) {
  projects = JSON.parse(sessionStorage.getItem('projects'));
}

if(JSON.parse(sessionStorage.getItem('backlogs')) != null) {
  projects = JSON.parse(sessionStorage.getItem('backlogs'));
}

function createProject(projectName) {
  projects.push({"name":projectName});
  backlogs.push({"'" + projectName + "'":[]});
  console.log(JSON.stringify(projects));
  console.log(JSON.stringify(backlogs));
  sessionStorage.setItem('projects', JSON.stringify(projects));
  sessionStorage.setItem('backlogs', JSON.stringify(backlogs));
  alert(sessionStorage.getItem('backlogs'));
}

function getAllProjects() {
  return JSON.parse(sessionStorage.getItem('projects'));
}

function addIssueToBacklog(projectName, description, priority, difficulty) {
  alert(sessionStorage.getItem('projects'));
  alert(sessionStorage.getItem('backlogs'));
  backlogs[projectName].push({"description":description,"priorite":priority,"difficulte":difficulty});
  sessionStorage.setItem('backlogs', JSON.stringify(backlogs));
}

function getProjectBacklog(projectName) {
  let res = JSON.parse(sessionStorage.getItem('backlogs'));
  return res[projectName];
}

/*function getAllProjects(){
  const req = new XMLHttpRequest();
  req.open('GET', '/express/projects', false);
  req.send(null);
  if (req.status === 200) {
    var json = JSON.parse(req.responseText);
    return json;
  } else {
    console.log("getAllProjects : unhandled error code : %d", req.status);
    console.log(JSON.parse(req.responseText));
  }
}

function createProject(projectName){
  var jsonObject = {name: projectName};
  const req = new XMLHttpRequest();
  req.open('POST', '/express/projects', false);
  req.setRequestHeader('Content-Type','application/json; charset=utf-8');
  req.send(JSON.stringify(jsonObject));
  if (req.status === 201) {
    var json = JSON.parse(req.responseText);
    return json;
  } else {
    console.log("createProject : unhandled error code : %d", req.status);
    console.log(JSON.parse(req.responseText));
  }
}

function getProjectById(){
  const req = new XMLHttpRequest();
  req.open('GET', '/express/projects', false);
  req.send(null);
  if (req.status === 200) {
    var json = JSON.parse(req.responseText);
    return json;
  } else {
    console.log("getAllProjects : unhandled error code : %d", req.status);
    console.log(JSON.parse(req.responseText));
  }
}


function getAllBacklogs(){
  const req = new XMLHttpRequest();
  req.open('GET', '/express/backlogs', false);
  req.send(null);
  if (req.status === 200) {
    var json = JSON.parse(req.responseText);
    return json;
  } else {
    console.log("getAllBacklogs : unhandled error code : %d", req.status);
    console.log(JSON.parse(req.responseText));
  }
}

function getProjectBacklog(name){
  // TODO
}

function createBacklog(jsonObject){
  const req = new XMLHttpRequest();
  req.open('POST', '/express/backlogs', false);
  req.setRequestHeader('Content-Type','application/json; charset=utf-8');
  req.send(JSON.stringify(jsonObject));
  if (req.status === 201) {
    console.log("response : %s", req.responseText);
  } else {
    console.log("createProject : unhandled error code : %d", req.status);
    console.log(JSON.parse(req.responseText));
  }
}

//Should check projectId url injection
function addIssueToBacklog(backlogId, issue){
  const req = new XMLHttpRequest();
  req.open('POST', '/express/backlogs/'+backlogId+'/issue', false);
  req.setRequestHeader('Content-Type','application/json; charset=utf-8');
  req.send(JSON.stringify(issue));
  if (req.status === 200) {
    console.log("response : %s", req.responseText);
  } else {
    console.log("createProject : unhandled error code : %d", req.status);
    console.log(JSON.parse(req.responseText));
  }
}*/
