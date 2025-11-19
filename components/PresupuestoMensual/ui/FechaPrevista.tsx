import React from 'react';
import { IconCalendarWeek } from '@tabler/icons-react';
import { DatePickerInput } from '@mantine/dates';

function FechaPrevista() {
  const icon = <IconCalendarWeek size={18} stroke={1.5} />;
  return (
    <>
      <DatePickerInput
        clearable
        valueFormat="DD MMM"
        locale="es"
        placeholder="Planificado"
        variant="filled"
        //    dropdownType="modal"
        size="xs"
        styles={{
          input: {
            //   width: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}
        leftSection={icon}
        leftSectionPointerEvents="none"
      />
    </>
  );
}

export default FechaPrevista;
