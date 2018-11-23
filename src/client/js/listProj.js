

function toPropProj() {
    window.location.assign("propProj.html");
}

function onClickProj(event){
    const projectName = event.target.id;
    const projectId = event.target.dbid;
    //requete get projectName
    sessionStorage.setItem('projectName',projectName);
    sessionStorage.setItem('projectId',projectId);
    console.log(projectName + '  id =' + projectId);
    window.location.assign("backlog.html");
}

function fillListProj(){
    // Use the query
    let projets = getAllProjects();

    let liste = document.getElementById("list_proj");
    liste.innerHTML = "";
    projets.forEach( function(element) {
	let projItem = '<li class="list-group-item " id="' + element.name + '">' +
	    element.name + '</li>';
	liste.insertAdjacentHTML('beforeend', projItem);
	document.getElementById(element.name).dbid = element._id;
	document.getElementById(element.name).addEventListener("click",onClickProj);
    });
}

document.getElementById("AddProjet").addEventListener("click",toPropProj);
fillListProj();
