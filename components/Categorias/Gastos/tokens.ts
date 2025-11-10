// Design tokens for the Gastos category table UI
// Centralize repeated inline values to keep styles consistent

export const emoji = {
  categoria: { fontSize: '3rem', lineHeight: 1 },
  grupo: { fontSize: '2.5rem', lineHeight: 1 },
  subgrupo: { fontSize: '2rem', lineHeight: 1 },
};

export const layout = {
  subgrupoIndentPx: 16 as const,
  grupoTextWidth: '60%',
  subgrupoTextWidth: '80%',
  grupoDescWidth: '100%',
  noBorderTable: { width: '100%' } as const,
};

// Spacing scale example (could integrate with Mantine theme later)
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};
