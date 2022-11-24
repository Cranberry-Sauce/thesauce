import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import UserTable from '../client/components/usertable';

describe('User Table tests', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <UserTable />
      </BrowserRouter>
    );
  });
  test('it renders', () => {
    const editButton = screen.getByRole('button', {
      className: 'mt-4 sm:mt-0 sm:ml-16 sm:flex-none',
    });
    console.debug(editButton);
    // screen.debug();
  });
  // test('')
});
