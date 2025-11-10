import { Accordion, Avatar, Group, Stack, Table, Text } from '@mantine/core';
import dataCategoriasGastos from './dataCategoriasGastos';
import classes from './TablaCategoriasGastos.module.css';

const TablaCategoriasGastos = () => {
  return (
    <>
      <Table
        // striped
        // highlightOnHover
        // withColumnBorders
        withRowBorders={false}
        style={{
          width: '100%',
          // maxWidth: '600px'
        }}
      >
        <Table.Tbody>
          {dataCategoriasGastos.map((categoria) => (
            <Table.Tr key={categoria.id}>
              <Table.Td colSpan={7}>
                <Accordion
                  variant="separated"
                  radius="xl"
                  chevronPosition="left"
                  classNames={classes}
                  // chevronIconSize={25}
                  // defaultValue={categoria.categoria}
                >
                  <Accordion.Item key={categoria.id} value={categoria.categoria}>
                    <Accordion.Control>
                      <Group gap="sm" wrap="nowrap">
                        <div style={{ fontSize: '3rem' }}>{categoria.emoji}</div>
                        <div>
                          {/* <Stack gap={4} style={{ width: '70%' }}> */}
                          <Group gap="xl" wrap="nowrap">
                            <Text fz="xl" fw={500}>
                              {categoria.categoria}
                            </Text>
                            <Text c="dimmed" fz="xs">
                              {categoria.descripcion}
                            </Text>
                          </Group>
                          {/* </Stack> */}
                        </div>
                      </Group>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Table
                        // striped
                        // withColumnBorders
                        withRowBorders={false}
                      >
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
                                        <Accordion.Control>
                                          <Group gap="sm" wrap="nowrap">
                                            <div style={{ fontSize: '2.5rem' }}>{grupo.emoji}</div>
                                            <div>
                                              <Stack gap={4} style={{ width: '70%' }}>
                                                <Text fz="sm" fw={500}>
                                                  {grupo.nombre}
                                                </Text>
                                                <Text c="dimmed" fz="xs" style={{ width: '100%' }}>
                                                  {grupo.descripcion}
                                                </Text>
                                              </Stack>
                                            </div>
                                          </Group>
                                        </Accordion.Control>
                                        <Accordion.Panel>
                                          <Table highlightOnHover withRowBorders={false}>
                                            <Table.Tbody>
                                              {subgruposArr.map((subgrupo: any) => (
                                                <Table.Tr key={subgrupo.id}>
                                                  <Table.Td
                                                    style={{
                                                      textAlign: 'left',
                                                    }}
                                                  >
                                                    <Group gap="sm" pl={48} wrap="nowrap">
                                                      <div style={{ fontSize: '2rem' }}>
                                                        {subgrupo.emoji}
                                                      </div>
                                                      <div>
                                                        <Text fz="sm" fw={500}>
                                                          {subgrupo.nombre}
                                                        </Text>
                                                        <Text
                                                          c="dimmed"
                                                          fz="xs"
                                                          style={{ width: '65%' }}
                                                        >
                                                          {subgrupo.descripcion}
                                                        </Text>
                                                      </div>
                                                    </Group>
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
                                  <Table.Td
                                    style={{
                                      textAlign: 'left',
                                    }}
                                  >
                                    <Group gap="sm" pl={48} wrap="nowrap">
                                      <div style={{ fontSize: '2rem', paddingLeft: 0 }}>
                                        {grupo.emoji}
                                      </div>
                                      <div>
                                        <Text fz="sm" fw={500}>
                                          {grupo.nombre}
                                        </Text>
                                        <Text c="dimmed" fz="xs" style={{ width: '80%' }}>
                                          {grupo.descripcion}
                                        </Text>
                                      </div>
                                    </Group>
                                  </Table.Td>
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
    </>
  );
};

export default TablaCategoriasGastos;
