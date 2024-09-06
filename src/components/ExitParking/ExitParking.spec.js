import { describe, it, expect, beforeEach } from 'vitest';
import { render } from '@testing-library/vue';
import ExitParking from './ExitParking.vue';
import { setActivePinia, createPinia } from 'pinia';

describe('ExitTicket', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('shoulrender the component', () => {
    const { container } = render(ExitParking);

    expect(container).toMatchSnapshot();
  });
});
