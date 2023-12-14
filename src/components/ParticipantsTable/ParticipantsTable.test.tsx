import * as React from 'react';
import { ParticipantsTable }from './';
import { render } from '@testing-library';

describe('Render ParticipantsTable', () => {
  it('Should be ParticipantsTable exist', () => {
    const { getByTestId } = render(<ParticipantsTable />);
    const currentElement = getByTestId(`ParticipantsTable`);
    expect(currentElement).toBeTruthy();
  });
});