import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
    // calcTotal(){
    //     // const {card} = this.props
    //     return this.props.card.reduce((total, item)=>total+=item.quantity, 0)

    // }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">The coffee house</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/binding">Binding</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/component">Components</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/props">Props</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/state">State</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/stype">Style</Link>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link active" to="/lifecycle">lifecycle</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" to="/axios">Axios</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/user/login">Login</Link>
                            </li>




                        </ul>
                        <button type="button" className="btn btn-outline-warning position-relative">
                            Giỏ hang
                            <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
                                {/* {this.calcTotal()} */}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </button>


                    </div>
                </div>
            </nav>

        )


    }
}