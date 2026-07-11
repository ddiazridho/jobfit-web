import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import NavAuthButtons from './NavAuthButtons';

const NAV_LINKS = [
    { label: 'Platform', href: '#' },
    { label: 'Description', href: '#' },
];

export default function Navbar() {
    return (
        <nav className="navbar">
            <NavLogo />
            <NavLinks links={NAV_LINKS} />
            <NavAuthButtons />
        </nav>
    );
}
