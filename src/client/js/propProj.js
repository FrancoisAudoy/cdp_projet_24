function toListProj() {
    window.location.assign("listProj.html");
}

function submitProjectName() {
    let projectName = document.getElementsByName('name')[0].value;
    projectReturn = createProject(projectName);
    console.log(projectReturn);
    let projectId = projectReturn['project']['_id'];
    console.log(projectId);
    createBacklog({name: projectName, projectId: projectId});
    window.location.assign("listProj.html");
}
