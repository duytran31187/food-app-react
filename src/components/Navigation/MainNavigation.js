import { NavLink } from 'react-router-dom';

import classes from './MainNagivation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
            >Home</NavLink>
          </li>
          <li>
            <NavLink to="/foods"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            >Foods order</NavLink>
          </li>
          <li>
            <NavLink to="/products"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            >Products</NavLink>
          </li>
          <li>
            <NavLink to="/events"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            >Events</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;