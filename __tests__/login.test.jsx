import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';

import Page from '../client/index';
import Login from '../client/components/login';
// // import App from '../client/App';

describe('Unit testing login page', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  });

  test('Testing that button renders on login page', () => {
    expect(screen.getByRole('button')).toHaveTextContent('Sign in with Google');
  });

  test('Testing that button gets invoked on click', async () => {
    const test = jest.fn();
    render(
      <BrowserRouter>
        <Login test={test} />
      </BrowserRouter>
    );
    const button = screen.getByRole('button', {
      name: 'Sign in with Google',
    });
    // button.props.onClick = test;
    await userEvent.click(button);
    expect(test).toHaveBeenCalledTimes(1);
  });
});
