import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { fetchBooks } from "../redux/bookSlice";
  import Filter from "./Filter";
  import { setFilter } from "../redux/filterSlice";
  
  const Books = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
  
    console.log("State", state);
  
  
    return (
      <Box>
        <Button variant="outlined" onClick={(e) => dispatch(fetchBooks())}>
          Fetch Data
        </Button>
        <Filter/>
        {/* {state.book.data && state.book.data.map((e) => <ul><li>{e.book_name}</li></ul>)} */}
        {state.book.data &&
          state.book.data.map((e) => (
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="cove_photo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  Name: {e.book_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Author: {e.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Category: {e.category}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Chapter Names: {e.chapters[0].name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  No of Chapters: {e.no_of_chapters}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Release Year: {e.release_year}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
  
  
  
          
      </Box>
    );
  };
  
  export default Books;
  