import { useState } from 'react';
import { IconCalendar } from '@tabler/icons-react';
import { Table, Title } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';

const Periodo = () => {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  const icon = <IconCalendar size={18} stroke={1.5} />;
  return (
    <>
      <Table variant="vertical" captionSide="top" my="lg">
        <Table.Caption>
          <Title order={5}>Periodo</Title>
        </Table.Caption>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>Fecha Inicial</Table.Td>
            <Table.Td>
              <DatePickerInput
                type="range"
                clearable
                leftSection={<IconCalendar size={18} stroke={1.5} />}
                leftSectionPointerEvents="none"
                //  label="Pick date"
                placeholder="Pick date"
                value={value}
                onChange={setValue}
              />
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Moneda</Table.Td>
            <Table.Td>$</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Saldo Inicial</Table.Td>
            <Table.Td>$500</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </>
  );
};

export default Periodo;
