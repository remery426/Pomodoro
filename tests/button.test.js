import React from 'react'
import {shallow} from 'enzyme'
import Button from '../src/components/Button'

describe("Testing button component", ()=>{
  it('Displays what is passed',()=>{
    const wrapper = shallow(<Button text="test" />)
    const text = wrapper.find('a').text()
    expect(text).toEqual('test')
  })
})
