import React from "react";
// import PropTypes from "prop-types";
import { Button, Container, Grid } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import { Add } from "@material-ui/icons";

const Layers = () => {

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
                        >
                            Add new layer
                        </Button>
                    </Grid>

                    {/*<Grid item xs={5}>*/}
                    {/*    <TablePagination*/}
                    {/*        style={{ color: "#cfeaff" }}*/}
                    {/*        component="div"*/}
                    {/*        color="primary"*/}
                    {/*        colSpan={6}*/}
                    {/*        page={page}*/}
                    {/*        count={count}*/}
                    {/*        rowsPerPage={limit}*/}
                    {/*        rowsPerPageOptions={[4, 8, 12, 16, 20, 40, 60, 80, 100]}*/}
                    {/*        onChangePage={handleChangeImagePage}*/}
                    {/*        onChangeRowsPerPage={handleChangeImageLimit}*/}
                    {/*    />*/}
                    {/*</Grid>*/}

                    <Grid item xs={1}/>
                </Grid>
            </Container>
        </div>
    )
};

// Layers.propTypes = {};

export default Layers;