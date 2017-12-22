import Vue from 'vue'
import PageHome from '@/components/PageHome'

describe('PageHome.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(PageHome)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
    .toEqual('Welcome to Your Vue.js App')
  })
})
