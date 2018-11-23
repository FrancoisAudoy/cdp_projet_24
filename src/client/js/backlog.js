let projectName = "";
let projectId = "";

let data;
getProjectName();
getProjectId();
fillBacklog();

function getProjectName() {
    let nameSpan = document.getElementById("projectName");
    projectName = sessionStorage.getItem('projectName');
    nameSpan.innerHTML = projectName;
    document.title = projectName + " - BackLog";
}

function getProjectId() {
    projectId = sessionStorage.getItem('projectId');
}

function fillBacklog() {
    let backlog = getBacklogByProjectId(projectId);
    if(backlog != null){
      sessionStorage.setItem('backlogId', backlog._id);
      let tableau = document.getElementById("backlog");
      tableau.innerHTML = "";
      backlog.issues.forEach(function (element) {
        tableau.innerHTML += "<tr>";
        let backlogItem = '<td scope="col"></td>';
        backlogItem += '<td scope="col">' + element.description + '</td>';
        backlogItem += '<td scope="col">' + element.difficulty + '</td>';
        backlogItem += '<td scope="col">' + element.priority + '</td>';
        tableau.innerHTML += backlogItem + "</tr>";
      })
    }
}

function toFormBacklog() {
    window.location.assign("formBacklog.html");
}

function toListProj() {
    window.location.assign("listProj.html");
}
