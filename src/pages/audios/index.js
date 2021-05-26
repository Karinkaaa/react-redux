import React from "react";
import PropTypes from "prop-types";
import { Button, Container, Grid, IconButton, TablePagination, Toolbar } from "@material-ui/core";
import { Add, List, ViewModule } from "@material-ui/icons";
import AudioResourceCards from "../../components/audioResourceCards";
import AudioResourceTable from "../../components/audioResourceTable";
import AudioResourceForm from "../../containers/audioResourceForm";
import { GRID, TABLE } from "../../utils/constants";

const Audios = ({
                    audios, count, onDelete, onChangeIsOpen, onClickPutResourceToForm,
                    view, onChangeView, pagination, onChangePage, onChangeLimit,
                    sorting, onChangeSort, onChangeFilterValue
                }) => {
    const { page, limit } = pagination;

    const handleView = () => view === TABLE ? onChangeView(GRID) : onChangeView(TABLE);
    const handleChangeAudioPage = (event, newPage) => onChangePage(newPage);
    const handleChangeAudioLimit = (event) => onChangeLimit(parseInt(event.target.value, 10));

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

    return (
        <div>
            <Toolbar/>
            <Container>
                <Grid container>
                    <Grid item xs={5}>
                        <Button
                            variant={"contained"}
                            color={"primary"}
                            size={"large"}
                            startIcon={<Add/>}
                            onClick={() => onChangeIsOpen(true)}
                        >
                            Add audio resource
                        </Button>
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
                                            color={"primary"}
                                            fontSize={"large"}
                                            component={svgComponent}
                                        />
                                    </IconButton>
                                </Grid>

                                <AudioResourceForm/>

                                <AudioResourceCards
                                    audios={audios}
                                    count={count}
                                    page={page}
                                    limit={limit}
                                    onDelete={onDelete}
                                    onChangePage={onChangePage}
                                    onChangeLimit={onChangeLimit}
                                    onChangeIsOpen={onChangeIsOpen}
                                    onClickPutResourceToForm={onClickPutResourceToForm}
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

                                <AudioResourceForm/>

                                <AudioResourceTable
                                    audios={audios}
                                    onDelete={onDelete}
                                    onChangeIsOpen={onChangeIsOpen}
                                    onClickPutResourceToForm={onClickPutResourceToForm}
                                    sorting={sorting}
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

Audio.propTypes = {
    audios: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    count: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    onChangeIsOpen: PropTypes.func.isRequired,
    onClickPutResourceToForm: PropTypes.func.isRequired,
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
    onChangeSort: PropTypes.func.isRequired,
    onChangeFilterValue: PropTypes.func.isRequired
};

export default Audios;