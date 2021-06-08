import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Container, Grid, IconButton, TablePagination, Toolbar } from "@material-ui/core";
import { Add, List, ViewModule } from "@material-ui/icons";
import AnimationResourceTable from "../../components/animationResourceTable";
import AnimationResourceCards from "../../components/animationResourceCards";
import { GRID, TABLE } from "../../utils/constants";
import { ANIMATION_FORM } from "../../utils/links";

const Animations = ({
                        animations, count, view, pagination, sorting, filters, getAnimations,
                        onChangeView, onChangePage, onChangeLimit, onChangeSort, onChangeFilterValue,
                        onAdd, onPutData, removeAnimation
                    }) => {
    const { page, limit } = pagination;

    const onRemove = (id) => removeAnimation(id);
    const handleView = () => view === TABLE ? onChangeView(GRID) : onChangeView(TABLE);

    const handleChangeAnimationPage = (event, newPage) => onChangePage(newPage);
    const handleChangeAnimationLimit = (event) => onChangeLimit(parseInt(event.target.value, 10));

    const svgComponent = (svgProps) => (
        <svg {...svgProps}>
            <defs>
                <linearGradient id={"gradient1"}>
                    <stop offset={"20%"} stopColor={"cornflowerblue"}/>
                    <stop offset={"80%"} stopColor={"deepskyblue"}/>
                </linearGradient>
            </defs>
            {
                React.cloneElement(svgProps.children[0], {
                    fill: "url(#gradient1)"
                })
            }
        </svg>
    );

    useEffect(() => {
        getAnimations();
    }, [pagination, sorting, filters]);

    return (
        <div>
            <Toolbar/>
            <Container>
                <Grid container>
                    <Grid item xs={5}>
                        <Link to={ANIMATION_FORM}>
                            <Button
                                variant={"contained"}
                                color={"primary"}
                                size={"large"}
                                startIcon={<Add/>}
                                onClick={onAdd}
                            >
                                Add animation resource
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
                                            color={"primary"}
                                            fontSize={"large"}
                                            component={svgComponent}
                                        />
                                    </IconButton>
                                </Grid>

                                <AnimationResourceCards
                                    animations={animations}
                                    count={count}
                                    page={page}
                                    limit={limit}
                                    onDelete={onRemove}
                                    onChangePage={handleChangeAnimationPage}
                                    onChangeLimit={onChangeLimit}
                                    onClickPutResourceToForm={onPutData}
                                />
                            </>
                            :
                            <>
                                <Grid item>
                                    <IconButton onClick={handleView}>
                                        <ViewModule
                                            color={"primary"}
                                            fontSize={"large"}
                                            component={svgComponent}
                                        />
                                    </IconButton>
                                </Grid>

                                <AnimationResourceTable
                                    animations={animations}
                                    onDelete={onRemove}
                                    onClickPutResourceToForm={onPutData}
                                    sorting={sorting}
                                    filters={filters}
                                    onChangeSort={onChangeSort}
                                    onChangeFilterValue={onChangeFilterValue}
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
        }).isRequired
    ).isRequired,
    count: PropTypes.number.isRequired,
    getAnimations: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
    onPutData: PropTypes.func.isRequired,
    removeAnimation: PropTypes.func.isRequired,
    view: PropTypes.string.isRequired,
    onChangeView: PropTypes.func.isRequired,
    pagination: PropTypes.shape({
            page: PropTypes.number.isRequired,
            limit: PropTypes.number.isRequired
        }
    ).isRequired,
    onChangePage: PropTypes.func.isRequired,
    onChangeLimit: PropTypes.func.isRequired,
    sorting: PropTypes.shape({
            field: PropTypes.string.isRequired,
            direction: PropTypes.oneOf(["asc", "desc"]).isRequired
        }
    ).isRequired,
    filters: PropTypes.object.isRequired,
    onChangeSort: PropTypes.func.isRequired,
    onChangeFilterValue: PropTypes.func.isRequired
};

export default Animations;