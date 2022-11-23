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
    // render(<GoogleLogin />);
    const test = jest.fn();
    const button = screen.getByRole('button', { pressed: false });
    // button.props.onClick = test;
    await userEvent.click(button);
    expect(button.pressed).toBe(true);
    screen.debug();
  });
});

// test('A', async () => {
//   //setup
//   const user = userEvent.setup();

//   const sensing = jest.fn();
//   const subject = (<button onClick={sensing}>testButton</button>);

//   render(subject);

//   // run
//   await user.click(screen.getByText('testButton'));

//   // check
//   expect(sensing).toBeCalledTimes(1);
// });
