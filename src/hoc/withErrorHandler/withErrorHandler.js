import React,{Component} from 'react';
import OrderDetails from '../../components/UI/OrderDetails/OrderDetails';
import Aux from '../Auxilliary';
const withErrorHandler=(WrappedComponent,axios)=>{
      return class extends Component{
             
        state={
            error: null
        }

        componentWillMount(){
        axios.interceptors.request.use(req=>{
             this.setState({error: null});
             return req;
        });

        axios.interceptors.response.use(null,error=>{
         this.setState({error: error});
        });
        }
 
        errorConfirmHandler=()=>{
            this.setState({error: null})
        }

        render(){
               return(
                   <Aux>
                       <OrderDetails 
                       show={this.state.error}
                       cancelOrder={this.errorConfirmHandler}>
                           {this.state.error? this.state.error.message : null}
                       </OrderDetails>
                     <WrappedComponent {...this.props}/>
                   </Aux>
               );
        }
           }
    
}

export default withErrorHandler;