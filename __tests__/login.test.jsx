import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import Page from '../client/index';
import Login from '../client/components/login';
import App from '../client/App';

describe('Unit testing login page', () => {
  test('Testing that button renders on login page', () => {
    // render(<Page />);
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(getByRole('button')).toHaveTextContent('Sign in with Google');
  });
});
