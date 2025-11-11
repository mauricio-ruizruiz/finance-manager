import { memo } from 'react';
import { Accordion, Group, Stack, Table, Text } from '@mantine/core';
import { SelectTipoGasto } from './SelectTipoGastos';
import { SubgruposTable } from './SubgruposTable';
import { emoji, layout } from './tokens';
import type { GrupoGasto, SubgrupoGasto } from './types';

/**
 * Renders a Grupo. If there are subgrupos, shows an inner accordion; otherwise a simple row.
 */
function GrupoItemBase({ grupo, subgrupos }: { grupo: GrupoGasto; subgrupos?: SubgrupoGasto[] }) {
  const hasSubgrupos = Array.isArray(subgrupos) && subgrupos.length > 0;
  if (!hasSubgrupos) {
    return (
      <Table.Tr>
        <Table.Td style={{ textAlign: 'left' }}>
          <Group gap="sm" pl={layout.subgrupoIndentPx} wrap="nowrap">
            <div style={emoji.grupo}>{grupo.emoji}</div>
            <div>
              <Text fz="sm" fw={500}>
                {grupo.nombre}
              </Text>
              {grupo.descripcion && (
                <Text c="dimmed" fz="xs" style={{ width: '80%' }}>
                  {grupo.descripcion}
                </Text>
              )}
            </div>
            <div style={{ flex: 1 }}></div>
            <div style={{ width: '100%', maxWidth: '150px' }}>
              <SelectTipoGasto />
            </div>
          </Group>
        </Table.Td>
      </Table.Tr>
    );
  }

  return (
    <Table.Tr>
      <Table.Td colSpan={2}>
        <Accordion variant="unstyled" radius="xs" chevronIconSize={20}>
          <Accordion.Item value={grupo.nombre}>
            <Accordion.Control>
              <Group gap="sm" wrap="nowrap">
                <div style={emoji.grupo}>{grupo.emoji}</div>
                <div>
                  <Stack gap={4} style={{ width: layout.grupoTextWidth }}>
                    <Text fz="sm" fw={500}>
                      {grupo.nombre}
                    </Text>
                    {grupo.descripcion && (
                      <Text c="dimmed" fz="xs" style={{ width: layout.grupoDescWidth }}>
                        {grupo.descripcion}
                      </Text>
                    )}
                  </Stack>
                </div>
              </Group>
            </Accordion.Control>
            <Accordion.Panel>
              <SubgruposTable subgrupos={subgrupos!} />
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Table.Td>
    </Table.Tr>
  );
}

export const GrupoItem = memo(GrupoItemBase);

export default GrupoItem;
