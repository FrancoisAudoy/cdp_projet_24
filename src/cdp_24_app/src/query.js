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
    .then(response => response.json());
}

export function createProject(projectName){
  let jsonObject = {name: projectName};
  let paramPOST = useFetchParam('POST', jsonObject);

  fetch(BASE_URL + '/projects', paramPOST)
    .then(handleErrors)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    });
}

// check url for injection
export function getProjectById(projectId){
  fetch(BASE_URL + '/projects/'+projectId)
    .then(handleErrors)
    .then(response => response.json());
}

// check url for injection
export function deleteProjectById(projectId){
  fetch(BASE_URL + '/projects/'+projectId, useFetchParam('DELETE', {}))
    .then(handleErrors)
    .then(response => response.json())
    .then(data => console.log(data));
}

export function getAllBacklogs(){
  fetch(BASE_URL + '/backlogs')
    .then(handleErrors)
    .then(response => response.json());
}

export function getBacklogByProjectId(projectId){
  return fetch(BASE_URL + '/backlogs/fromProjectId/'+projectId)
    .then(handleErrors)
    .then(response => response.json());
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
