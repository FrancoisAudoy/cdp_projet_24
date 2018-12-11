// TODO IMPLEMENT ISSUE CLASS : CONTAINS String description, int difficulte, String priorite
// TODO Refactoring
// TODO rendre les fonctions asynchrones

function useFetchParam(httpMethod, data){
  return { credentials: 'include',
           method : httpMethod,
           body: JSON.stringify(data),
           headers:{
            'Accept' : 'application/json',
            'Content-Type': 'application/json'}};
}

function isError(Code){
  return !(Code >= 200 && Code < 300);
}

let BASE_URL = '/express';

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function getAllProjects(){
  return fetch(BASE_URL + '/projects')
    .then(handleErrors)
    .then(response => response.json())
    .then(data => {
      return data;
    });
}


/*export async function createProject(projectName){
  let jsonObject = {name: projectName};
  let paramPOST = useFetchParam('POST', jsonObject);

  await fetch(BASE_URL + '/projects', paramPOST)
    .then(handleErrors)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log(error);
      //console.log("createProject : unhandled error code : %d", response.status);
      //console.log(response.json());
      //return {};
    });

/* const req = new XMLHttpRequest();
    req.open('POST', BASE_URL + '/projects', false);
  req.setRequestHeader('Content-Type','application/json; charset=utf-8');
  req.send(JSON.stringify(jsonObject));*/
  
//}*/

export function createProject(projectName){
  let jsonObject = {name: projectName};
  let paramPOST = useFetchParam('POST', jsonObject);

  fetch(BASE_URL + '/projects', paramPOST)
    .then(handleErrors)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log(error);
      //console.log("createProject : unhandled error code : %d", response.status);
      //console.log(response.json());
      //return {};
    });

/* const req = new XMLHttpRequest();
    req.open('POST', BASE_URL + '/projects', false);
  req.setRequestHeader('Content-Type','application/json; charset=utf-8');
  req.send(JSON.stringify(jsonObject));*/
  
}

// check url for injection
export function getProjectById(projectId){
    fetch(BASE_URL + '/projects/'+projectId)
        .then((response) => {
            if (!isError(response.status)) {
                var json = JSON.parse(response.responseText);
                return json;
            } else {
                console.log("getAllProjects : unhandled error code : %d", response.status);
                console.log(JSON.parse(response.responseText));
                return {};
            }
        });
}

// check url for injection
export function deleteProjectById(projectId){
    fetch(BASE_URL + '/projects/'+projectId, useFetchParam('DELETE', null))
	.then((response) => {
            if (!isError(response.status)) {
                var json = JSON.parse(response.responseText);
                return json;
            } else {
                console.log("getAllProjects : unhandled error code : %d", response.status);
                console.log(JSON.parse(response.responseText));
                return {};
            }
        });
}

export function getAllBacklogs(){
  const req = new XMLHttpRequest();
  req.open('GET', BASE_URL + '/backlogs', false);
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
    fetch(BASE_URL + '/backlogs/fromProjectId/'+projectId)
        .then((response) => {
            if (!isError(response.status)) {
                console.log(response.responseText);
                var json = JSON.parse(response.responseText);
                return json;
            } else {
                console.log("getAllBacklogs : unhandled error code : %d", response.status);
                console.log(JSON.parse(response.responseText));
                return {};
            }
	});
}

export function createBacklog(jsonObject){
    fetch(BASE_URL + '/backlogs', useFetchParam('POST', jsonObject))
        .then((response) => {
            if (!isError(response.status)) {
                console.log("response : %s", response.responseText);
                return {};
            } else {
                console.log("createBacklog : unhandled error code : %d", response.status);
                console.log(JSON.parse(response.responseText));
                return {};
            }
	});
}

//Should check projectId url injection
export function addIssueToBacklog(backlogId, issue){
    fetch(BASE_URL + '/backlogs/'+backlogId+'/issue', useFetchParam("POST", issue))
        .then((response) => {
            if (!isError(response.status)) {
                console.log("response : %s", response.responseText);
            } else {
                console.log("addIssueToBacklog : unhandled error code : %d", response.status);
                console.log(JSON.parse(response.responseText));
                return {};
            }
        });
}
