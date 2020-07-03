import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.module.css';
let length=0;

const Burger=(props)=>{

   let transformedIngredient=Object.keys(props.type).map(igkey=>{
        return [...Array(props.type[igkey])].map((_,i)=>{
           return <BurgerIngredients key={igkey+i} type={igkey}/>
        });
   });
   //let length=0;
     for(let i=0;i<transformedIngredient.length;i++){
               length=length+transformedIngredient[i].length;
      }

      
      if(length===0){
          transformedIngredient=<p>Please start adding ingredients!</p>
      }

    return(
    <div className={classes.Burger}>
    <BurgerIngredients type="bread-top"/>
    {transformedIngredient}
    <BurgerIngredients type="bread-bottom"/>
    </div>
    );  
}

export default Burger;