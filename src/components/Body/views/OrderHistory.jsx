import React, { useEffect, useState, useContext } from 'react';
import { OrderContext } from '../../../contexts/OrderProvider';

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);
    const orderContext = useContext(OrderContext);

    const { getOrders, getOrderStatus } = orderContext;

    useEffect(() => {
        const fetchOrders = async () => {

            let result = await getOrders();

            result = result.map((order) => {
                return {
                    orderId: order.orderId,
                    totalPrice: order.totalPrice,
                    Date: new Date(order.latestCompletedUnix*1000).toLocaleDateString(),
                    orderStatusTypeId: order.orderStatusTypeId,
                    OrderStatus: getOrderStatus(order.orderId)
                };
            });
            setOrders(result);
        };

        fetchOrders();

    }, [getOrders, getOrderStatus]);


    return (
        <div>
            <h1 className='text-2xl'>Order History</h1>
            {orders.map((order) => (
                <div key={order.orderId}>
                    <div className='flex justify-between'>
                        <div className='flex flex-col'>
                            <div className='flex'>
                                <div className='font-bold'>OrderID:</div>
                                <div className='ml-2'>{order.orderId}</div>
                            </div>
                            <div className='flex'>
                                <div className='font-bold'>Date:</div>
                                <div className='ml-2'>{order.Date}</div>
                            </div>
                            <div className='flex'>
                                <div className='font-bold'>Total Price:</div>
                                <div className='ml-2'>{order.totalPrice}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OrderHistory;
