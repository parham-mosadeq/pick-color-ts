import { FaveColors } from '../types/commonTypes';
import './fave.css';
const faves: FaveColors = JSON.parse(localStorage.getItem('faves'));
export default function Favorite() {
  return (
    <div className='fave-container'>
      <div>
        <h1>Favorites</h1>
      </div>
      <ul>
        {faves.map((item) => {
          return (
            <li key={item.id}>
              <div
                style={{
                  backgroundColor: item.colorCode,
                }}
              >
                {item.colorCode}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
