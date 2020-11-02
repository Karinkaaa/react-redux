import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {Check, Close} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        display: 'flex',
    }
});

export default ({anchorEl, handleClose, onAccept}) => {
    const classes = useStyles();

    return (
        <Menu
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            id="menu-list-grow"
            onClose={handleClose}
            variant="selectedMenu"
        >
            <div className={classes.root}>
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
    )
}