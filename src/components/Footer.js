function Footer(props) {
    return (
        <footer>
            <div className="container">
                <p>&copy; {props.copyRight}</p>
            </div>
        </footer>
    );
}

export default Footer;