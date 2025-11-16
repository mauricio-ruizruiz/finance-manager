// import React from 'react';
import React, { useState } from 'react';
import {
  IconCalendar,
  IconCalendarDollar,
  IconCalendarFilled,
  IconCashRegister,
  IconNote,
  IconPencil,
} from '@tabler/icons-react';
import { Box, Button, Flex, Group, NumberInput, Popover, Table, Text, Title } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useDisclosure } from '@mantine/hooks';
import categoriasIngresos from '../../../Categorias/Ingresos/dataIngresos';
import classes from './DegloseDeIngresos.module.css';

import 'dayjs/locale/es';

function DesgloseDeIngresos() {
  const [opened, { close, open }] = useDisclosure(false);
  const [activePopover, setActivePopover] = React.useState<number | null>(null);
  return (
    <>
      <Title order={3} my={50}>
        Desglose de Ingresos
      </Title>
      <Table
        // withColumnBorders
        verticalSpacing={8}
        withRowBorders={false}
        // withTableBorder
        styles={{
          tfoot: {
            borderTop: '5px solid #333',
          },
          thead: {
            borderBottom: '5px solid #333',
            backgroundColor: 'var(--mantine-color-dark-6)',
            height: 40,
          },
          // tr: {
          // height:
          // padding: '10px 0', // height: 60,
          // marginTop: 100, // height: 60,
          // },
        }}
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Categoría</Table.Th>
            <Table.Th>
              Fecha Prevista
              {/* <Box
                style={{
                  width: '200px',
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 6,
                }}
              >
                <span>Fecha</span>
                <span>Prevista</span>
              </Box> */}
            </Table.Th>
            <Table.Th>
              Fecha Efectiva
              {/* <Box style={{ display: 'flex', flexDirection: 'row', gap: 6 }}>
                <span>Fecha</span>
                <span>Efectiva</span>
              </Box> */}
            </Table.Th>
            <Table.Th>Nota</Table.Th>
            <Table.Th>Planificado</Table.Th>
            <Table.Th>Real</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {categoriasIngresos.map((categoria) => (
            <Table.Tr key={categoria.id}>
              <Table.Td
                // style={{ width: '100%' }}
                style={{
                  width: '100%',
                  // display: 'flex',
                  // alignItems: 'center',
                  // gap: 10,
                  borderRight: '5px solid var(--mantine-color-dark-5)',
                }}
              >
                <Box style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span>{categoria.icon}</span>
                  <span>{categoria.nombre}</span>
                </Box>
              </Table.Td>
              <Table.Td>
                <DatePickerInput
                  // className={classes.root}
                  // maw={180}
                  valueFormat="DD MMM"
                  locale="es"
                  // label="Pick date"
                  // placeholder="Planificado"
                  placeholder={<IconCalendarDollar size={20} />}
                  // placeholder={
                  //   <>
                  //     <div style={{ display: 'flex', flexDirection: 'row', gap: 6 }}>
                  //       <div style={{ flex: 1 }}></div>
                  //       <IconCalendarDollar size={20} />
                  //       {/* <div>Previsto</div> */}
                  //     </div>
                  //   </>
                  // }
                  clearable
                  variant="filled"
                  size="xs"
                  styles={{
                    input: {
                      width: 100,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      // alignSelf: 'center',
                      // margin: '0 auto',
                      // marginLeft: 50,
                      // color: 'var(--mantine-color-grape-4)', // tu color preferido
                      // color: 'var(--mantine-color-cyan-3)', // tu color preferido
                      // backgroundColor: 'var(--mantine-color-dark-8)', // opcional
                    },
                  }}
                />
              </Table.Td>
              <Table.Td>
                <DatePickerInput
                  // className={classes.root}
                  valueFormat="DD MMM"
                  locale="es"
                  // label="Pick date"
                  placeholder="Actual"
                  placeholder={<IconCalendarFilled size={20} />}
                  size="xs"
                  // variant="filled"
                  disabled
                  // maw={60}
                  styles={{
                    input: {
                      width: 100,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'default',
                      // alignSelf: 'center',
                      // margin: '0 auto',
                      // marginLeft: 50,
                      // color: 'var(--mantine-color-grape-4)', // tu color preferido
                      // color: 'var(--mantine-color-cyan-3)', // tu color preferido
                      // backgroundColor: 'var(--mantine-color-dark-8)', // opcional
                    },
                  }}
                />
              </Table.Td>
              <Table.Td>
                <Popover
                  width={200}
                  position="bottom-start"
                  offset={12}
                  withArrow
                  shadow="md"
                  arrowPosition="side"
                  arrowOffset={5}
                  arrowSize={18}
                  opened={activePopover === categoria.id}
                >
                  <Popover.Target>
                    <Button
                      px={10}
                      // mx={5}
                      onMouseEnter={() => setActivePopover(categoria.id)}
                      onMouseLeave={() => setActivePopover(null)}
                      c={'var(--mantine-color-violet-5)'}
                      variant="light"
                    >
                      <Box
                        style={{
                          width: 50,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 5,
                        }}
                      >
                        <IconNote size={20} />
                        {/* <span>{'Notas '}</span> */}
                      </Box>
                    </Button>
                  </Popover.Target>
                  <Popover.Dropdown style={{ pointerEvents: 'none' }}>
                    <Text size="sm">😀 Ejemplo de Nota de Ingresos 💵</Text>
                  </Popover.Dropdown>
                </Popover>
              </Table.Td>
              <Table.Td>
                <NumberInput
                  // label="Planificado"
                  prefix="$"
                  placeholder="$0.00"
                  decimalScale={2}
                  thousandSeparator=","
                  hideControls
                  leftSection={<IconCalendarDollar size={20} />}
                  withKeyboardEvents={false}
                  style={{
                    width: 80,
                    input: {
                      // width: 100,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                  }}
                ></NumberInput>
              </Table.Td>
              <Table.Td>
                <NumberInput
                  // maw={80}
                  // label="Planificado"
                  prefix="$"
                  placeholder="$0.00"
                  decimalScale={2}
                  thousandSeparator=","
                  hideControls
                  disabled
                  leftSection={<IconCashRegister size={20} />}
                  withKeyboardEvents={false}
                  style={{
                    width: 80,
                    // width: '100%',
                    // display: 'flex',
                    // alignItems: 'center',
                    justifyContent: 'end',
                    // root: {
                    //   width: '100%',
                    //   display: 'flex',
                    //   alignItems: 'center',
                    //   justifyContent: 'end',
                    // },
                  }}
                ></NumberInput>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
        <Table.Tfoot>
          <Table.Tr h={75} bg=" var(--mantine-color-dark-8)">
            <Table.Td colSpan={4}>
              <Text fw={900}>TOTAL</Text>
            </Table.Td>
            <Table.Td>
              <NumberInput
                // style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                // label="Planificado"
                prefix="$"
                placeholder="$0.00"
                decimalScale={2}
                thousandSeparator=","
                hideControls
                leftSection={<IconCalendarDollar size={20} />}
                withKeyboardEvents={false}
                style={{
                  // width: 80,
                  input: {
                    // width: 100,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                }}
              ></NumberInput>
            </Table.Td>
            <Table.Td>
              <NumberInput
                // maw={80}
                // label="Planificado"
                prefix="$"
                placeholder="$0.00"
                decimalScale={2}
                thousandSeparator=","
                hideControls
                disabled
                leftSection={<IconCashRegister size={20} />}
                withKeyboardEvents={false}
                style={{
                  width: 80,
                  // width: '100%',
                  // display: 'flex',
                  // alignItems: 'center',
                  justifyContent: 'end',
                  // root: {
                  //   width: '100%',
                  //   display: 'flex',
                  //   alignItems: 'center',
                  //   justifyContent: 'end',
                  // },
                }}
              ></NumberInput>
            </Table.Td>
          </Table.Tr>
        </Table.Tfoot>
      </Table>
    </>
  );
}

export default DesgloseDeIngresos;
