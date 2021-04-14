import React from "react";
import uuid from "react-uuid";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import DragDropComponent from "../dragDrop/DragDropComponent";
import UrlComponent from "./UrlComponent";

const useStyles = makeStyles({
    grid: {
        whiteSpace: "noWrap",
        marginTop: 20
    }
});

const GridUrls = ({ urls, isValidUrls, onChangeUrl, onDeleteImage, onDragAndDrop }) => {
    const classes = useStyles();

    return (
        <Grid container spacing={2} className={classes.grid}>
            <DragDropComponent
                items={urls.map(url => ({ id: uuid(), url }))}
                renderItem={({ url }, index) => (
                    <UrlComponent
                        key={uuid()}
                        url={url}
                        index={index}
                        isValidUrls={isValidUrls}
                        onChangeUrl={onChangeUrl}
                        onDeleteImage={onDeleteImage}
                    />
                )}
                onDragAndDrop={(e) => onDragAndDrop(e.map(item => item.url))}
            />
        </Grid>
    );
};

GridUrls.propTypes = {
    urls: PropTypes.arrayOf(PropTypes.string).isRequired,
    isValidUrls: PropTypes.arrayOf(PropTypes.bool).isRequired,
    onChangeUrl: PropTypes.func.isRequired,
    onDeleteImage: PropTypes.func.isRequired,
    onDragAndDrop: PropTypes.func.isRequired
};

export default GridUrls;