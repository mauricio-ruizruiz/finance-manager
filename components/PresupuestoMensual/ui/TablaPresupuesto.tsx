import React, { useState } from 'react';
import { Table, Title } from '@mantine/core';
import AcordeonSubcategorias from './AcordeonSubcategorias';
import FilaCategoria from './FilaCategoria';
import FilaCategoriaExpandible from './FilaCategoriaExpandible';
import FilaTotalTabla from './FilaTotalTabla';

interface TablaPresupuestoProps {
  encabezado: string;
  columnas: string[];
  categorias: any[];
}

const TablaPresupuesto: React.FC<TablaPresupuestoProps> = ({
  encabezado,
  columnas,
  categorias,
}) => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <>
      <Table
        //  striped
        //  withColumnBorders
        captionSide="top"
      >
        <Table.Caption>
          <Title
            style={{ letterSpacing: '.4rem', fontVariant: 'all-small-caps', lineHeight: 2 }}
            order={3}
            fz={25}
            fw={900}
            c="dimmed"
            ta="center"
            //   mb={10}
            bg="var(--mantine-color-dark-9)"
            pb={5}
          >
            {encabezado}
          </Title>
        </Table.Caption>
        <Table.Thead>
          <Table.Tr>
            {columnas.map((columna) => (
              <Table.Th key={columna}>{columna}</Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {categorias.map((categoria) =>
            categoria.subcategorias && categoria.subcategorias.length > 0 ? (
              <React.Fragment key={categoria.nombre}>
                <FilaCategoriaExpandible
                  categoria={categoria}
                  isExpanded={value.includes(categoria.nombre)}
                  onToggle={() =>
                    setValue(
                      value.includes(categoria.nombre)
                        ? value.filter((v: string) => v !== categoria.nombre)
                        : [...value, categoria.nombre]
                    )
                  }
                />
                <AcordeonSubcategorias categoria={categoria} value={value} onChange={setValue} />
              </React.Fragment>
            ) : (
              <React.Fragment key={categoria.nombre}>
                <FilaCategoria categoria={categoria} />
              </React.Fragment>
            )
          )}
        </Table.Tbody>
        <FilaTotalTabla colspan={4} />
      </Table>
    </>
  );
};

export default TablaPresupuesto;
