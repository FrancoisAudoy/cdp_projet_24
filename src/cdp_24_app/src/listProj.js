import React, { Component } from "react";
import { Link } from "react-router-dom";
import  Popup  from 'reactjs-popup';

import { getAllProjects, createProject } from "./query";


class listProj extends Component {

    constructor() {
	super();
	
	this.sendNewProjet = this.sendNewProjet.bind(this);
    }

    requestAllProject() {
        return getAllProjects();
    }


    sendNewProjet(){
	let field = document.getElementById("nameProj");
	console.log(field.value);
	let ret =  createProject(field.value)
	console.log(ret);
    }

    
    
    render() {
        let listProject;
        let allProjects = this.requestAllProject();

        if (allProjects !== null && allProjects !== undefined)
            listProject = allProjects.map((proj) =>
					  <li> <Link to={'/backlog/' + proj.name}> {proj.name}</Link> </li>);

        return (
		<div>
                <h2>Liste des projets</h2>
                <div className="container">
                <div className="row">
                <div className="col-sm col-9">
                <ul className="list-group m-5" id="list_proj">{listProject}</ul>

		<Popup trigger={<button className="button btn-primary rounded-circle">+</button>}
	    modal>
		
		<h1> Nouveau Projet</h1>
		
		<form>
		Nom : <input type="text" id="nameProj"/>
		<input type="submit" id="accept" value="create" onClick={this.sendNewProjet}/>
		</form>
		
	    </Popup>
            </div>
                </div>
                </div>
		</div>

        );
    }
}

export default listProj;
