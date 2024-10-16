import { TbPointerPause } from "react-icons/tb";

function Skill(props) {
    return (
        <div class="skill">
            <i className={props.icon}></i>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>

    );
}

function Skills(props) {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="skills-container">
                <Skill name="HTML & CSS" icon="fab fa-css" />
                <Skill name="Bootstrap & Tailwind" icon="fab fa-bootstrap" />
                <Skill name="JavaScript & Jquery" icon="fab fa-js" />
                <Skill name="Node.js & Express" icon="fab fa-node" />
                <Skill name="React" icon="fab fa-react" />
                <Skill name="SQL & MongoDB" icon="fas fa-database" />
                <Skill name="Python Django" icon="fab fa-python" />
                <Skill name="PHP Laravel" icon="fab fa-laravel" />
                <Skill name="C# MVC .NET" icon="fas fa-cogs" />
            </div>
        </section>
    );
}

export default Skills;