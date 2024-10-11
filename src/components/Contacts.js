function Contact(props) {
    return (
        <div>
            <i className="fas fa-envelope"></i>
            <a
                href="http://gashawfentaye0@gmail.com"
                style={{ text_decoration: "none" }}>
                gashawfentaye0@gmail.com
            </a>
        </div>
    );
}

function Contacts(props) {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <h2>Contact</h2>
                <p>
                    Feel free to reach out! You can contact me with.
                    <Contact name="gashawfentaye0@gmail.com" icon="fas fa-envelope" link="http://gashawfentaye0@gmail.com" />
                </p>
            </div>
        </section>
    );
}

export default Contacts;