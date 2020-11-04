import React from "react";
import ImageResourceCards from "../imageResourceCards";
import ImageResourceTable from "../imageResourceTable";

const ImageResourceComponent = ({
                                    view, images, count, page, onChangePage, limit, onChangeLimit,
                                    onDelete, onChangeIsOpen, onClickPutImageResourceToForm
                                }) => (

    view === "grid" ?
        <ImageResourceCards
            images={images}
            count={count}
            page={page}
            onChangePage={onChangePage}
            limit={limit}
            onChangeLimit={onChangeLimit}
            onDelete={onDelete}
            onChangeIsOpen={onChangeIsOpen}
            onClickPutImageResourceToForm={onClickPutImageResourceToForm}
        />
        :
        <ImageResourceTable
            images={images}
            count={count}
            page={page}
            onChangePage={onChangePage}
            limit={limit}
            onChangeLimit={onChangeLimit}
            onDelete={onDelete}
            onChangeIsOpen={onChangeIsOpen}
            onClickPutImageResourceToForm={onClickPutImageResourceToForm}
        />
)

export default ImageResourceComponent