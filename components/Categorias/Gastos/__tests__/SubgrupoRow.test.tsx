import { render, screen } from '@testing-library/react';
import { Table } from '@mantine/core';
import { SubgrupoRow } from '../SubgrupoRow';
import { withMantine } from '../test-utils';

const sample = { id: 1, nombre: 'Callejera', emoji: '🌮', descripcion: 'Tacos y antojitos' };

test('SubgrupoRow renders nombre and descripcion', () => {
  render(
    withMantine(
      <Table>
        <Table.Tbody>
          <SubgrupoRow subgrupo={sample} />
        </Table.Tbody>
      </Table>
    )
  );
  expect(screen.getByText('Callejera')).toBeInTheDocument();
  expect(screen.getByText('Tacos y antojitos')).toBeInTheDocument();
});
