import { useState } from 'react';
import { IconChevronDown, IconHash } from '@tabler/icons-react';
import { Combobox, Input, InputBase, NativeSelect, Switch, Text, useCombobox } from '@mantine/core';
import classes from './SwitchTipodeGasto.module.css';

function SwitchTipodeGasto() {
  const groceries = ['📌 Fijos', '🔄 Variables'];
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));
  return (
    <>
      <Combobox
        store={combobox}
        position="bottom"
        middlewares={{ flip: false, shift: false }}
        onOptionSubmit={(val) => {
          setValue(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <InputBase
            component="button"
            type="button"
            pointer
            rightSection={<Combobox.Chevron />}
            rightSectionPointerEvents="none"
            onClick={() => combobox.toggleDropdown()}
          >
            {value || <Input.Placeholder>Tipo de Gasto</Input.Placeholder>}
          </InputBase>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
      {/* <NativeSelect
        styles={{
          root: {},
          input: {
            backgroundColor: 'light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-5))',
          },
        }}
        inputWrapperOrder={['input', 'description']}
        leftSection={<IconHash size={16} />}
        leftSectionPointerEvents="none"
        description="Tipo de Gasto"
        size="xs"
        value={TipodeGasto ? 'variable' : 'fijo'}
        onChange={(event) => setTipodeGasto(event.currentTarget.value === 'variable')}
      >
        <option value="fijo">Fijo</option>
        <hr />
        <option value="variable">Variable</option>
      </NativeSelect> */}
      {/* <Switch
        checked={TipodeGasto}
        onChange={(event) => setTipodeGasto(event.currentTarget.checked)}
        size="xl"
        thumbIcon={TipodeGasto ? <Text fz="xl">💸</Text> : <Text fz="xl">🏦</Text>}
        //    withThumbIndicator={false}
        style={{ width: '100%', display: 'flex', justifyContent: 'center', flexWrap: 'nowrap' }}
        label={TipodeGasto ? <Text size="sm">Variable</Text> : <Text size="sm">Fijo</Text>}
        //    onLabel={<Text fz="xl">Variable</Text>}
        //    offLabel={<Text fz="xl">Fijo</Text>}
      /> */}
    </>
  );
}

export default SwitchTipodeGasto;
