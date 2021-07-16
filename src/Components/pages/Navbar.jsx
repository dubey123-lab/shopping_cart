import React, { useContext } from "react";
import "../Css/navbar.css";
import {

    NavLink, useHistory,
} from "react-router-dom";
import { connect } from "react-redux";
import LoginContext from "../../Context/Login"




const Navbar = (props) => {
    const history = useHistory();
    const context = useContext(LoginContext);

    const logout = () => {
        context.setUserData(null);
        localStorage.setItem('uservalue', null);
        history.push('/');
    }

    console.log(" navbar context", context);


    return (
        <div>
            <div className="nav-div">
                <div className="name-div">
                    <p>My Shopping Cart</p>
                </div>

                <div className="add_product_div">
                    <ul className="right-list" >
                        <li>
                            {" "}
                            <NavLink exact to="/add_product">
                                Add Product
                            </NavLink>
                        </li>

                        <li>
                            <i className="fa fa-shopping-cart my_cart" aria-hidden="true"><span>{props.productData.cartReducer.cart.length}</span></i>
                        </li>

                        <li>
                            <p onClick={logout}>
                                logout
                            </p>
                        </li>
                    </ul>

                    {/* <Router>
                        <div>
                            <Link to="/home/add_product">
                                Add Product
                            </Link>
                        </div>

                        <div>
                            <Switch>
                                <Route path="/home/add_product">
                                    <AddProductComponent />
                                </Route>
                            </Switch>
                        </div>
                    </Router> */}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    productData: state,
});

const mapDispatchToProps = (dispatch) => {


};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
