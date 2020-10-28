import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Images } from '../utils/arrayImages';
import { Element } from 'react-scroll'
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
    // overflow: 'hidden',
    width: '100vw',

  },
  gridList: {
    width: '100vw',
  },
}));

const Coworking = () => {
  const classes = useStyles();
  const UpSm = useMediaQuery(theme => theme.breakpoints.up('sm'));

  return (
    <Element name="coworking">
      <div className={classes.root}>
        <GridList cellHeight={480} className={classes.gridList} cols={UpSm ? 3 : 1}>
          {Images.map((tile) => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Element>
  )
}

export default Coworking