import React from 'react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime';

import App from '../client/App';

describe('Unit testing React components', () => {
  it('wow', () => {
    expect('test').toBe('test')
  });
});