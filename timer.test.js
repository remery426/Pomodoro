import React from 'react'
import {shallow, mount} from 'enzyme'
import Timer from './src/components/Timer'

describe("Testing timer component", ()=>{
  it('Testing that 25:00 minutes displays when component mounts',()=>{
    const wrapper = shallow(<Timer/>)
    const text = wrapper.find('h1').text()

  })
  it("testing that start button onClick function runs and changes button",()=>{
    const wrapper = mount(<Timer />)
    const startButton = wrapper.find('Button')
    startButton .simulate('click')
    const text = startButton.find('a').text()
    expect(text).toEqual("Pause")
  })
  it("testing timer decrimenting by sec",()=>{
    jest.useFakeTimers();
    const wrapper = mount(<Timer />)
    const startButton = wrapper.find('Button')
    startButton .simulate('click')
    jest.runTimersToTime(1000)
    const text = wrapper.find('h1').text()
    expect(text).toEqual('24:59')

  })
  it("testing pause funcitonality",()=>{
    jest.useFakeTimers();
    const wrapper = mount(<Timer />)
    const startButton = wrapper.find('Button')
    startButton .simulate('click')
    //add 2 seconds
    jest.runTimersToTime(2*1000 )
    //simulate pause
    startButton .simulate('click')
    //wait another to seconds while pause
    jest.runTimersToTime(2*1000 )
    const text = wrapper.find('h1').text()
    expect(text).toEqual('24:58')
  })
  it("testing timer handles end of first work block",()=>{
    jest.useFakeTimers();
    const wrapper = mount(<Timer />)
    const startButton = wrapper.find('Button')
    startButton .simulate('click')
    // simulate runnning for 26 minutes
    jest.runTimersToTime(26 * 60  *1000 )
    const text = wrapper.find('h1').text()
    expect(text).toEqual('03:00')
  })
  it("message changes on breaks",()=>{

    const wrapper = mount(<Timer />)
    const startButton = wrapper.find('Button')
    startButton .simulate('click')
    // simulate runnning for 26 minutes
    jest.runTimersToTime(26 * 60  *1000 )
    const text = wrapper.find('h2').text()
    expect(text).toEqual('Take a break')
  })
  it("testing that there is a long break after 4 rounds of work",()=>{
    jest.useFakeTimers();
    const wrapper = mount(<Timer />)
    const startButton = wrapper.find('Button')
    startButton .simulate('click')
    //simulates 3 additional work + break sessions
    for(var i= 0; i < 7; i++){

      jest.runTimersToTime(26 * 60  *1000 )
      startButton .simulate('click')
    }
    const text = wrapper.find('h1').text()
    expect(text).toEqual('15:00')
  })

})
