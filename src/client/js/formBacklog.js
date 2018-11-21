let projectName = "";
getProjectName();

let submitUserStoryForm = document.getElementById("submitUserStory");
submitUserStoryForm.addEventListener('submit', submitUserStory);


function getProjectName() {
    let nameSpan = document.getElementById("projectName");
    projectName = sessionStorage.getItem('projectName');
    nameSpan.innerHTML = projectName;
    document.title = projectName + " - Ajout US";
}

function submitUserStory() {
    let description = document.getElementsByName('description')[0].value;
    let difficulty = document.getElementsByName('difficulty')[0].value;
    let priority = document.getElementsByName('priority')[0].value;
    addIssueToBacklog(projectName,description,difficulty,priority);
}

function toBacklog() {
    window.location.assign("backlog.html");
}