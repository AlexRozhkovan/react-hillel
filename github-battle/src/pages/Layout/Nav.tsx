import {FC, ReactElement} from 'react';
import {NavLink} from 'react-router-dom';

const navLinks: string[] = ['Home', 'Popular', 'Battle'];

const Nav: FC = (): ReactElement => (
    <ul className="nav">
        {navLinks.map(
            (navLink: string, index: number): ReactElement => (
                <li key={index}>
                    <NavLink to={navLink === 'Home' ? '' : navLink.toLowerCase()}>
                        {navLink}
                    </NavLink>
                </li>
            )
        )}
    </ul>
);

export default Nav;
