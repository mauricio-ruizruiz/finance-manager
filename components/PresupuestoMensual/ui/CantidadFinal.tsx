import React from 'react';
import { IconCashRegister } from '@tabler/icons-react';
import { NumberInput } from '@mantine/core';

const CantidadFinal = () => {
  return (
    <>
      <NumberInput
        prefix="$"
        placeholder="$0.00"
        decimalScale={2}
        thousandSeparator=","
        hideControls
        disabled
        leftSection={<IconCashRegister size={20} />}
        withKeyboardEvents={false}
        styles={{
          wrapper: { cursor: 'default' },
          input: {
            cursor: 'default',
          },
        }}
      />
    </>
  );
};

export default CantidadFinal;
