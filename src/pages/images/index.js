import React from 'react';
import {connect} from "react-redux";
import {Add} from "@material-ui/icons";
import Toolbar from '@material-ui/core/Toolbar';
import {Button, Container} from "@material-ui/core";
import CreateResourceForm from "../../containers/imageResourceForm";
import ImageResourceTable from "../../containers/imageResourceTable";
import {isOpenModal} from "../../actions/imageResourceForm";
import {useStyles} from "../../components/imageResourceTable";

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeIsOpen: (isOpen) => dispatch(isOpenModal(isOpen)),
    }
}

const Images = ({onChangeIsOpen}) => {

    const classes = useStyles();
    const handleOpen = () => onChangeIsOpen(true);

    return (
        <div>
            <Toolbar/>
            <Container>
                <Button variant="contained"
                        color="primary"
                        size="large"
                        className={classes.button}
                        startIcon={<Add/>}
                        onClick={handleOpen}
                >
                    Add image resource
                </Button>

                <CreateResourceForm/>
                <ImageResourceTable/>
            </Container>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Images);