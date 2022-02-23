import { useState, useEffect } from "react";
import styled from "@emotion/styled";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";


import { DogImage } from "./DogImage";
import { getBreeds } from "../helpers/getBreeds";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  border-radius: 13px;
  font-size: 1.2rem;
  margin: 0 auto 70px;
  justify-content: center;
`;

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["affenpinscher", "african"];

export const MultipleSelectCheck = () => {
  const [breeds, setBreeds] = useState(names);
  const [dogName, setdogName] = useState([]);

  useEffect(() => {
    updateBreeds();
  }, []);

  const updateBreeds = () => {
    getBreeds().then((newBreeds) => {
      setBreeds(newBreeds);
    });
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setdogName(typeof value === "string" ? value.split(",") : value);

    console.log(dogName);
  };

  return (
    <div>
      <FormControl sx={{ m: 3, width: 400 }}>
        <InputLabel id="demo-multiple-checkbox-label">Dog</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={dogName}
          onChange={handleChange}
          input={<OutlinedInput label="Dog" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {breeds.map((breed) => (
            <MenuItem key={breed} value={breed}>
              <Checkbox checked={dogName.indexOf(breed) > -1} />
              <ListItemText primary={breed} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Container>
        {dogName &&
          dogName.map((breed, i) => <DogImage key={i} dogBreed={breed} />)}
      </Container>
    </div>
  );
};