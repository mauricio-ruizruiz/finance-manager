import { useState } from 'react';
import { Table, Title } from '@mantine/core';
import Periodo from './Periodo/Periodo';
import { TotalStats } from './Total/TotalStats';

const PresupuestoMensual = () => {
  return (
    <>
      <Title order={1} my="lg">
        enero
      </Title>
      <Title order={3}>- Presupuesto Mensual -</Title>
      <Periodo />
      <TotalStats />
    </>
  );
};

export default PresupuestoMensual;
