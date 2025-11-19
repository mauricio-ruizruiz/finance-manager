import { Container, Table, Title } from '@mantine/core';
import DesgloseDeIngresos from './Dashboards/DesgloseDeIngresos/DesgloseDeIngresos';
import ReporteIngresos from './Modulos/ReporteIngresos/ReporteIngresos';
import Portada from './ui/Portada';

const PresupuestoMensual = () => {
  return (
    <>
      <Container size="md">
        <Portada mes="enero" />
        <ReporteIngresos />
        <DesgloseDeIngresos />
      </Container>
    </>
  );
};

export default PresupuestoMensual;
