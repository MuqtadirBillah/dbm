import React from "react"
import Skill from "./Skill"

function Skills(){
    return(
        <div className="skillsDiv"  id="skills">
            <h1>Dominant Skills</h1>
            <div className="row justify-content-md-center">
                <Skill imgName="https://muqtadirbillah.github.io/Profile/images/mongodb.png" title="Mongodb" description="NoSQL Database for saving data" />
                <Skill imgName="https://muqtadirbillah.github.io/Profile/images/express.png" title="Express.JS" description="Back end Web App framework for Node.js" />
                <Skill imgName="https://muqtadirbillah.github.io/Profile/images/react.png" title="React.JS" description="Front end, JavaScript library for building UI" />
                <Skill imgName="https://muqtadirbillah.github.io/Profile/images/node.png" title="Node.JS" description="Back end JavaScript runtime environment." />
            </div>
        </div>
    );
}

export default Skills;