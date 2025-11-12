import React from 'react';
import { IconPencil } from '@tabler/icons-react';
import { NumberInput, Table, Title } from '@mantine/core';
import categoriasIngresos from '../../../Categorias/Ingresos/dataIngresos';

const DesgloseDeIngresos: React.FC = () => {
  return (
    <>
      <Title order={3} my={50}>
        Desglose de Ingresos
      </Title>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Categoría</Table.Th>
            <Table.Th>Fecha Prevista</Table.Th>
            <Table.Th>Fecha Actual</Table.Th>
            <Table.Th>Nota</Table.Th>
            <Table.Th>Planificado</Table.Th>
            <Table.Th>Real</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {categoriasIngresos.map((categoria) => (
            <Table.Tr key={categoria.id}>
              <Table.Td>
                {categoria.icon}
                {categoria.nombre}
              </Table.Td>
              <Table.Td>FP</Table.Td>
              <Table.Td>FR</Table.Td>
              <Table.Td>Nota</Table.Td>
              <Table.Td>
                <NumberInput
                  // label="Planificado"
                  prefix="$"
                  placeholder="$0.00"
                  decimalScale={2}
                  thousandSeparator=","
                  hideControls
                  rightSection={<IconPencil />}
                  withKeyboardEvents={false}
                  // defaultValue={1_000_000}
                ></NumberInput>
              </Table.Td>
              <Table.Td>$</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
        <Table.Tfoot>
          <Table.Tr>
            <Table.Td colSpan={5}>Total</Table.Td>
            {/* <Table.Td>Suma total Planificado</Table.Td>
            <Table.Td>Suma total Real</Table.Td> */}
          </Table.Tr>
        </Table.Tfoot>
      </Table>
    </>
  );
};

export default DesgloseDeIngresos;
