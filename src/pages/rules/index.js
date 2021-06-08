import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Container, Grid, IconButton, TablePagination, Toolbar } from "@material-ui/core";
import { Add, List, ViewModule } from "@material-ui/icons";
import RuleTable from "../../components/ruleTable";
import RuleCards from "../../components/ruleCards";
import RuleForm from "../../containers/ruleForm";
import { GRID, TABLE } from "../../utils/constants";

const Rules = ({
                   rules, count, view, pagination, sorting, filters, getRules, onPutData, removeRule,
                   onChangeView, onChangePage, onChangeLimit, onChangeSort, onChangeFilters, onChangeIsOpen
               }) => {
    const { page, limit } = pagination;

    const onRemove = (id) => removeRule(id);
    const handleView = () => view === TABLE ? onChangeView(GRID) : onChangeView(TABLE);

    const handleChangeRulesPage = (event, newPage) => onChangePage(newPage);
    const handleChangeRulesLimit = (event) => onChangeLimit(parseInt(event.target.value, 10));

    const svgComponent = (svgProps) => (
        <svg {...svgProps}>
            <defs>
                <linearGradient id={"gradient1"}>
                    <stop offset={"20%"} stopColor={"cornflowerblue"}/>
                    <stop offset={"80%"} stopColor={"deepskyblue"}/>
                </linearGradient>
            </defs>
            {
                React.cloneElement(svgProps.children[0], {
                    fill: "url(#gradient1)"
                })
            }
        </svg>
    );

    useEffect(() => {
        getRules();
    }, [pagination, sorting, filters]);

    return (
        <div>
            <Toolbar/>
            <Container>
                <Grid container>
                    <Grid item xs={5}>
                        <Button
                            variant={"contained"}
                            color={"primary"}
                            size={"large"}
                            startIcon={<Add/>}
                            onClick={() => onChangeIsOpen(true)}
                        >
                            Add rule
                        </Button>
                    </Grid>

                    <Grid item xs={5}>
                        <TablePagination
                            style={{ color: "#cfeaff" }}
                            component={"div"}
                            color={"primary"}
                            colSpan={6}
                            page={page}
                            count={count}
                            rowsPerPage={limit}
                            rowsPerPageOptions={[4, 8, 12, 16, 20, 40, 60, 80, 100]}
                            onChangePage={handleChangeRulesPage}
                            onChangeRowsPerPage={handleChangeRulesLimit}
                        />
                    </Grid>

                    <Grid item xs={1}/>

                    {
                        view === GRID ?
                            <>
                                <Grid item xs={1}>
                                    <IconButton onClick={handleView}>
                                        <List
                                            color={"primary"}
                                            fontSize={"large"}
                                            component={svgComponent}
                                        />
                                    </IconButton>
                                </Grid>

                                <RuleForm/>

                                <RuleCards
                                    rules={rules}
                                    onDelete={onRemove}
                                    onClickPutRuleToForm={onPutData}
                                />
                            </>
                            :
                            <>
                                <Grid item>
                                    <IconButton onClick={handleView}>
                                        <ViewModule
                                            color={"primary"}
                                            fontSize={"large"}
                                            component={svgComponent}
                                        />
                                    </IconButton>
                                </Grid>

                                <RuleForm/>

                                <RuleTable
                                    rules={rules}
                                    sorting={sorting}
                                    filters={filters}
                                    onChangeSort={onChangeSort}
                                    onChangeFilters={onChangeFilters}
                                    onDelete={onRemove}
                                    onClickPutRuleToForm={onPutData}
                                />
                            </>
                    }
                </Grid>
            </Container>
        </div>
    );
};

Rules.propTypes = {
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
    count: PropTypes.number.isRequired,
    getRules: PropTypes.func.isRequired,
    removeRule: PropTypes.func.isRequired,
    onPutData: PropTypes.func.isRequired,
    view: PropTypes.string.isRequired,
    onChangeView: PropTypes.func.isRequired,
    pagination: PropTypes.shape({
            page: PropTypes.number.isRequired,
            limit: PropTypes.number.isRequired
        }
    ).isRequired,
    onChangePage: PropTypes.func.isRequired,
    onChangeLimit: PropTypes.func.isRequired,
    sorting: PropTypes.shape({
            field: PropTypes.string.isRequired,
            direction: PropTypes.oneOf(["asc", "desc"]).isRequired
        }
    ).isRequired,
    onChangeSort: PropTypes.func.isRequired,
    filters: PropTypes.object.isRequired,
    onChangeFilters: PropTypes.func.isRequired,
    onChangeIsOpen: PropTypes.func.isRequired
};

export default Rules;