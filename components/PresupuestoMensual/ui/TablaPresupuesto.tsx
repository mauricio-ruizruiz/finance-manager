import React, { useState } from 'react';
import { Accordion, Table, Title } from '@mantine/core';
import BotonControlAcordeon from './BotonControlAcordeon';
import CantidadEstimada from './CantidadEstimada';
import CantidadFinal from './CantidadFinal';
import CeldaCategoria from './CeldaCategoria';
import FechaEfectiva from './FechaEfectiva';
import FechaPrevista from './FechaPrevista';
import Nota from './Nota';

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
  const filasCategorias = categorias.map((categoria) => (
    <Table.Tr key={categoria.nombre}>
      <Table.Td></Table.Td>
      <Table.Td
      //  w={'100%'}
      >
        <CeldaCategoria icon={categoria.icon} nombre={categoria.nombre} />
      </Table.Td>
      <Table.Td>
        <FechaPrevista />
      </Table.Td>
      <Table.Td>
        <FechaEfectiva />
      </Table.Td>
      <Table.Td>
        <Nota />
      </Table.Td>
      <Table.Td>
        <CantidadEstimada />
      </Table.Td>
      <Table.Td>
        <CantidadFinal />
      </Table.Td>
    </Table.Tr>
  ));

  const filasSubCategorias = categorias.flatMap((categoria: any) =>
    categoria.subcategorias.map((subcategoria: any) => (
      <Table.Tr key={subcategoria.nombre}>
        <Table.Td
          style={{
            //   display: 'inline-table',
            width: '80px',
            //   width: '100%',
          }}
        ></Table.Td>
        <Table.Td>
          <CeldaCategoria icon={subcategoria.icon} nombre={subcategoria.nombre} />
        </Table.Td>
        <Table.Td>
          <FechaPrevista />
        </Table.Td>
        <Table.Td>
          <FechaEfectiva />
        </Table.Td>
        <Table.Td>
          <Nota />
        </Table.Td>
        <Table.Td>
          <CantidadEstimada />
        </Table.Td>
        <Table.Td>
          <CantidadFinal />
        </Table.Td>
      </Table.Tr>
    ))
  );

  const filasCategoriaControlExpandible = categorias.map((categoria) =>
    categoria.subcategorias && categoria.subcategorias.length > 0 ? (
      <Table.Tr key={categoria.nombre}>
        <Table.Td>
          <BotonControlAcordeon
            onClick={() =>
              setValue(
                value.includes(categoria.nombre)
                  ? value.filter((v) => v !== categoria.nombre)
                  : [...value, categoria.nombre]
              )
            }
          />
        </Table.Td>
        <Table.Td
        //  w={'100%'}
        >
          <CeldaCategoria icon={categoria.icon} nombre={categoria.nombre} />
        </Table.Td>
        <Table.Td />
        <Table.Td />
        <Table.Td />
        <Table.Td>
          <CantidadEstimada />
        </Table.Td>
        <Table.Td>
          <CantidadFinal />
        </Table.Td>
      </Table.Tr>
    ) : null
  );

  const subCategoriasAcordeon = categorias.map((categoria) =>
    categoria.subcategorias && categoria.subcategorias.length > 0 ? (
      <>
        <Table.Tr>
          <Table.Td colSpan={7}>
            <Accordion
              unstyled
              multiple
              value={value}
              onChange={setValue}
              styles={{
                content: {
                  paddingLeft: 0,
                  paddingRight: 0,
                },
                item: {
                  borderBottom: 'none',
                  // backgroundColor: 'var(--mantine-color-pink-7)',
                },
              }}
            >
              <Accordion.Item value={categoria.nombre}>
                <Accordion.Panel>
                  <Table>
                    <Table.Tbody>{filasSubCategorias}</Table.Tbody>
                  </Table>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Table.Td>
        </Table.Tr>
      </>
    ) : null
  );

  const filasAcordeon = categorias.map((categoria) =>
    categoria.subcategorias && categoria.subcategorias.length > 0 ? (
      <>{filasCategoriaControlExpandible}</>
    ) : null
  );

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
        <Table.Tbody>{filasAcordeon}</Table.Tbody>
      </Table>
    </>
  );
};

export default TablaPresupuesto;
