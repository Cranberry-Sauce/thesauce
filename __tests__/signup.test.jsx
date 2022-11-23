import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import Signup from '../client/components/Signup';

describe('Unit testing signup page', () => {
  beforeEach(() => {
    const state = {
      firstName: 'jon',
      lastName: 'odie',
    };
    render(
      <BrowserRouter>
        <Signup {...state} />
      </BrowserRouter>
    );
  });

  test('it loads', () => {
    screen.debug();
  });
});
