import React, { Component } from 'react'
import Child from './Child'


export default class LifeCycle extends Component {
    constructor(){
        super()
        this.state={
            couter:0
        }

    }
    componentDidMount(){
        console.log('componentDidMount')
        this.dirty =setInterval(()=>{
            console.log('dirty')
        },1000)
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
        clearInterval(this.dirty)
    }
    render() {
        console.log('render')
        const {couter}=this.state
        return (
             <React.Fragment>

            <div>
                Life Cycle {couter}
            </div>
            <button onClick={()=>{this.setState({couter: couter + 1})}}>nhut</button>
            <Child/>
             </React.Fragment>
        )
    }
}
