import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMerchantProducts } from "../../../features/products/productSlice";
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";

// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  tableCellClasses,
  TableSortLabel,
  Toolbar,
  Typography,
  Paper,
  Checkbox,
  IconButton,
  TableContainer,
  Tooltip,
  FormControlLabel,
  Switch,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import MoreIcon from "@material-ui/icons/More";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import Axios from "../../../apis/Axios";
import { toast } from "react-toastify";
import ConfirmDialogButton from "../../../components/customButton/ConfirmDialogButton";
import RoundDeleteButton from "../../../components/customButton/RoundDeleteButton";

// TABLE STYLING USING MUI
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


const columns = [
  { id: "productId", label: "Product Id" },
  { id: "thumbnailURL", label: "Product Image", minWidth: 100 },
  { id: "name", label: "Name", minWidth: 100 },
  {
    id: "price",
    label: "Price",
    minWidth: 100,
    format: (value) => value.toFixed(2),
  },
  {
    id: "offer",
    label: "Offer (%)",
  },
  {
    id: "quantity",
    label: "Quantity",
    minWidth: 100,
  },
  {
    id: "category",
    label: "Category",
    minWudth: 100,
  },
  {
    id: "actions",
    label: "Actions",
    minWidth: 170,
  },
];

const ViewProducts = () => {
  let currentUser = useSelector((state) => state.user.currentUser);
  let dispatch = useDispatch();

  useEffect(() => {
    if (currentUser !== null && currentUser.role?.includes("MERCHANT")) {
      dispatch(fetchMerchantProducts(currentUser.userId));
    }
  }, [currentUser.userId]);

  let productData = useSelector((state) => state.product.productList);
  let [rows, setRows] = useState(productData);

  // console.log(rows);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // CRUD EVENT HANDLERS
  let deleteProduct = async (productId) => {
    try {
      let res = await Axios.delete(`products/${productId}`);
      toast.success(res.message);
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontWeight: "600" }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.productId}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                          <TableCell key={column.id} align={column.align}>
                            {(column.format && typeof value === "number") ? (
                              column.format(value)
                            ) : (column.id === "actions") ? (
                              //BEGIN :: actions button
                              <>
                                <Link to={`/product-info/${row.productId}`}>
                                  <IconButton>
                                    <MoreIcon color="primary" />
                                  </IconButton>
                                </Link>
                                <Link to={`/edit-product/${row.productId}`}>
                                  <IconButton>
                                    <EditIcon color="success" />
                                  </IconButton>
                                </Link>
                                <RoundDeleteButton
                                  title={"Are you sure to Delete Product"}
                                  onConfirm={(permit) =>
                                    permit ? deleteProduct(row.productId) : ""
                                  }
                                />
                              </>
                            ) : //END :: actions button

                            (column.id === "thumbnailURL") ? (
                              // BEGIN ::  Product Image Section
                              <img
                                alt="productImage"
                                src={value}
                                style={{
                                  borderRadius: "50%",
                                  maxHeight: "50px",
                                  maxWidth: "50px",
                                  minHeight: "20px",
                                  minWidth: "20px",
                                }}
                              />
                            ) : (
                              // BEGIN ::  Product Image Section
                              value
                            )}
                          </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default ViewProducts;
