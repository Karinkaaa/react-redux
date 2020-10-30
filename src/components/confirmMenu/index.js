import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default ({anchorEl, handleClose, onAccept}) => (
    <Menu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        id="menu-list-grow"
        onClose={handleClose}
        variant="selectedMenu"
    >
        <MenuItem onClick={() => {
            onAccept(anchorEl.dataset.id);
            handleClose();
        }}
        >
            Yes
        </MenuItem>
        <MenuItem onClick={handleClose}>No</MenuItem>
    </Menu>
)