import * as React from "react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { DropzoneAreaBase } from "material-ui-dropzone";
import { createFileFromUrl, readFile } from "../../utils/methods";

const splitDropzoneAreaProps = (props) => {
    const { initialFiles, onChange, ...dropzoneAreaProps } = props;
    return [
        { initialFiles, onChange },
        dropzoneAreaProps
    ];
};

const DropzoneArea = (props) => {
    const { initialFiles, filesLimit, onChange } = props;
    const [fileObjects, setFileObjects] = useState([]);

    useEffect(() => {
        loadInitialFiles();
    }, [initialFiles]);

    const loadInitialFiles = async () => {
        try {
            const fileObjs = await Promise.all(
                initialFiles.map(async (initialFile) => {
                    let file;

                    if (typeof initialFile === "string") {
                        file = await createFileFromUrl(initialFile);
                    } else {
                        file = initialFile;
                    }

                    const data = await readFile(file);
                    return { file, data };
                })
            );

            setFileObjects(fileObjs);
            onChange(fileObjs.map(({ file }) => file));

        } catch (err) {
            console.log(err);
        }
    };

    const addFiles = async (newFileObjects) => {
        // Handle a single file
        if (filesLimit <= 1) {
            setFileObjects([newFileObjects[0]]);
            onChange([newFileObjects[0].file]);
        } else {
            // Handle multiple files
            setFileObjects(newFileObjects);
            onChange(newFileObjects.map(({ file }) => file));
        }
    };

    const deleteFile = (removedFileObj, removedFileObjIdx) => {
        // Calculate remaining fileObjects array
        const remainingFileObjs = fileObjects.filter((fileObject, i) => i !== removedFileObjIdx);

        // Update local state
        setFileObjects(remainingFileObjs);
        onChange(remainingFileObjs.map(({ file }) => file));
    };

    const [, dropzoneAreaProps] = splitDropzoneAreaProps(props);

    return (
        <DropzoneAreaBase
            {...dropzoneAreaProps}
            fileObjects={fileObjects}
            onAdd={addFiles}
            onDelete={deleteFile}
        />
    );
};

DropzoneArea.defaultProps = {
    filesLimit: 3,
    initialFiles: []
};

DropzoneArea.propTypes = {
    /** List containing File objects or URL strings.<br/>
     * **Note:** Please take care of CORS.
     */
    initialFiles: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.any
        ])
    ),
    /** Maximum number of files that can be loaded into the dropzone. */
    filesLimit: PropTypes.number,
    /**
     * Fired when the files inside dropzone change.
     *
     * @param {File[]} loadedFiles All the files currently loaded into the dropzone.
     */
    onChange: PropTypes.func
};

export default DropzoneArea;