import React from 'react';
import './Header.scss'

import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <div className="header-inner">
                <Link className='logo' to='/'>TICKET.</Link>
                <nav>
                    <ul>
                        <li><Link className="route" to='/new'>new ticket</Link></li>
                        <li><Link className="route" to='/view'>view tickets</Link></li>
                        <li className="btn"><a href='/'>sign out</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;