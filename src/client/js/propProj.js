function toListProj() {
    window.location.assign("listProj.html");
}

function submitProjectName() {
    let projectName = document.getElementsByName('name')[0].value;
    createProject(projectName);
    window.location.assign("listProj.html");
}