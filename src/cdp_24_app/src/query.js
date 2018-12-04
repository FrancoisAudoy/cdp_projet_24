// TODO IMPLEMENT ISSUE CLASS : CONTAINS String description, int difficulte, String priorite
// TODO Refactoring
// TODO rendre les fonctions asynchrones

export function getAllProjects(){
  const req = new XMLHttpRequest();
  req.open('GET', '/express/projects', false);
  req.send(null);
  if (req.status === 200) {
    var json = JSON.parse(req.responseText);
    return json;
  } else {
    console.log("getAllProjects : unhandled error code : %d", req.status);
    console.log(JSON.parse(req.responseText));
    return {};
  }
}

export function createProject(projectName){
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
    return {};
  }
}

// check url for injection
export function getProjectById(projectId){
  const req = new XMLHttpRequest();
  req.open('GET', '/express/projects/'+projectId, false);
  req.send(null);
  if (req.status === 200) {
    var json = JSON.parse(req.responseText);
    return json;
  } else {
    console.log("getAllProjects : unhandled error code : %d", req.status);
    console.log(JSON.parse(req.responseText));
    return {};
  }
}

// check url for injection
export function deleteProjectById(projectId){
  const req = new XMLHttpRequest();
  req.open('DELETE', '/express/projects/'+projectId, false);
  req.send(null);
  if (req.status === 200) {
    var json = JSON.parse(req.responseText);
    return json;
  } else {
    console.log("getAllProjects : unhandled error code : %d", req.status);
    console.log(JSON.parse(req.responseText));
    return {};
  }
}

export function getAllBacklogs(){
  const req = new XMLHttpRequest();
  req.open('GET', '/express/backlogs', false);
  req.send(null);
  if (req.status === 200) {
    var json = JSON.parse(req.responseText);
    return json;
  } else {
    console.log("getAllBacklogs : unhandled error code : %d", req.status);
    console.log(JSON.parse(req.responseText));
    return {};
  }
}

export function getBacklogByProjectId(projectId){
  const req = new XMLHttpRequest();
  req.open('GET', '/express/backlogs/fromProjectId/'+projectId, false);
  req.send(null);
  if (req.status === 200) {
  console.log(req.responseText);
    var json = JSON.parse(req.responseText);
    return json;
  } else {
    console.log("getAllBacklogs : unhandled error code : %d", req.status);
    console.log(JSON.parse(req.responseText));
    return {};
  }

}

export function createBacklog(jsonObject){
  const req = new XMLHttpRequest();
  req.open('POST', '/express/backlogs', false);
  req.setRequestHeader('Content-Type','application/json; charset=utf-8');
  req.send(JSON.stringify(jsonObject));
  if (req.status === 201) {
    console.log("response : %s", req.responseText);
    return {};
  } else {
    console.log("createBacklog : unhandled error code : %d", req.status);
    console.log(JSON.parse(req.responseText));
    return {};
  }
}

//Should check projectId url injection
export function addIssueToBacklog(backlogId, issue){
  const req = new XMLHttpRequest();
  req.open('POST', '/express/backlogs/'+backlogId+'/issue', false);
  req.setRequestHeader('Content-Type','application/json; charset=utf-8');
  console.log("lel");
  console.log(backlogId);
  console.log(issue);
  req.send(JSON.stringify({issue: issue}));
  if (req.status === 200) {
    console.log("response : %s", req.responseText);
  } else {
    console.log("addIssueToBacklog : unhandled error code : %d", req.status);
    console.log(JSON.parse(req.responseText));
    return {};
  }
}
