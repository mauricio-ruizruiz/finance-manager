import { Accordion, Table } from '@mantine/core';
import { dataCategoriasGastos } from './dataCategoriasGastos';

const TableCategorias = () => {
  return (
    <Table striped highlightOnHover withColumnBorders>
      {/* <Table.Thead>
        <Table.Tr>
          <Table.Th></Table.Th>
          <Table.Th style={{ textAlign: 'left' }}>Categoría</Table.Th>
          <Table.Th></Table.Th>
          <Table.Th style={{ textAlign: 'left' }}>Grupo</Table.Th>
          <Table.Th></Table.Th>
          <Table.Th style={{ textAlign: 'left' }}>Subgrupo</Table.Th>
          <Table.Th style={{ textAlign: 'left' }}>Tipo</Table.Th>
        </Table.Tr>
      </Table.Thead> */}

      <Table.Tbody>
        {Array.from(
          new Map(dataCategoriasGastos.map((item) => [item.categoria, item])).values()
        ).map((item) => (
          <Table.Tr key={item.categoria}>
            <Table.Td colSpan={7}>
              <Accordion
                variant="unstyled"
                radius="xs"
                chevronPosition="left"
                chevronIconSize={25}
                defaultValue="Apples"
              >
                <Accordion.Item key={item.id} value={item.categoria}>
                  <Accordion.Control icon={item.categoriaEmoji}>{item.categoria}</Accordion.Control>
                  <Accordion.Panel>
                    <Table striped highlightOnHover withColumnBorders>
                      <Table.Tbody>
                        {dataCategoriasGastos
                          .filter((g) => g.categoria === item.categoria)
                          .reduce(
                            (acc, curr) => {
                              if (!acc.some((row) => row.grupo === curr.grupo)) {
                                acc.push({ grupo: curr.grupo, grupoEmoji: curr.grupoEmoji });
                              }
                              return acc;
                            },
                            [] as { grupo: string; grupoEmoji?: string }[]
                          )
                          .map((grupoItem) => (
                            <Table.Tr key={grupoItem.grupo}>
                              <Table.Td>{grupoItem.grupoEmoji}</Table.Td>
                              <Table.Td>{grupoItem.grupo}</Table.Td>
                            </Table.Tr>
                          ))}
                      </Table.Tbody>
                    </Table>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default TableCategorias;
