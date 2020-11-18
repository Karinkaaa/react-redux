import React, {useState} from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import NestedTableItem from "./NestedTableItem";
import ConfirmMenu from "../confirmMenu";
import DragDropComponent from "../dragDrop/DragDropComponent";

const NestedTable = (({id, urls, open, onDeleteNestedImage, onDragAndDrop}) => {

        const [anchorEl, setAnchorEl] = useState(false);

        const handleClose = () => setAnchorEl(null);
        const handleToggle = (e) => setAnchorEl(e.currentTarget);

        return (
            <Grid container style={{background: "#335068"}}>
                {
                    open && (
                        <DragDropComponent
                            items={urls.map(url => ({url}))}
                            renderItem={({url}) => (
                                <NestedTableItem
                                    key={url}
                                    url={url}
                                    handleToggle={handleToggle}
                                />
                            )}
                            onDragAndDrop={(e) => onDragAndDrop(e.map(item => item.url), id)}
                        />

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

NestedTable.propTypes = {
    id: PropTypes.string.isRequired,
    urls: PropTypes.array.isRequired,
    open: PropTypes.bool.isRequired,
    onDeleteNestedImage: PropTypes.func.isRequired,
    onDragAndDrop: PropTypes.func.isRequired
}

export default NestedTable
