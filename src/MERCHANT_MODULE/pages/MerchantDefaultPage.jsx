import React ,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchMerchantProducts } from './../../features/products/productSlice';
import { Typography } from '@material-ui/core';
const MerchantDefaultPage = () => {

  let currentUser = useSelector((state) => state.user.currentUser);
  let dispatch = useDispatch();

  useEffect(() => {
    if (currentUser !== null && currentUser.role?.includes("MERCHANT")) {
      dispatch(fetchMerchantProducts(currentUser.userId));
    }
  }, [currentUser.userId]);

  return (
    <div><Typography variant='h2' align='center'  >Hey {currentUser.firstName} Happy to See You....! </Typography> </div>
  )
}

export default MerchantDefaultPage