import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import ConfirmMenu from "../confirmMenu";
import RuleCard from "./RuleCard";

const RuleCards = ({ rules, onRemoveRule, onPutDataToForm }) => {
    const [anchorEl, setAnchorEl] = React.useState(false);
    const handleClose = () => setAnchorEl(null);

    return (
        <Grid container spacing={5} style={{ marginTop: 50 }}>
            {
                rules.map(({ id, name, cost, conditions }) =>
                    <Grid key={id} item sm={3}>
                        <RuleCard
                            id={id}
                            name={name}
                            cost={cost}
                            conditions={conditions}
                            setAnchorEl={setAnchorEl}
                            onPutDataToForm={onPutDataToForm}
                        />
                    </Grid>
                )
            }
            <ConfirmMenu
                anchorEl={anchorEl}
                handleClose={handleClose}
                onAccept={onRemoveRule}
            />
        </Grid>
    );
};

RuleCards.propTypes = {
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
    onRemoveRule: PropTypes.func.isRequired,
    onPutDataToForm: PropTypes.func.isRequired
};

export default RuleCards;