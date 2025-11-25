import React from 'react';
import { IconSquareChevronDown } from '@tabler/icons-react';
import { Button } from '@mantine/core';

const BotonControlAcordeon = ({ onClick }) => {
  return (
    <>
      <Button color={' var(--mantine-color-violet-7)'} variant="subtle" size="xs" onClick={onClick}>
        <IconSquareChevronDown size={20} />
      </Button>
    </>
  );
};

export default BotonControlAcordeon;
