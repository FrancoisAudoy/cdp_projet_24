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

/*function getProjectBacklog() {
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
}*/

function fillBacklog(){
    let backlog = getProjectBacklog(projectName);
    console.log(sessionStorage.getItem('backlogs'));
    let tableau = document.getElementById("backlog");
    tableau.innerHTML = "";
    backlog[projectName].forEach(function(element) {
        tableau.innerHTML += "<tr>";
        let backlogItem = '<td scope="col">'+element.description+'</td>';
        backlogItem += '<td scope="col">'+element.priorite+'</td>';
        backlogItem += '<td scope="col">'+element.difficulte+'</td>';
        tableau.innerHTML += backlogItem+"</tr>";
    })
}

function toFormBacklog() {
    window.location.assign("formBacklog.html");
}

function toListProj() {
    window.location.assign("listProj.html");
}