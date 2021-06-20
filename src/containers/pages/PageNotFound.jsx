import { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh',
  },
  text: {
    color: theme.palette.primary.main,
    fontSize: '28px',
    letterSpacing: '0.2px',
    margin: 0,
  },
  handle: {
    background: '#ffe500',
    width: '14px',
    height: '30px',
    marginTop: '1px',
    animation: `1s infinite reverse $blinking`,
    margin: `0 0 10px 0`,
  },
  '@keyframes blinking': {
    '50%': {
      opacity: 0,
    },
  },
}));

const PageNotFound = () => {
  const text = `404, page not found.`;
  const [textToType, setTextToType] = useState('');
  const classes = useStyles();
  useEffect(() => {
    const splittedText = text.split('');

    splittedText.forEach((letter, index) => {
      setTimeout(() => {
        setTextToType((prevState) => prevState + letter);
      }, 85 * index);
    });
  }, []);

  return (
    <div className={classes.container}>
      <p className={classes.text}>{textToType}</p>
      <span className={classes.handle}></span>
    </div>
  );
};

export default PageNotFound;
