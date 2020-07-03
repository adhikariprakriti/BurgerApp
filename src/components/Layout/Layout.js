import React,{Component}from 'react';
import Aux from '../../hoc/Auxilliary';
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{


    state={
        show: false
    }


   sideDrawerClosedHandler=()=>{
       this.setState({show: false})
   }

    toggleHandler=()=>{
        this.setState((prevState)=>{
            return {show: !prevState.show} 
        })
    }

    render(){
    return(
        <Aux >
        <Toolbar clicked={this.toggleHandler}/>
        <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.show}/> 
        <main className={classes.content}>
            {this.props.children}
        </main>
        </Aux>
    );
    }
}

export default Layout;