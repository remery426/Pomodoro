import React from 'react'
import {shallow} from 'enzyme'
import Header from './src/components/Header'

describe("Testing header component", ()=>{
  it('Header component rendering',()=>{
    const wrapper = shallow(<Header />)
    const text = wrapper.find('h1').text()
    expect(text).toEqual('Pomodoro Timer')
  })
})
