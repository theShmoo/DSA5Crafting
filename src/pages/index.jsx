import React, { Component } from 'react';
import PropTypes from 'prop-types';

// material-ui
import { withStyles } from '@material-ui/core/styles';

// own classes
import DSAAppBar from './DSAAppBar';
import DSAMain from './DSAMain';
import withRoot from '../withRoot';

const styles = {
  root: {
    flexGrow: 1,
  }
};

class Index extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <DSAAppBar title="DSA 5 Crafting" />
        <DSAMain />
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
