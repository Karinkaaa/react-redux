import React from 'react';
import {connect} from "react-redux";
import {Button, Container, Grid} from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from "@material-ui/core/IconButton";
import {Add, List, ViewModule} from "@material-ui/icons";
import TablePagination from "@material-ui/core/TablePagination";
import ImageResourceCards from "../../components/imageResourceCards";
import ImageResourceTable from "../../components/imageResourceTable";
import {deleteImageResource} from "../../actions/imageResourceComponent";
import CreateResourceForm from "../../containers/imageResourceForm";
import {
    changeLimit,
    changePage,
    changeView,
    isOpenModal,
    putImageResourceToForm
} from "../../actions/imageResourceForm";

const filterSortPaginationArray = (arr, {pagination: {page, limit}}) => {

    const result = arr.slice(page * limit, page * limit + limit);
    return {data: result, count: arr.length};
}

const mapStateToProps = (state) => {

    const {data: images, count} = filterSortPaginationArray(state.images.imageList,
        {
            pagination: state.images.pagination,
        }
    );

    return {
        count,
        images,
        view: state.images.view,
        page: state.images.pagination.page,
        limit: state.images.pagination.limit,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangePage: (page) => dispatch(changePage(page)),
        onChangeLimit: (limit) => dispatch(changeLimit(limit)),
        onChangeIsOpen: (isOpen) => dispatch(isOpenModal(isOpen)),
        onDelete: (id) => dispatch(deleteImageResource(id)),
        onClickChangeView: (isOpen) => dispatch(changeView(isOpen)),
        onClickPutImageResourceToForm: (props) => dispatch(putImageResourceToForm(props)),
    }
}

const Images = ({
                    images, count, onDelete, onChangeIsOpen, onClickPutImageResourceToForm,
                    view, onClickChangeView, page, onChangePage, limit, onChangeLimit
                }) => {

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
                                    onChangePage={onChangePage}
                                    limit={limit}
                                    onChangeLimit={onChangeLimit}
                                    onDelete={onDelete}
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
                                    count={count}
                                    page={page}
                                    onChangePage={onChangePage}
                                    limit={limit}
                                    onChangeLimit={onChangeLimit}
                                    onDelete={onDelete}
                                    onChangeIsOpen={onChangeIsOpen}
                                    onClickPutImageResourceToForm={onClickPutImageResourceToForm}
                                />
                            </>
                    }
                </Grid>
            </Container>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Images);