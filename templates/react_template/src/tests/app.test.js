import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Home from '../components/home';
import About from "../components/about";
import Contact from "../components/contact";
import Profile from "../components/profile";
import NotFound from "../components/not_found";

test('renders home page', () => {
    render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    );
    let linkElement = screen.getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders about page', () => {
    render(
        <MemoryRouter>
            <About />
        </MemoryRouter>
    );
    let linkElement = screen.getByText(/About/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders contact page', () => {
    render(
        <MemoryRouter>
            <Contact />
        </MemoryRouter>
    );
    let linkElement = screen.getByText(/Contact/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders profile page', () => {
    render(
        <MemoryRouter>
            <Profile />
        </MemoryRouter>
    );
    let linkElement = screen.getByText(/Profile/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders not found page', () => {
    render(
        <MemoryRouter>
            <NotFound />
        </MemoryRouter>
    );
    let linkElement = screen.getByText(/The link you followed may have been broken, or the page may have been removed./i);
    expect(linkElement).toBeInTheDocument();
});