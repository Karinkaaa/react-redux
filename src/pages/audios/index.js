import React from "react";
import PropTypes from "prop-types";
import { Button, Container, Grid } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Add, List, ViewModule } from "@material-ui/icons";
import TablePagination from "@material-ui/core/TablePagination";
import AudioResourceCards from "../../components/audioResourceCards";
import AudioResourceTable from "../../components/audioResourceTable";
import CreateResourceForm from "../../containers/audioResourceForm";
import { GRID, TABLE } from "../../utils/constants";

const Audios = ({
                    audios, count, onDelete, onChangeIsOpen, onClickPutAudioResourceToForm,
                    view, onClickChangeAudioView, pagination, onChangeAudioPage, onChangeAudioLimit,
                    sorting, onChangeAudioSort, onChangeDirection, onChangeAudioFilterValue
                }) => {
    const { page, limit } = pagination;

    const handleOpen = () => onChangeIsOpen(true);
    const handleView = () => view === TABLE ? onClickChangeAudioView(GRID) : onClickChangeAudioView(TABLE);

    const handleChangeAudioPage = (event, newPage) => onChangeAudioPage(newPage);
    const handleChangeAudioLimit = (event) => onChangeAudioLimit(parseInt(event.target.value, 10));

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
                            Add audio resource
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
                            onChangePage={handleChangeAudioPage}
                            onChangeRowsPerPage={handleChangeAudioLimit}
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

                                <AudioResourceCards
                                    audios={audios}
                                    count={count}
                                    page={page}
                                    limit={limit}
                                    onDelete={onDelete}
                                    onChangeAudioPage={onChangeAudioPage}
                                    onChangeAudioLimit={onChangeAudioLimit}
                                    onChangeIsOpen={onChangeIsOpen}
                                    onClickPutAudioResourceToForm={onClickPutAudioResourceToForm}
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

                                <AudioResourceTable
                                    audios={audios}
                                    onDelete={onDelete}
                                    onChangeIsOpen={onChangeIsOpen}
                                    onClickPutAudioResourceToForm={onClickPutAudioResourceToForm}
                                    sorting={sorting}
                                    onChangeAudioSort={onChangeAudioSort}
                                    onChangeDirection={onChangeDirection}
                                    onChangeAudioFilterValue={onChangeAudioFilterValue}
                                />
                            </>
                    }
                </Grid>
            </Container>
        </div>
    );
};

Audio.propTypes = {
    audios: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ).isRequired,
    count: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    onChangeIsOpen: PropTypes.func.isRequired,
    onClickPutAudioResourceToForm: PropTypes.func.isRequired,
    view: PropTypes.string.isRequired,
    onClickChangeAudioView: PropTypes.func.isRequired,
    pagination: PropTypes.shape({
            page: PropTypes.number.isRequired,
            limit: PropTypes.number.isRequired
        }
    ).isRequired,
    onChangeAudioPage: PropTypes.func.isRequired,
    onChangeAudioLimit: PropTypes.func.isRequired,
    sorting: PropTypes.shape({
            field: PropTypes.string.isRequired,
            direction: PropTypes.oneOf(["asc", "desc"]).isRequired
        }
    ).isRequired,
    onChangeAudioSort: PropTypes.func.isRequired,
    onChangeDirection: PropTypes.func,
    onChangeAudioFilterValue: PropTypes.func.isRequired
};

export default Audios;