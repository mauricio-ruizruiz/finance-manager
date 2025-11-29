import React, { useState } from 'react';
import { IconCrop169Filled, IconDots, IconNote, IconSquare } from '@tabler/icons-react';
import { input } from '@testing-library/user-event/dist/types/event';
import { Badge, Box, Card, NativeSelect, Pill, Table, Text, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import CantidadFinal from './CantidadFinal';
import FechaEfectiva from './FechaEfectiva';

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
    etiquetas: ['Financiado'],
    metodoPago: 'Efectivo',
    nota: 'Tacos 🌮',
    cantidad: 150,
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
    etiquetas: ['Personal'],
    metodoPago: 'Tarjeta',
    nota: 'Carga de gasolina',
    cantidad: 600,
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
    etiquetas: ['Trabajo'],
    metodoPago: 'Transferencia',
    nota: 'Pago de nómina',
    cantidad: 12000,
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
    etiquetas: ['Mensual'],
    metodoPago: 'Transferencia',
    nota: 'Pago de renta',
    cantidad: 7000,
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
    etiquetas: ['Ocio'],
    metodoPago: 'Efectivo',
    nota: 'Película en cine',
    cantidad: 180,
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
    metodoPago: 'Efectivo',
    nota: 'Regalo de cumpleaños',
    cantidad: 500,
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
    etiquetas: ['Farmacia'],
    metodoPago: 'Tarjeta',
    nota: 'Compra de medicinas',
    cantidad: 350,
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
    etiquetas: ['Estudio'],
    metodoPago: 'Efectivo',
    nota: 'Compra de libros',
    cantidad: 400,
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
    metodoPago: 'Tarjeta',
    nota: 'Cena en restaurante',
    cantidad: 600,
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
    etiquetas: ['Extra'],
    metodoPago: 'Efectivo',
    nota: 'Venta de artículo usado',
    cantidad: 800,
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
    etiquetas: ['Urgente'],
    metodoPago: 'Efectivo',
    nota: 'Taxi por emergencia',
    cantidad: 120,
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
    etiquetas: ['Ocio'],
    metodoPago: 'Tarjeta',
    nota: 'Compra de videojuego',
    cantidad: 1200,
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
    etiquetas: ['Mensual'],
    metodoPago: 'Transferencia',
    nota: 'Pago de luz',
    cantidad: 350,
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
    etiquetas: ['Mensual'],
    metodoPago: 'Efectivo',
    nota: 'Despensa mensual',
    cantidad: 1800,
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
    etiquetas: ['Familiar'],
    metodoPago: 'Transferencia',
    nota: 'Apoyo de padres',
    cantidad: 2000,
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
    etiquetas: ['Estudio'],
    metodoPago: 'Tarjeta',
    nota: 'Pago de curso',
    cantidad: 900,
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
    etiquetas: ['Doctor'],
    metodoPago: 'Efectivo',
    nota: 'Consulta médica',
    cantidad: 500,
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
    etiquetas: ['Diario'],
    metodoPago: 'Efectivo',
    nota: 'Viaje en metro',
    cantidad: 30,
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
    etiquetas: ['Ocio'],
    metodoPago: 'Tarjeta',
    nota: 'Entrada a concierto',
    cantidad: 900,
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
    etiquetas: ['Extra'],
    metodoPago: 'Transferencia',
    nota: 'Devolución de préstamo',
    cantidad: 1000,
  },
];

const TablaTransacciones = () => {
  const [valueTransaccion, setValueTransaccion] = React.useState<Date | null>(null);
  return (
    <>
      <div>TablaTransacciones</div>
      <Table>
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
            <Table.Th>{/* Grupo / Subcategoria */}</Table.Th>
            <Table.Th>Subgrupo</Table.Th>
            <Table.Th>Etiquetas</Table.Th>
            <Table.Th>Método de Pago</Table.Th>
            <Table.Th>Nota</Table.Th>
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
                  // fullWidth
                  autoContrast
                  styles={{
                    root: {
                      justifyContent: 'left',
                      // textAlign: 'left',
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
                    alignItems: 'center',
                    gap: 5,
                  }}
                  fz={'md'}
                  fw={600}
                >
                  <span>{transaccion.categoriaicon}</span>
                  <span>{transaccion.categoria}</span>
                </Box>
              </Table.Td>
              <Table.Td>
                <Box fz={'sm'} fw={500} lh={'md'}>
                  {/* <span>{transaccion.subcategoriaicon}</span> */}
                  <span>{transaccion.subcategoria}</span>
                </Box>
              </Table.Td>
              <Table.Td>
                <Box fz={'sm'} fw={500} lh={'md'}>
                  {/* <span>{transaccion.subgrupoicon}</span> */}
                  <span>{transaccion.subgrupo}</span>
                </Box>
              </Table.Td>
              <Table.Td>
                <Pill size="xs" variant="filled" color="blue">
                  Trabajo
                </Pill>
              </Table.Td>
              <Table.Td>
                <Text fz={16} fw={400} c={'var(--mantine-color-dark-3)'}>
                  {'Efectivo'}
                </Text>
              </Table.Td>
              {/* <Table.Td>Nota</Table.Td> */}
              <Table.Td>
                {/* Celda de nota, solo lectura */}
                <TextInput
                  size="xs"
                  w={125}
                  leftSection={<IconNote size={20} />}
                  value={'Tacos 🌮'}
                />
              </Table.Td>
              <Table.Td>
                <CantidadFinal />
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
        <Table.Tfoot>
          <Table.Tr>
            <Table.Td>Pie de tabla</Table.Td>
          </Table.Tr>
        </Table.Tfoot>
      </Table>
    </>
  );
};

export default TablaTransacciones;
