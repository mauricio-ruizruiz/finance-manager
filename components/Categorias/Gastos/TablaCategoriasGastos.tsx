import { Table } from '@mantine/core';
import { CategoriaItem } from './CategoriaItem';
import dataCategoriasGastos from './dataCategoriasGastos';

// Main component: TablaCategoriasGastos lists all categorias as accordions
const TablaCategoriasGastos = () => (
  <Table withRowBorders={false} style={{ width: '100%' }}>
    <Table.Tbody>
      {dataCategoriasGastos.map((categoria) => (
        <CategoriaItem key={categoria.id} categoria={categoria} />
      ))}
    </Table.Tbody>
  </Table>
);

export default TablaCategoriasGastos;
