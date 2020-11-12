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
import {isOpenImageModal, putImageResourceToForm} from "../../actions/imageResourceForm";
import {
    changeImageFilterValue,
    changeImageLimit,
    changeImagePage,
    changeImageSort,
    changeImageView,
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
        onChangeImagePage: (page) => dispatch(changeImagePage(page)),
        onChangeImageLimit: (limit) => dispatch(changeImageLimit(limit)),
        onChangeImageSort: (field) => dispatch(changeImageSort(field)),
        onClickChangeImageView: (view) => dispatch(changeImageView(view)),
        onChangeIsOpen: (isOpen) => dispatch(isOpenImageModal(isOpen)),
        onChangeImageFilterValue: (props) => dispatch(changeImageFilterValue(props)),
        onClickPutImageResourceToForm: (props) => dispatch(putImageResourceToForm(props)),
    }
}

const Images = ({
                    images, count, onDelete, onChangeIsOpen, onClickPutImageResourceToForm,
                    view, onClickChangeImageView, pagination, onChangeImagePage, onChangeImageLimit,
                    sorting, onChangeImageSort, onChangeDirection, onChangeImageFilterValue
                }) => {

    const {page, limit} = pagination;

    const handleOpen = () => onChangeIsOpen(true);
    const handleChangeImagePage = (event, newPage) => onChangeImagePage(newPage);
    const handleLimit = (event) => onChangeImageLimit(parseInt(event.target.value, 10));
    const handleView = () => view === "table" ? onClickChangeImageView("grid") : onClickChangeImageView("table");

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
                            onChangePage={handleChangeImagePage}
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
                                    onChangeImagePage={onChangeImagePage}
                                    onChangeImageLimit={onChangeImageLimit}
                                    onChangeIsOpen={onChangeIsOpen}
                                    onClickPutImageResourceToForm={onClickPutImageResourceToForm}
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

                                <ImageResourceTable
                                    images={images}
                                    onDelete={onDelete}
                                    onChangeIsOpen={onChangeIsOpen}
                                    onClickPutImageResourceToForm={onClickPutImageResourceToForm}
                                    sorting={sorting}
                                    onChangeImageSort={onChangeImageSort}
                                    onChangeDirection={onChangeDirection}
                                    onChangeImageFilterValue={onChangeImageFilterValue}
                                />
                            </>
                    }
                </Grid>
            </Container>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Images);