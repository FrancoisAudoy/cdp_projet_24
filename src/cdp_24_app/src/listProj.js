import React, { Component } from "react";
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup';

import { getAllProjects, createProject, deleteProjectById } from "./query";

class listProj extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    };
    this.sendNewProjet = this.sendNewProjet.bind(this);
  }

  sendNewProjet() {
    let field = document.getElementById("nameProj");
    createProject(field.value);
  }

  componentDidMount() {
    getAllProjects()
      .then(data => this.setState({ projects: data }))
      .catch(error => {
        console.log(error);
        this.setState({ projects: [] });
      });
  }

  render() {
    const { projects } = this.state;
    let listProject;
    console.log(this.state.projects);
    return (
      <div>
        <h2>Liste des projets</h2>
        <div className="container">
          <div className="row">
            <div className="col-sm col-9">
              <ul className="list-group m-5" id="list_proj">{
                projects.map(proj =>
                  <li> <Link to={'/backlog/' + proj._id}> {proj.name}</Link>
                    <Popup trigger={<button className="button btn-primary rounded-circle">Supprimer</button>} modal>
                      <h1>Êtes-vous sûr de vouloir supprimer le projet "{proj.name}" ?</h1>
                      <button onClick={() => deleteProjectById(proj._id)}>Supprimer</button>
                    </Popup>
                  </li>)
              }</ul>
              <Popup trigger={<button className="button btn-primary rounded-circle">+</button>} modal>
                <h1> Nouveau Projet</h1>
                <form>
                  Nom : <input type="text" id="nameProj" />
                  <input type="submit" id="accept" value="create" onClick={this.sendNewProjet} />
                </form>
              </Popup>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default listProj;
