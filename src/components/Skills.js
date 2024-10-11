function Skill(props) {
    return (
        <div className="card">
            <h3>{props.name}</h3>
            <img className="skill-image" src={props.img} alt={props.name} />
        </div>);
}

function Skills(props) {
    return (
        <section id="skills">
            <div className="container">
                <h2>Skills</h2>
                <div className="d-grid">

                    <Skill name="HTML" img="/img/html.PNG" />

                    <Skill name="CSS" img="/img/css.png" />

                    <Skill name="JavaScript" img="/img/js.png" />

                    <Skill name="React" img="/img/logo192.png" />

                    <Skill name="JavaScript" img="/img/js.png" />

                    <Skill name="Node" img="/img/node.jpg" />

                </div>
            </div>
        </section>
    );
}

export default Skills;