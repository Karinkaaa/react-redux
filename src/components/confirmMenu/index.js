import React from "react";
import PropTypes from "prop-types";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Check, Close } from "@material-ui/icons";

const ConfirmMenu = ({ anchorEl, handleClose, onAccept }) => (
    <Menu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        id="menu-list-grow"
        onClose={handleClose}
        variant="selectedMenu"
    >
        <div style={{ display: "flex" }}>
            <MenuItem onClick={handleClose}>
                <Close color="secondary"/>
            </MenuItem>

            <MenuItem
                onClick={() => {
                    onAccept(anchorEl.dataset.id);
                    handleClose();
                }}
            >
                <Check color="primary"/>
            </MenuItem>
        </div>
    </Menu>
);

ConfirmMenu.propTypes = {
    anchorEl: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    handleClose: PropTypes.func.isRequired,
    onAccept: PropTypes.func.isRequired
};

export default ConfirmMenu;