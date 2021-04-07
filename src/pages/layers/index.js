import React from "react";
// import PropTypes from "prop-types";
import { Button, Container, Grid } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import { Add } from "@material-ui/icons";
import TablePagination from "@material-ui/core/TablePagination";
import LayersTable from "../../components/layersTable";

const Layers = ({
                    layers, count, onDelete, onClickPutLayerToForm, pagination, onChangePage, onChangeLimit,
                    sorting, onChangeSort, onChangeDirection, onChangeFilterValue, onDeleteNestedElement, onDragAndDrop
                }) => {
    const { page, limit } = pagination;

    const handleChangeLayerPage = (event, newPage) => onChangePage(newPage);
    const handleChangeLayerLimit = (event) => onChangeLimit(parseInt(event.target.value, 10));

    return (
        <div>
            <Toolbar/>
            <Container>
                <Grid container>
                    <Grid item xs={5}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            startIcon={<Add/>}
                        >
                            Add new layer
                        </Button>
                    </Grid>

                    <Grid item xs={5}>
                        <TablePagination
                            style={{ color: "#cfeaff" }}
                            component="div"
                            color="primary"
                            colSpan={6}
                            page={page}
                            count={count}
                            rowsPerPage={limit}
                            rowsPerPageOptions={[4, 8, 12, 16, 20, 40, 60, 80, 100]}
                            onChangePage={handleChangeLayerPage}
                            onChangeRowsPerPage={handleChangeLayerLimit}
                        />
                    </Grid>

                    <LayersTable
                        layers={layers}
                        onDelete={onDelete}
                        onClickPutLayerToForm={onClickPutLayerToForm}
                        sorting={sorting}
                        onChangeSort={onChangeSort}
                        onChangeDirection={onChangeDirection}
                        onChangeFilterValue={onChangeFilterValue}
                        onDeleteNestedElement={onDeleteNestedElement}
                        onDragAndDrop={onDragAndDrop}
                    />
                </Grid>
            </Container>
        </div>
    );
};

// Layers.propTypes = {};

export default Layers;