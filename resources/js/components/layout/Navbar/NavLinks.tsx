import { Link } from '@inertiajs/react';

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
                    <Link href={link.href} className="nav-links__anchor">
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
