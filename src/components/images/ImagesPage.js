import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import {Container} from "@material-ui/core";
import CreateResourceForm from "../../containers/CreateResourceForm";
import ImagesTable from "./ImagesTable";

export default function ({resources, onDelete}) {
    return (
        <div>
            <Toolbar/>
            <Container>
                <CreateResourceForm/>
                <ImagesTable
                    resources={resources}
                    onDelete={onDelete}
                />
            </Container>
        </div>
    );
}