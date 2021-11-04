import React from 'react'
import Child from './Child'


export default class Props extends React.Component{
    render (){
        return(
            <div>
                <h1 className='text-center'>Demo Props</h1>
                <Child id={3116500033} name='nhut'/>
            </div>
        )
    }
}