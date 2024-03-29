import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useDispatch } from "react-redux";
import { RemoveCoach,getCoachesData } from "src/pages/coach/store";

export default function AlertDialog({ id, open, handleClose }) {
  // Use state to manage the local id value
  const [localId, setLocalId] = useState(id);
  const dispatch = useDispatch()

  const handleDeleteAPI = () => {
      dispatch(RemoveCoach(localId))
      dispatch(getCoachesData())
      
      handleClose()
  };


  return (
    <React.Fragment>
      <Dialog
        onClose={handleClose}
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style={{ fontSize: "19px", color: '#B4B4B3' }}>
          {"Are you sure you want to delete coach?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <ErrorOutlineIcon style={{ color: '#A20D29', marginLeft: '80px', fontSize: 140 }} />
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
          <Button onClick={handleClose} style={{ color: '#B4B4B3' }}>Cancel</Button>
          <Button onClick={()=>handleDeleteAPI()} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
