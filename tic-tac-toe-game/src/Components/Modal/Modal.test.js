import React from 'react';
import { render, screen, queryByTestId } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal component', () => {

it('Player', () => {
    render(<Modal winner="Player" isOpen={true} />)
    expect(screen.getByTestId('modal_container')).toBeInTheDocument();

    const modalContent = screen.getByText('Player');
    expect(modalContent).toBeInTheDocument();
})

it('should not render the modal component when isOpen prop is false', () => {
    render(<Modal winner="Player" isOpen={false} />)
    const modalContainer = screen.queryByTestId('modal_container');
    expect(modalContainer).not.toBeInTheDocument();
})

it('should hide the body overflow when modal is open and show it again when modal is closed', () => {
    render(<Modal winner="Player" isOpen={true} />);
    expect(document.body.style.overflow).toBe('hidden');

    render(<Modal winner="Player" isOpen={false} />);
    expect(document.body.style.overflow).toBe('auto');
})

});
