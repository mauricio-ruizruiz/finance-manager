import React, { useState } from 'react';
import {
  IconCaretRight,
  IconCaretRightFilled,
  IconCrop169Filled,
  IconDots,
  IconNote,
  IconSquare,
} from '@tabler/icons-react';
import { input } from '@testing-library/user-event/dist/types/event';
import { color } from 'storybook/internal/theming';
import {
  Badge,
  Box,
  Card,
  Container,
  NativeSelect,
  Pill,
  Table,
  Text,
  TextInput,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import CantidadFinal from './CantidadFinal';
import FechaEfectiva from './FechaEfectiva';

// Devuelve un color aleatorio entre tres opciones de Mantine
function getRandomEtiquetaColor() {
  const colors = ['blue', 'grape', 'teal', 'orange', 'cyan', 'lime', 'pink'];
  return colors[Math.floor(Math.random() * colors.length)];
}

const transacciones = [
  {
    fecha: new Date('2025-11-02'),
    tipo: 'AHORRO',
    cuenta: 'DEBITO NU',
    categoria: 'Alimentos',
    categoriaicon: '🍽️',
    subcategoria: 'Comida',
    subcategoriaicon: '🌮',
    subgrupo: 'A Domicilio',
    subgrupoicon: '🏠',
    etiquetas: [],
    metodoPago: 'TD',
    nota: 'Tacos 🌮',
    cantidad: '150.00',
  },
  {
    fecha: new Date('2025-11-02'),
    tipo: 'GASTO',
    cuenta: 'CREDITO BBVA',
    categoria: 'Transporte',
    categoriaicon: '🚗',
    subcategoria: 'Gasolina',
    subcategoriaicon: '⛽',
    subgrupo: 'Auto',
    subgrupoicon: '🚙',
    etiquetas: ['Personal', 'Viaje', 'Urgente'],
    metodoPago: 'TC',
    nota: 'Carga de gasolina',
    cantidad: '600.00',
  },
  {
    fecha: new Date('2025-11-03'),
    tipo: 'INGRESO',
    cuenta: 'VALES',
    categoria: 'Nómina',
    categoriaicon: '💼',
    subcategoria: 'Catorcena 1',
    subcategoriaicon: '1️⃣',
    subgrupo: '',
    subgrupoicon: '',
    etiquetas: ['Trabajo', 'Sueldo'],
    metodoPago: 'Web',
    nota: 'Pago de nómina',
    cantidad: '12000.00',
  },
  {
    fecha: new Date('2025-11-04'),
    tipo: 'GASTO',
    cuenta: 'DEBITO NU',
    categoria: 'Vivienda',
    categoriaicon: '🏠',
    subcategoria: 'Renta',
    subcategoriaicon: '🏠',
    subgrupo: '',
    subgrupoicon: '',
    etiquetas: ['Mensual', 'Renta'],
    metodoPago: 'Transferencia',
    nota: 'Pago de renta',
    cantidad: '7000.00',
  },
  {
    fecha: new Date('2025-11-05'),
    tipo: 'GASTO',
    cuenta: 'VALES',
    categoria: 'Entretenimiento',
    categoriaicon: '🎮',
    subcategoria: 'Cine',
    subcategoriaicon: '🎬',
    subgrupo: '',
    subgrupoicon: '',
    etiquetas: ['Ocio', 'Diversión'],
    metodoPago: 'Cupón',
    nota: 'Película en cine',
    cantidad: '180.00',
  },
  {
    fecha: new Date('2025-11-06'),
    tipo: 'AHORRO',
    cuenta: 'DEBITO BBVA',
    categoria: 'Regalos',
    categoriaicon: '🎁',
    subcategoria: '',
    subcategoriaicon: '',
    subgrupo: '',
    subgrupoicon: '',
    etiquetas: ['Extra'],
    metodoPago: 'Movil',
    nota: 'Regalo de cumpleaños',
    cantidad: '500.00',
  },
  {
    fecha: new Date('2025-11-07'),
    tipo: 'GASTO',
    cuenta: 'CREDITO BBVA',
    categoria: 'Salud',
    categoriaicon: '🩺',
    subcategoria: 'Medicinas',
    subcategoriaicon: '💊',
    subgrupo: '',
    subgrupoicon: '',
    etiquetas: ['Farmacia', 'Salud'],
    metodoPago: 'TC',
    nota: 'Compra de medicinas',
    cantidad: '350.00',
  },
  {
    fecha: new Date('2025-11-08'),
    tipo: 'GASTO',
    cuenta: 'DEBITO NU',
    categoria: 'Educación',
    categoriaicon: '📚',
    subcategoria: 'Libros',
    subcategoriaicon: '📖',
    subgrupo: '',
    subgrupoicon: '',
    etiquetas: ['Estudio', 'Libros'],
    metodoPago: 'Efectivo',
    nota: 'Compra de libros',
    cantidad: '400.00',
  },
  {
    fecha: new Date('2025-11-09'),
    tipo: 'GASTO',
    cuenta: 'VALES',
    categoria: 'Alimentos',
    categoriaicon: '🍽️',
    subcategoria: 'Comida',
    subcategoriaicon: '🌮',
    subgrupo: 'Restaurante',
    subgrupoicon: '🍴',
    etiquetas: ['Ocasional'],
    metodoPago: 'TC',
    nota: 'Cena en restaurante',
    cantidad: '600.00',
  },
  {
    fecha: new Date('2025-11-10'),
    tipo: 'AHORRO',
    cuenta: 'DEBITO NU',
    categoria: 'Venta',
    categoriaicon: '🛒',
    subcategoria: '',
    subcategoriaicon: '',
    subgrupo: '',
    subgrupoicon: '',
    etiquetas: [],
    metodoPago: 'TD',
    nota: 'Venta de artículo usado',
    cantidad: '800.00',
  },
  {
    fecha: new Date('2025-11-11'),
    tipo: 'GASTO',
    cuenta: 'DEBITO BBVA',
    categoria: 'Transporte',
    categoriaicon: '🚗',
    subcategoria: 'Taxi',
    subcategoriaicon: '🚕',
    subgrupo: '',
    subgrupoicon: '',
    etiquetas: ['Urgente', 'Taxi'],
    metodoPago: 'Cupón',
    nota: 'Taxi por emergencia',
    cantidad: '120.00',
  },
  {
    fecha: new Date('2025-11-12'),
    tipo: 'GASTO',
    cuenta: 'CREDITO BBVA',
    categoria: 'Entretenimiento',
    categoriaicon: '🎮',
    subcategoria: 'Videojuegos',
    subcategoriaicon: '🕹️',
    subgrupo: '',
    subgrupoicon: '',
    etiquetas: ['Ocio', 'Videojuegos'],
    metodoPago: 'Movil',
    nota: 'Compra de videojuego',
    cantidad: '1200.00',
  },
  {
    fecha: new Date('2025-11-13'),
    tipo: 'GASTO',
    cuenta: 'DEBITO BBVA',
    categoria: 'Vivienda',
    categoriaicon: '🏠',
    subcategoria: 'Servicios',
    subcategoriaicon: '💡',
    subgrupo: '',
    subgrupoicon: '',
    etiquetas: ['Mensual', 'Servicios'],
    metodoPago: 'Web',
    nota: 'Pago de luz',
    cantidad: '350.00',
  },
  {
    fecha: new Date('2025-11-14'),
    tipo: 'GASTO',
    cuenta: 'DEBITO BBVA',
    categoria: 'Alimentos',
    categoriaicon: '🍽️',
    subcategoria: 'Comida',
    subcategoriaicon: '🌮',
    subgrupo: 'Supermercado',
    subgrupoicon: '🛒',
    etiquetas: ['Mensual', 'Despensa'],
    metodoPago: 'TD',
    nota: 'Despensa mensual',
    cantidad: '1800.00',
  },
  {
    fecha: new Date('2025-11-15'),
    tipo: 'AHORRO',
    cuenta: 'DEBITO BBVA',
    categoria: 'Apoyo Familiar',
    categoriaicon: '🤝',
    subcategoria: '',
    subcategoriaicon: '',
    subgrupo: '',
    subgrupoicon: '',
    etiquetas: ['Familiar', 'Apoyo'],
    metodoPago: 'Transferencia',
    nota: 'Apoyo de padres',
    cantidad: '2000.00',
  },
  {
    fecha: new Date('2025-11-16'),
    tipo: 'GASTO',
    cuenta: 'CREDITO NU',
    categoria: 'Educación',
    categoriaicon: '📚',
    subcategoria: 'Curso',
    subcategoriaicon: '🎓',
    subgrupo: '',
    subgrupoicon: '',
    etiquetas: ['Estudio', 'Curso'],
    metodoPago: 'Cupón',
    nota: 'Pago de curso',
    cantidad: '900.00',
  },
  {
    fecha: new Date('2025-11-17'),
    tipo: 'GASTO',
    cuenta: 'DEBITO BBVA',
    categoria: 'Salud',
    categoriaicon: '🩺',
    subcategoria: 'Consulta',
    subcategoriaicon: '👨‍⚕️',
    subgrupo: '',
    subgrupoicon: '',
    etiquetas: ['Doctor', 'Consulta'],
    metodoPago: 'Movil',
    nota: 'Consulta médica',
    cantidad: '500.00',
  },
  {
    fecha: new Date('2025-11-18'),
    tipo: 'AHORRO',
    cuenta: 'DEBITO BBVA',
    categoria: 'Transporte',
    categoriaicon: '🚗',
    subcategoria: 'Metro',
    subcategoriaicon: '🚇',
    subgrupo: '',
    subgrupoicon: '',
    etiquetas: [],
    metodoPago: 'Web',
    nota: 'Viaje en metro',
    cantidad: '30.00',
  },
  {
    fecha: new Date('2025-11-19'),
    tipo: 'GASTO',
    cuenta: 'CREDITO NU',
    categoria: 'Entretenimiento',
    categoriaicon: '🎮',
    subcategoria: 'Concierto',
    subcategoriaicon: '🎤',
    subgrupo: '',
    subgrupoicon: '',
    etiquetas: ['Ocio', 'Concierto'],
    metodoPago: 'TC',
    nota: 'Entrada a concierto',
    cantidad: '900.00',
  },
  {
    fecha: new Date('2025-11-20'),
    tipo: 'INGRESO',
    cuenta: 'DEBITO BBVA',
    categoria: 'Prestamos',
    categoriaicon: '💸',
    subcategoria: '',
    subcategoriaicon: '',
    subgrupo: '',
    subgrupoicon: '',
    etiquetas: ['Extra', 'Prestamo'],
    metodoPago: 'Transferencia',
    nota: 'Devolución de préstamo',
    cantidad: '1000.00',
  },
];

const TablaTransacciones = () => {
  return (
    <>
      <Table
        captionSide="top"
        withColumnBorders
        withTableBorder
        highlightOnHover
        highlightOnHoverColor="var(--mantine-color-dark-8)"
      >
        <Table.Caption>
          <Text
            fz="lg"
            style={{ letterSpacing: '.4rem', fontVariant: 'all-small-caps', lineHeight: 2 }}
          >
            Transacciones
          </Text>
        </Table.Caption>
        <Table.Thead>
          <Table.Tr>
            <Table.Th
              // w={'500px'}
              style={{
                width: 100,
              }}
              fz="xs"
            >
              Fecha
            </Table.Th>
            <Table.Th
              style={{
                // width: '80px',
                width: 100,
                // backgroundColor: 'var(--mantine-color-dark-8)',
              }}
              fz="xs"
            >
              Transacción
            </Table.Th>
            <Table.Th
              style={{
                // width: 120,
                minWidth: 120,
                // backgroundColor: 'var(--mantine-color-dark-8)',
              }}
              fz="xs"
            >
              Cuenta
            </Table.Th>
            <Table.Th>Categoria</Table.Th>
            <Table.Th>{'Etiquetas'}</Table.Th>
            <Table.Th>Forma</Table.Th>
            <Table.Th style={{ minWidth: 120 }}>Nota</Table.Th>
            <Table.Th>Cantidad</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {transacciones.map((transaccion, idx) => (
            <Table.Tr key={idx}>
              <Table.Td>
                <FechaEfectiva value={transaccion.fecha} />
              </Table.Td>
              <Table.Td>
                <Badge
                  size="sm"
                  variant="transparent"
                  color={
                    transaccion.tipo === 'GASTO'
                      ? 'var(--mantine-color-red-7)'
                      : transaccion.tipo === 'INGRESO'
                        ? 'var(--mantine-color-green-5)'
                        : 'var(--mantine-color-violet-5)'
                  }
                >
                  {/* <IconCrop169Filled></IconCrop169Filled> */}
                  {transaccion.tipo}
                </Badge>
              </Table.Td>
              <Table.Td>
                <Badge
                  size="sm"
                  radius={'sm'}
                  // variant="gradient"
                  variant="filled"
                  color={
                    transaccion.cuenta === 'DEBITO NU'
                      ? 'var(--mantine-color-violet-6)'
                      : transaccion.cuenta === 'CREDITO NU'
                        ? 'var(--mantine-color-grape-6)'
                        : transaccion.cuenta === 'DEBITO BBVA'
                          ? 'var(--mantine-color-cyan-6)'
                          : transaccion.cuenta === 'CREDITO BBVA'
                            ? 'var(--mantine-color-blue-6)'
                            : transaccion.cuenta === 'VALES'
                              ? 'var(--mantine-color-pink-6)'
                              : undefined
                  }
                  //TODO: definir colores dark/light mode
                  c="var(--mantine-color-dark-9)"
                  autoContrast
                  styles={{
                    root: {
                      justifyContent: 'left',
                    },
                    label: {
                      marginLeft: 2,
                    },
                  }}
                  // w={100}
                >
                  {transaccion.cuenta}
                </Badge>
              </Table.Td>
              <Table.Td>
                <Box
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5,
                  }}
                >
                  <Box component="span" lh={1.5} fz={'xl'}>
                    {transaccion.categoriaicon}
                  </Box>
                  <Box component="span" pl={8} fw={500} lh={1.5} fz={'sm'}>
                    {transaccion.categoria}
                  </Box>
                  {transaccion.subcategoria && transaccion.subcategoria !== '' && (
                    <>
                      <IconCaretRightFilled
                        size={15}
                        stroke={1}
                        color="var(--mantine-color-text)"
                      />
                      <Box component="span" lh={1.5} fz={'sm'} fw={500}>
                        {transaccion.subcategoria}
                      </Box>
                      {transaccion.subgrupo && transaccion.subgrupo !== '' && (
                        <>
                          <IconCaretRightFilled
                            size={15}
                            stroke={1}
                            color="var(--mantine-color-text)"
                          />
                          <Box component="span" lh={1.5} fz={'sm'} fw={500}>
                            {transaccion.subgrupo}
                          </Box>
                        </>
                      )}
                    </>
                  )}
                </Box>
              </Table.Td>
              <Table.Td>
                {transaccion.etiquetas.flatMap((etiqueta, i) => (
                  <Pill
                    key={i}
                    size="xs"
                    c={getRandomEtiquetaColor()}
                    mx={4}
                    my={4}
                    style={{
                      // backgroundColor: 'var(--mantine-color-dark-4)',
                      backgroundColor: 'transparent',
                    }}
                  >
                    {etiqueta}
                  </Pill>
                ))}
              </Table.Td>
              <Table.Td>
                <Text fz={'xs'} fw={600} c={'var(--mantine-color-dark-2)'}>
                  {transaccion.metodoPago}
                </Text>
              </Table.Td>
              <Table.Td>
                <TextInput
                  disabled
                  size="xs"
                  w={180}
                  value={transaccion.nota}
                  styles={{
                    root: {
                      backgroundColor: 'var(--mantine-color-dark-9)',
                    },
                    input: {
                      border: 'none',
                      cursor: 'default',
                      paddingLeft: 16,
                      color: 'var(--mantine-color-dark-1)',
                    },
                  }}
                />
              </Table.Td>
              <Table.Td>
                <CantidadFinal
                  w={115}
                  value={transaccion.cantidad}
                  color={
                    transaccion.tipo === 'INGRESO'
                      ? 'var(--mantine-color-green-5)'
                      : transaccion.tipo === 'GASTO'
                        ? 'var(--mantine-color-red-7)'
                        : 'var(--mantine-color-violet-5)'
                  }
                />
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
        <Table.Tfoot>
          <Table.Tr h={24}>
            <Table.Td
              colSpan={8}
              style={{ backgroundColor: 'var(--mantine-color-dark-9)' }}
            ></Table.Td>
          </Table.Tr>
        </Table.Tfoot>
      </Table>
    </>
  );
};

export default TablaTransacciones;
