import React, {useState} from "react";
import {SortableContainer} from 'react-sortable-hoc';
import Grid from "@material-ui/core/Grid";
import NestedTableItem from "./NestedTableItem";
import ConfirmMenu from "../confirmMenu";

const NestedTable = SortableContainer(({id, urls, open, onDeleteNestedImage}) => {

        const [anchorEl, setAnchorEl] = useState(false);

        const handleClose = () => setAnchorEl(null);
        const handleToggle = (e) => setAnchorEl(e.currentTarget);

        return (
            <Grid container style={{background: "#335068"}}>
                {
                    open && (
                        urls.map((url, index) =>
                            <NestedTableItem
                                key={url}
                                index={index}
                                url={url}
                                handleToggle={handleToggle}
                            />
                        )
                    )
                }
                <ConfirmMenu
                    anchorEl={anchorEl}
                    handleClose={handleClose}
                    onAccept={(url) => onDeleteNestedImage(id, url)}
                />
            </Grid>
        )
    }
)

export default NestedTable
