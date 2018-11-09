const name = document.querySelector('#projectName');
const backlog = document.querySelector('#backlog');

getProjectName();

function getProjectName() {

}

let data;
getProjectBacklog();

function getProjectBacklog() {
        data = getBacklog();
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