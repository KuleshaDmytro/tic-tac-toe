import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 

import {PlayingField} from './PlayingField';

describe('Modal', () => {
    it('Render modal component', async () => {
      render(<PlayingField/>);
        screen.debug()
    })
});
