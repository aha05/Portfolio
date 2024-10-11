function Project(props) {
    return (
        <div className="project">
            <h3>{props.title}</h3>
            <p>
                {props.description}
            </p>
        </div>
    );
}

function Projects(props) {
    return (
        <section className="projects" id="projects">
            <div className="container">
                <h2>Projects</h2>
                <div className="d-grid">
                    <Project
                        title="Human resource Management system"
                        description="Developed a full-stack HRMS using laravel framework with features
                such as user authentication, employee information Management, and
                leave Management.."
                    />
                    <Project
                        title="Fleet Management System"
                        description="Developed a full-stack Fleet Management System using asp .net MVC
                framework."
                    />
                </div>
            </div>
        </section>
    );
}

export default Projects;