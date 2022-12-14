import React , {Fragment} from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const RoundDeleteButton = ({onConfirm, title}) => {

    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancle = () => {
    setOpen(false);
    onConfirm(false);
  };
  const handleConfirm = () => {
    setOpen(false);
    onConfirm(true);
  };

  return (
    // <Fragment onClick={e => e.stopPropagation()}>
<>
      <IconButton
        onClick={handleClickOpen}
        size="small"
      >
       <DeleteIcon color="error"/>
      </IconButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCancle}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {title}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleCancle} color="warning">Cancel</Button>
          <Button color="error" onClick={handleConfirm}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      </>
    // </Fragment>
  )
}

export default RoundDeleteButton