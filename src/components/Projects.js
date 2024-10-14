function Project(props) {
    return (
        <div class="project">
            <img src={props.image} alt="Fleet Management System" />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}

function Projects(props) {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="projects-container">
                <Project
                    image="/img/project image.png"
                    title="Human resource Management system"
                    description="Developed a full-stack HRMS using laravel framework with features
                such as user authentication, employee information Management, and
                leave Management.."
                />
                <Project
                    image="/img/project image.png"
                    title="Fleet Management System"
                    description="Developed a full-stack Fleet Management System using asp .net MVC
                framework."
                />

                <Project
                    image="/img/project image.png"
                    title="Fleet Management System"
                    description="Developed a full-stack Fleet Management System using asp .net MVC
                framework."
                />

            </div>
        </section>
    );
}

export default Projects;