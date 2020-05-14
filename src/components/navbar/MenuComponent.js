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

  const user = useSelector((state) => {
    return state.onboarding.user;
  });
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
          onClick={() => {
            handleMenuClose();
            return user.type === "writer"
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
