import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const IngredientTitle=[
    {label:'Cheese' ,type:'cheese'},
    {label:'Bacon' ,type:'bacon'},
    {label:'Salad' ,type:'salad'},
    {label:'Meat' ,type:'meat'}
];

const BuildControls=(props)=>{
    return(
        <div className={classes.BuildControls} label={IngredientTitle.label}>
            <p>Price: <strong>{props.price.toFixed(2)}</strong></p>
            
             {
                 IngredientTitle.map(el=>{
                    return  <BuildControl 
                              label={el.label} 
                              key={el.label}
                              added={()=>props.ingredientAdded(el.type)}
                              delete={()=>props.ingredientDelete(el.type)}
                              disabled={props.disabled[el.type]}/>
                 })
             }

             <button className={classes.OrderButton}
                    disabled={!props.purchasable}
                    onClick={props.clicked}>ORDER NOW</button>
        </div>
    );
}

export default BuildControls;