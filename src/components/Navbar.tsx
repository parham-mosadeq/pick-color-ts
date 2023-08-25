import { NavItems } from '../types/commonTypes';
import './nav.css';
import { Link } from 'react-router-dom';

const navItems: NavItems = ['home', 'faves', 'recent'];
export default function Navbar(): JSX.Element {
  return (
    <nav>
      <ul>
        {navItems.map((item: string): JSX.Element => {
          console.log(item);
          return (
            <li key={item}>
              <Link to={item}>{item}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
