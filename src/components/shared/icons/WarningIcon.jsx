import { SvgIcon } from '@material-ui/core';

import { ReactComponent as Icon } from 'assets/icons/warning.svg';

const WarningIcon = ({ ...other }) => {
  return (
    <SvgIcon {...other}>
      <Icon height={24} width={24} />
    </SvgIcon>
  );
};

export default WarningIcon;
