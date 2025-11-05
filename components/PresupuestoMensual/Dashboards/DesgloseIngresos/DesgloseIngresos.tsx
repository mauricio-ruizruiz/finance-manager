import React from 'react';
import { Table, Title } from '@mantine/core';
import categoriasIngresos from '../../../Categorias/dataIngresos';

const DesgloseIngresos = () => {
  const rows = categoriasIngresos.flatMap((categoria) => {
    return categoria.subcategorias.length > 0 ? (
      categoria.subcategorias.map((subcategoria) => (
        <Table.Tr key={`${categoria.nombre}-${subcategoria}`}>
          <Table.Td>{categoria.nombre}</Table.Td>
          <Table.Td>{subcategoria}</Table.Td>
          <Table.Td>{/* Fecha Prevista */}</Table.Td>
          <Table.Td>{/* Fecha Real */}</Table.Td>
          <Table.Td>{/* Notas */}</Table.Td>
          <Table.Td>{/* Planificado */}</Table.Td>
          <Table.Td>{/* Real */}</Table.Td>
        </Table.Tr>
      ))
    ) : (
      <Table.Tr key={categoria.nombre}>
        <Table.Td>{categoria.nombre}</Table.Td>
        <Table.Td>{/* Sin subcategoría */}</Table.Td>
        <Table.Td>{/* Fecha Prevista */}</Table.Td>
        <Table.Td>{/* Fecha Real */}</Table.Td>
        <Table.Td>{/* Notas */}</Table.Td>
        <Table.Td>{/* Planificado */}</Table.Td>
        <Table.Td>{/* Real */}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table striped highlightOnHover withColumnBorders captionSide="top">
      <Table.Caption>
        <Title order={2}>Desglose de Ingresos</Title>
      </Table.Caption>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Categoría</Table.Th>
          <Table.Th>Sub-Categoría</Table.Th>
          <Table.Th>Fecha Prevista</Table.Th>
          <Table.Th>Fecha Real</Table.Th>
          <Table.Th>Notas</Table.Th>
          <Table.Th>Planificado</Table.Th>
          <Table.Th>Real</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
      <Table.Tfoot>
        <Table.Tr>
          <Table.Td colSpan={5}>Total</Table.Td>
          <Table.Td>{/* Suma total Planificado */}</Table.Td>
          <Table.Td>{/* Suma total Real */}</Table.Td>
        </Table.Tr>
      </Table.Tfoot>
    </Table>
  );
};

export default DesgloseIngresos;
