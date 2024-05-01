// import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import React from "react";
import { setFilter } from "../redux/filterSlice";
import { useDispatch } from "react-redux";


const Filter = () => {

  const dispatch = useDispatch();

  return (
    // <Box>
    //   <Typography gutterBottom variant="h5" component="div">
    //     Filter by Category:
    //   </Typography>
    //   <FormControlLabel control={<Checkbox />} label="Science_Fiction" onClick={(e) => console.log(e.target.value)}/>
    //   <FormControlLabel control={<Checkbox />} label="Novel" onClick={(e) => console.log(e.target.value)}/>
    //   <FormControlLabel control={<Checkbox />} label="Thriller" onClick={(e) => console.log(e.target.value)}/>
    //   <FormControlLabel control={<Checkbox />} label="Motivational" onClick={(e) => console.log(e.target.value)}/>
    // </Box>

    <div>
      <button onClick={() => dispatch(setFilter("Science_Fiction"))}>Science_Fiction</button>
      <button onClick={() => dispatch(setFilter("Novel"))}>Novel</button>
      <button onClick={() => dispatch(setFilter("Thriller"))}>Thriller</button>
      <button onClick={() => dispatch(setFilter("Motivational"))}>Motivational</button>
    </div>
  );
};

export default Filter;