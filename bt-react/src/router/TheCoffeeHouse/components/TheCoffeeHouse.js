import React from 'react'

const productsArr = [
  {
    id: 1,
    img: 'https://product.hstatic.net/1000075078/product/ca_phe_hoa_tan_d6746d7099af4805bafb20ac3067c4ea_large.jpg',
    name: 'Cà phê sữa đá',
    price: 1

  },
  {
    id: 2,
    img: 'https://product.hstatic.net/1000075078/product/ca_phe_lon_the_coffee_hous_d0fb16a38de14dafbb3fb52ff91c9e20_large.jpg',
    name: 'combo 4 lon cà phê sữa đá',
    price: 2

  },
  {
    id: 3,
    img: 'https://product.hstatic.net/1000075078/product/ca_phe_goi_the_coffee_house_huong_thom_dinh_cao_peak_flavour_c545070f1d654cc7b3256ae145f184a7_large.jpg',
    name: 'Cà phê sữa đá hương thơm đỉnh',
    price: 5

  },
]

export default class TheCoofeeHouse extends React.Component {
  state = {
    products: productsArr,
    card: []
  }
 
  addjustQuantity(item, direction){
    const cardClone = [...this.state.card]
    console.log(cardClone)
   
    const idxFound= cardClone.findIndex(items => items.id === item)
    if(~idxFound){
      if(direction===-1 && cardClone[idxFound].quantity===1 )return
        
          cardClone[idxFound].quantity += direction
         
      

        
    }
    this.setState({card:cardClone})


  }
 
  onAddToCard(props) {
    
    const cardClone = [...this.state.card] // spread operator
    const idxFound = cardClone.findIndex(item => item.id === props.id) 
    if (~idxFound) {
      cardClone[idxFound].quantity += 1
      cardClone[idxFound].price += props.price
    

    } else { 
      cardClone.push({ ...props, quantity: 1 })
    }
    this.setState({ card: cardClone })

    
  }
  detelFormCart(id){
    // const detelet = this.state.card.filter(item =>{
    //   return item.id !== id

    
    // })
    // this.state({card:detelet   })
    const {card} = this.state
    this.setState({card:card.filter(item=>item.id !== id)})

  }
  gotoProduct(props){
   console.log(this.props.history.push(`${props.id}/product?productName=${props.name}`))
  }
  total(){
   return this.state.card.reduce((total, item)=>total+=(item.price *item.quantity), 0)
  }



  render() {
    const { products, card } = this.state
    return (
      <React.Fragment>
        
        <section className='container my-3'>
          <div className='row'>

            {
              products.map(props => {
                const {id, img, name, price} = props
                return (
                  <div key={id} className='col-4'>
                    <div className="card" >
                      <img src={img} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{price}</p>
                        <a href="#" className="btn btn-primary" onClick={() => this.onAddToCard(props)}>Mua uống liền</a>
                        <a href="#" className="btn btn-info" onClick={() => this.gotoProduct(props)}>Chi tiết</a>
                      </div>
                    </div>

                  </div>

                )
              })
            }
          </div>

          <table className='table'>
            <thead>
              <tr>
                <th>Hình ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th>Cài đặt</th>
              </tr>
            </thead>
            <tbody>
              {
                card.map(item => {
                  const {id, img, name, price, quantity} = item
                  return (
                    <tr key={id}>
                      <td><img with={50} height={60} alt={name} src={img}/></td>
                      <td>{name}</td>
                      <td>{price}</td>
                      <td>
                      {/* {quantity} */}
                        <span onClick={()=>this.addjustQuantity(id,-1)}>-</span>
                        {quantity}
                        <span onClick={()=>this.addjustQuantity(id,+1)}>+</span>
                        </td>
                        <td>{price*quantity}</td>
                        <button type="button" className="btn btn-danger" onClick={()=>this.detelFormCart(id) }>xóa</button>

                    </tr>

                  )
                })
              }
            </tbody>

          </table>
          <div className='display-4'>
            {this.total()}
          </div>
          


        </section>
      </React.Fragment>
    )
  }
}