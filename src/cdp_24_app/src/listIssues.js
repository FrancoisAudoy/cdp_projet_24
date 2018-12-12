import React, { Component } from "react";
import  Popup  from 'reactjs-popup';

import { getProjectById, getBacklogByProjectId } from "./query";

class listIssues extends Component {

  constructor(){
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
  }

  createUS(){
    let descr = document.getElementById("descrUS").value;
    let diff = document.getElementById("diffUS").value;
    let prio = document.getElementById("prioUS").value;
    let object = {description: descr, difficulty: diff, priority: prio};
    //createBacklog(JSON.stringyfy(object));
  }

  createTask(){
    let descr = document.getElementById("descrTask").value;
    let diff = document.getElementById("diffTask").value;
    let us = document.getElementById("usTask").value;
    let time = document.getElementById("timeTask").value;
    let object = {description: descr, difficulty: diff, userStory: us, time: time};
    //createBacklog(JSON.stringyfy(object));
  }

  componentDidMount() {
    getProjectById(this.state.projectId)
      .then(project => {
        this.setState({projectName: project.name})})
      .catch(error => console.log(error));

    getBacklogByProjectId(this.state.projectId)
      .then(backlog => {
        console.log(backlog);
        this.setState({ _id: backlog._id});
        this.setState({ issues: backlog.issues});
      })
      .catch(error => {
        console.log(error);
        this.setState({ issues: [] });
      });
  }


  render() {
    const { projectId } = this.state;
    const { projectName } = this.state;
    const { issues } = this.state;
    let listUS;
    //if (backlog !== null && backlog !== undefined)
    //  listUS = backlog.map((US) =>
    //    <li>{US.description},{US.priorite},{US.difficulte}</li>);

    if(this.state.listType === "backlog") {
      return (
        <div>
          <h2>Backlog du projet "{projectName}"</h2>
          <ul>{listUS}</ul>
          <Popup trigger={<button className="button btn-primary rounded-circle">+</button>} modal>
            <h1> Nouvel US</h1>
            <form>
              Description : <input type="text" id="descrUS"/> <br/>
              Priotité : <input type="text" id="prioUS"/> <br/>
              Difficulté : <input type="text" id="diffUS"/> <br/>
              <input type="submit" id="accept" value="create" onClick={this.createUS}/>
            </form>
          </Popup>
        </div>
      );
    }
    else {
      return (
        <div>
          <h2>Tâches du projet "{projectName}"</h2>
          <ul>{listUS}</ul>
          <Popup trigger={<button className="button btn-primary rounded-circle">+</button>} modal>
            <h1> Nouvel US</h1>
            <form>
              Description : <input type="text" id="descrTask"/> <br/>
              Difficulté : <input type="text" id="diffTask"/> <br/>
              User Story : <input type="text" id="usTask"/> <br/>
              Durée de réalisation : <input type="text" id="timeTask"/> <br/>
              <input type="submit" id="accept" value="create" onClick={this.createTask}/>
            </form>
          </Popup>
        </div>
      )
    }
  }
}

export default listIssues;
