import { Accordion, Table, Title } from '@mantine/core';
import { data, dataCategoriasGastos } from './dataGastos';

const CategoriasTable = () => {
  const categoriasRows = Array.from(
    new Set(dataCategoriasGastos.map((item) => item.categoria))
  ).map((categoria, index) => (
    <Accordion.Item key={index} value={categoria.categoria}>
      <Accordion.Control>{}</Accordion.Control>
      <Accordion.Panel>{}</Accordion.Panel>
    </Accordion.Item>
  ));

  const items = dataCategoriasGastos.map((item) => (
    <Table.Tr key={item.id}>
      <Table.Td>{item.categoria}</Table.Td>
      <Table.Td>{item.grupo}</Table.Td>
      <Table.Td>{item.subgrupo}</Table.Td>
      <Table.Td>{item.emoji}</Table.Td>
      <Table.Td>{item.tipo}</Table.Td>
    </Table.Tr>
  ));
  return (
    <>
      <Accordion variant="separated" defaultValue="customization">
        {categoriasRows}
      </Accordion>
      <Table striped highlightOnHover withColumnBorders captionSide="top">
        <Table.Caption>
          <Title order={2}>Desglose de Categorías de Gastos</Title>
        </Table.Caption>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Categoría</Table.Th>
            <Table.Th>Grupo</Table.Th>
            <Table.Th>Sub-Grupo</Table.Th>
            <Table.Th>Emoji</Table.Th>
            <Table.Th>Tipo</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{categoriasRows}</Table.Tbody>
      </Table>

      <Table striped highlightOnHover withColumnBorders captionSide="top">
        <Table.Caption>
          <Title order={2}>Desglose de Categorías de Gastos</Title>
        </Table.Caption>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Categoría</Table.Th>
            <Table.Th>Grupo</Table.Th>
            <Table.Th>Sub-Grupo</Table.Th>
            <Table.Th>Emoji</Table.Th>
            <Table.Th>Tipo</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{items}</Table.Tbody>
      </Table>
    </>
  );
};

export default CategoriasTable;
