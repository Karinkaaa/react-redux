import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import RuleTableRow from "./RuleTableRow";

const RuleTableBody = ({ rules, setAnchorEl, onPutDataToForm }) => {
    const handleOpen = (id) => onPutDataToForm(id);
    const handleToggle = (e) => setAnchorEl(e.currentTarget);

    return (
        <Grid item xs={12}>
            {
                rules.map(({ id, name, cost, conditions }) =>
                    <RuleTableRow
                        key={id}
                        id={id}
                        name={name}
                        cost={cost}
                        conditions={conditions}
                        handleOpen={handleOpen}
                        handleToggle={handleToggle}
                    />
                )
            }
        </Grid>
    );
};

RuleTableBody.propTypes = {
    rules: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string.isRequired,
            cost: PropTypes.number.isRequired,
            conditions: PropTypes.arrayOf(
                PropTypes.shape({
                        x: PropTypes.number.isRequired,
                        y: PropTypes.number.isRequired
                    }
                ).isRequired
            ).isRequired
        }).isRequired
    ).isRequired,
    setAnchorEl: PropTypes.func.isRequired,
    onPutDataToForm: PropTypes.func.isRequired
};

export default RuleTableBody;
