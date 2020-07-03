import React,{Component} from 'react';
import Aux from '../../hoc/Auxilliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderDetails from '../../components/UI/OrderDetails/OrderDetails';
//import Modal from '../../containers/BurgerBuilder/BurgerBuilder';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    bacon: 0.7,
    meat: 1.3 
}

class BurgerBuilder extends Component{

    constructor(props){
        super(props);
        this.state={
                ingredients:null,
            totalPrice: 4,
            purchaseable: false,
            puurchasing: false,
            loading: false,
            error: null
        }
    }


    componentDidMount(){
        axios.get('https://react-burgerapp-9fac3.firebaseio.com/ingredients.json')
        .then(response=>{
              this.setState({ingredients: response.data});
        })
        .catch(error=>{this.setState({error: true})});
    }


  updatePurchaseState(ingredients){
      //const ingredients={...this.state.ingredients};
      const sum=Object.keys(ingredients).map(igKey=>{
          return ingredients[igKey];
      })
      .reduce((sum,el)=>{
          return sum + el;
      },0);
      this.setState({purchaseable: sum>0});
  }



   addIngredientHandler=(type)=>{
       const oldCount=this.state.ingredients[type];
       const updatedCount=oldCount+1;
       const updatedIngredients={...this.state.ingredients};
       updatedIngredients[type]=updatedCount;

       const oldPrice=this.state.totalPrice;
       const newPrice=oldPrice+INGREDIENT_PRICES[type];
       this.setState({
           ingredients:updatedIngredients,
           totalPrice:newPrice
       });
       this.updatePurchaseState(updatedIngredients);

   }


   deleteIngredientHandler=(type)=>{
       
    const oldCount=this.state.ingredients[type];

    if(oldCount<=0){
        return;
    }
    const updatedCount=oldCount-1;
    const updatedIngredients={...this.state.ingredients};
    updatedIngredients[type]=updatedCount;

    const oldPrice=this.state.totalPrice;
    const newPrice=oldPrice-INGREDIENT_PRICES[type];
    this.setState({
        ingredients:updatedIngredients,
        totalPrice:newPrice
    });
    this.updatePurchaseState(updatedIngredients);
   }


   purchasing=()=>{
       this.setState({purchasing : true})
   }



    cancelOrderHandler=()=>{
        this.setState({purchasing : false})

    }

    continueOrderHandler=()=>{
        //alert("continue"); 
        this.setState({loading: true})
         const order={
             ingredients: this.state.ingredients,
             price: this.state.totalPrice,
             customer: {
                 name: 'prakriti',
                 address:{
                     street: 'teststreet1',
                     ZipCode: '43251',
                     country: 'Germany'
                 },
                 email: 'test@test.com'
             },
            deliveryMethod: 'fastest' 
         }      
        axios.post('/orders.json',order)
        .then(response=>this.setState({loading: false}))
        .catch(error=>console.log(error));
    }


    render(){
       const disabledInfo={...this.state.ingredients};
       for(let key in disabledInfo){
           disabledInfo[key]= disabledInfo[key]<=0;
       }

        let orderSummary=null;
       
       let burger=this.state.error? <p>Ingredients cannot be loaded</p>:<Spinner/>;
       if(this.state.ingredients){
           burger=(
               <Aux>
                   <Burger type={this.state.ingredients}/>
                   <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientDelete={this.deleteIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchaseable}
                    clicked={this.purchasing}/>
               </Aux>
           );

           orderSummary=<OrderSummary  ingredients={this.state.ingredients}
        cancelOrder={this.cancelOrderHandler}   
      continueOrder={this.continueOrderHandler}
      price={this.state.totalPrice}/>;

       }
       if(this.state.loading){
        orderSummary= <Spinner />
       }  
 


        return(
            <Aux>
                <OrderDetails show={this.state.purchasing} cancelOrder={this.cancelOrderHandler}> 
                  {orderSummary}
                  
                            </OrderDetails>
             { /* <Modal >
                   { /*   <OrderSummary  ingredients={this.state.ingredients}/>
                </Modal>*/}
                
                {burger} 
               </Aux>
        );
        }
    }


export default withErrorHandler(BurgerBuilder,axios); 