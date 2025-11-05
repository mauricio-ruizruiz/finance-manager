import { Table, Title } from '@mantine/core';

const Metodo = () => {
  return (
    <>
      <Title order={3}>Overview Método</Title>
      <Table striped highlightOnHover captionSide="top">
        <Table.Caption>
          <Title order={2}>50 - 30 - 20</Title>
        </Table.Caption>
        <Table.Thead>
          <Table.Tr style={{ fontWeight: 'bold' }}>
            <Table.Th>Categoría</Table.Th>
            <Table.Th>Meta</Table.Th>
            <Table.Th>Planificado</Table.Th>
            <Table.Th>Real</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>Gastos Fijos (50%)</Table.Td>
            <Table.Td>50%</Table.Td>
            <Table.Td>50%</Table.Td>
            <Table.Td>40%</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Gastos Variables (30%)</Table.Td>
            <Table.Td>30%</Table.Td>
            <Table.Td>30%</Table.Td>
            <Table.Td>40%</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Ahorros (20%)</Table.Td>
            <Table.Td>20% </Table.Td>
            <Table.Td>20%</Table.Td>
            <Table.Td>20%</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </>
  );
};

export default Metodo;
