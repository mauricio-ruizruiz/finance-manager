import React from 'react';
import { categoriasGastosDefault } from '@/constants';
import TablaPresupuestoGastos from '../../ui/TablaPresupuestoGastos/TablaPresupuestoGastos';

const ReporteGastos = () => {
  const ColumnasReporteGastos = [
    '',
    '',
    '',
    'Fecha Estimada',
    'Fecha Actual',
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
        tipoDeGasto="Gasto Fijo"
      />
      <TablaPresupuestoGastos
        encabezado={'GASTOS VAIRABLES'}
        columnas={ColumnasReporteGastos}
        categorias={categoriasGastos}
        tipoDeGasto="Gasto Variable"
      />
    </>
  );
};

export default ReporteGastos;
