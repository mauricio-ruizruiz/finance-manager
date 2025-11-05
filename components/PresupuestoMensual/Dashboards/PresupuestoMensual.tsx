import { useState } from 'react';
import { Table, Title } from '@mantine/core';
import CashFlow from './CashFlow/CashFlow';
import DesgloseIngresos from './DesgloseIngresos/DesgloseIngresos';
import Metodo from './Metodo/Metodo';
import Periodo from './Periodo/Periodo';
import PresupuestoIngresos from './PresupuestoIngresos.tsx/PresupuestoIngresos';
import { TotalStats } from './Total/TotalStats';

const PresupuestoMensual = () => {
  return (
    <>
      <Title order={1} my="lg">
        enero
      </Title>
      <Title order={3}>- Presupuesto Mensual -</Title>
      <DesgloseIngresos />
      <Periodo />
      <TotalStats />
      <Metodo />
      <PresupuestoIngresos />
      <CashFlow />
    </>
  );
};

export default PresupuestoMensual;
