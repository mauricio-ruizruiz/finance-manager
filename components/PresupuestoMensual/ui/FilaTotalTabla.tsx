import React from 'react';
import { Table, Text } from '@mantine/core';
import CantidadEstimada from './CantidadEstimada';
import CantidadFinal from './CantidadFinal';

const FilaTotalTabla: React.FC<{ colspan: number }> = ({ colspan }) => {
  return (
    <Table.Tfoot>
      <Table.Tr h={75} bg=" var(--mantine-color-dark-8)">
        <Table.Td></Table.Td>
        <Table.Td colSpan={colspan}>
          <Text fw={900}>TOTAL</Text>
        </Table.Td>
        <Table.Td>
          <CantidadEstimada />
        </Table.Td>
        <Table.Td>
          <CantidadFinal />
        </Table.Td>
      </Table.Tr>
    </Table.Tfoot>
  );
};

export default FilaTotalTabla;
