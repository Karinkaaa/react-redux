import React from 'react';
import {connect} from "react-redux";
import {Button, Container, Grid} from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from "@material-ui/core/IconButton";
import {Add, List, ViewModule} from "@material-ui/icons";
import {changeView, isOpenModal} from "../../actions/imageResourceForm";
import CreateResourceForm from "../../containers/imageResourceForm";
import ImageResourceComponent from "../../containers/imageResourceComponent";

const mapStateToProps = (state) => {
    return {
        view: state.images.view,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeIsOpen: (isOpen) => dispatch(isOpenModal(isOpen)),
        onClickChangeView: (isOpen) => dispatch(changeView(isOpen)),
    }
}

const Images = ({view, onClickChangeView, onChangeIsOpen}) => {

    const handleOpen = () => onChangeIsOpen(true);
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
                    <Grid item xs={11}>
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

                    {
                        view === "grid" ?
                            <Grid item xs>
                                <IconButton onClick={handleView}>
                                    <List
                                        color="primary"
                                        fontSize="large"
                                        component={svgComponent}
                                    />
                                </IconButton>
                            </Grid>
                            :
                            <Grid item xs>
                                <IconButton onClick={handleView}>
                                    <ViewModule
                                        color="primary"
                                        fontSize="large"
                                        component={svgComponent}
                                    />
                                </IconButton>
                            </Grid>
                    }

                </Grid>

                <CreateResourceForm/>
                <ImageResourceComponent view={view}/>
            </Container>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Images);