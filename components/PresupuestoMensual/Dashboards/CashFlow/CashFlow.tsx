import React from 'react';
import { Table } from '@mantine/core';
import styles from './CashFlow.module.css';

interface CashFlowProps {
  // Add any props you need here
}

const CashFlow: React.FC<CashFlowProps> = () => {
  return (
    <>
      <h2>Cash Flow</h2>
      <p>This is the cash flow component.</p>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th></Table.Th>
            <Table.Th>Meta</Table.Th>
            <Table.Th>Planificado</Table.Th>
            <Table.Th>Real</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>Gastos Fijos</Table.Td>
            <Table.Td>1000</Table.Td>
            <Table.Td>800</Table.Td>
            <Table.Td>900</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Gastos Variables</Table.Td>
            <Table.Td>1000</Table.Td>
            <Table.Td>800</Table.Td>
            <Table.Td>900</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Ahorros / Inversiones</Table.Td>
            <Table.Td>500</Table.Td>
            <Table.Td>400</Table.Td>
            <Table.Td>450</Table.Td>
          </Table.Tr>
        </Table.Tbody>
        <Table.Tfoot>
          <Table.Tr style={{ fontWeight: 'bold' }}>
            <Table.Th>Excedente</Table.Th>
            <Table.Th>2500</Table.Th>
            <Table.Th>2000</Table.Th>
            <Table.Th>2250</Table.Th>
          </Table.Tr>
        </Table.Tfoot>
      </Table>
    </>
  );
};

export default CashFlow;
