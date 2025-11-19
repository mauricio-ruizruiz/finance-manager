import React from 'react';
import { Box } from '@mantine/core';

function CeldaCategoria({ icon, nombre }: any) {
  return (
    <>
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <span>{icon}</span>
        <span>{nombre}</span>
      </Box>
    </>
  );
}

export default CeldaCategoria;
