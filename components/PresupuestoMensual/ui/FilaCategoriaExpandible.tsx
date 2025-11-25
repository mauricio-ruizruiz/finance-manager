import React from 'react';
import { Table } from '@mantine/core';
import BotonControlAcordeon from './BotonControlAcordeon';
import CantidadEstimada from './CantidadEstimada';
import CantidadFinal from './CantidadFinal';
import CeldaCategoria from './CeldaCategoria';

interface FilaCategoriaExpandibleProps {
  categoria: any;
  isExpanded: boolean;
  onToggle: () => void;
}

const FilaCategoriaExpandible: React.FC<FilaCategoriaExpandibleProps> = ({
  categoria,
  isExpanded,
  onToggle,
}) => {
  return (
    <Table.Tr>
      <Table.Td>
        <BotonControlAcordeon onClick={onToggle} />
      </Table.Td>
      <Table.Td>
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
  );
};

export default FilaCategoriaExpandible;
