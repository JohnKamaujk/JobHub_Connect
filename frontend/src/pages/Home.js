import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { Box, Container, Stack } from "@mui/material";

const Home = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>
        <Navbar />
        <Header />
        <Container>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <Box sx={{ flex: 2, p: 2 }}></Box>
            <Box sx={{ flex: 5, p: 2 }}></Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Home;
