import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import MobileStepper from "@material-ui/core/MobileStepper";
import { CardActionArea } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import useTheme from "@material-ui/core/styles/useTheme";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    media: {
        height: 160,
        display: "block",
        maxWidth: 400,
        overflow: "hidden",
        width: "100%"
    },
    stepper: {
        backgroundColor: theme.palette.blueGrey1Color,
        color: theme.palette.primary3Color
    }
}));

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const CardStepper = ({ urls, maxSteps }) => {
    const classes = useStyles();
    const theme = useTheme();

    const [activeStep, setActiveStep] = React.useState(0);
    const handleStepChange = (step) => setActiveStep(step);

    const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    return (
        <CardActionArea>
            <AutoPlaySwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {urls.map((url, index) => (
                    <div key={url}>
                        {
                            Math.abs(activeStep - index) <= 2 ? (
                                <img className={classes.media} src={url} alt={url}/>
                            ) : null
                        }
                    </div>
                ))}
            </AutoPlaySwipeableViews>

            <MobileStepper
                className={classes.stepper}
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={
                    <IconButton size="small" onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}>
                        <ArrowForwardIos/>
                    </IconButton>
                }
                backButton={
                    <IconButton size="small" onClick={handleBack} disabled={activeStep === 0}>
                        <ArrowBackIos/>
                    </IconButton>
                }
            />
        </CardActionArea>
    );
};

CardStepper.propTypes = {
    urls: PropTypes.arrayOf(PropTypes.string).isRequired,
    maxSteps: PropTypes.number.isRequired
};

export default CardStepper;