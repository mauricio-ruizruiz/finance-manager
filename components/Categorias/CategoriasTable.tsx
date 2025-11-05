import React, { useMemo } from 'react';
import { Table } from '@mantine/core';
import { CategoriasGastos } from './dataGastos';

type Row = {
  categoria: string;
  subcategoria: string;
  items: string[];
  grupo?: string;
};

type CategoriaGasto = {
  [key: string]: {
    [key: string]: string[] | { [key: string]: string[] };
  };
};

const buildTableData = (): Row[] => {
  const rows: Row[] = [];

  CategoriasGastos.forEach((categoriaObj: CategoriaGasto) => {
    const categoria = Object.keys(categoriaObj)[0];
    const subCategorias = categoriaObj[categoria];

    Object.entries(subCategorias).forEach(
      ([subcategoria, items]: [string, string[] | { [key: string]: string[] }]) => {
        if (Array.isArray(items)) {
          rows.push({
            categoria,
            subcategoria,
            items,
          });
        } else {
          Object.entries(items as { [key: string]: string[] }).forEach(([grupo, grupoItems]) => {
            rows.push({
              categoria,
              subcategoria,
              items: Array.isArray(grupoItems) ? grupoItems : [],
              grupo,
            });
          });
        }
      }
    );
  });

  return rows.sort((a, b) => {
    // Ordenar primero por categoría
    if (a.categoria !== b.categoria) {
      return a.categoria.localeCompare(b.categoria);
    }
    // Luego por subcategoría
    if (a.subcategoria !== b.subcategoria) {
      return a.subcategoria.localeCompare(b.subcategoria);
    }
    // Finalmente por grupo si existe
    if (a.grupo && b.grupo) {
      return a.grupo.localeCompare(b.grupo);
    }
    return 0;
  });
};

const CategoriasTable: React.FC = () => {
  const rows = useMemo(() => buildTableData(), []);

  const renderItems = (items: string[]) => {
    if (items.length === 0) return '—';
    return items.map((item, idx) => (
      <React.Fragment key={item}>
        {item}
        {idx < items.length - 1 ? ', ' : ''}
      </React.Fragment>
    ));
  };

  return (
    <Table striped highlightOnHover withColumnBorders>
      <thead>
        <tr>
          <th>Categoría</th>
          <th>Subcategoría</th>
          <th>Grupo</th>
          <th>Items</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => {
          const showCategoria = idx === 0 || rows[idx - 1].categoria !== row.categoria;
          const showSubcategoria =
            idx === 0 ||
            rows[idx - 1].subcategoria !== row.subcategoria ||
            rows[idx - 1].categoria !== row.categoria;

          return (
            <tr key={`${row.categoria}-${row.subcategoria}-${idx}`}>
              <td>{showCategoria ? row.categoria : ''}</td>
              <td>{showSubcategoria ? row.subcategoria : ''}</td>
              <td>{row.grupo || '—'}</td>
              <td>{renderItems(row.items)}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default CategoriasTable;
