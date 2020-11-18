import React from 'react';
import {connect} from "react-redux";
import {Button, Container, Grid} from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';
import {Add, List, ViewModule} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import TablePagination from "@material-ui/core/TablePagination";
import CreateResourceForm from "../../containers/animationResourceForm";
import AnimationResourceTable from "../../components/animationResourceTable";
import AnimationResourceCards from "../../components/animationResourceCards";
import {filteringSortingPagingOfArray} from "../../utils/methods";
import {isOpenAnimationModal, putAnimationResourceToForm} from "../../actions/animationResourceForm";
import {
    changeAnimationFilterValue,
    changeAnimationLimit,
    changeAnimationPage,
    changeAnimationSort,
    changeAnimationView,
    deleteAnimationResource,
    deleteNestedImageResource,
    dragAndDrop
} from "../../actions/animationResourceComponent";

const mapStateToProps = (state) => {

    const {data: animations, count} = filteringSortingPagingOfArray(state.animations.animationList,
        {
            pagination: state.animations.pagination,
            sorting: state.animations.sorting,
            filters: state.animations.filters
        }
    );

    return {
        count,
        animations,
        view: state.animations.view,
        pagination: state.animations.pagination,
        sorting: state.animations.sorting,
        filters: state.animations.filters
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (id) => dispatch(deleteAnimationResource(id)),
        onChangeAnimationPage: (page) => dispatch(changeAnimationPage(page)),
        onChangeAnimationLimit: (limit) => dispatch(changeAnimationLimit(limit)),
        onChangeAnimationSort: (field) => dispatch(changeAnimationSort(field)),
        onClickChangeAnimationView: (view) => dispatch(changeAnimationView(view)),
        onChangeIsOpen: (isOpen) => dispatch(isOpenAnimationModal(isOpen)),
        onChangeAnimationFilterValue: (props) => dispatch(changeAnimationFilterValue(props)),
        onClickPutAnimationResourceToForm: (props) => dispatch(putAnimationResourceToForm(props)),
        onDeleteNestedImage: (id, url) => dispatch(deleteNestedImageResource(id, url)),
        onDragAndDrop: (result, id) => dispatch(dragAndDrop(result, id)),
    }
}

const Animations = ({
                        animations, count, onDelete, onChangeIsOpen, onClickPutAnimationResourceToForm,
                        view, onClickChangeAnimationView, pagination, onChangeAnimationPage, onChangeAnimationLimit,
                        sorting, onChangeAnimationSort, onChangeDirection, onChangeAnimationFilterValue,
                        onDeleteNestedImage, onDragAndDrop
                    }) => {

    const {page, limit} = pagination;

    const handleOpen = () => onChangeIsOpen(true);
    const handleChangeAnimationPage = (event, newPage) => onChangeAnimationPage(newPage);
    const handleLimit = (event) => onChangeAnimationLimit(parseInt(event.target.value, 10));
    const handleView = () => view === "table" ? onClickChangeAnimationView("grid") : onClickChangeAnimationView("table");

    const svgComponent = (svgProps) => (
        <svg {...svgProps}>
            <defs>
                <linearGradient id="gradient1">
                    <stop offset="20%" stopColor="cornflowerblue"/>
                    <stop offset="80%" stopColor="deepskyblue"/>
                </linearGradient>
            </defs>
            {React.cloneElement(svgProps.children[0], {
                fill: 'url(#gradient1)',
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
                            style={{color: "#cfeaff"}}
                            component="div"
                            color="primary"
                            colSpan={6}
                            page={page}
                            count={count}
                            rowsPerPage={limit}
                            rowsPerPageOptions={[4, 8, 12, 16, 20, 40, 60, 80, 100]}
                            onChangePage={handleChangeAnimationPage}
                            onChangeRowsPerPage={handleLimit}
                        />
                    </Grid>

                    <Grid item xs={1}/>

                    {
                        view === "grid" ?
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Animations);