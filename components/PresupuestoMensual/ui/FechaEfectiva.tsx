import React from 'react';
import { IconCalendar } from '@tabler/icons-react';
import { DatePickerInput } from '@mantine/dates';

interface FechaEfectivaProps {
  value: Date;
}

const FechaEfectiva = ({ value }: FechaEfectivaProps) => {
  const icon = <IconCalendar size={18} stroke={1.5} />;
  return (
    <DatePickerInput
      value={value}
      valueFormat="DD MMM"
      locale="es"
      placeholder="Actual"
      size="xs"
      disabled
      styles={{
        input: {
          color: 'var(--mantine-color-text)',
          // color: '#f5f5f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'default',
          border: 'none',
        },
      }}
      // leftSection={icon}
      leftSectionPointerEvents="none"
    />
  );
};

export default FechaEfectiva;
