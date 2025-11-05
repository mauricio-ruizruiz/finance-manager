import { Table, Title } from '@mantine/core';

const PresupuestoIngresos = () => {
  return (
    <>
      <Title order={3}>- Presupuesto de Ingresos -</Title>
      <Title order={4}>Resumen</Title>
      <Table striped highlightOnHover captionSide="top">
        <Table.Caption>
          <Title order={5}>Ingresos Mensuales</Title>
        </Table.Caption>
        <Table.Thead>
          <Table.Tr style={{ fontWeight: 'bold' }}>
            <Table.Th></Table.Th>
            <Table.Th>Planificado</Table.Th>
            <Table.Th>Real</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>Balance Inicial</Table.Td>
            <Table.Td>1000</Table.Td>
            <Table.Td>950</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Ingresos Mensual</Table.Td>
            <Table.Td>2000</Table.Td>
            <Table.Td>2100</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Ingresos Extras</Table.Td>
            <Table.Td>500</Table.Td>
            <Table.Td>600</Table.Td>
          </Table.Tr>
        </Table.Tbody>
        <Table.Tfoot>
          <Table.Tr style={{ fontWeight: 'bold' }}>
            <Table.Th>Total Ingresos</Table.Th>
            <Table.Th>3500</Table.Th>
            <Table.Th>3650</Table.Th>
          </Table.Tr>
        </Table.Tfoot>
      </Table>
    </>
  );
};

export default PresupuestoIngresos;
