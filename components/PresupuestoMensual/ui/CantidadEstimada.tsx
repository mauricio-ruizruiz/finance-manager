// TODO: Implementar funcionalidad para bloquear el input cuando se presione Enter y agregar un botón para desbloquear o editar el valor.
import React from 'react';
import { IconCalendarDollar } from '@tabler/icons-react';
import { NumberInput } from '@mantine/core';

const CantidadEstimada = () => {
  return (
    <>
      <NumberInput
        prefix="$"
        placeholder="$0.00"
        decimalScale={2}
        thousandSeparator=","
        hideControls
        leftSection={<IconCalendarDollar size={20} />}
        withKeyboardEvents={false}
        // allowDecimal={false}
        style={{
          // width: 100,
          input: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
};

export default CantidadEstimada;
