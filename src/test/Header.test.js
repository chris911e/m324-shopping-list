import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../app/components/Header';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe('Header', () => {
    it('renders the logo and navigation links', () => {
        render(
            <MemoryRouterProvider>
                <Header />
            </MemoryRouterProvider>
        );

        // Check for the logo link
        const logoLink = screen.getByRole('link', { name: /einkaufsliste app/i });
        expect(logoLink).toBeInTheDocument();
        expect(logoLink).toHaveAttribute('href', '/');

        // Check for each navigation link
        const registerLink = screen.getByRole('link', { name: /neue liste erstellen/i });
        expect(registerLink).toBeInTheDocument();
        expect(registerLink).toHaveAttribute('href', '/register');

        const joinLink = screen.getByRole('link', { name: /liste beitreten/i });
        expect(joinLink).toBeInTheDocument();
        expect(joinLink).toHaveAttribute('href', '/join');

        const viewListLink = screen.getByRole('link', { name: /einkaufsliste anzeigen/i });
        expect(viewListLink).toBeInTheDocument();
        expect(viewListLink).toHaveAttribute('href', '/list');
    });
});