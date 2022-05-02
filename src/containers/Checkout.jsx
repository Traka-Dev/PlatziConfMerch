import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import '../styles/componets/Checkout.css'

const Checkout = () => {
    const { state, removeFromCart } = useContext(AppContext)
    const { cart } = state

    const handleRemove = product => () => {
        removeFromCart(product)
    }

    const handleSumTotal = () => {
        const reducer = (acc, current) => acc + current.price
        const sum = cart.reduce(reducer, 0)
        return sum
    }

    return (
        <div className="Checkout">
            <div className="Checkout-content">
                {cart.length > 0 ?
                    <h3>Lista de Pedidos:</h3> :
                    <h3>Sin Pedidos...</h3>
                }
                {cart.map(item =>
                (
                    <div className="Checkout-item" key={item.id}>
                        <div className="Checkout-element">
                            <h4>{item.title} hola</h4>
                            <span>${item.price}</span>
                        </div>
                        <button type='button' onClick={handleRemove(item)}>
                            <i className="fas fa-trash-alt"></i>
                        </button>
                    </div>
                )
                )}
            </div>
            {
                cart.length > 0 && (
                    <div className="Checkout-sidebar">
                        <h3>{`Precio Total: $${handleSumTotal()}`}</h3>
                        <Link to="/Checkout/Information">
                            <button type='button'>Continuar Pedido</button>
                        </Link>
                    </div>
                )
            }
        </div >
    )
}

export default Checkout