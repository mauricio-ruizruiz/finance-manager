import React from 'react';
import { IconNote } from '@tabler/icons-react';
import { Box, Button, Popover, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import type {
  UseDisclosureHandlers,
  UseDisclosureOptions,
  UseDisclosureReturnValue,
} from '@mantine/hooks';

const Nota = () => {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <>
      <Popover
        width={200}
        position="bottom-start"
        offset={12}
        withArrow
        shadow="md"
        arrowPosition="side"
        arrowOffset={15}
        arrowSize={18}
        opened={opened}
      >
        <Popover.Target>
          <Button
            c={'var(--mantine-color-violet-5)'}
            onMouseEnter={open}
            onMouseLeave={close}
            variant="subtle"
            size="xs"
            px={10}
          >
            <Box
              style={{
                width: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 5,
              }}
            >
              <IconNote />
              {'Notas'}
            </Box>
          </Button>
        </Popover.Target>
        <Popover.Dropdown style={{ pointerEvents: 'none' }}>
          <Text size="sm">This popover is shown when user hovers the target element</Text>
        </Popover.Dropdown>
      </Popover>
    </>
  );
};

export default Nota;
