import * as React from 'react';
import { Align }from './';
import { render } from '@testing-library';

describe('Render Align', () => {
  it('Should be Align exist', () => {
    const { getByTestId } = render(<Align />);
    const currentElement = getByTestId(`Align`);
    expect(currentElement).toBeTruthy();
  });
});