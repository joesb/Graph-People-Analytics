import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { withStyles } from "@material-ui/core/styles";
import * as d3 from "d3";
import { Paper, Typography } from "@material-ui/core";

const COLORS_SERIES = ["#FF6492", "#141446", "#7A77FF"];

const styles = theme => ({});

const GET_PERSON = gql`
  query personPaginateQuery(
    $first: Int
    $offset: Int
    $orderBy: [_PersonOrdering]
    $filter: _PersonFilter
  ) {
    Person(first: $first, offset: $offset, orderBy: $orderBy, filter: $filter) {
      _id
      name
      birthDate {
        formatted
      }
    }
  }
`;

function UserVis(props) {
  const { classes } = props;

  const { loading, data, error } = useQuery(GET_PERSON);

  return (
    <Paper className={classes.root}>
      <Typography variant="h2" gutterBottom>
        People Vis
      </Typography>
    </Paper>
  );
}

export default withStyles(styles)(UserVis);
