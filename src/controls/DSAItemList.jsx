import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.unit,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 2,
  }
});

class DSAItemList extends React.Component {

  state = {
    closed: []
  };

  handleClick = (name) => {
    let closed = this.state.closed;
    const i = closed.indexOf(name);
    if(i < 0)
      closed.push(name);
    else
      closed.splice(i, 1);
    this.setState({ closed: closed });
  };

  renderItems(items) {
    const {classes} = this.props
    return items.map((l, i) => {
      if(l.items !== undefined) {
        const closed = !this.state.closed.includes(l.title);
        return (
          <div key={i}>
            <ListItem button dense={true} onClick={() => this.handleClick(l.title)}>
              <ListItemText secondary={l.subtitle}>{l.title}</ListItemText>
              {closed ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={closed} timeout="auto" unmountOnExit className={classes.nested}>
              <DSAItemList items={l.items} classes={classes}/>
            </Collapse>
          </div>
        );
      }
      else {
      return (<ListItem key={i} dense={true} divider={true}>
        <ListItemText secondary={l.name}>{l.value}</ListItemText>
      </ListItem>);
      }
    });
  }

  render() {
    const { classes, items, title } = this.props;
    return (
      <List component="div" dense={true} disablePadding={true} className={classes.root}>
        {title && <ListSubheader>{title}</ListSubheader>}
        {this.renderItems(items)}
      </List>
    );
  }
}

DSAItemList.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  title: PropTypes.string
};

export default withStyles(styles)(DSAItemList);
