import React from 'react';
import './Header.scss'

const Header: React.FC = () => {
    return (
        <header>
            <div className="header-inner">
                <div className='logo'>TICKET.</div>
                <nav>
                    <ul>
                        <li><a className="route" href='/'>new ticket</a></li>
                        <li><a className="route" href='/'>view tickets</a></li>
                        <li className="btn"><a href='/'>sign out</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;