
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 

import {AboutUs} from './AboutUs';

describe('AboutUs', () => {

    it('Сhecking if the component WelcomeTo has been rendered ', () => {
        const { getByText } = render(<AboutUs/>);
        const welcomeToTitle = getByText(/welcome to two\(uah\)/i);
        expect(welcomeToTitle).toBeInTheDocument();
    });

    it('Сhecking if the component AboutCompany has been rendered ', () => {
        const { getByText } = render(<AboutUs/>);
        const aboutCompanyTitle = getByText(/about company/i);
        expect(aboutCompanyTitle).toBeInTheDocument();
    });

    it('Сhecking if the component OurMission has been rendered ', () => {
        const { getByText } = render(<AboutUs/>);
        const ourMissionTitle = getByText(/our mission!/i);
        expect(ourMissionTitle).toBeInTheDocument();
    });

    it('Сhecking if the component OurExpirience has been rendered ', () => {
        const { getByText } = render(<AboutUs/>);
        const ourExpirienceTitle = getByText(/our expirience/i);
        expect(ourExpirienceTitle).toBeInTheDocument();
    });
    
});