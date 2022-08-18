import React ,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchMerchantProducts } from './../../features/products/productSlice';

const MerchantDefaultPage = () => {

  let currentUser = useSelector((state) => state.user.currentUser);
  let dispatch = useDispatch();

  useEffect(() => {
    if (currentUser !== null && currentUser.role?.includes("MERCHANT")) {
      dispatch(fetchMerchantProducts(currentUser.userId));
    }
  }, [currentUser.userId]);

  return (
    <div><h1> Hello Merchant </h1></div>
  )
}

export default MerchantDefaultPage