import React from 'react';
import { Accordion, Table } from '@mantine/core';
import FilaSubcategoria from './FilaSubcategoria';

interface AcordeonSubcategoriasProps {
  categoria: any;
  value: string[];
  onChange: (value: string[]) => void;
}

const AcordeonSubcategorias: React.FC<AcordeonSubcategoriasProps> = ({
  categoria,
  value,
  onChange,
}) => {
  return (
    <Table.Tr>
      <Table.Td colSpan={7} px={0}>
        <Accordion
          unstyled
          multiple
          value={value}
          onChange={onChange}
          styles={{
            content: {
              paddingLeft: 0,
              paddingRight: 0,
            },
            item: {
              borderBottom: 'none',
            },
          }}
        >
          <Accordion.Item value={categoria.nombre}>
            <Accordion.Panel>
              <Table>
                <Table.Tbody>
                  {categoria.subcategorias.map((subcategoria: any) => (
                    <FilaSubcategoria key={subcategoria.nombre} subcategoria={subcategoria} />
                  ))}
                </Table.Tbody>
              </Table>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Table.Td>
    </Table.Tr>
  );
};

export default AcordeonSubcategorias;
