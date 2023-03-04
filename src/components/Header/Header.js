import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard, faUser } from '@fortawesome/free-regular-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import css from './Header.module.scss';

function Header() {
  return (
    <header className={css.Container}>
      <div className={css.Wrapper}>
        <div className={css.Column}>
          <FontAwesomeIcon size="2x" icon={faAddressCard} />
        </div>

        <div className={css.Column}>
          <div className={css.Nav}>
            <span className={css.Icon}>
              <Link to={'/editingPage'}>
                <FontAwesomeIcon
                  size="lg"
                  icon={faUser}
                  style={{ color: 'black' }}
                />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
