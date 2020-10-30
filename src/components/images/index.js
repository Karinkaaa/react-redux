import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import {Container} from "@material-ui/core";
import CreateResourceForm from "../../containers/images/CreateImageResourceForm";
import ImagesTable from "./ImagesTable";

export default function ({images, onDelete}) {
    return (
        <div>
            <Toolbar/>
            <Container>
                <CreateResourceForm/>
                <ImagesTable
                    images={images}
                    onDelete={onDelete}
                />
            </Container>
        </div>
    );
}