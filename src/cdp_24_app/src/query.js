// TODO IMPLEMENT ISSUE CLASS : CONTAINS String description, int difficulte, String priorite
// TODO Refactoring
// TODO rendre les fonctions asynchrones

function useFetchParam(Method, Data){
    return { credentials: 'include',
	     method : Method,
	     mode: 'no-cors',
	     body: Data,
	     headers:{
		 'Accept' : 'application/json',
		 'Content-Type': 'application/json'}};
}

function error(Code){
    return !(Code >= 200 && Code < 300);
}

let BASE_URL = 'http://localhost/express';

export function getAllProjects(){
    fetch(BASE_URL + '/projects?format=json&callback=?')
	.then((response) => {
	    if (!error(response.status)) {
		var json = response.json();
		return json;
	    } else {
		console.log("getAllProjects : unhandled error code : %d", response.status);
		console.log(JSON.parse(response));
		return {};
	    }
	});
    
}

export async function createProject(projectName){
    var jsonObject = {name: projectName};
    await fetch(BASE_URL + '/projects?format=json&callback=?',
		useFetchParam('POST', JSON.stringify(jsonObject)))
	.then((response) => {
	    if (!error(response.status)) {
		return response.json();
	    } else {
		console.log("createProject : unhandled error code : %d", response.status);
		console.log(response.json());
		return {};
	    }
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
	    if (!error(response.status)) {
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
    fetch(BASE_URL + '/projects/'+projectId, useFetchParam('DELETE',null))
	.then((response) => {
	    if (!error(response.status)) {
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
	    if (!error(response.status)) {
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
    fetch(BASE_URL + '/backlogs', useFetchParam('POST', JSON.stringify(jsonObject)))
	.then((response) => {
	    if (!error(response.status)) {
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
    fetch(BASE_URL + '/backlogs/'+backlogId+'/issue', useFetchParam("POST",JSON.stringify(issue)))
	.then((response) => {
	    if (!error(response.status)) {
		console.log("response : %s", response.responseText);
	    } else {
		console.log("addIssueToBacklog : unhandled error code : %d", response.status);
		console.log(JSON.parse(response.responseText));
		return {};
	    }
	});
}
