import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';

import VerificationCode from '../client/components/VerificationCode';
import UserTable from '../client/components/usertable';

test('test verification code', async () => {
  render(<UserTable />);
  render(<VerificationCode show={false} />);
  screen.debug();
  // const button = screen.getByTestId(5);
  // await userEvent.click(button);
  // expect(props.show).toBe(true);
});
