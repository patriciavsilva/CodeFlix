

import { Box, ThemeProvider, Typography } from "@mui/material";
import Header from "./components/Header"
import Layout from "./components/Layout";
import { appTheme } from "./config/theme";
import { Routes, Route, Link } from "react-router-dom";
import CategoryList from "./features/categories/ListCategory";



function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box component={'main'}
        sx={{
          height: "100vh",
          backgroundColor: (theme) => theme.palette.grey[900],
        }}>
        <Header />
        <Layout>
          <Typography variant="h1" component={'h1'}>
            News
          </Typography>
          <Routes>
            <Route path="/" element={<CategoryList />} />
           
          </Routes>

        </Layout>
      </Box>
    </ThemeProvider>
  )
}

export default App
