import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Feed from './Feed';
import Post from '../Post/Post';

jest.mock('../Post/Post', () => ({ post }) => (
    <div data-testid="mock-post">{post.title}</div>
));

describe('Feed Component', () => {

    test('renders "No posts available" if posts array is empty', () => {
        render(<Feed posts={[]} />);
        expect(screen.getByText(/No posts available/i)).toBeInTheDocument();
    });

    test('renders a mock list of Post components when posts array is not empty', () => {
        const mockPosts = [
            { id: 1, title: 'Post 1', content: 'Content 1' },
            { id: 2, title: 'Post 2', content: 'Content 2' },
        ];

        render(<Feed posts={mockPosts} />);

        const postElements = screen.getAllByTestId('mock-post');
        expect(postElements).toHaveLength(mockPosts.length);

        expect(postElements[0]).toHaveTextContent('Post 1');
        expect(postElements[1]).toHaveTextContent('Post 2');
    });
});