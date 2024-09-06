import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/vue';
import ExitParking from './ExitParking.vue';

describe('ExitTicket', () => {
  it('shoulrender the component', () => {
    const { container } = render(ExitParking);

    expect(container).toMatchSnapshot();
  });
});
