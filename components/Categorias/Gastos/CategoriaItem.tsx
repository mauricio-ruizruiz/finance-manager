import { memo } from 'react';
import { Accordion, Group, Table, Text } from '@mantine/core';
import { GrupoItem } from './GrupoItem';
import { emoji, layout } from './tokens';
import type { CategoriaGasto, SubgruposMap } from './types';
import { getSubgrupos } from './utils';
import classes from './TablaCategoriasGastos.module.css';

/**
 * Accordion entry for a Categoria, listing its Grupos.
 */
function CategoriaItemBase({ categoria }: { categoria: CategoriaGasto }) {
  const map: SubgruposMap | undefined =
    categoria.subgrupos && !Array.isArray(categoria.subgrupos)
      ? (categoria.subgrupos as SubgruposMap)
      : undefined;
  return (
    <Table.Tr>
      <Table.Td colSpan={7}>
        <Accordion variant="separated" radius="xl" classNames={classes} chevronIconSize={30}>
          <Accordion.Item value={categoria.categoria}>
            <Accordion.Control>
              <Group gap="sm" wrap="nowrap">
                <div style={emoji.categoria}>{categoria.emoji}</div>
                <div>
                  <Group gap="xl" wrap="nowrap">
                    <Text fz="xl" fw={500}>
                      {categoria.categoria}
                    </Text>
                    {categoria.descripcion && (
                      <Text c="dimmed" fz="xs">
                        {categoria.descripcion}
                      </Text>
                    )}
                  </Group>
                </div>
              </Group>
            </Accordion.Control>
            <Accordion.Panel>
              <Table withRowBorders={false} style={layout.noBorderTable}>
                <Table.Tbody>
                  {categoria.grupos.map((grupo) => (
                    <GrupoItem
                      key={grupo.id}
                      grupo={grupo}
                      subgrupos={map ? getSubgrupos(categoria, grupo.nombre) : undefined}
                    />
                  ))}
                </Table.Tbody>
              </Table>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Table.Td>
    </Table.Tr>
  );
}

export const CategoriaItem = memo(CategoriaItemBase);

export default CategoriaItem;
