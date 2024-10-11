function Header(props) {
    return (
        <header>
            <div className="container">
                <h1>{props.fullName}</h1>
                <p>{props.Job}</p>
            </div>
        </header>
    );
}

export default Header;