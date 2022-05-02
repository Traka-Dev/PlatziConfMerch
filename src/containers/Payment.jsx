import React, { useContext } from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import { AppContext } from '../context/AppContext'
import { handleSumTotal } from '../utils/handleSumTotal'
import '../styles/componets/Payment.css'

const Payment = ({ navigate }) => {

    const { state, addNewOrder } = useContext(AppContext)
    const { cart, buyer } = state
    const paypalOptions = {
        clientId: 'sb-xe56u2647068@personal.example.com',
        intent: 'capture',
        currency: 'USD',
    }

    const buttonStyle = {
        layout: 'vertical',
        shape: 'rect',
    }

    const handlePaymentSuccess = data => {
        console.dir(data)
        if (data.status === 'COMPLETED') {
            // Create new Order
            const newOrder = {
                buyet,
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
                        onPaymentStart={() => console.log('Payment Start')}
                        onPaymentSuccess={data => handlePaymentSuccess(data)}
                        onPaymentError={error => console.log(error)}
                        onPaymentCancel={data => console.log(data)}
                    />
                </div>
            </div>
            <div />
        </div>
    )
}

export default Payment