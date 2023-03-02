import { shallowMount } from '@vue/test-utils'
import { Master } from '../Master';

describe('Master.vue Test', () => {
    it('renders message when component is created', () => {
        // render the component
        const wrapper = shallowMount(Master)

        // check that the title is rendered
        expect(wrapper.text()).toMatch('Pokemones')
    })
})