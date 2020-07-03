import React from 'react';
import Aux from '../../../hoc/Auxilliary';
import Button from '../../UI/Button/Button';
const OrderSummary=(props)=>{

      let list=Object.keys(props.ingredients).map(igkey=>{
          return <li key={igkey}>{igkey}:{props.ingredients[igkey]}</li>
      });


    return(
         <Aux>
             <h3>Your Order</h3>
             <p>Here is your Delecious Burger with following ingredients</p>
             <ul>
                 {list}
             </ul>
           <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
             <p>Continue to CheckOut?</p>
              <Button clicked={props.cancelOrder} btntype='Danger'>CANCEL</Button>
              <Button clicked={props.continueOrder} btntype="Success">CONTINUE</Button>
         </Aux>
    );
}
export default OrderSummary;