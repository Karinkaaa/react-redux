import React from "react";
import PropTypes from "prop-types";
import { Button, Container, Grid } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Add, List, ViewModule } from "@material-ui/icons";
import TablePagination from "@material-ui/core/TablePagination";
import MusicResourceCards from "../../components/musicResourceCards";
import MusicResourceTable from "../../components/musicResourceTable";
import CreateResourceForm from "../../containers/musicResourceForm";
import { GRID, TABLE } from "../../utils/constants";

const Music = ({
                    music, count, onDelete, onChangeIsOpen, onClickPutMusicResourceToForm,
                    view, onClickChangeMusicView, pagination, onChangeMusicPage, onChangeMusicLimit,
                    sorting, onChangeMusicSort, onChangeDirection, onChangeMusicFilterValue
                }) => {
    const { page, limit } = pagination;

    const handleOpen = () => onChangeIsOpen(true);
    const handleView = () => view === TABLE ? onClickChangeMusicView(GRID) : onClickChangeMusicView(TABLE);

    const handleChangeMusicPage = (event, newPage) => onChangeMusicPage(newPage);
    const handleChangeMusicLimit = (event) => onChangeMusicLimit(parseInt(event.target.value, 10));

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
                            Add music resource
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
                            onChangePage={handleChangeMusicPage}
                            onChangeRowsPerPage={handleChangeMusicLimit}
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

                                <MusicResourceCards
                                    music={music}
                                    count={count}
                                    page={page}
                                    limit={limit}
                                    onDelete={onDelete}
                                    onChangeMusicPage={onChangeMusicPage}
                                    onChangeMusicLimit={onChangeMusicLimit}
                                    onChangeIsOpen={onChangeIsOpen}
                                    onClickPutMusicResourceToForm={onClickPutMusicResourceToForm}
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

                                <MusicResourceTable
                                    music={music}
                                    onDelete={onDelete}
                                    onChangeIsOpen={onChangeIsOpen}
                                    onClickPutMusicResourceToForm={onClickPutMusicResourceToForm}
                                    sorting={sorting}
                                    onChangeMusicSort={onChangeMusicSort}
                                    onChangeDirection={onChangeDirection}
                                    onChangeMusicFilterValue={onChangeMusicFilterValue}
                                />
                            </>
                    }
                </Grid>
            </Container>
        </div>
    );
};

Music.propTypes = {
    music: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ).isRequired,
    count: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    onChangeIsOpen: PropTypes.func.isRequired,
    onClickPutMusicResourceToForm: PropTypes.func.isRequired,
    view: PropTypes.string.isRequired,
    onClickChangeMusicView: PropTypes.func.isRequired,
    pagination: PropTypes.shape({
            page: PropTypes.number.isRequired,
            limit: PropTypes.number.isRequired
        }
    ).isRequired,
    onChangeMusicPage: PropTypes.func.isRequired,
    onChangeMusicLimit: PropTypes.func.isRequired,
    sorting: PropTypes.shape({
            field: PropTypes.string.isRequired,
            direction: PropTypes.oneOf(["asc", "desc"]).isRequired
        }
    ).isRequired,
    onChangeMusicSort: PropTypes.func.isRequired,
    onChangeDirection: PropTypes.func,
    onChangeMusicFilterValue: PropTypes.func.isRequired
};

export default Music;