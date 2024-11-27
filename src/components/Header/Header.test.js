import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Header Component', () => {

    test('renders a link to the home page', () => {
        render(
            <Router>
                <Header onSearch={() => {}} />
            </Router>
        );

        const linkElement = screen.getByRole('link', { name: /Reddit/i });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', '/');
    });

    test('renders SearchBar component', () => {
        render(
            <Router>
                <Header onSearch={() => {}} />
            </Router>
        );

        const searchBar = screen.getByTestId('search-bar');
        expect(searchBar).toBeInTheDocument();
    });

    test('calls onSearch when SearchBar triggers search', () => {
        const mockOnSearch = jest.fn();
        render(
            <Router>
                <Header onSearch={mockOnSearch} />
            </Router>
        );

        const inputElement = screen.getByRole('textbox');

        fireEvent.change(inputElement, { target: { value: 'test search' } });
        fireEvent.submit(inputElement);

        expect(mockOnSearch).toHaveBeenCalledTimes(1);
        expect(mockOnSearch).toHaveBeenCalledWith('test search');
    });

});