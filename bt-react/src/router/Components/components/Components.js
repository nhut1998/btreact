import React from 'react'
import Button from './Button'

export default class Components extends React.Component{
    state={
        couter:0
    }
    render(){
        const {couter}  = this.state
        return(
            <div className='container'>

                <h1 className='text-center'>Demo components</h1>
                <div className='me-2 d-inline-block'>

                {couter}

                </div>
                
                <Button onBtnClick={()=>{this.setState({couter:couter + 1})}}>Thuong</Button>
                
            </div>
        )
    }
}


