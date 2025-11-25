import React from 'react';
import { Table } from '@mantine/core';
import CantidadEstimada from './CantidadEstimada';
import CantidadFinal from './CantidadFinal';
import CeldaCategoria from './CeldaCategoria';
import FechaEfectiva from './FechaEfectiva';
import FechaPrevista from './FechaPrevista';
import Nota from './Nota';

interface FilaSubcategoriaProps {
  subcategoria: any;
}

const FilaSubcategoria: React.FC<FilaSubcategoriaProps> = ({ subcategoria }) => {
  return (
    <Table.Tr>
      <Table.Td
        style={{
          display: 'inline-table',
          width: '80px',
        }}
      ></Table.Td>
      <Table.Td
      //  style={{ width: '100%' }}
      >
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
  );
};

export default FilaSubcategoria;
