import React from "react";
import PropTypes from "prop-types";
import { Button, Container, Grid } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Add, List, ViewModule } from "@material-ui/icons";
import TablePagination from "@material-ui/core/TablePagination";
import DragonBonesResourceTable from "../../components/dragonBonesResourceTable";
import DragonBonesResourceCards from "../../components/dragonBonesResourceCards";
import CreateResourceForm from "../../containers/dragonBonesResourceForm";
import { GRID, TABLE } from "../../utils/constants";

const DragonBones = ({
                         dragonBones, count, onDelete, onChangeIsOpen, onClickPutDragonBonesResourceToForm,
                         view, onClickChangeDragonBonesView,
                         pagination, onChangeDragonBonesPage, onChangeDragonBonesLimit,
                         sorting, onChangeDragonBonesSort,
                         onChangeDirection, onChangeDragonBonesFilterValue
                     }) => {
    const { page, limit } = pagination;

    const handleOpen = () => onChangeIsOpen(true);
    const handleView = () => view === TABLE ? onClickChangeDragonBonesView(GRID) : onClickChangeDragonBonesView(TABLE);

    const handleChangeDragonBonesPage = (event, newPage) => onChangeDragonBonesPage(newPage);
    const handleChangeDragonBonesLimit = (event) => onChangeDragonBonesLimit(parseInt(event.target.value, 10));

    const svgComponent = (svgProps) => (
        <svg {...svgProps}>
            <defs>
                <linearGradient id="gradient1">
                    <stop offset="20%" stopColor="cornflowerblue"/>
                    <stop offset="80%" stopColor="deepskyblue"/>
                </linearGradient>
            </defs>
            {React.cloneElement(svgProps.children[0], {
                fill: "url(#gradient1)"
            })}
        </svg>
    );

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
                            onClick={handleOpen}
                        >
                            Add dragon bones resource
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
                                            color="primary"
                                            fontSize="large"
                                            component={svgComponent}
                                        />
                                    </IconButton>
                                </Grid>

                                <CreateResourceForm/>

                                <DragonBonesResourceCards
                                    dragonBones={dragonBones}
                                    count={count}
                                    page={page}
                                    limit={limit}
                                    sorting={sorting}
                                    onDelete={onDelete}
                                    onChangeIsOpen={onChangeIsOpen}
                                    onChangeDragonBonesPage={onChangeDragonBonesPage}
                                    onChangeDragonBonesLimit={onChangeDragonBonesLimit}
                                    onChangeDragonBonesSort={onChangeDragonBonesSort}
                                    onClickPutDragonBonesResourceToForm={onClickPutDragonBonesResourceToForm}
                                    onChangeDragonBonesFilterValue={onChangeDragonBonesFilterValue}
                                />
                            </>
                            :
                            <>
                                <Grid item>
                                    <IconButton onClick={handleView}>
                                        <ViewModule
                                            color="primary"
                                            fontSize="large"
                                            component={svgComponent}
                                        />
                                    </IconButton>
                                </Grid>

                                <CreateResourceForm/>

                                <DragonBonesResourceTable
                                    dragonBones={dragonBones}
                                    onDelete={onDelete}
                                    onChangeIsOpen={onChangeIsOpen}
                                    onClickPutDragonBonesResourceToForm={onClickPutDragonBonesResourceToForm}
                                    sorting={sorting}
                                    onChangeDragonBonesSort={onChangeDragonBonesSort}
                                    onChangeDirection={onChangeDirection}
                                    onChangeDragonBonesFilterValue={onChangeDragonBonesFilterValue}
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
        })
    ).isRequired,
    count: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    onChangeIsOpen: PropTypes.func.isRequired,
    onClickPutDragonBonesResourceToForm: PropTypes.func.isRequired,
    view: PropTypes.string.isRequired,
    onClickChangeDragonBonesView: PropTypes.func.isRequired,
    pagination: PropTypes.shape({
            page: PropTypes.number.isRequired,
            limit: PropTypes.number.isRequired
        }
    ).isRequired,
    onChangeDragonBonesPage: PropTypes.func.isRequired,
    onChangeDragonBonesLimit: PropTypes.func.isRequired,
    sorting: PropTypes.shape({
            field: PropTypes.string.isRequired,
            direction: PropTypes.oneOf(["asc", "desc"]).isRequired
        }
    ).isRequired,
    onChangeDragonBonesSort: PropTypes.func.isRequired,
    onChangeDirection: PropTypes.func,
    onChangeDragonBonesFilterValue: PropTypes.func.isRequired
};

export default DragonBones;