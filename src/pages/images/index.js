import React from 'react';
import {connect} from "react-redux";
import {Button, Container, Grid} from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from "@material-ui/core/IconButton";
import {Add, List, ViewModule} from "@material-ui/icons";
import TablePagination from "@material-ui/core/TablePagination";
import ImageResourceCards from "../../components/imageResourceCards";
import ImageResourceTable from "../../components/imageResourceTable";
import CreateResourceForm from "../../containers/imageResourceForm";
import {filteringSortingPagingOfArray} from "../../utils/methods";
import {isOpenModal, putImageResourceToForm} from "../../actions/imageResourceForm";
import {
    changeFilterValue,
    changeLimit,
    changePage,
    changeSort,
    changeView,
    deleteImageResource
} from "../../actions/imageResourceComponent";

const mapStateToProps = (state) => {

    const {data: images, count} = filteringSortingPagingOfArray(state.images.imageList,
        {
            pagination: state.images.pagination,
            sorting: state.images.sorting,
            filters: state.images.filters
        }
    );

    return {
        count,
        images,
        view: state.images.view,
        pagination: state.images.pagination,
        sorting: state.images.sorting,
        filters: state.images.filters
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (id) => dispatch(deleteImageResource(id)),
        onChangePage: (page) => dispatch(changePage(page)),
        onChangeLimit: (limit) => dispatch(changeLimit(limit)),
        onChangeSort: (field) => dispatch(changeSort(field)),
        onClickChangeView: (view) => dispatch(changeView(view)),
        onChangeIsOpen: (isOpen) => dispatch(isOpenModal(isOpen)),
        onChangeFilterValue: (props) => dispatch(changeFilterValue(props)),
        onClickPutImageResourceToForm: (props) => dispatch(putImageResourceToForm(props)),
    }
}

const Images = ({
                    images, count, onDelete, onChangeIsOpen, onClickPutImageResourceToForm,
                    view, onClickChangeView, pagination, onChangePage, onChangeLimit,
                    sorting, onChangeSort, onChangeDirection, onChangeFilterValue
                }) => {

    const {page, limit} = pagination;

    const handleOpen = () => onChangeIsOpen(true);
    const handleChangePage = (event, newPage) => onChangePage(newPage);
    const handleLimit = (event) => onChangeLimit(parseInt(event.target.value, 10));
    const handleView = () => view === "table" ? onClickChangeView("grid") : onClickChangeView("table");

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
                            Add image resource
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
                            onChangePage={handleChangePage}
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

                                <ImageResourceCards
                                    images={images}
                                    count={count}
                                    page={page}
                                    limit={limit}
                                    onDelete={onDelete}
                                    onChangePage={onChangePage}
                                    onChangeLimit={onChangeLimit}
                                    onChangeIsOpen={onChangeIsOpen}
                                    onClickPutImageResourceToForm={onClickPutImageResourceToForm}
                                />
                            </>
                            :
                            <>
                                <Grid item xs>
                                    <IconButton onClick={handleView}>
                                        <ViewModule
                                            color="primary"
                                            fontSize="large"
                                            component={svgComponent}
                                        />
                                    </IconButton>
                                </Grid>

                                <CreateResourceForm/>

                                <ImageResourceTable
                                    images={images}
                                    onDelete={onDelete}
                                    onChangeIsOpen={onChangeIsOpen}
                                    onClickPutImageResourceToForm={onClickPutImageResourceToForm}
                                    sorting={sorting}
                                    onChangeSort={onChangeSort}
                                    onChangeDirection={onChangeDirection}
                                    onChangeFilterValue={onChangeFilterValue}
                                />
                            </>
                    }
                </Grid>
            </Container>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Images);