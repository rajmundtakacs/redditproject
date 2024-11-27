import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Post from './Post';

describe('Post Component', () => {

    test('renders post title', () => {
        const mockPost = { 
            title: 'Test Title',
            url: '', 
            id: 1, 
            selftext: '' };

        render(
            <Router>
                <Post post={mockPost} />
            </Router>
        );

        expect(screen.getByText(/Test Title/i)).toBeInTheDocument();
    });

    test('renders selftext if provided', () => {
        const mockPost = {
            title: 'Test Title',
            url: '',
            id: 1,
            selftext: 'This is a test selftext',
        };

        render(
            <Router>
                <Post post={mockPost} />
            </Router>
        );

        expect(screen.getByText(/This is a test selftext/i)).toBeInTheDocument();
 
    });

    test('does not render selftext if not provided', () => {
        const mockPost = { 
            title: 'Test Title', 
            url: '', 
            id: 1, 
            selftext: '' 
        };

        render(
            <Router>
                <Post post={mockPost} />
            </Router>
        );

        const selftextElement = screen.queryByText(/This is a test selftext/i);
        expect(selftextElement).not.toBeInTheDocument();
    });

    test('renders an image if the URL points to an image file', () => {
        const mockPost = {
            title: 'Image Post',
            url: 'https://example.com/image.jpg',
            id: 1,
            selftext: '',
        };

        render(
            <Router>
                <Post post={mockPost} />
            </Router>
        );

        const imageElement = screen.getByRole('img', { name: /Image Post/i });
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('src', 'https://example.com/image.jpg');
    });

    test('does not render an image if the URL is not an image', () => {
        const mockPost = {
            title: 'Non-Image Post',
            url: 'https://example.com/page',
            id: 1,
            selftext: '',
        };

        render(
            <Router>
                <Post post={mockPost} />
            </Router>
        );

        const imageElement = screen.queryByRole('img');
        expect(imageElement).not.toBeInTheDocument();
    });

    test('renders a link to the details page', () => {
        const mockPost = { 
            title: 'Test Title', 
            url: '', 
            id: 123, 
            selftext: '' 
        };

        render(
            <Router>
                <Post post={mockPost} />
            </Router>
        );

        const linkElement = screen.getByRole('link', { name: /View details/i});
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', '/posts/123');
    });
});