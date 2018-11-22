// TODO IMPLEMENT ISSUE CLASS : CONTAINS String description, int difficulte, String priorite
// TODO Refactoring
// TODO rendre les fonctions asynchrones

let projects = [];
let backlogs = [];

if(JSON.parse(sessionStorage.getItem('projects')) != null) {
  projects = JSON.parse(sessionStorage.getItem('projects'));
}

if(JSON.parse(sessionStorage.getItem('backlogs')) != null) {
  backlogs = JSON.parse(sessionStorage.getItem('backlogs'));
}

function createProject(projectName) {
  projects.push({"name":projectName});
  sessionStorage.setItem('projects', JSON.stringify(projects));
  //sessionStorage.setItem('backlogs', JSON.stringify(backlogs));
}

function getAllProjects() {
  return JSON.parse(sessionStorage.getItem('projects'));
}

function addIssueToBacklog(projectName, description, priority, difficulty) {
  let res = {};
  if(getProjectBacklog(projectName) != null){
    res[projectName] = [getProjectBacklog(projectName)[0],{"description":description,"priorite":priority,"difficulte":difficulty}];
  }
  else{
    res[projectName] = [{"description":description,"priorite":priority,"difficulte":difficulty}];
  }
  backlogs.push(res);
  sessionStorage.setItem('backlogs', JSON.stringify(backlogs));
}

function getProjectBacklog(projectName) {
  let res = JSON.parse(sessionStorage.getItem('backlogs'));
  console.log(res);
  let elem = null;
  let i = -1;
  if(res != null){
    while(elem==null){
      i++;
      elem = res[i][projectName];
    }
    return res[i];
  }
  else{
    return null;
  }
  
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
