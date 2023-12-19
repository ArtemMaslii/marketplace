import "./footer.scss";

const Footer = () => {
    return (
        <footer className="custom-footer">
            <nav className="footer-nav">
                <a href="#home">Home</a>
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#fags">FAQs</a>
                <a href="#about">About</a>
            </nav>
            <div className="footer-bottom">
                <p>© 2023 Company, Inc</p>
            </div>
        </footer>
    );
}

export default Footer;