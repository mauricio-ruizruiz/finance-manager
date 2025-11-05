import {
  IconArrowDownRight,
  IconArrowUpRight,
  IconCoin,
  IconDiscount2,
  IconReceipt2,
  IconUserPlus,
} from '@tabler/icons-react';
import { Group, Paper, SimpleGrid, Text, Title } from '@mantine/core';
import classes from './TotalStats.module.css';

const icons = {
  user: IconUserPlus,
  discount: IconDiscount2,
  receipt: IconReceipt2,
  coin: IconCoin,
};

const data = [
  { title: 'Ingresos', icon: 'receipt', value: '13,456', diff: 34 },
  { title: 'Gastos', icon: 'coin', value: '4,145', diff: -13 },
  { title: 'Ahorros e Inversiones', icon: 'discount', value: '745', diff: 18 },
  { title: 'Deudas', icon: 'user', value: '188', diff: -30 },
] as const;

export function TotalStats() {
  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];
    const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;

    return (
      <Paper withBorder p="md" radius="md" key={stat.title}>
        <Group justify="space-between">
          <Text size="xs" c="dimmed" className={classes.title}>
            {stat.title}
          </Text>
          <Icon className={classes.icon} size={22} stroke={1.5} />
        </Group>

        <Group align="flex-end" gap="xs" mt={25}>
          <Text className={classes.value}>{stat.value}</Text>
          <Text c={stat.diff > 0 ? 'teal' : 'red'} fz="sm" fw={500} className={classes.diff}>
            <span>{stat.diff}%</span>
            <DiffIcon size={16} stroke={1.5} />
          </Text>
        </Group>

        <Text fz="xs" c="dimmed" mt={7}>
          Compared to previous month
        </Text>
      </Paper>
    );
  });
  return (
    <div className={classes.root}>
      <Title order={3} mb="lg">
        Estadísticas Totales
      </Title>
      <SimpleGrid cols={{ base: 1, xs: 2, md: 2 }}>{stats}</SimpleGrid>
    </div>
  );
}
