import React from 'react'

export default class Product extends React.Component{
    render(){
        const query = new URLSearchParams(this.props.location.search)
        console.log("🚀 ~ file: ProductDetail.js ~ line 6 ~ ProductDetail ~ render ~ query", query.get('productName'))
        return(
            <div>
                Product {this.props.match.params.id}
                {new URLSearchParams(this.props.location.search).get('productName')}
            </div>
        )
    }
}