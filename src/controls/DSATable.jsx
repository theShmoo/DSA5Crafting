import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 2,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function DSATable(props) {
  const { classes, header, data } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        {header &&
          <TableHead>
            <TableRow>
              {header.map((cell, id) => (
                <TableCell key={id}>
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        }
        <TableBody>
          {data.map((row, id) => {
            return (
              <TableRow key={id}>
                {row.map((cell, id) => (
                  <TableCell key={id}>
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

DSATable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DSATable);
