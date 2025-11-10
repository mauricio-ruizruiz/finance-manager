import { Text, Title } from '@mantine/core';
import TablaCategoriasGastos from './TablaCategoriasGastos';
import classes from './CategoriasGastos.module.css';

function CategoriasGastos() {
  return (
    <>
      <div className={classes.container}>
        <Title className={classes.title} ta="center" my={50}>
          Categorias{' '}
          <Text
            className={classes.text}
            inherit
            variant="gradient"
            component="span"
            gradient={{ from: 'red', to: 'pink' }}
          >
            GASTOS
          </Text>
        </Title>
        <TablaCategoriasGastos />
      </div>
    </>
  );
}

export default CategoriasGastos;
