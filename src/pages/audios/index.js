import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Container, Grid, IconButton, TablePagination, Toolbar } from "@material-ui/core";
import { Add, List, ViewModule } from "@material-ui/icons";
import SvgComponent from "../../components/svgComponent";
import AudioResourceCards from "../../components/audioResourceCards";
import AudioResourceTable from "../../components/audioResourceTable";
import AudioResourceForm from "../../containers/audioResourceForm";
import { GRID, TABLE } from "../../utils/constants";

const Audios = ({
                    audios, count, view, pagination, sorting, filters, getAudios, onPutDataToForm, removeAudio,
                    onChangeIsOpen, onChangeView, onChangePage, onChangeLimit, onChangeSort, onChangeFilters
                }) => {
    const { page, limit } = pagination;

    const onRemove = (id) => removeAudio(id);
    const handleView = () => view === TABLE ? onChangeView(GRID) : onChangeView(TABLE);

    const handleChangeAudioPage = (event, newPage) => onChangePage(newPage);
    const handleChangeAudioLimit = (event) => onChangeLimit(parseInt(event.target.value, 10));

    useEffect(() => {
        getAudios();
    }, [pagination, sorting, filters]);

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
                                            component={SvgComponent}
                                        />
                                    </IconButton>
                                </Grid>

                                <AudioResourceForm/>

                                <AudioResourceCards
                                    audios={audios}
                                    onDelete={onRemove}
                                    onPutDataToForm={onPutDataToForm}
                                />
                            </>
                            :
                            <>
                                <Grid item>
                                    <IconButton onClick={handleView}>
                                        <ViewModule
                                            color={"primary"}
                                            fontSize={"large"}
                                            component={SvgComponent}
                                        />
                                    </IconButton>
                                </Grid>

                                <AudioResourceForm/>

                                <AudioResourceTable
                                    audios={audios}
                                    sorting={sorting}
                                    filters={filters}
                                    onChangeSort={onChangeSort}
                                    onChangeFilters={onChangeFilters}
                                    onDelete={onRemove}
                                    onPutDataToForm={onPutDataToForm}
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
    getAudios: PropTypes.func.isRequired,
    removeAudio: PropTypes.func.isRequired,
    onChangeIsOpen: PropTypes.func.isRequired,
    onPutDataToForm: PropTypes.func.isRequired,
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
    onChangeFilters: PropTypes.func.isRequired
};

export default Audios;