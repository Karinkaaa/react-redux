import React from "react";
import PropTypes from "prop-types";
import { Button, Container, Grid } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import { Add, List, ViewModule } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import TablePagination from "@material-ui/core/TablePagination";
import CreateResourceForm from "../../containers/animationResourceForm";
import AnimationResourceTable from "../../components/animationResourceTable";
import AnimationResourceCards from "../../components/animationResourceCards";
import { GRID, TABLE } from "../../utils/constants";

const Animations = ({
                        animations, count, onDelete, onChangeIsOpen, onClickPutAnimationResourceToForm,
                        view, onClickChangeAnimationView, pagination, onChangeAnimationPage, onChangeAnimationLimit,
                        sorting, onChangeAnimationSort, onChangeDirection, onChangeAnimationFilterValue,
                        onDeleteNestedImage, onDragAndDrop
                    }) => {
    const { page, limit } = pagination;

    const handleOpen = () => onChangeIsOpen(true);
    const handleView = () => view === TABLE ? onClickChangeAnimationView(GRID) : onClickChangeAnimationView(TABLE);

    const handleChangeAnimationPage = (event, newPage) => onChangeAnimationPage(newPage);
    const handleChangeAnimationLimit = (event) => onChangeAnimationLimit(parseInt(event.target.value, 10));

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
                    <Grid item xs={6}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            startIcon={<Add/>}
                            onClick={handleOpen}
                        >
                            Add animation resource
                        </Button>
                    </Grid>

                    <Grid item xs={4}>
                        <TablePagination
                            style={{ color: "#cfeaff" }}
                            component="div"
                            color="primary"
                            colSpan={6}
                            page={page}
                            count={count}
                            rowsPerPage={limit}
                            rowsPerPageOptions={[4, 8, 12, 16, 20, 40, 60, 80, 100]}
                            onChangePage={handleChangeAnimationPage}
                            onChangeRowsPerPage={handleChangeAnimationLimit}
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

                                <AnimationResourceCards
                                    animations={animations}
                                    count={count}
                                    page={page}
                                    limit={limit}
                                    onDelete={onDelete}
                                    onChangeAnimationPage={handleChangeAnimationPage}
                                    onChangeAnimationLimit={onChangeAnimationLimit}
                                    onChangeIsOpen={onChangeIsOpen}
                                    onClickPutAnimationResourceToForm={onClickPutAnimationResourceToForm}
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

                                <AnimationResourceTable
                                    animations={animations}
                                    onDelete={onDelete}
                                    onChangeIsOpen={onChangeIsOpen}
                                    onClickPutAnimationResourceToForm={onClickPutAnimationResourceToForm}
                                    sorting={sorting}
                                    onChangeAnimationSort={onChangeAnimationSort}
                                    onChangeDirection={onChangeDirection}
                                    onChangeAnimationFilterValue={onChangeAnimationFilterValue}
                                    onDeleteNestedImage={onDeleteNestedImage}
                                    onDragAndDrop={onDragAndDrop}
                                />
                            </>
                    }
                </Grid>
            </Container>
        </div>
    );
};

Animations.propTypes = {
    animations: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string.isRequired,
            urls: PropTypes.arrayOf(PropTypes.string).isRequired
        })
    ).isRequired,
    count: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    onChangeIsOpen: PropTypes.func.isRequired,
    onClickPutAnimationResourceToForm: PropTypes.func.isRequired,
    view: PropTypes.string.isRequired,
    onClickChangeAnimationView: PropTypes.func.isRequired,
    pagination: PropTypes.shape({
            page: PropTypes.number.isRequired,
            limit: PropTypes.number.isRequired
        }
    ).isRequired,
    onChangeAnimationPage: PropTypes.func.isRequired,
    onChangeAnimationLimit: PropTypes.func.isRequired,
    sorting: PropTypes.shape({
            field: PropTypes.string.isRequired,
            direction: PropTypes.oneOf(["asc", "desc"]).isRequired
        }
    ).isRequired,
    onChangeAnimationSort: PropTypes.func.isRequired,
    onChangeDirection: PropTypes.func,
    onChangeAnimationFilterValue: PropTypes.func.isRequired,
    onDeleteNestedImage: PropTypes.func.isRequired,
    onDragAndDrop: PropTypes.func.isRequired
};

export default Animations;