import { Link } from '@inertiajs/react';
import { welcome } from '@/routes';

export default function NavAuthButtons() {
    return (
        <div className="nav-auth">
            {/* <Link href={route('login')} className="nav-auth__signin">
                Sign in
            </Link> */}
            <Link href={welcome().url} className="nav-auth__login">
                Log in
            </Link> 
        </div>
    );
}
