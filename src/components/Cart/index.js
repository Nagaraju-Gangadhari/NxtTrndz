import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart
      const clicktoRemoveAll = () => {
        removeAllCartItems()
      }
      let sumAmount = 0
      let orderTotal = cartList.map(
        eachProduct =>
          {(sumAmount += parseInt(eachProduct.price * eachProduct.quantity))}
      )
      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button className="button" type="button" data-testid="remove" onClick={clicktoRemoveAll}>
                  Remove All
                </button>
                <CartListView />
                <div>
                  <h1 className="heading">Order Total: {sumAmount}</h1>
                  <p className="para">{cartList.length} Items in cart</p>
                  <button className="button" type="button" data-testid="checkout">Checkout</button>
                </div>
                {/* TODO: Add your code for Cart Summary here */}
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
