import React from 'react';
import { IconCashRegister, IconCurrencyDollar, IconFileDollarFilled } from '@tabler/icons-react';
import { Property } from 'csstype';
import { NumberInput, StyleProp } from '@mantine/core';

interface CantidadFinalProps {
  w?: StyleProp<Property.Width<string | number> | undefined>;
  value?: number | string;
  color?: string;
}
const CantidadFinal = ({ w, value, color }: CantidadFinalProps) => {
  return (
    <>
      <NumberInput
        // prefix="$"
        placeholder="$0.00"
        decimalScale={2}
        thousandSeparator=","
        hideControls
        value={value}
        disabled
        leftSection={
          <IconCurrencyDollar size={16} stroke={1.1} color="var(--mantine-color-dark-2)" />
        }
        w={w}
        withKeyboardEvents={false}
        styles={{
          root: {
            userSelect: 'none',
            // color: 'var(--mantine-color-red-6)',
            // cursor: 'default',
          },
          wrapper: {
            //  cursor: 'default'
          },
          input: {
            userSelect: 'none',
            cursor: 'default',
            backgroundColor: 'var(--mantine-color-dark-8)',
            // backgroundColor: 'transparent',
            color: color,
            fontSize: 14,
            // fontStretch: 'expanded',
            fontWeight: 600,
            letterSpacing: '.02rem',
            border: 'none',
            textAlign: 'right',
            paddingRight: 16,
            opacity: 1,
          },
        }}
      />
    </>
  );
};

export default CantidadFinal;
