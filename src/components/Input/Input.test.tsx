import * as React from 'react';
import { Input }from './';
import { render } from '@testing-library';

describe('Render Input', () => {
  it('Should be Input exist', () => {
    const { getByTestId } = render(<Input />);
    const currentElement = getByTestId(`Input`);
    expect(currentElement).toBeTruthy();
  });
});