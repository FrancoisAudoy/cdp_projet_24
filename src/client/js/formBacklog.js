let projectName = "";
getProjectName();

submitUserStoryForm.addEventListener('submit', submitUserStory());


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
    addIssueToBacklog();
}

function toBacklog() {
    window.location.replace("backlog.html");
}