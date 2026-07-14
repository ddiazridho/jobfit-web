const STATUS_ITEMS = [
    { label: 'System Operational', type: 'success' },
    { label: '27ms response', type: 'info' },
    { label: '99.99% uptime', type: 'success' },
];

export default function FooterCopyright() {
    return (
        <div className="footer-bottom-section">

            <div className="copyright-text">
                <p>&copy; 2026 LinkShort. All rights reserved.</p>
            </div>

            <div className="system-status">
                <ul>
                    {STATUS_ITEMS.map((item, index) => (
                        <li key={index}>
                            <span>{/* Use item.type to determine indicator color */}</span> {item.label}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}