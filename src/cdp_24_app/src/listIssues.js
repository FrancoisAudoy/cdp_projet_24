import React, { Component } from "react";
import { Link } from "react-router-dom";

import { getBacklogByProjectId } from "./query";

class listIssues extends Component {

    render() {
        let splitUrl = window.location.pathname.split("/");
        let listType = splitUrl[1];
        let projectName = splitUrl[2];
        let listUS, res;
        let backlog = getBacklogByProjectId(projectName);

        if (backlog !== null && backlog !== undefined)
            listUS = backlog.map((US) =>
                <li>{US.description},{US.priority},{US.difficulty}</li>);

        if(listType === "backlog") {
            return (
                <div>
                    <h2>Backlog du projet "{projectName}"</h2>
                    <ul>{listUS}</ul>
                    <Link to={`/backlog/` + this.props.projectName + `/add`}>+</Link>
                </div>
            );
        }
        else {
            return (
                <div>
                    <h2>Tâches du projet "{projectName}"</h2>
                    <ul>{listUS}</ul>
                    <Link to={`/backlog/` + this.props.projectName + `/add`}>+</Link>
                </div>
            );
        }
        
    }
}

export default listIssues;