function Project(props) {
    return (
        <div class="project">
            <img src={props.image} alt={props.alts} />
            <h3>{props.title}</h3>
            <p>{props.description}<a className="details" href={props.details}>details</a></p>
        </div>
    );
}

function Projects(props) {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="projects-container">
                <Project
                    image="/img/duhrms.png"
                    alts="HRMS"
                    title="Human resource Management system"
                    description="Developed a full-stack HRMS using laravel framework with features
                such as user authentication, employee information Management, and
                leave Management..."
                    details="https://github.com/aha05/duhrms"
                />
                <Project
                    image="/img/fleetmgt.png"
                    alts="FMS"
                    title="Fleet Management System"
                    description="Developed a full-stack Fleet Management System using asp .net MVC
                framework..."
                    details="https://github.com/aha05/"
                />

                <Project
                    image="/img/weather-wise.png"
                    alts="WeatherWise"
                    title="WeatherWise"
                    description="Developed a WeatherWise web app using express, node.js and with ejs template..."
                    details="https://github.com/aha05/"
                />

            </div>
        </section>
    );
}

export default Projects;