const FEATURE_LINKS = [
    { label: 'Link Shortener', href: '/#platform' },
]; 

const SECURITY_ITEMS = [
    { label: 'Google Safe Browsing', href: 'shield' },
 
];

const LEGAL_LINKS = [
    { label: 'Terms of Use', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
];

export default function FooterLinks() {
    return (
        <div className="footer-links-wrapper">

            <div className="footer-column">
                <h3>Features</h3>
                <nav>
                    <ul>
                        {FEATURE_LINKS.map((link, index) => (
                            <li key={index}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className="footer-column">
                <h3>Security</h3>
                <nav>
                    <ul>
                        {SECURITY_ITEMS.map((link, index) => (
                            <li key={index}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className="footer-column">
                <h3>Privacy</h3>
                <nav>
                    <ul>
                        {LEGAL_LINKS.map((link, index) => (
                            <li key={index}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className="footer-column">
                <h3>Test</h3>
                <nav>
                    <ul>
                        {LEGAL_LINKS.map((link, index) => (
                            <li key={index}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

        </div>
    );
}