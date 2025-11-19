import React from 'react';
import { IconCalendar } from '@tabler/icons-react';
import { DatePickerInput } from '@mantine/dates';

const FechaEfectiva = () => {
  const icon = <IconCalendar size={18} stroke={1.5} />;
  return (
    <>
      <DatePickerInput
        valueFormat="DD MMM"
        locale="es"
        placeholder="Actual"
        size="xs"
        disabled
        styles={{
          input: {
            //   width: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'default',
          },
        }}
        leftSection={icon}
        leftSectionPointerEvents="none"
      />
    </>
  );
};

export default FechaEfectiva;
