import React from "react";
import ImageResourceCards from "../imageResourceCards";
import ImageResourceTable from "../imageResourceTable";

const ImageResourceComponent = ({view, images, onDelete, onChangeIsOpen, onClickPutImageResourceToForm}) => (

    view === "grid" ?
        <ImageResourceCards
            images={images}
            onDelete={onDelete}
            onChangeIsOpen={onChangeIsOpen}
            onClickPutImageResourceToForm={onClickPutImageResourceToForm}
        />
        :
        <ImageResourceTable
            images={images}
            onDelete={onDelete}
            onChangeIsOpen={onChangeIsOpen}
            onClickPutImageResourceToForm={onClickPutImageResourceToForm}
        />
)

export default ImageResourceComponent