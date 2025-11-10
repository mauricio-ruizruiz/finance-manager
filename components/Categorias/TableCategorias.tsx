import { Accordion, Table } from '@mantine/core';
import dataCategorias from './data';

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
        {dataCategorias.map((categoria) => (
          <Table.Tr key={categoria.id}>
            <Table.Td colSpan={7}>
              <Accordion
                variant="unstyled"
                radius="xs"
                chevronPosition="left"
                chevronIconSize={25}
                // defaultValue={categoria.categoria}
              >
                <Accordion.Item key={categoria.id} value={categoria.categoria}>
                  <Accordion.Control icon={categoria.categoriaEmoji}>
                    {categoria.categoria}
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Table striped highlightOnHover withColumnBorders>
                      <Table.Tbody>
                        {categoria.grupos.map((grupo) => {
                          const subgruposArr =
                            categoria.subgrupos && (categoria.subgrupos as any)[grupo.nombre];
                          if (Array.isArray(subgruposArr) && subgruposArr.length > 0) {
                            return (
                              <Table.Tr key={grupo.id}>
                                <Table.Td colSpan={2}>
                                  <Accordion
                                    variant="unstyled"
                                    radius="xs"
                                    chevronPosition="left"
                                    chevronIconSize={20}
                                  >
                                    <Accordion.Item key={grupo.id} value={grupo.nombre}>
                                      <Accordion.Control icon={grupo.emoji}>
                                        {grupo.nombre}
                                      </Accordion.Control>
                                      <Accordion.Panel>
                                        <Table striped highlightOnHover withColumnBorders>
                                          <Table.Tbody>
                                            {subgruposArr.map((subgrupo: any) => (
                                              <Table.Tr key={subgrupo.id}>
                                                <Table.Td style={{ paddingLeft: 32 }}>
                                                  {subgrupo.nombre}
                                                </Table.Td>
                                                <Table.Td style={{ paddingLeft: 32 }}>
                                                  {subgrupo.subgrupoEmoji}
                                                </Table.Td>
                                              </Table.Tr>
                                            ))}
                                          </Table.Tbody>
                                        </Table>
                                      </Accordion.Panel>
                                    </Accordion.Item>
                                  </Accordion>
                                </Table.Td>
                              </Table.Tr>
                            );
                          } else {
                            return (
                              <Table.Tr key={grupo.id}>
                                <Table.Td>{grupo.nombre}</Table.Td>
                                <Table.Td>{grupo.emoji}</Table.Td>
                              </Table.Tr>
                            );
                          }
                        })}
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
