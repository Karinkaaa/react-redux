import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Container, Grid, IconButton, TablePagination, Toolbar } from "@material-ui/core";
import { Add, List, ViewModule } from "@material-ui/icons";
import SvgComponent from "../../components/svgComponent";
import DragonBonesResourceTable from "../../components/dragonBonesResourceTable";
import DragonBonesResourceCards from "../../components/dragonBonesResourceCards";
import DragonBonesResourceForm from "../../containers/dragonBonesResourceForm";
import { GRID, TABLE } from "../../utils/constants";

const DragonBones = ({
                         dragonBones,
                         count,
                         view,
                         pagination,
                         sorting,
                         filters,
                         onPutDataToForm,
                         onChangeView,
                         onChangePage,
                         onChangeLimit,
                         onChangeSort,
                         onChangeFilters,
                         onChangeIsOpen,
                         getDragonBones,
                         removeDragonBone
                     }) => {
    const { page, limit } = pagination;

    const onRemove = (id) => removeDragonBone(id);
    const handleView = () => view === TABLE ? onChangeView(GRID) : onChangeView(TABLE);

    const handleChangeDragonBonesPage = (event, newPage) => onChangePage(newPage);
    const handleChangeDragonBonesLimit = (event) => onChangeLimit(parseInt(event.target.value, 10));

    useEffect(() => {
        getDragonBones();
    }, [pagination, sorting, filters]);

    return (
        <div>
            <Toolbar/>
            <Container>
                <Grid container>
                    <Grid item xs={5}>
                        <Button
                            variant={"contained"}
                            color={"primary"}
                            size={"large"}
                            startIcon={<Add/>}
                            onClick={() => onChangeIsOpen(true)}
                        >
                            Add dragon bones resource
                        </Button>
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
                            onChangePage={handleChangeDragonBonesPage}
                            onChangeRowsPerPage={handleChangeDragonBonesLimit}
                        />
                    </Grid>

                    <Grid item xs={1}/>

                    {
                        view === GRID ?
                            <>
                                <Grid item xs={1}>
                                    <IconButton onClick={handleView}>
                                        <List
                                            color={"primary"}
                                            fontSize={"large"}
                                            component={SvgComponent}
                                        />
                                    </IconButton>
                                </Grid>

                                <DragonBonesResourceForm/>

                                <DragonBonesResourceCards
                                    dragonBones={dragonBones}
                                    onDelete={onRemove}
                                    onPutDataToForm={onPutDataToForm}
                                />
                            </>
                            :
                            <>
                                <Grid item>
                                    <IconButton onClick={handleView}>
                                        <ViewModule
                                            color={"primary"}
                                            fontSize={"large"}
                                            component={SvgComponent}
                                        />
                                    </IconButton>
                                </Grid>

                                <DragonBonesResourceForm/>

                                <DragonBonesResourceTable
                                    dragonBones={dragonBones}
                                    sorting={sorting}
                                    filters={filters}
                                    onChangeSort={onChangeSort}
                                    onChangeFilters={onChangeFilters}
                                    onDelete={onRemove}
                                    onPutDataToForm={onPutDataToForm}
                                />
                            </>
                    }
                </Grid>
            </Container>
        </div>
    );
};

DragonBones.propTypes = {
    dragonBones: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string.isRequired,
            texture: PropTypes.string.isRequired,
            textureJson: PropTypes.string.isRequired,
            skeleton: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    count: PropTypes.number.isRequired,
    view: PropTypes.string.isRequired,
    pagination: PropTypes.shape({
            page: PropTypes.number.isRequired,
            limit: PropTypes.number.isRequired
        }
    ).isRequired,
    sorting: PropTypes.shape({
            field: PropTypes.string.isRequired,
            direction: PropTypes.oneOf(["asc", "desc"]).isRequired
        }
    ).isRequired,
    filters: PropTypes.object.isRequired,
    getDragonBones: PropTypes.func.isRequired,
    removeDragonBone: PropTypes.func.isRequired,
    onChangeView: PropTypes.func.isRequired,
    onChangePage: PropTypes.func.isRequired,
    onChangeLimit: PropTypes.func.isRequired,
    onChangeSort: PropTypes.func.isRequired,
    onChangeFilters: PropTypes.func.isRequired,
    onChangeIsOpen: PropTypes.func.isRequired,
    onPutDataToForm: PropTypes.func.isRequired
};

export default DragonBones;