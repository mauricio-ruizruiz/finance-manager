import React from 'react';
import { categoriasGastosDefault } from '@/constants';
import TablaPresupuestoGastos from '../../ui/TablaPresupuestoGastos';

const ReporteGastos = () => {
  const ColumnasReporteGastos = [
    '',
    'Categoria',
    'Grupo',
    'Subgrupo',
    '',
    'Monto Estimado',
    'Monto Real',
  ];

  const categoriasGastos = categoriasGastosDefault;

  return (
    <>
      <TablaPresupuestoGastos
        encabezado={'GASTOS FIJOS'}
        columnas={ColumnasReporteGastos}
        categorias={categoriasGastos}
      />
    </>
  );
};

export default ReporteGastos;
