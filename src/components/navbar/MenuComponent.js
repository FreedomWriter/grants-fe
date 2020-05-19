import React from "react";
import { useHistory } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useSelector } from "react-redux";

export default function MenuComponent({
  anchorEl,
  menuId,
  isMenuOpen,
  handleMenuClose,
}) {
  const history = useHistory();

  const userType = useSelector((state) => state.login.usertype);
  return (
    <>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem
          onClick={() => {
            handleMenuClose();
            return history.push("/Homepage");
          }}
        >
          Home
        </MenuItem>
        <MenuItem
          onClick={async () => {
            await handleMenuClose();
            await userType;
            return userType === "writer"
              ? history.push("/WriterProfile")
              : history.push("/ApplicantProfile");
          }}
        >
          Profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleMenuClose();
            return history.push("/Grants");
          }}
        >
          Grants
        </MenuItem>
      </Menu>
    </>
  );
}
