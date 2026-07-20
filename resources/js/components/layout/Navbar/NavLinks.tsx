interface NavLink {
    label: string;
    href: string;
}

interface NavLinksProps {
    links: NavLink[];
}

export default function NavLinks({ links }: NavLinksProps) {
    return (
        <ul className="nav-links">
            {links.map((link) => (
                <li key={link.href} className="nav-links__item">
                    <a href={link.href} className="nav-links__anchor">
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    );
}
