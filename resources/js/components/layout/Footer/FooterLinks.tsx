const FEATURE_LINKS = [
    { label: 'Link Shortener', href: '/link-shortener' },
    { label: 'Pages Customization', href: '/pages-customization' },
    { label: 'QR Code Generator', href: '/qr-code-generator' },
    { label: 'Advanced Analytics', href: '/advanced-analytics' },
    { label: 'Custom Domains', href: '/custom-domains' },
    { label: 'Campaign Management', href: '/campaign-management' },
];

const SECURITY_ITEMS = [
    { label: 'Google Safe Browsing', icon: 'shield' },
    { label: 'Virus Total Protection', icon: 'shield' },
    { label: 'Norton Safe Web', icon: 'shield' },
    { label: 'SSL Encryption', icon: 'shield' },
];

const CONTACT_INFO = [
    { label: 'R. Gomes de Carvalho, 1105 - Vila Olímpia, São Paulo - SP', icon: 'map-pin' },
    { label: 'support@linkshort.app', icon: 'mail' },
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
                <ul>
                    {SECURITY_ITEMS.map((item, index) => (
                        <li key={index}>
                            <span>{/* Map {item.icon} here */}</span> {item.label}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="footer-column">
                <h3>Contact & Legal</h3>
                <address>
                    {CONTACT_INFO.map((info, index) => (
                        <p key={index}>
                            <span>{/* Map {info.icon} here */}</span> {info.label}
                        </p>
                    ))}
                </address>
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