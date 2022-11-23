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
    const inviteBtn = screen.getByRole('button', { name: 'Invite a user' });
    console.debug(inviteBtn);
    // screen.debug();
  });
  // test('')
});
