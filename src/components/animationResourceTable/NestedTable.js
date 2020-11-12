import React from "react";
import {SortableContainer} from 'react-sortable-hoc';
import NestedTableItem from "./NestedTableItem";
import Grid from "@material-ui/core/Grid";

const NestedTable = SortableContainer(({id, urls, open, handleToggle}) => {
        return (
            <Grid container style={{background: "#335068"}}>
                {
                    open && (
                        urls.map((url, index) =>
                            <NestedTableItem
                                key={url}
                                index={index}
                                url={url}
                                id={id}
                                handleToggle={handleToggle}
                            />
                        )
                    )
                }
            </Grid>
        )
    }
)

export default NestedTable
