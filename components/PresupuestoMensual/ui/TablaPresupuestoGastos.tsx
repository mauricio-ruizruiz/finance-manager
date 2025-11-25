import React, { useState } from 'react';
import { Accordion, Table, Title } from '@mantine/core';
import BotonControlAcordeon from './BotonControlAcordeon';
import CantidadEstimada from './CantidadEstimada';
import CantidadFinal from './CantidadFinal';
import CeldaCategoria from './CeldaCategoria';
import FilaTotalTabla from './FilaTotalTabla';

interface TablaPresupuestoProps {
  encabezado: string;
  columnas: string[];
  categorias: any[];
}
const TablaPresupuestoGastos = ({ encabezado, columnas, categorias }: TablaPresupuestoProps) => {
  const [value, setValue] = useState<string[]>([]);
  const [grupoValue, setGrupoValue] = useState<string[]>([]);
  return (
    <>
      <Table captionSide="top">
        <Table.Caption>
          <Title
            style={{ letterSpacing: '.4rem', fontVariant: 'all-small-caps', lineHeight: 2 }}
            order={3}
            fz={25}
            fw={900}
            c="dimmed"
            ta="center"
            //   mb={10}
            bg="var(--mantine-color-dark-9)"
            pb={5}
          >
            {encabezado}
          </Title>
        </Table.Caption>
        <Table.Thead>
          <Table.Tr>
            {columnas.map((columna) => (
              <Table.Th key={columna}>{columna}</Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {categorias.map((categoria) => (
            <>
              <Table.Tr key={categoria.id}>
                <Table.Td style={{ width: 70 }}>
                  <BotonControlAcordeon
                    onClick={() =>
                      setValue(
                        value.includes(categoria.categoria)
                          ? value.filter((v: string) => v !== categoria.categoria)
                          : [...value, categoria.categoria]
                      )
                    }
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
                (grupo.tipo === 'Gasto Fijo' &&
                  (!grupo.subgrupos || grupo.subgrupos.length === 0)) ||
                (grupo.tipo === '' &&
                  grupo.subgrupos &&
                  grupo.subgrupos.some((subgrupo: any) => subgrupo.tipo === 'Gasto Fijo')) ? (
                  <React.Fragment key={grupo.id}>
                    <Table.Tr
                      style={{
                        backgroundColor: 'var(--mantine-color-dark-9)',
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
                                    <Table.Td style={{ width: 80 }}>
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
                                      <CeldaCategoria icon={grupo.grupoicon} nombre={grupo.grupo} />
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
                          subgrupo.tipo === 'Gasto Fijo' ? (
                            <Table.Tr
                              style={{
                                backgroundColor: 'var(--mantine-color-dark-8)',
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
        <FilaTotalTabla colspan={4} />
      </Table>
    </>
  );
};

export default TablaPresupuestoGastos;
