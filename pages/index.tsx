import { Center, Container } from '@mantine/core';
import CategoriasGastos from '@/components/Categorias/Gastos/CategoriasGastos';
import TablaCategoriasGastos from '@/components/Categorias/Gastos/TablaCategoriasGastos';
import PresupuestoMensual from '@/components/PresupuestoMensual/PresupuestoMensual';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export default function HomePage() {
  return (
    <>
      {/* <Welcome /> */}
      {/* <ColorSchemeToggle /> */}

      {/* <Center> */}
      <PresupuestoMensual />
      {/* </Center> */}

      <Center my={50}>
        <CategoriasGastos />
      </Center>
    </>
  );
}
