import React from "react";
import { Box, Button } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const UserFormButtons = (props) => {
  const { handleModalFormSelect } = props;
  return (
    <Box>
      <Button
        id="appButton"
        variant="contained"
        color="success"
        size="small"
        endIcon={<GroupsIcon />}
        sx={{ m: 1 }}
        name="Login"
        onClick={handleModalFormSelect}
      >
        Login
      </Button>
      <Button
        id="appButton"
        variant="contained"
        color="success"
        size="small"
        endIcon={<ContactMailIcon />}
        sx={{ m: 1 }}
        name="Register"
        onClick={handleModalFormSelect}
      >
        Register
      </Button>
    </Box>
  );
  //
};

export default UserFormButtons;
