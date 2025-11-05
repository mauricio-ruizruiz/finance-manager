import { Container } from '@mantine/core';
import CategoriasTable from '@/components/Categorias/CategoriasTable';
import PresupuestoMensual from '@/components/PresupuestoMensual/Dashboards/PresupuestoMensual';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export default function HomePage() {
  return (
    <>
      {/* <Welcome /> */}
      {/* <ColorSchemeToggle /> */}
      {/* <CategoriasTable /> */}
      <Container my="md" style={{ textAlign: 'center' }}>
        <PresupuestoMensual />
      </Container>
    </>
  );
}
