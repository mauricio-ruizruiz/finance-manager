import React, { useState } from 'react';
import {
  IconCalendar,
  IconCalendarDollar,
  IconCalendarFilled,
  IconCashRegister,
  IconNote,
  IconPencil,
  IconPlus,
  IconSquareChevronDown,
} from '@tabler/icons-react';
import {
  Accordion,
  Box,
  Button,
  Flex,
  Group,
  NumberInput,
  Popover,
  Table,
  Text,
  Title,
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useDisclosure } from '@mantine/hooks';
import categoriasIngresos from '../../../Categorias/Ingresos/dataIngresos';
import classes from './DegloseDeIngresos.module.css';

import 'dayjs/locale/es';

function DesgloseDeIngresos() {
  const [value, setValue] = useState<string | null>(null);
  const [opened, { close, open }] = useDisclosure(false);
  const [activePopover, setActivePopover] = React.useState<number | null>(null);
  return (
    <>
      <Title order={3} my={50}>
        Desglose de Ingresos
      </Title>
      <Table
        verticalSpacing={8}
        withRowBorders={false}
        styles={{
          tfoot: {
            borderTop: '5px solid #333',
          },
          thead: {
            borderBottom: '5px solid #333',
            backgroundColor: 'var(--mantine-color-dark-6)',
            height: 40,
          },
        }}
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={{ width: '60px' }}></Table.Th>
            <Table.Th>Categoría</Table.Th>
            <Table.Th>Fecha Prevista</Table.Th>
            <Table.Th>Fecha Efectiva</Table.Th>
            <Table.Th>Nota</Table.Th>
            <Table.Th>Cantidad Estimada</Table.Th>
            <Table.Th>Cantidad Final</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {categoriasIngresos.map((categoria) =>
            categoria.subcategorias && categoria.subcategorias.length > 0 ? (
              <React.Fragment key={categoria.id}>
                <Table.Tr>
                  <Table.Td>
                    <Button
                      variant="subtle"
                      size="xs"
                      onClick={() => setValue(value === categoria.nombre ? null : categoria.nombre)}
                    >
                      <IconSquareChevronDown size={20} />
                    </Button>
                  </Table.Td>
                  <Table.Td>
                    <Box style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span>{categoria.icon}</span>
                      <span>{categoria.nombre}</span>
                    </Box>
                  </Table.Td>
                  <Table.Td></Table.Td>
                  <Table.Td></Table.Td>
                  <Table.Td></Table.Td>
                  <Table.Td>
                    <NumberInput
                      prefix="$"
                      placeholder="$0.00"
                      decimalScale={2}
                      thousandSeparator=","
                      hideControls
                      leftSection={<IconCalendarDollar size={20} />}
                      withKeyboardEvents={false}
                      style={{
                        width: 100,
                        input: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                      }}
                    />
                  </Table.Td>
                  <Table.Td>
                    <NumberInput
                      prefix="$"
                      placeholder="$0.00"
                      decimalScale={2}
                      thousandSeparator=","
                      hideControls
                      disabled
                      leftSection={<IconCashRegister size={20} />}
                      withKeyboardEvents={false}
                      style={{ width: 100, justifyContent: 'end' }}
                    />
                  </Table.Td>
                </Table.Tr>

                <Table.Tr>
                  <Table.Td colSpan={7} px={0}>
                    <Accordion
                      unstyled
                      multiple
                      value={value}
                      onChange={setValue}
                      styles={{
                        content: {
                          paddingLeft: 0,
                          paddingRight: 0,
                        },
                        item: {
                          borderBottom: 'none',
                          // backgroundColor: 'var(--mantine-color-pink-7)',
                        },
                      }}
                    >
                      <Accordion.Item value={categoria.nombre}>
                        {/* <Accordion.Control></Accordion.Control> */}
                        <Accordion.Panel>
                          <Table verticalSpacing={8} withRowBorders={false}>
                            <Table.Tbody>
                              {categoria.subcategorias.map((sub) => (
                                <>
                                  <Table.Tr key={sub.id}>
                                    <Table.Td
                                      style={{
                                        display: 'inline-table',
                                        width: '80px',
                                      }}
                                    ></Table.Td>
                                    <Table.Td
                                      style={{
                                        width: '100%',
                                      }}
                                    >
                                      <Box
                                        style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                                      >
                                        <span>{sub.icon}</span>
                                        <span>{sub.nombre}</span>
                                      </Box>
                                    </Table.Td>
                                    <Table.Td>
                                      <DatePickerInput
                                        valueFormat="DD MMM"
                                        locale="es"
                                        placeholder="Planificado"
                                        clearable
                                        variant="filled"
                                        size="xs"
                                        styles={{
                                          input: {
                                            width: 100,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                          },
                                        }}
                                      />
                                    </Table.Td>
                                    <Table.Td>
                                      <DatePickerInput
                                        valueFormat="DD MMM"
                                        locale="es"
                                        placeholder="Actual"
                                        size="xs"
                                        disabled
                                        styles={{
                                          input: {
                                            width: 100,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'default',
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
                                        opened={activePopover === sub.id}
                                      >
                                        <Popover.Target>
                                          <Button
                                            px={10}
                                            onMouseEnter={() => setActivePopover(sub.id)}
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
                                        prefix="$"
                                        placeholder="$0.00"
                                        decimalScale={2}
                                        thousandSeparator=","
                                        hideControls
                                        leftSection={<IconCalendarDollar size={20} />}
                                        withKeyboardEvents={false}
                                        style={{
                                          width: 100,
                                          input: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                          },
                                        }}
                                      />
                                    </Table.Td>
                                    <Table.Td>
                                      <NumberInput
                                        prefix="$"
                                        placeholder="$0.00"
                                        decimalScale={2}
                                        thousandSeparator=","
                                        hideControls
                                        disabled
                                        leftSection={<IconCashRegister size={20} />}
                                        withKeyboardEvents={false}
                                        style={{ width: 100, justifyContent: 'end' }}
                                      />
                                    </Table.Td>
                                  </Table.Tr>
                                </>
                              ))}
                            </Table.Tbody>
                          </Table>
                        </Accordion.Panel>
                      </Accordion.Item>
                    </Accordion>
                  </Table.Td>
                </Table.Tr>
              </React.Fragment>
            ) : (
              <Table.Tr key={categoria.id}>
                <Table.Td></Table.Td>
                <Table.Td
                  style={{
                    width: '100%',
                    // borderRight: '5px solid var(--mantine-color-dark-5)',
                  }}
                >
                  <Box style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span>{categoria.icon}</span>
                    <span>{categoria.nombre}</span>
                  </Box>
                </Table.Td>
                <Table.Td>
                  <DatePickerInput
                    valueFormat="DD MMM"
                    locale="es"
                    placeholder="Planificado"
                    clearable
                    variant="filled"
                    size="xs"
                    styles={{
                      input: {
                        width: 100,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      },
                    }}
                  />
                </Table.Td>
                <Table.Td>
                  <DatePickerInput
                    valueFormat="DD MMM"
                    locale="es"
                    placeholder="Actual"
                    size="xs"
                    disabled
                    styles={{
                      input: {
                        width: 100,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'default',
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
                    prefix="$"
                    placeholder="$0.00"
                    decimalScale={2}
                    thousandSeparator=","
                    hideControls
                    leftSection={<IconCalendarDollar size={20} />}
                    withKeyboardEvents={false}
                    style={{
                      width: 100,
                      input: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
                    }}
                  />
                </Table.Td>
                <Table.Td>
                  <NumberInput
                    prefix="$"
                    placeholder="$0.00"
                    decimalScale={2}
                    thousandSeparator=","
                    hideControls
                    disabled
                    leftSection={<IconCashRegister size={20} />}
                    withKeyboardEvents={false}
                    style={{ width: 100, justifyContent: 'end' }}
                  />
                </Table.Td>
              </Table.Tr>
            )
          )}
        </Table.Tbody>
        <Table.Tfoot>
          <Table.Tr h={75} bg=" var(--mantine-color-dark-8)">
            <Table.Td></Table.Td>
            <Table.Td colSpan={4}>
              <Text fw={900}>TOTAL</Text>
            </Table.Td>
            <Table.Td>
              <NumberInput
                prefix="$"
                placeholder="$0.00"
                decimalScale={2}
                thousandSeparator=","
                hideControls
                leftSection={<IconCalendarDollar size={20} />}
                withKeyboardEvents={false}
                style={{
                  input: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                }}
              ></NumberInput>
            </Table.Td>
            <Table.Td>
              <NumberInput
                prefix="$"
                placeholder="$0.00"
                decimalScale={2}
                thousandSeparator=","
                hideControls
                disabled
                leftSection={<IconCashRegister size={20} />}
                withKeyboardEvents={false}
                style={{
                  width: 100,
                  justifyContent: 'end',
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
