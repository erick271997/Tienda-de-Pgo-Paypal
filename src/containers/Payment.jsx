import React from 'react';
import '../styles/components/Payment.css';

const Payment = () => {
  return (
   <div className='Payment'>
     <div className="Paymet-content">
       <h3>Resumet del pedido</h3>
       <div className="Payment-button">
         Boton de pago con Paypal
       </div>
     </div>
     <div/>
   </div>

  );
}

export default Payment;