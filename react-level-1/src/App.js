import { useEffect, useState } from "react";

const formStruc = [
  { id: 'item1', label: 'Item 1' },
  { id: 'item2', label: 'Item 2' },
  { id: 'item3', label: 'Item 3' },
  { id: 'item4', label: 'Item 4' }
]

const App = () => {
  const [checked, setChecked] = useState([]);
  const [allChecked, setAllChecked] = useState(false);

  useEffect(() => {
    setAllChecked(checked.length && formStruc.length === checked.length);
  }, [checked])

  const toggleCheckbox = ({ target: { id } }) => {
    if (checked.includes(id)) setChecked(checked.filter(el => el !== id));
    else setChecked([...checked, id]);
  };

  const toggleAll = () => {
    if (allChecked) setChecked([]);
    else setChecked(formStruc.map(({ id }) => id))
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <MyCheckBox
        id="slect-all"
        label="Select all"
        checked={allChecked}
        onChange={toggleAll}
      />
      {formStruc.map(formItem => (
        <MyCheckBox
          key={formItem.id}
          onChange={toggleCheckbox}
          checked={checked.includes(formItem.id)}
          {...formItem}
        />
      ))}
    </div>
  );
}

const MyCheckBox = ({ id, label, ...props }) => (
  <label><input type="checkbox" id={id} {...props} /> {label}</label>
);

export default App;
