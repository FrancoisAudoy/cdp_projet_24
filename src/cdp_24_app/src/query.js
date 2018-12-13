// TODO IMPLEMENT ISSUE CLASS : CONTAINS String description, int difficulte, String priorite

function useFetchParam(httpMethod, data){
  return { credentials: 'include',
           method : httpMethod,
           body: JSON.stringify(data),
           headers:{
            'Accept' : 'application/json',
            'Content-Type': 'application/json'}};
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

  return fetch(BASE_URL + '/projects', paramPOST)
    .then(handleErrors)
    .then(response => response.json())
}

// check url for injection
export function getProjectById(projectId){
  return fetch(BASE_URL + '/projects/'+projectId)
    .then(handleErrors)
    .then(response => response.json());
}

// check url for injection
export function deleteProjectById(projectId){
  return fetch(BASE_URL + '/projects/'+projectId, useFetchParam('DELETE', {}))
    .then(handleErrors)
    .then(response => response.json())
}

export function getAllBacklogs(){
  return fetch(BASE_URL + '/backlogs')
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
  return fetch(BASE_URL + '/backlogs/'+backlogId+'/issue', useFetchParam("POST", issue))
    .then(handleErrors)
    .then(response => response.json());
}

export function updateBacklog(backlogId, backlogObject){
  return fetch(BASE_URL + '/backlogs/'+ backlogId, useFetchParam('PUT', backlogObject))
    .then(handleErrors)
    .then(response => response.json())
}

export function deleteBacklogById(backlogId){
  return fetch(BASE_URL + '/backlogs/'+ backlogId, useFetchParam('DELETE', {}))
    .then(handleErrors)
    .then(response => response.json())
}
