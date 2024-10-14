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
                <Skill name="HTML & CSS" icon="fab fa-css" description="Experienced in developing server-side applications." />
                <Skill name="Bootstrap & Tailwind" icon="fab fa-bootstrap" description="Experienced in JavaScript development, building web applications." />
                <Skill name="JavaScript & Jquery" icon="fab fa-js" description="Experienced in JavaScript development, building web applications." />
                <Skill name="Node.js & Express" icon="fab fa-node" description="Experienced in developing server-side applications." />
                <Skill name="React" icon="fab fa-react" description="Experienced in building dynamic user interfaces." />
                <Skill name="SQL & MongoDB" icon="fas fa-database" description="Experienced in JavaScript development, building web applications." />
                <Skill name="Python Django" icon="fab fa-python" description="Experienced in back-end development with Django." />
                <Skill name="PHP Laravel" icon="fab fa-laravel" description="Experienced in working with Laravel framework for PHP." />
                <Skill name="C# MVC .NET" icon="fas fa-cogs" description="Experienced in developing enterprise applications using MVC .NET." />
            </div>
        </section>
    );
}

export default Skills;