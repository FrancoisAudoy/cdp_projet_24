const backlog = document.getElementById('#backlog');
let projectName = "";

let data;
getProjectName();
getProjectBacklog();

function getProjectName() {
    let nameSpan = document.getElementById("projectName");
    projectName = sessionStorage.getItem('projectName');
    nameSpan.innerHTML = projectName;
    document.title = projectName + " - BackLog";
}

function getProjectBacklog() {
    data = getBacklog(projectName);
    $.each(data, function (lineNum, value) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.innerHTML = value.id;
        tr.append(td);
        td.innerHTML = value.description;
        tr.append(td);
        td.innerHTML = value.difficulty;
        tr.append(td);
        td.innerHTML = value.priority;
        tr.append(td);
        backlog.append(tr_US);
    });
}

function toFormBacklog() {
    window.location.replace("formBacklog.html");
}

function toListProj() {
    window.location.replace("listProj.html");
}