import {useState, useEffect} from 'react';
import { Select, MenuItem, FormControl } from '@mui/material';


const options = ['available', 'busy', 'unavailable']
;
function SelectEl({status, handleUpdate, id}) {
  const [selectedOption, setSelectedOption] = useState(status);

  useEffect(() => {
    handleUpdate(id, selectedOption.toLowerCase())
  }, [selectedOption])
  
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <FormControl>
      <Select
        labelId="status-select-label"
        id="status-select"
        value={selectedOption}
              onChange={handleChange}
              sx={{
                  boxShadow: 'none',
                  '.MuiOutlinedInput-notchedOutline': { border: 0 },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { border: 0, },
                  "& #status-select": { padding: "5px 32px 2px 18px " },
                  "& .MuiMenuItem-root .MuiMenuItem-gutters .Mui-selected": {fontSize: 14,},
                  fontSize: 14,
                  textTransform: "capitalize",
                }}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectEl;