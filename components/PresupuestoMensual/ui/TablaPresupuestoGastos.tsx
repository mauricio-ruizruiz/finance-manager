import React, { useState } from 'react';
import { Table, Title } from '@mantine/core';
import CantidadEstimada from './CantidadEstimada';
import CantidadFinal from './CantidadFinal';
import CeldaCategoria from './CeldaCategoria';
import FilaTotalTabla from './FilaTotalTabla';

interface TablaPresupuestoProps {
  encabezado: string;
  columnas: string[];
  categorias: any[];
}
const TablaPresupuestoGastos = ({ encabezado, columnas, categorias }: TablaPresupuestoProps) => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <>
      <Table captionSide="top">
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
          {categorias.map((categoria) => (
            <>
              <Table.Tr key={categoria.id}>
                <Table.Td></Table.Td>
                <Table.Td>
                  <CeldaCategoria icon={categoria.categoriaicon} nombre={categoria.categoria} />
                </Table.Td>
                <Table.Td></Table.Td>
                <Table.Td></Table.Td>
                <Table.Td></Table.Td>
                <Table.Td>
                  <CantidadEstimada />
                </Table.Td>
                <Table.Td>
                  <CantidadFinal />
                </Table.Td>
              </Table.Tr>
              {
              categoria.grupos.tipo === 'Gasto Fijo' ? (): null}
               
          //     categoria.grupos.map((grupo: any) => (
          //       <React.Fragment key={grupo.id}>
          //         <Table.Tr>
          //           <Table.Td></Table.Td>
          //           <Table.Td></Table.Td>
          //           <Table.Td>{grupo.grupo}</Table.Td>
          //           <Table.Td></Table.Td>
          //           <Table.Td></Table.Td>
          //           <Table.Td></Table.Td>
          //           <Table.Td></Table.Td>
          //         </Table.Tr>
          //         {grupo.subgrupos && grupo.subgrupos.length > 0
          //           ? grupo.subgrupos.map((subgrupo: any) =>
          //               subgrupo.tipo === 'Gasto Fijo' ? (
          //                 <Table.Tr>
          //                   <Table.Td colSpan={7}>
          //                     <Table>
          //                       <Table.Tbody>
          //                         <Table.Tr key={subgrupo.id}>
          //                           <Table.Td></Table.Td>
          //                           <Table.Td></Table.Td>
          //                           <Table.Td></Table.Td>
          //                           <Table.Td>{subgrupo.subgrupo}</Table.Td>
          //                           <Table.Td></Table.Td>
          //                           <Table.Td>{/* <CantidadEstimada /> */}</Table.Td>
          //                           <Table.Td>{/* <CantidadFinal /> */}</Table.Td>
          //                         </Table.Tr>
          //                       </Table.Tbody>
          //                     </Table>
          //                   </Table.Td>
          //                 </Table.Tr>
          //               ) : null
          //             )
          //           : null}
          //       </React.Fragment>
          //     ))}

            </>
          ))}
        </Table.Tbody>
        <FilaTotalTabla colspan={4} />
      </Table>
    </>
  );
};

export default TablaPresupuestoGastos;
