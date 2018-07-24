import { shallowMount } from '@vue/test-utils'
import cookieClicker from '@/components/clickCookie.vue'

describe('clickCookie.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message';
        const wrapper = shallowMount(cookieClicker, {
            propsData: { msg }
        });
        expect(wrapper.text()).toMatch(msg)
    })
});
