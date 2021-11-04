import React from 'react'
const arr =['a', 'b', 'c']

export default class Binding extends React.Component{
    content = 'content data'
    render (){
        const title = 'React Binding-data'
        return (
            <div>
                {title}
                <div>{this.content}</div>
                {arr}
            </div>
        )
    }

}