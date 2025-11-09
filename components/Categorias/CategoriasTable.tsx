import { useState } from 'react';
import { Accordion, Table, Title } from '@mantine/core';
import { dataCategoriasGastos } from './dataCategoriasGastos';

const CategoriasTable = () => {
  // Estado para múltiples items abiertos
  const [opened, setOpened] = useState<string[]>([]);

  // Extraer categorías únicas
  const categoriasUnicas = Array.from(new Set(dataCategoriasGastos.map((item) => item.categoria)));

  if (!Array.isArray(dataCategoriasGastos) || dataCategoriasGastos.length === 0) {
    console.error('dataCategoriasGastos está vacío o no es un array');
  }
  if (categoriasUnicas.length === 0) {
    console.warn('No se encontraron categorías únicas en dataCategoriasGastos');
  }

  // Renderizar items del Accordion
  const categoriasRows = categoriasUnicas.map((categoria, index) => {
    // Filtrar los elementos de la categoría actual
    const elementosCategoria = dataCategoriasGastos.filter((item) => item.categoria === categoria);
    return (
      <Accordion.Item key={index} value={categoria}>
        <Accordion.Control>{categoria}</Accordion.Control>
        <Accordion.Panel>
          <Table striped highlightOnHover withColumnBorders>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Emoji</Table.Th>
                <Table.Th>Grupo</Table.Th>
                <Table.Th>Sub-Grupo</Table.Th>
                <Table.Th>Tipo</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {elementosCategoria.map((item) => (
                <Table.Tr key={item.id}>
                  <Table.Td>{item.emoji}</Table.Td>
                  <Table.Td>{item.grupo}</Table.Td>
                  <Table.Td>{item.subgrupo}</Table.Td>
                  <Table.Td>{item.tipo}</Table.Td>
                  <Table.Td>
                    <Accordion variant="unstyled" defaultValue="Apples">
                      <Accordion.Item value={'test'}>
                        <Accordion.Control>testaa2222</Accordion.Control>
                        <Accordion.Panel>testaaa</Accordion.Panel>
                      </Accordion.Item>
                    </Accordion>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Accordion.Panel>
      </Accordion.Item>
    );
  });

  // Renderizar filas de la tabla
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
      <Accordion
        multiple
        value={opened}
        onChange={setOpened}
        defaultValue={categoriasUnicas}
        variant="separated"
      >
        {categoriasRows.length > 0 ? categoriasRows : <div>No hay categorías para mostrar</div>}
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
        <Table.Tbody>{items}</Table.Tbody>
      </Table>
    </>
  );
};

export default CategoriasTable;
