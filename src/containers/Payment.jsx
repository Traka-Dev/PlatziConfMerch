import React, { useContext } from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import { AppContext } from '../context/AppContext'
import { handleSumTotal } from '../utils/handleSumTotal'
import config from '../config'
import '../styles/componets/Payment.css'

const Payment = ({ navigate }) => {

    const { state, addNewOrder } = useContext(AppContext)
    const { cart, buyer } = state
    const paypalOptions = {
        clientId: config.clientIdPaypal,
        intent: 'capture',
        currency: 'USD',
    }

    const buttonStyle = {
        layout: 'vertical',
        shape: 'rect',
    }

    const handlePaymentSuccess = data => {
        if (data.status === 'COMPLETED') {
            // Create new Order
            const newOrder = {
                buyer,
                products: cart,
                payment: data,
            }
            addNewOrder(newOrder)
            navigate.push('/')
        }
    }


    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumn del pedido:</h3>
                {cart.map(item => (
                    <div className="Payment-item" key={item.title}>
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>$ {item.price}</span>
                        </div>
                    </div>
                ))}
                <div className="Paymenet-button">
                    <PayPalButton
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyle}
                        amount={handleSumTotal(cart)}
                        onSuccess={data => handlePaymentSuccess(data)}
                        onError={error => console.log(error)}
                        onCancel={data => console.log(data)}
                    />
                </div>
            </div>
            <div />
        </div>
    )
}

export default Payment