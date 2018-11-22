let projectName = "";

let data;
getProjectName();
fillBacklog();

function getProjectName() {
    let nameSpan = document.getElementById("projectName");
    projectName = sessionStorage.getItem('projectName');
    nameSpan.innerHTML = projectName;
    document.title = projectName + " - BackLog";
}

function fillBacklog() {
    let backlog = getProjectBacklog(projectName);
    let tableau = document.getElementById("backlog");
    tableau.innerHTML = "";
    backlog[projectName].forEach(function (element) {
        tableau.innerHTML += "<tr>";
        let backlogItem = '<td scope="col"></td>';
        backlogItem += '<td scope="col">' + element.description + '</td>';
        backlogItem += '<td scope="col">' + element.priorite + '</td>';
        backlogItem += '<td scope="col">' + element.difficulte + '</td>';
        tableau.innerHTML += backlogItem + "</tr>";
    })
}

function toFormBacklog() {
    window.location.assign("formBacklog.html");
}

function toListProj() {
    window.location.assign("listProj.html");
}