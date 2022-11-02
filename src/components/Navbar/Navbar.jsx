
import React from 'react';
import './Navbar.css';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <Nav navbarScroll>
      <div className='n-wrapper'>
        <div className='n-name'>Home</div>
            <ul style={{ listStyleType: 'none' }}>
              <li>
                <a>Destino</a>
              </li>
              <li>
                <Link
                  to='aboutMe-section'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Promoções
                </Link>
              </li>
              <li>
                <Link
                  to='experience-section'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
    </Nav>
  );
};

export default Navbar;