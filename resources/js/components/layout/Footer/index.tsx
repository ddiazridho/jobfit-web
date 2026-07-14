import FooterBrand from './FooterBrand';
import FooterLinks from './FooterLinks';
import FooterCopyright from './FooterCopyright';

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-top-section">
                <FooterBrand />
                <FooterLinks />
            </div>

            <hr className="footer-divider" />

            <FooterCopyright />
        </footer>
    );
}