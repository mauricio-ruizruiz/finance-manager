import { Accordion, Table, Title } from '@mantine/core';
import { data, dataCategoriasGastos } from './dataGastos';

const CategoriasTable = () => {
  const items = data.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <>
      <Accordion variant="separated" radius="xl" chevronPosition="left" defaultValue="Apples">
        <Table striped highlightOnHover withColumnBorders captionSide="top">
          <Table.Caption>
            <Title order={2}>Desglose de Ingresos</Title>
          </Table.Caption>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Categoría</Table.Th>
              <Table.Th>Sub-Categoría</Table.Th>
              <Table.Th>Fecha Prevista</Table.Th>
              <Table.Th>Fecha Real</Table.Th>
              <Table.Th>Notas</Table.Th>
              <Table.Th>Planificado</Table.Th>
              <Table.Th>Real</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{items}</Table.Tbody>
          <Table.Tfoot>
            <Table.Tr>
              <Table.Td colSpan={5}>Total</Table.Td>
              <Table.Td>{/* Suma total Planificado */}</Table.Td>
              <Table.Td>{/* Suma total Real */}</Table.Td>
            </Table.Tr>
          </Table.Tfoot>
        </Table>
        {/* {items} */}
      </Accordion>
    </>
  );
};

export default CategoriasTable;
