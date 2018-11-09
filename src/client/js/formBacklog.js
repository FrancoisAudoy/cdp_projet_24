const submitUserStoryForm = document.querySelector("#submitUserStory");
submitUserStoryForm.addEventListener('submit', submitUserStory());
const projectName = "";

getProjectName();

function getProjectName() {

}

function submitUserStory() {

    let description = $('#description').val();
    let difficulty = $('#difficulty').val();
    let priority = $('#priority').val();
    addUserStory(projectName, description, difficulty, priority);
    /*$.ajax({
        url: URLUsers,
        type: 'POST',
        contentType: 'text/plain',
        data: description + "/" + difficulty + "/" + priority,
        success: function (data) {

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {

        }
    });*/
}

/*function updateUserStory() {
    let description = $('#description').val();
    let difficulty = $('#difficulty').val();
    let priority = $('#priority').val();
    $.ajax({
        url: URLUsers,
        type: 'POST',
        contentType: 'text/plain',
        data: description + "/" + difficulty + "/" + priority,
        success: function (data) {

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {

        }
    });
}*/

function toBacklog() {
    window.location.replace("backlog.html");
}