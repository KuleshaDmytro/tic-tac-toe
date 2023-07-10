import { EMPTY, X, O } from '../state/cellstate';
import './../style/game.css'

const cellStateMap = {
  [EMPTY] : '',
  [X]: 'X',
  [O]: 'O',

}

const Cell = ({handleClick, value, x, y}) => {
  return <button className="cell"  onClick={() => handleClick(x, y)}>{cellStateMap[value]}</button>
}


export const Game = ({matrix, onFire}) => {
  return (
    <><h3 className='battlefield-text'>Buttlefield</h3>
      <div className='field '> 
        <div className='buttlefield'>
        {matrix.map((line, lineNum) => (
          <div key={lineNum} className='line'>
              {line.map((v, i) => (
              <Cell 
              key={`${lineNum}${i}`} 
              value={v} 
              y={lineNum} 
              x={i}
              handleClick={onFire}
              />
              ))}
          </div>
          ))}
        </div>
      </div>
    </>
    );
  }