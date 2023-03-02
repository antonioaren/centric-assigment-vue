import { shallowMount } from '@vue/test-utils'
import DetailsVue from '@/components/Details.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(DetailsVue, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
