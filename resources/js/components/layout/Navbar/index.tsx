import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import NavAuthButtons from './NavAuthButtons';

const NAV_LINKS = [
    { label: 'Platform', href: '/test' },
    { label: 'Description', href: '#' },
    { label: 'Test', href: '#' }
];

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <NavLogo />
                <NavLinks links={NAV_LINKS} />
            </div>
            <div className="navbar-right">
                <NavAuthButtons />
            </div>
        </nav>
    );
}
