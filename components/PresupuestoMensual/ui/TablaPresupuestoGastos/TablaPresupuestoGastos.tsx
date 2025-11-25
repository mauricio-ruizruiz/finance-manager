import React, { useState } from 'react';
import { Accordion, Paper, Table, Text, Title } from '@mantine/core';
import BotonControlAcordeon from '../BotonControlAcordeon';
import CantidadEstimada from '../CantidadEstimada';
import CantidadFinal from '../CantidadFinal';
import CeldaCategoria from '../CeldaCategoria';
import FechaEfectiva from '../FechaEfectiva';
import FechaPrevista from '../FechaPrevista';

interface TablaPresupuestoProps {
  encabezado: string;
  columnas: string[];
  categorias: any[];
  tipoDeGasto: string;
}
const TablaPresupuestoGastos = ({
  encabezado,
  columnas,
  categorias,
  tipoDeGasto,
}: TablaPresupuestoProps) => {
  // All category names for initial open state
  const allCategoryNames = categorias.map((cat) => cat.categoria);
  // All group names for initial open state
  const allGroupNames = categorias.flatMap((cat) => cat.grupos?.map((g: any) => g.grupo) ?? []);
  const [value, setValue] = useState<string[]>(allCategoryNames);
  const [grupoValue, setGrupoValue] = useState<string[]>(allGroupNames);

  // Helper: get all group names for a category
  const getGroupNamesForCategory = (categoria: string) => {
    const cat = categorias.find((c) => c.categoria === categoria);
    return cat?.grupos?.map((g: any) => g.grupo) ?? [];
  };
  // Helper: get all subgroup names for a category
  const getSubgroupNamesForCategory = (categoria: string) => {
    const cat = categorias.find((c) => c.categoria === categoria);
    return (
      cat?.grupos?.flatMap((g: any) =>
        Array.isArray(g.subgrupos) ? g.subgrupos.map((sg: any) => sg.subgrupo) : []
      ) ?? []
    );
  };

  // Custom handler for category accordion
  const handleCategoryAccordion = (categoria: string) => {
    if (value.includes(categoria)) {
      // Closing: remove category, and also remove all its groups and subgroups from grupoValue
      setValue(value.filter((v) => v !== categoria));
      setGrupoValue(
        grupoValue.filter(
          (g) =>
            !getGroupNamesForCategory(categoria).includes(g) &&
            !getSubgroupNamesForCategory(categoria).includes(g)
        )
      );
    } else {
      // Opening: add category, and also open all its groups and subgroups
      setValue([...value, categoria]);
      setGrupoValue([
        ...grupoValue,
        ...getGroupNamesForCategory(categoria).filter((g: any) => !grupoValue.includes(g)),
        ...getSubgroupNamesForCategory(categoria).filter((sg: any) => !grupoValue.includes(sg)),
      ]);
    }
  };
  return (
    <>
      <Paper shadow="xl" withBorder p="xl">
        <Table captionSide="top" withRowBorders={false}>
          <Table.Caption>
            <Title
              style={{ letterSpacing: '.4rem', fontVariant: 'all-small-caps', lineHeight: 2 }}
              order={3}
              fz={25}
              fw={900}
              c="dimmed"
              ta="center"
              //   mb={10}
              // bg="var(--mantine-color-dark-9)"
              pb={5}
            >
              {encabezado}
            </Title>
          </Table.Caption>
          <Table.Thead>
            <Table.Tr>
              <Table.Th></Table.Th>
              <Table.Th></Table.Th>
              <Table.Th></Table.Th>
              <Table.Th style={{ width: 125 }}>Fecha Prevista</Table.Th>
              <Table.Th style={{ width: 125 }}>Fecha Efectiva</Table.Th>
              <Table.Th style={{ width: 125 }}>Cantidad Estimada</Table.Th>
              <Table.Th style={{ width: 125 }}>Cantidad Final</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {categorias.map((categoria) => (
              <>
                <Table.Tr key={categoria.id}>
                  <Table.Td style={{ width: 70 }}>
                    <BotonControlAcordeon
                      onClick={() => handleCategoryAccordion(categoria.categoria)}
                    />
                  </Table.Td>
                  <Table.Td colSpan={4}>
                    <CeldaCategoria icon={categoria.categoriaicon} nombre={categoria.categoria} />
                  </Table.Td>
                  <Table.Td style={{ width: 125 }}>
                    <CantidadEstimada />
                  </Table.Td>
                  <Table.Td style={{ width: 125 }}>
                    <CantidadFinal />
                  </Table.Td>
                </Table.Tr>
                {categoria.grupos.map((grupo: any) =>
                  (grupo.tipo === tipoDeGasto &&
                    (!grupo.subgrupos || grupo.subgrupos.length === 0)) ||
                  (grupo.tipo === '' &&
                    grupo.subgrupos &&
                    grupo.subgrupos.some((subgrupo: any) => subgrupo.tipo === tipoDeGasto)) ? (
                    <React.Fragment key={grupo.id}>
                      <Table.Tr
                        style={{
                          // backgroundColor: 'var(--mantine-color-dark-9)',
                          height: value.includes(categoria.categoria) ? 'auto' : 0,
                        }}
                      >
                        <Table.Td colSpan={7} px={0} py={0}>
                          <Accordion
                            unstyled
                            multiple
                            value={value}
                            onChange={setValue}
                            styles={{
                              content: {
                                // paddingLeft: 0,
                                // paddingRight: 0,
                              },
                              item: {
                                borderBottom: 'none',
                              },
                            }}
                          >
                            <Accordion.Item value={categoria.categoria}>
                              <Accordion.Panel>
                                <Table>
                                  <Table.Tbody>
                                    <Table.Tr>
                                      <Table.Td style={{ width: 80 }} pl={25}>
                                        {grupo.subgrupos && grupo.subgrupos.length > 0 ? (
                                          <BotonControlAcordeon
                                            onClick={() =>
                                              setGrupoValue(
                                                grupoValue.includes(grupo.grupo)
                                                  ? grupoValue.filter(
                                                      (v: string) => v !== grupo.grupo
                                                    )
                                                  : [...grupoValue, grupo.grupo]
                                              )
                                            }
                                          />
                                        ) : null}
                                      </Table.Td>
                                      <Table.Td>
                                        <CeldaCategoria
                                          icon={grupo.grupoicon}
                                          nombre={grupo.grupo}
                                        />
                                      </Table.Td>
                                      <Table.Td style={{ width: 125 }}>
                                        {grupo.tipo === tipoDeGasto &&
                                        (!grupo.subgrupos || grupo.subgrupos.length === 0) ? (
                                          <FechaPrevista />
                                        ) : null}
                                      </Table.Td>
                                      <Table.Td style={{ width: 125 }}>
                                        {grupo.tipo === tipoDeGasto &&
                                        (!grupo.subgrupos || grupo.subgrupos.length === 0) ? (
                                          <FechaEfectiva />
                                        ) : null}
                                      </Table.Td>
                                      <Table.Td style={{ width: 125 }}>
                                        <CantidadEstimada />
                                      </Table.Td>
                                      <Table.Td style={{ width: 125 }}>
                                        <CantidadFinal />
                                      </Table.Td>
                                    </Table.Tr>
                                  </Table.Tbody>
                                </Table>
                              </Accordion.Panel>
                            </Accordion.Item>
                          </Accordion>
                        </Table.Td>
                      </Table.Tr>
                      {grupo.subgrupos && grupo.subgrupos.length > 0
                        ? grupo.subgrupos.map((subgrupo: any) =>
                            subgrupo.tipo === tipoDeGasto ? (
                              <Table.Tr
                                style={{
                                  // backgroundColor: 'var(--mantine-color-dark-8)',
                                  height: value.includes(categoria.categoria) ? 'auto' : 0,
                                }}
                              >
                                <Table.Td colSpan={7} px={0} py={0}>
                                  <Accordion
                                    unstyled
                                    multiple
                                    value={grupoValue}
                                    onChange={setGrupoValue}
                                    styles={{
                                      content: {
                                        // paddingLeft: 0,
                                        // paddingRight: 0,
                                      },
                                      item: {
                                        borderBottom: 'none',
                                      },
                                    }}
                                  >
                                    <Accordion.Item value={grupo.grupo}>
                                      <Accordion.Panel>
                                        <Table>
                                          <Table.Tbody>
                                            <Table.Tr>
                                              <Table.Td pl={120}>
                                                <CeldaCategoria
                                                  icon={subgrupo.subgrupoicon}
                                                  nombre={subgrupo.subgrupo}
                                                />
                                              </Table.Td>
                                              <Table.Td style={{ width: 125 }}>
                                                <FechaPrevista />
                                              </Table.Td>
                                              <Table.Td style={{ width: 125 }}>
                                                <FechaEfectiva />
                                              </Table.Td>
                                              <Table.Td style={{ width: 125 }}>
                                                <CantidadEstimada />
                                              </Table.Td>
                                              <Table.Td style={{ width: 125 }}>
                                                <CantidadFinal />
                                              </Table.Td>
                                            </Table.Tr>
                                          </Table.Tbody>
                                        </Table>
                                      </Accordion.Panel>
                                    </Accordion.Item>
                                  </Accordion>
                                </Table.Td>
                              </Table.Tr>
                            ) : null
                          )
                        : null}
                    </React.Fragment>
                  ) : null
                )}
              </>
            ))}
          </Table.Tbody>
          <Table.Tfoot>
            <Table.Tr h={75} bg=" var(--mantine-color-dark-8)">
              <Table.Td colSpan={5}>
                <Text fw={900} ta={'right'}>
                  TOTAL
                </Text>
              </Table.Td>
              <Table.Td>
                <CantidadEstimada />
              </Table.Td>
              <Table.Td>
                <CantidadFinal />
              </Table.Td>
            </Table.Tr>
          </Table.Tfoot>
        </Table>
      </Paper>
    </>
  );
};

export default TablaPresupuestoGastos;
