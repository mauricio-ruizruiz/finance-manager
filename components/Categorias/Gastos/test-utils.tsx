import { ReactNode } from 'react';
import { MantineProvider } from '@mantine/core';

export function withMantine(children: ReactNode) {
  return <MantineProvider>{children}</MantineProvider>;
}
