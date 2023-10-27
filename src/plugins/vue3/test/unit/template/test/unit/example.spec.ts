import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import Welcome from '@/components/Welcome.vue';

describe('Welcome.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Welcome, {
      props: { msg },
    });

    expect(wrapper.text()).toMatch(msg);
  });
});
