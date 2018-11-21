let projets =[{ name: "first Projet"},
		  {name: "Second Projet"}];

function toPropProj() {
    window.location.replace("propProj.html");
}

function onClickProj(event){
    const projectName = event.target.id;
    //requete get projectName
    sessionStorage.setItem('projectName',projectName);
    console.log(projectName);
}

function fillListProj(){
    // Use the query
    
    let liste = document.getElementById("list_proj");
    liste.innerHTML = "";

    projets.forEach( function(element) {
	let projItem = '<li class="list-group-item " id="' + element.name + '">' +
	    element.name + '</li>';
	liste.insertAdjacentHTML('beforeend', projItem);
	document.getElementById(element.name).addEventListener("click",onClickProj);
    });
}

document.getElementById("AddProjet").addEventListener("click",toPropProj);
fillListProj();
