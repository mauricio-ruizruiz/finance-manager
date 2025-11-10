import { memo } from 'react';
import { Table } from '@mantine/core';
import { SubgrupoRow } from './SubgrupoRow';
import type { SubgrupoGasto } from './types';

/**
 * Nested table listing subgrupos inside a Grupo.
 */
function SubgruposTableBase({ subgrupos }: { subgrupos: SubgrupoGasto[] }) {
  return (
    <Table withRowBorders={false}>
      <Table.Tbody>
        {subgrupos.map((s) => (
          <SubgrupoRow key={s.id} subgrupo={s} />
        ))}
      </Table.Tbody>
    </Table>
  );
}

export const SubgruposTable = memo(SubgruposTableBase);

export default SubgruposTable;
