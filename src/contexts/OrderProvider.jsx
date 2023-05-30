import {createContext} from 'react'
import { getAllOrdersService,getStatusService } from '../components/services/OrderServices';

export const OrderContext = createContext();

export const OrderProvider = (props) => {


  const getOrders = async () => {
    let result = await getAllOrdersService();
    return result;
  };

  const addOrder = async (order) => {

    };

  const getOrderStatus = async (id) => {
    let result = await getStatusService(id);
    return result;

  };


  return (
    <OrderContext.Provider value={{getOrders, addOrder, getOrderStatus}}>
        {props.children}
    </OrderContext.Provider>
  )
}

