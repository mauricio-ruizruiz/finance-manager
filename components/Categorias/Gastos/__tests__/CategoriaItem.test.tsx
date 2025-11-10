import { render, screen } from '@testing-library/react';
import { Table } from '@mantine/core';
import { CategoriaItem } from '../CategoriaItem';
import { withMantine } from '../test-utils';
import type { CategoriaGasto } from '../types';

const categoria: CategoriaGasto = {
  id: 1,
  categoria: 'Alimentos',
  emoji: '🍽️',
  descripcion: 'Descripcion alimentos',
  grupos: [
    { id: 10, nombre: 'Comercios', emoji: '🏪', descripcion: 'Comercios desc' },
    { id: 11, nombre: 'Comida', emoji: '🍔', descripcion: 'Comida desc' },
  ],
  subgrupos: {
    Comercios: [{ id: 20, nombre: 'Restaurante', emoji: '🍽️', descripcion: 'Rest desc' }],
  },
};

test('CategoriaItem renders categoria name', () => {
  render(
    withMantine(
      <Table>
        <Table.Tbody>
          <CategoriaItem categoria={categoria} />
        </Table.Tbody>
      </Table>
    )
  );
  expect(screen.getByText('Alimentos')).toBeInTheDocument();
});
