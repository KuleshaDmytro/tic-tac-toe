import { Cell, Game } from './Game';
import { 
    render, 
    fireEvent,
     } from '@testing-library/react';

describe('Game', () => {
    it('Click on cell first time', () => {
        const handleClick = jest.fn();
        const { getByText } = render(<Cell value='1' x={0} y={0} handleClick={handleClick} />);
        const cellElement = getByText('X');
        expect(cellElement).toBeInTheDocument();
    })

    it('Click on cell second time', () => {
        const handleClick = jest.fn();
        const { getByText } = render(<Cell value='2' x={0} y={1} handleClick={handleClick} />);
        const cellElement = getByText('O');
        expect(cellElement).toBeInTheDocument();
    })

    it('renders without crashing', () => {
        const matrix = [[null]];
        const onFire = jest.fn();
        const { getByText } = render(<Game matrix={matrix} onFire={onFire} />);
        const battlefieldText = getByText('Buttlefield');
        expect(battlefieldText).toBeInTheDocument();
    });

    it('renders cells based on matrix', () => {
        const matrix = [['1', '2'], ['2', '1']];
        const onFire = jest.fn();
        const { getByText } = render(<Game matrix={matrix} onFire={onFire} />);
        
        expect(getByText('X', { selector: '.cell' })).toBeInTheDocument();
        expect(getByText('O', { selector: '.cell' })).toBeInTheDocument();
    });

    it('calls onFire function when cell is clicked', () => {
        const matrix = [['1']];
        const onFire = jest.fn();
        const { getByText } = render(<Game matrix={matrix} onFire={onFire} />);
        const cellElement = getByText('X');
        fireEvent.click(cellElement);
        expect(onFire).toHaveBeenCalledWith(0, 0);
      });


})