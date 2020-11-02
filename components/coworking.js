import React, { useState, useEffect } from 'react';
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
    width: '100%',
    boxSizing: 'border-box'

  },
  gridList: {
    width: '100vw',
  },
}));

const Coworking = () => {

  const [ instaReady, setInstaReady ] = useState(false)
  const classes = useStyles();
  const UpSm = useMediaQuery(theme => theme.breakpoints.up('sm'));

  useEffect(() => {
    
    const startIntagram = () => {
      new window.InstagramFeed({
        username: 'houses',
        container: document.getElementById('instagram-feed'),
        display_profile: false,
        display_biography: true,
        display_gallery: true,
        get_raw_json: false,
        callback: () => {
          setInstaReady(true)
        },
        styling: true,
        items: 6,
        items_per_row: UpSm ? 3 : 1,
        margin: 0.2,
        lazy_load: true,
      })
    }

    startIntagram()

  },[UpSm])



  return (
    <Element name="coworking">
      <div className={classes.root}>
        <div id="instagram-feed" class="instagram_feed"></div>
        {/* <GridList cellHeight={480} className={classes.gridList} cols={UpSm ? 3 : 1}>
          {Images.map((tile) => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList> */}
      </div>
    </Element>
  )
}

export default Coworking