import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  header: {
    textAlign: 'center',
    fontFamily: 'Consolas',
    fontSize: 20,
    padding: 25,
  },
  small: {
    fontSize: 10,
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      Object Detection Application <br />
      <small className={classes.small}>
        Made with COCO-SSD by Sixhei Tartari
      </small>
    </div>
  );
}
