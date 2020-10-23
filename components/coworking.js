import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Images } from '../utils/arrayImages';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
    // overflow: 'hidden',
    width: '100vw',
    height: '100vh'
  },
  gridList: {
    width: '100vw',
    height: '100vh',
  },
}));

const Coworking = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <GridList cellHeight={480} className={classes.gridList} cols={3}>
      {Images.map((tile) => (
        <GridListTile key={tile.img} cols={tile.cols || 1}>
          <img src={tile.img} alt={tile.title} />
        </GridListTile>
      ))}
    </GridList>
  </div>
  )
}

export default Coworking