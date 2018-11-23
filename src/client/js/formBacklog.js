let projectName = "";
let backlogId = "";
getProjectName();
getBacklogId();

let submitUserStoryForm = document.getElementById("submitUserStoryForm");
submitUserStoryForm.addEventListener('submit', submitUserStory);


function getProjectName() {
    let nameSpan = document.getElementById("projectName");
    projectName = sessionStorage.getItem('projectName');
    nameSpan.innerHTML = projectName;
    document.title = projectName + " - Ajout US";
}

function getBacklogId() {
    backlogId = sessionStorage.getItem('backlogId');
}


function submitUserStory() {
    let description = document.getElementsByName('description')[0].value;
    let difficulty = document.getElementsByName('difficulty')[0].value;
    let priority = document.getElementsByName('priority')[0].value;
    let issue = {description: description, difficulty: difficulty, priority: priority};
    addIssueToBacklog(backlogId, issue);
    window.location.assign("backlog.html");
}

function toBacklog() {
    window.location.assign("backlog.html");
}
