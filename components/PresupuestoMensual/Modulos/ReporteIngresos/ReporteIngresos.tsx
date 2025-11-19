import React from 'react';
import { categoriasIngresosDefault } from '@/constants';
import TablaPresupuesto from '../../ui/TablaPresupuesto';

const ReporteIngresos = () => {
  const ColumnasReporteIngresos = [
    '',
    'Categoria',
    'Fecha Prevista',
    'Fecha Efectiva',
    'Nota',
    'Monto Estimado',
    'Monto Real',
  ];

  const categoriasIngresos = categoriasIngresosDefault;

  return (
    <>
      <TablaPresupuesto
        encabezado="Reporte de Ingresos"
        columnas={ColumnasReporteIngresos}
        categorias={categoriasIngresos}
      />
    </>
  );
};

export default ReporteIngresos;
