import React from "react";
import {autoPlay} from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";
import Paper from "@material-ui/core/Paper";
import MobileStepper from "@material-ui/core/MobileStepper";
import Typography from "@material-ui/core/Typography";
import {Button} from "@material-ui/core";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@material-ui/icons";
import useTheme from "@material-ui/core/styles/useTheme";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 255,
        display: 'block',
        maxWidth: 400,
        overflow: 'hidden',
        width: '100%',
    },
}));

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const AnimationResourceCards = ({
                                    animations, count, page, limit, onDelete, onchangeImagePage,
                                    onchangeImageLimit, onChangeIsOpen, onClickPutAnimationResourceToForm,
                                }) => {

    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = animations.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div className={classes.root}>
            <Paper square elevation={0} className={classes.header}>
                <Typography>{animations[activeStep].label}</Typography>
            </Paper>

            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {animations.map((step, index) => (
                    <div key={step.name}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <img className={classes.img} src={step.urls} alt={step.label}/>
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>

            <MobileStepper
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Next
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
                        Back
                    </Button>
                }
            />
        </div>
    );
}

export default AnimationResourceCards