import { Container, Table, Title } from '@mantine/core';
import DesgloseDeIngresos from './Dashboards/DesgloseDeIngresos/DesgloseDeIngresos';
import ReporteGastos from './Modulos/ReporteGastos/ReporteGastos';
import ReporteIngresos from './Modulos/ReporteIngresos/ReporteIngresos';
import Portada from './ui/Portada';

const PresupuestoMensual = () => {
  return (
    <>
      <Container size="md">
        <Portada mes="enero" />
        <ReporteGastos />
        {/* <ReporteIngresos /> */}
        {/* <DesgloseDeIngresos /> */}
      </Container>
    </>
  );
};

export default PresupuestoMensual;
