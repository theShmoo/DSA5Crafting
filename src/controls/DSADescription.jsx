import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
};

function DSADescription(props) {
  const { classes, caption, text } = props;
  return (
    <div className={classes.root}>
      <Typography variant="caption" color="secondary" gutterBottom className={classes.flex}>
        {caption}
      </Typography>
      <Typography gutterBottom className={classes.flex}>
        {text}
      </Typography>
    </div>
  );
}

DSADescription.propTypes = {
  classes: PropTypes.object.isRequired,
  caption: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default withStyles(styles)(DSADescription);
