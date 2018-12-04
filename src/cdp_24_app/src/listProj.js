import React, { Component } from "react";
import { Link } from "react-router-dom";

import { getAllProjects } from "./query";

let str = '/backlog/toto';

class listProj extends Component {

    requestAllProject() {
        return getAllProjects();
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
                <div class="container">
                    <div class="row">
                        <div class="col-sm col-9">
                            <ul class="list-group m-5" id="list_proj">{listProject}</ul>
                            <Link class="btn-primary rounded-circle" to={`/backlog`}>+</Link>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default listProj;
