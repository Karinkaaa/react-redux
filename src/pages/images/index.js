import React from "react";
import PropTypes from "prop-types";
import { Button, Container, Grid } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Add, List, ViewModule } from "@material-ui/icons";
import TablePagination from "@material-ui/core/TablePagination";
import ImageResourceCards from "../../components/imageResourceCards";
import ImageResourceTable from "../../components/imageResourceTable";
import CreateResourceForm from "../../containers/imageResourceForm";
import { GRID, TABLE } from "../../utils/constants";

const Images = ({
                    images, count, onDelete, onChangeIsOpen, onClickPutImageResourceToForm,
                    view, onClickChangeImageView, pagination, onChangeImagePage, onChangeImageLimit,
                    sorting, onChangeImageSort, onChangeDirection, onChangeImageFilterValue
                }) => {
    const { page, limit } = pagination;

    const handleOpen = () => onChangeIsOpen(true);
    const handleView = () => view === TABLE ? onClickChangeImageView(GRID) : onClickChangeImageView(TABLE);

    const handleChangeImagePage = (event, newPage) => onChangeImagePage(newPage);
    const handleChangeImageLimit = (event) => onChangeImageLimit(parseInt(event.target.value, 10));

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
                            Add image resource
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
                            onChangePage={handleChangeImagePage}
                            onChangeRowsPerPage={handleChangeImageLimit}
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
};

Images.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ).isRequired,
    count: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    onChangeIsOpen: PropTypes.func.isRequired,
    onClickPutImageResourceToForm: PropTypes.func.isRequired,
    view: PropTypes.string.isRequired,
    onClickChangeImageView: PropTypes.func.isRequired,
    pagination: PropTypes.shape({
            page: PropTypes.number.isRequired,
            limit: PropTypes.number.isRequired
        }
    ).isRequired,
    onChangeImagePage: PropTypes.func.isRequired,
    onChangeImageLimit: PropTypes.func.isRequired,
    sorting: PropTypes.shape({
            field: PropTypes.string.isRequired,
            direction: PropTypes.oneOf(["asc", "desc"]).isRequired
        }
    ).isRequired,
    onChangeImageSort: PropTypes.func.isRequired,
    onChangeDirection: PropTypes.func,
    onChangeImageFilterValue: PropTypes.func.isRequired
};

export default Images;