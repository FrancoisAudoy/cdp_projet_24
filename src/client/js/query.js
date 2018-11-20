//fonctions non asynchrones pour le moment

function getAllProjects(){
  const req = new XMLHttpRequest();
  req.open('GET', '/express/projects', false);
  req.send(null);
  if (req.status === 200) {
    var json = JSON.parse(req.responseText);
    for(var i = 0; i < json.length; i++){
      console.log(json[i]);
    }
    return json;
  } else {
    console.log("getAllProjects : unhandled error code : %d (%s)", req.status, req.statusText);
  }
}

function createProject(projectName){
  var jsonObject = {name: projectName};
  const req = new XMLHttpRequest();
  req.open('POST', '/express/projects', false);
  req.setRequestHeader('Content-Type','application/json; charset=utf-8');
  req.send(JSON.stringify(jsonObject));
  if (req.status === 200) {
    console.log("response %s", req.responseText);
  } else {
    console.log("createProject : unhandled error code : %d (%s)", req.status, req.statusText);
  }
}

function getAllBacklogs(){
  const req = new XMLHttpRequest();
  req.open('GET', '/express/backlogs', false);
  req.send(null);
  if (req.status === 200) {
    var json = JSON.parse(req.responseText);
    for(var i = 0; i < json.length; i++){
      console.log(json[i]);
    }
    return json;
  } else {
    console.log("getAllBacklogs : unhandled error code : %d (%s)", req.status, req.statusText);
  }
}

//Should check projectId url injection
function createBacklog(projectId, jsonObject){
  const req = new XMLHttpRequest();
  req.open('POST', '/express/projects/'+projectId+'/createBacklog', false);
  req.setRequestHeader('Content-Type','application/json; charset=utf-8');
  req.send(JSON.stringify(jsonObject));
  if (req.status === 200) {
    console.log("response : %s", req.responseText);
  } else {
    console.log("createProject : unhandled error code : %d (%s)", req.status, req.statusText);
  }
}

//Should check projectId url injection
function addIssueToBacklog(backlogId, jsonObject){
  const req = new XMLHttpRequest();
  req.open('POST', '/express/backlogs/'+backlogId+'/issue', false);
  req.setRequestHeader('Content-Type','application/json; charset=utf-8');
  req.send(JSON.stringify(jsonObject));
  if (req.status === 200) {
    console.log("response : %s", req.responseText);
  } else {
    console.log("createProject : unhandled error code : %d (%s)", req.status, req.statusText);
  }


}
