import React from 'react'
import black from 'assets/images/iphone-12-black.jpeg'
import blue from 'assets/images/iphone-12-blue.jpeg'
import green from 'assets/images/iphone-12-green.jpeg'
import purple from 'assets/images/iphone-12-purple.jpeg'
import red from 'assets/images/iphone-12-red.jpeg'
import white from 'assets/images/iphone-12-white.jpeg'

const colorArr = [
    { id: 1, img: blue, hex: '#073658' },
    { id: 2, img: black, hex: '#201F25' },
    { id: 3, img: white, hex: '#F9F8F6' },
    { id: 4, img: green, hex: '#E6FADF' },
    { id: 5, img: red, hex: '#E33939' },
    { id: 6, img: purple, hex: '#BDB4EA' },
  ]


export default class State extends React.Component {
    state = {
        colorPicker:blue
    }
    onColorPickerChange(colorPicker){
        this.setState({colorPicker})
    }

    
    

    renderColorPicker(){
    return colorArr.map(radioColor => ( 
           
            <div key={radioColor.id} className='d-inline-block me-2'>
            <input className='d-none' type="radio" name="colorPicker" id={radioColor.id} onChange={()=> {this.onColorPickerChange(radioColor.img) }}/>
            <label htmlFor={radioColor.id}>
                <div style={{backgroundColor: radioColor.hex, width: 60, height:60, cursor:'pointer'}}/>
               
            </label>
        </div>

        ))

    }


    render() {

        return (
            <div>
                <h1 className='text-center'>demo stae</h1>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <img className='img-fluid' src={this.state.colorPicker}  alt='iPhone-12' />
                        </div>
                        <div className='col-6'>
                            <div style={{padding:'60px 0'}}>
                              
                                {this.renderColorPicker()}
                            </div>
                           


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}