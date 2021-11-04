import React, { Component } from 'react'

export default class Child extends Component {
    shouldComponentUpdate(){
        return false

    }
    render() {
        console.log('render')
        return (
            <div>
                child
            </div>
        )
    }
}
