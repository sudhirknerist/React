import react, { Component } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import ProductComponent from './ProductComponent';
import CartComponent from './CartComponent';
//const Products = React.lazy(() => import('./Components/Reducer/ProductComponent'))
//const carts = React.lazy(() => import('./Components/Reducer/CartComponent'))
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

const store = createStore(reducer);

class RedeucerRoutingComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: true
        }
    }

    render() {
        return (
            <>
                <BrowserRouter>
                    <Provider store={store}>
                        <div >
                            <div> <Link to="/">products</Link></div>
                            <div><Link to="/carts">Cart</Link></div>
                            {/* <div><NavLink activeClassName="testClass" to="/Project1">Project1</NavLink></div> */}
                        </div>
                        <Routes>
                            {/* localhost:3000 */}
                            <Route exact path="/" >
                                <ProductComponent></ProductComponent>
                            </Route>
                            <Route path="/products" >
                                <ProductComponent></ProductComponent>
                            </Route>
                            <Route path="/carts" >
                                <CartComponent></CartComponent>
                            </Route>
                        </Routes>
                    </Provider>
                </BrowserRouter>
            </>
        )
    }
}


export default RedeucerRoutingComponent;





