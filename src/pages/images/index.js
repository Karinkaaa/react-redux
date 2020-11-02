import React from 'react';
import {connect} from "react-redux";
import {Button, Container} from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';
import {Add} from "@material-ui/icons";
import {isOpenModal} from "../../actions/imageResourceForm";
import CreateResourceForm from "../../containers/imageResourceForm";
import ImageResourceTable from "../../containers/imageResourceTable";

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeIsOpen: (isOpen) => dispatch(isOpenModal(isOpen)),
    }
}

const Images = ({onChangeIsOpen}) => {
    const handleOpen = () => onChangeIsOpen(true);

    return (
        <div>
            <Toolbar/>
            <Container>
                <Button variant="contained"
                        color="primary"
                        size="large"
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