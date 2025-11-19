// import NextImage from 'next/image';
import { BackgroundImage, Box, Image, Stack, Text, Title } from '@mantine/core';

const Portada = ({ mes }: any) => {
  return (
    <>
      <Box mb={80}>
        <Title order={1} ta="center" fz={120} fw={900}>
          <Text
            inherit
            variant="gradient"
            component="span"
            gradient={{ from: 'blue', to: 'grape' }}
          >
            {mes}
          </Text>
        </Title>
        <Text ta="center" fz={30} fw={900}>
          - Presupuesto Mensual -
        </Text>
        <Image
          radius="xl"
          h={200}
          mt={20}
          mx={'auto'}
          maw={'75vw'}
          src="./images/banner-presupuesto-mensual.png"
        />
      </Box>
    </>
  );
};

export default Portada;
