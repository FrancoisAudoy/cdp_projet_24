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
  }

  updateList() {
    getAllProjects()
      .then(data => this.setState({ projects: data }))
      .catch(error => {
        console.log(error);
        this.setState({ projects: [] });
      });
  }

  componentDidMount() {
    this.updateList();
  }

  render() {
    const { projects } = this.state;
    let listProject;
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
                      {close => (
                        <div>
                          <h1>Êtes-vous sûr de vouloir supprimer le projet "{proj.name}" ?</h1>
                          <button
                            onClick={() => {
                              deleteProjectById(proj._id)
                                .then(this.updateList())
                                .then(close())
                                .catch(error => {console.log(error)});
                            }}>
                            Supprimer
                          </button>
                        </div>
                      )}
                    </Popup>
                  </li>)
              }</ul>
              <Popup trigger={<button id="AddProjet" className="button btn-primary rounded-circle">+</button>} modal>
                {close => (
                  <div>
                    <h1> Nouveau Projet</h1>
                    Nom : <input type="text" id="nameProj" />
                    <input type="submit" id="submit-button"  value="create"
                       onClick={() => {
                         let field = document.getElementById("nameProj");
                         createProject(field.value)
                           .then(this.updateList())
                           .then(close())
                           .catch(error => {console.log(error)});
                       }} />
                  </div>
                )}
              </Popup>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

//                        <button onClick={close}>Supprimer</button>


export default listProj;
