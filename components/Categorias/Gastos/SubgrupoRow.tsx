import { memo } from 'react';
import { Group, Switch, Table, Text } from '@mantine/core';
import { SelectTipoGasto } from './SelectTipoGastos';
import SwitchTipodeGasto from './SwitchTipodeGasto';
import { emoji, layout } from './tokens';
import type { SubgrupoGasto } from './types';

/**
 * Row rendering for a single subgrupo within a Grupo accordion.
 */
function SubgrupoRowBase({ subgrupo }: { subgrupo: SubgrupoGasto }) {
  return (
    <Table.Tr>
      <Table.Td style={{ textAlign: 'left' }}>
        {/* <Group gap="sm" pl={layout.subgrupoIndentPx} wrap="nowrap"> */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'nowrap',
            gap: '8px',
            paddingLeft: layout.subgrupoIndentPx,
          }}
        >
          <div style={emoji.subgrupo}>{subgrupo.emoji}</div>
          <div>
            <Text fz="sm" fw={500}>
              {subgrupo.nombre}
            </Text>
            {subgrupo.descripcion && (
              <Text c="dimmed" fz="xs" style={{ width: layout.subgrupoTextWidth }}>
                {subgrupo.descripcion}
              </Text>
            )}
          </div>
          <div style={{ flex: 1 }}></div>
          <div style={{ width: '100%', maxWidth: '150px' }}>
            <SelectTipoGasto />
          </div>
        </div>
        {/* </Group> */}
      </Table.Td>
      {/* <Table.Td>
        <SwitchTipodeGasto />
      </Table.Td> */}
    </Table.Tr>
  );
}

export const SubgrupoRow = memo(SubgrupoRowBase);

export default SubgrupoRow;
