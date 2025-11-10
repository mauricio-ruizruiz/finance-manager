import { render, screen } from '@testing-library/react';
import { Table } from '@mantine/core';
import { GrupoItem } from '../GrupoItem';
import { withMantine } from '../test-utils';

const grupo = { id: 1, nombre: 'Comida', emoji: '🍔', descripcion: 'Grupo comidas' };
const subgrupos = [
  { id: 2, nombre: 'Rápida', emoji: '🍟', descripcion: 'Fast food' },
  { id: 3, nombre: 'Casera', emoji: '🍲', descripcion: 'Home made' },
];

test('GrupoItem simple renders nombre', () => {
  render(
    withMantine(
      <Table>
        <Table.Tbody>
          <GrupoItem grupo={grupo} />
        </Table.Tbody>
      </Table>
    )
  );
  expect(screen.getByText('Comida')).toBeInTheDocument();
});

test('GrupoItem with subgrupos renders accordion trigger', () => {
  render(
    withMantine(
      <Table>
        <Table.Tbody>
          <GrupoItem grupo={grupo} subgrupos={subgrupos} />
        </Table.Tbody>
      </Table>
    )
  );
  expect(screen.getByText('Comida')).toBeInTheDocument();
});
