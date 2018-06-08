import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root : {
    padding: theme.spacing.unit * 2,
    margin: theme.spacing.unit
  }
});

function DSADescription(props) {
  const { classes, children, title, text } = props;
  return (
    <Paper square elevation={4} className={classes.root}>
      {title && <Typography variant="headline" component="h3">{title}</Typography>}
      {text && <Typography component="p">{text}</Typography>}
      {children}
    </Paper>
  );
}

DSADescription.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
};

export default withStyles(styles)(DSADescription);
