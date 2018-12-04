// TODO IMPLEMENT ISSUE CLASS : CONTAINS String description, int difficulte, String priorite
// TODO Refactoring
// TODO rendre les fonctions asynchrones

function useFetchParam(Method, Data){
    return { method : Method, mode: 'cors', body: Data};
}

export function getAllProjects(){
    fetch('/express/projects')
	.then((response) => {
	    if (response.status === 200) {
		var json = JSON.parse(response.json());
		return json;
	    } else {
		console.log("getAllProjects : unhandled error code : %d", response.status);
		console.log(JSON.parse(response.responseText));
		return {};
	    }
	});
    
}

export function createProject(projectName){
    var jsonObject = {name: projectName};
    fetch('express/projects', useFetchParam('POST', JSON.stringify(jsonObject)))
	.then((response) => {
	    if (response.status === 201) {
		var json = JSON.parse(response.responseText);
		return json;
	    } else {
		console.log("createProject : unhandled error code : %d", response.status);
		console.log(JSON.parse(response.responseText));
		return {};
	    }
	});
   /* const req = new XMLHttpRequest();
    req.open('POST', '/express/projects', false);
  req.setRequestHeader('Content-Type','application/json; charset=utf-8');
  req.send(JSON.stringify(jsonObject));*/
  
}

// check url for injection
export function getProjectById(projectId){
    fetch('/express/projects/'+projectId)
	.then((response) => {
	    if (response.status === 200) {
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
    fetch('/express/projects/'+projectId, useFetchParam('DELETE',null))
	.then((response) => {
	    if (response.status === 200) {
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
    fetch('/express/backlogs/fromProjectId/'+projectId)
	.then((response) => {
	    if (response.status === 200) {
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
    fetch('/express/backlogs', useFetchParam('POST', JSON.stringify(jsonObject)))
	.then((response) => {
	    if (response.status === 201) {
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
    fetch('/express/backlogs/'+backlogId+'/issue', useFetchParam("POST",JSON.stringify(issue)))
	.then((response) => {
	    if (response.status === 200) {
		console.log("response : %s", response.responseText);
	    } else {
		console.log("addIssueToBacklog : unhandled error code : %d", response.status);
		console.log(JSON.parse(response.responseText));
		return {};
	    }
	});
}
