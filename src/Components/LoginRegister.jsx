import React from "react";
import AppContext from "../Context/AppContext";
import UserFormButtons from "../Components/UserFormButtons";
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const LoginRegister = (props) => {
  const appContext = React.useContext(AppContext);
  const { login, register } = appContext;
  const { open, handleOpen, handleClose } = props;
  const [formObject, setFormObject] = React.useState({
    loginEmail: "",
    loginPassword: "",
    registerEmail: "",
    registerPassword: "",
    registerVerify: "",
    registerDisplayName: "",
  });
  const [formPage, setFormPage] = React.useState(true);

  const handleModalFormSelect = (e) => {
    e.target.name === "Login" ? setFormPage(true) : setFormPage(false);
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
      handleOpen();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box>
      <Button variant="contained" color="success">
        Login
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <UserFormButtons
          formPage={formPage}
          handleModalFormSelect={handleModalFormSelect}
        />
        {formPage ? (
          <>
            <DialogTitle>Login</DialogTitle>
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
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleLogin} id="appButton">
                Login
              </Button>
            </DialogActions>
          </>
        ) : (
          <>
            <DialogTitle>Sign-Up</DialogTitle>
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
              <Button onClick={handleClose} id="appButton">
                Cancel
              </Button>
              <Button
                id="appButton"
                onClick={handleRegister}
                disabled={
                  formObject.registerVerify !== formObject.registerPassword
                }
              >
                Create Account
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default LoginRegister;
