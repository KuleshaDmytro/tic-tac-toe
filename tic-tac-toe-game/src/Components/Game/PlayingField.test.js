import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 

import {PlayingField} from './PlayingField';

describe('Modal', () => {

    it('Game component has been rendered', async () => {
      const {getByText} = render(<PlayingField/>);
        
      expect(getByText(/Buttlefield/i)).toBeInTheDocument();
    })

    it('StartAgain component has been rendered', async () => {
      const {getByText} = render(<PlayingField/>);
        
      expect(getByText(/Почати заново/i)).toBeInTheDocument();
    })

    it('Rules component has been rendered', async () => {
      const {getByTestId} = render(<PlayingField/>);
        
      expect(getByTestId('how_to_play')).toBeInTheDocument();
    })
});
