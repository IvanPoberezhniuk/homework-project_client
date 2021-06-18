import { SvgIcon } from '@material-ui/core';
import { ReactComponent as Icon } from '../../../assets/icons/start.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '&:hover': {
      cursor: 'pointer',
      fill: theme.palette.primary.main,
    },
  },
}));

const StartIcon = ({ ...other }) => {
  const classes = useStyles();

  return (
    <SvgIcon classes={{ root: classes.root }} {...other}>
      <Icon height={24} width={24} />
    </SvgIcon>
  );
};

export default StartIcon;
