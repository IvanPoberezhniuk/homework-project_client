import React from 'react';

import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as Icon } from '../../../assets/icons/start.svg';

const StartIcon = () => {
  return (
    <SvgIcon>
      <Icon height={24} width={24} />
    </SvgIcon>
  );
};

export default StartIcon;
