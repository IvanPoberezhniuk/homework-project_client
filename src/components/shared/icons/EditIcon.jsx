import React from 'react';

import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as Icon } from '../../../assets/icons/pencil.svg';

const EditIcon = () => {
  return (
    <SvgIcon>
      <Icon height={24} width={24} />
    </SvgIcon>
  );
};

export default EditIcon;
