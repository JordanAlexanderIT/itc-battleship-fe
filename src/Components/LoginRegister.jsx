import React, { useEffect, useRef } from "react";
import AppContext from "../Context/AppContext";
import UserFormButtons from "../Components/UserFormButtons";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const LoginRegister = () => {
  const appContext = React.useContext(AppContext);
  const { login, register } = appContext;
  const [open, setOpen] = React.useState(false);
  const [formPage, setFormPage] = React.useState(true);
  const [formObject, setFormObject] = React.useState({
    loginEmail: "",
    loginPassword: "",
    registerEmail: "",
    registerPassword: "",
    registerVerify: "",
    registerDisplayName: "",
  });
  const isMountedRef = useRef(false);
  useEffect(()=>{
    isMountedRef.current = true;
    return ()=>{isMountedRef.current = false}
  },[])
  const handleModalFormSelect = (e) => {
    e.target.name === "Login" ? setFormPage(true) : setFormPage(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormObject((values) => ({ ...values, [name]: value }));
  };

  const handleLogin = async () => {
    const loginObject = {
      email: formObject.loginEmail,
      password: formObject.loginPassword,
    };
    try {
      await login(loginObject);
      if(isMountedRef.current)
        handleClose();
    } catch (err) {
      // Error response should be coming from useUser
    }
  };

  const handleRegister = async () => {
    const registerObject = {
      email: formObject.registerEmail,
      password: formObject.registerPassword,
      displayName: formObject.registerDisplayName,
    };
    try {
      await register(registerObject);
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Button variant="contained" color="success" onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          <UserFormButtons
            formPage={formPage}
            handleModalFormSelect={handleModalFormSelect}
          />
        </DialogTitle>
        {formPage ? (
          <>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="emailEntry"
                label="Email Address"
                type="email"
                name="loginEmail"
                fullWidth
                variant="standard"
                onChange={handleChange}
                value={formObject.loginEmail}
              />
              <TextField
                margin="dense"
                id="pwdFirst"
                label="Password"
                type="password"
                name="loginPassword"
                fullWidth
                variant="standard"
                onChange={handleChange}
                value={formObject.loginPassword}
              />
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                color="success"
                onClick={handleLogin}
                disabled={
                  formObject.loginEmail.length < 3 ||
                  formObject.loginPassword.length < 3
                }
              >
                Login
              </Button>
              <Button onClick={handleClose} autoFocus>
                Cancel
              </Button>
            </DialogActions>
          </>
        ) : (
          <>
            <DialogContent>
              <TextField
                margin="dense"
                id="displayName"
                label="Display Name"
                name="registerDisplayName"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleChange}
                value={formObject.registerDisplayName}
              />
              <TextField
                autoFocus
                margin="dense"
                id="emailEntry"
                label="Email Address"
                type="email"
                name="registerEmail"
                fullWidth
                variant="standard"
                onChange={handleChange}
                value={formObject.registerEmail}
              />
              <TextField
                margin="dense"
                id="pwdFirst"
                label="Password"
                type="password"
                name="registerPassword"
                fullWidth
                variant="standard"
                onChange={handleChange}
                value={formObject.registerPassword}
              />
              <TextField
                margin="dense"
                id="pwdSecond"
                label="Verify Password"
                type="password"
                name="registerVerify"
                fullWidth
                variant="standard"
                onChange={handleChange}
                value={formObject.registerVerify}
                error={
                  formObject.registerPassword !== formObject.registerVerify
                }
                helperText={
                  formObject.registerPassword !== formObject.registerVerify
                    ? "Passwords do not match."
                    : null
                }
              />
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                color="success"
                onClick={handleRegister}
                disabled={
                  formObject.registerEmail.length < 3 ||
                  formObject.registerVerify !== formObject.registerPassword ||
                  formObject.registerDisplayName.length < 1
                }
              >
                Register
              </Button>
              <Button onClick={handleClose} autoFocus>
                Cancel
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default LoginRegister;
