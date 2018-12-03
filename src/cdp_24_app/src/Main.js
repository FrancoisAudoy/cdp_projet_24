import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import listProj from "./listProj";
import listIssues from "./listIssues";
import listSprint from "./listSprint";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Project Manager 2_4</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Liste des projets</NavLink></li>
                        <li><NavLink to="/backlog">Backlog</NavLink></li>
                        <li><NavLink to="/sprints">Liste des sprints</NavLink></li>
                        <li><NavLink to="/tasks">Liste des tâches</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={listProj} />
                        <Route path="/backlog" component={listIssues} />
                        <Route path="/sprints" component={listSprint} />
                        <Route path="/tasks" component={listIssues} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;