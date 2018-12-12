import React, { Component } from "react";
import Popup from 'reactjs-popup';

import { getProjectById, getBacklogByProjectId, addIssueToBacklog, deleteBacklogById } from "./query";

class listIssues extends Component {
  constructor() {
    super();
    let splitUrl = window.location.pathname.split("/");
    this.state = {
      listType: splitUrl[1],
      projectId: splitUrl[2],
      projectName: '',
      _id: null,
      issues: []
    }
    this.createUS = this.createUS.bind(this);
    this.createTask = this.createTask.bind(this);
    this.updateList = this.updateList.bind(this);
  }

  createUS(e, callback) {
    e.preventDefault();
    let descr = document.getElementById("descrUS").value;
    let diff = document.getElementById("diffUS").value;
    let prio = document.getElementById("prioUS").value;
    let issue = { description: descr, difficulty: diff, priority: prio };
    addIssueToBacklog(this.state._id, issue)
      .then(this.updateList())
      .then(callback());
  }

  createTask() {
    let descr = document.getElementById("descrTask").value;
    let diff = document.getElementById("diffTask").value;
    let us = document.getElementById("usTask").value;
    let time = document.getElementById("timeTask").value;
    let object = { description: descr, difficulty: diff, userStory: us, time: time };
  }

  updateList(){
    getProjectById(this.state.projectId)
      .then(project => {
        this.setState({ projectName: project.name })
      })
      .catch(error => console.log(error));

    getBacklogByProjectId(this.state.projectId)
      .then(backlog => {
        this.setState({ _id: backlog._id });
        this.setState({ issues: backlog.issues});
      })
      .catch(error => {
        console.log(error);
        this.setState({ issues: [] });
      });
  }

  componentDidMount() {
    this.updateList()
  }


  render() {
    const { projectId } = this.state;
    const { projectName } = this.state;
    const { issues } = this.state;
    const { _id } = this.state;
    let listUS;
    console.log(issues);

    if (this.state.listType === "backlog") {
      return (
        <div>
          <h2>Backlog du projet "{projectName}"</h2>
          <ul>
            {issues.map(issue =>
              <li>
                {issue.description}, {issue.priority}, {issue.difficulty}
                <Popup trigger={<button className="button btn-primary rounded-circle">Supprimer</button>} modal>
                  {close => (
                    <div>
                      <h1>Êtes-vous sûr de vouloir supprimer l'us "{issue.description}" ?</h1>
                      <button
                        onClick={() => {
                         deleteBacklogById(_id)
                            .then(this.updateList())
                            .then(close())
                            .catch(error => { console.log(error) });
                        }}>
                        Supprimer
                          </button>
                    </div>
                  )}
                </Popup>
              </li>)}
          </ul>
          <Popup trigger={<button className="button btn-primary rounded-circle">+</button>} modal>
            {close => (
              <div>
                <h1> Nouvel US</h1>
                <form>
                  Description : <input type="text" id="descrUS" /> <br />
                  Priotité : <input type="text" id="prioUS" /> <br />
                  Difficulté : <input type="text" id="diffUS" /> <br />
                  <input type="submit" id="accept" value="create" onClick={(e) => this.createUS(e, close)} />
                </form>
              </div>
            )}
          </Popup>
        </div>
      );
    }
    else {
      return (
        <div>
          <h2>Tâches du projet "{projectName}"</h2>
          <ul>
            {issues.map(issue => <li>{issue.description},{issue.priority},{issue.difficulty}</li>)}
          </ul>
          <Popup trigger={<button className="button btn-primary rounded-circle">+</button>} modal>
            <h1> Nouvel US</h1>
            <form>
              Description : <input type="text" id="descrTask" /> <br />
              Difficulté : <input type="text" id="diffTask" /> <br />
              User Story : <input type="text" id="usTask" /> <br />
              Durée de réalisation : <input type="text" id="timeTask" /> <br />
              <input type="submit" id="accept" value="create" onClick={this.createTask} />
            </form>
          </Popup>
        </div>
      )
    }
  }
}

export default listIssues;
