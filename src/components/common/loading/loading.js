import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';
import './loading.css';
const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

function CircularIndeterminate(props) {
  const { classes } = props;
  return (
    <div className="col-md-12 col-lg-12 col-xl-12">
      <div className="loading">
        {/* <CircularProgress className={classes.progress} /> */}
        <CircularProgress className={classes.progress} size={50} />
        {/* <CircularProgress className={classes.progress} color="secondary" /> */}
        {/* <CircularProgress className={classes.progress} style={{ color: purple[500] }} thickness={7} /> */}
      </div>
    </div>
  );
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIndeterminate);