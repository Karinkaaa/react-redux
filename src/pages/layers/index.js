import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Container, Grid, TablePagination, Toolbar } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import LayersTable from "../../components/layersTable";
import { LAYER_FORM } from "../../utils/links";

const Layers = ({
                    layers, count, pagination, sorting, filters, getLayers, onAdd, onPutDataToForm, removeLayer,
                    onChangePage, onChangeLimit, onChangeSort, onChangeFilters
                }) => {
    const { page, limit } = pagination;

    const onRemove = (id) => removeLayer(id);
    const handleChangeLayerPage = (event, newPage) => onChangePage(newPage);
    const handleChangeLayerLimit = (event) => onChangeLimit(parseInt(event.target.value, 10));

    useEffect(() => {
        getLayers();
    }, [pagination, sorting, filters]);

    return (
        <div>
            <Toolbar/>
            <Container>
                <Grid container>
                    <Grid item xs={5}>
                        <Link to={LAYER_FORM}>
                            <Button
                                variant={"contained"}
                                color={"primary"}
                                size={"large"}
                                startIcon={<Add/>}
                                onClick={onAdd}
                            >
                                Add new layer
                            </Button>
                        </Link>
                    </Grid>

                    <Grid item xs={5}>
                        <TablePagination
                            style={{ color: "#cfeaff" }}
                            component={"div"}
                            color={"primary"}
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
                        sorting={sorting}
                        filters={filters}
                        onChangeSort={onChangeSort}
                        onChangeFilters={onChangeFilters}
                        onDelete={onRemove}
                        onPutDataToForm={onPutDataToForm}
                    />
                </Grid>
            </Container>
        </div>
    );
};

Layers.propTypes = {
    layers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isValidName: PropTypes.bool,
            elements: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    position: PropTypes.shape({
                        x: PropTypes.number.isRequired,
                        y: PropTypes.number.isRequired
                    }),
                    size: PropTypes.shape({
                        height: PropTypes.number.isRequired,
                        width: PropTypes.number.isRequired
                    }),
                    ref: PropTypes.string,
                    zIndex: PropTypes.number
                }).isRequired
            ).isRequired
        }).isRequired
    ).isRequired,
    count: PropTypes.number.isRequired,
    getLayers: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
    removeLayer: PropTypes.func.isRequired,
    onPutDataToForm: PropTypes.func.isRequired,
    pagination: PropTypes.shape({
        page: PropTypes.number.isRequired,
        limit: PropTypes.number.isRequired
    }).isRequired,
    onChangePage: PropTypes.func.isRequired,
    onChangeLimit: PropTypes.func.isRequired,
    sorting: PropTypes.shape({
            field: PropTypes.string.isRequired,
            direction: PropTypes.oneOf(["asc", "desc"]).isRequired
        }
    ).isRequired,
    onChangeSort: PropTypes.func.isRequired,
    filters: PropTypes.object.isRequired,
    onChangeFilters: PropTypes.func.isRequired
};

export default Layers;