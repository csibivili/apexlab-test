import { useState } from 'react'
import { Box, Container, CssBaseline, ThemeProvider, TextField, Button } from '@mui/material'
import { createTheme } from '@mui/material/styles'

import Footer from '../Footer'
import Navbar from '../Navbar'

function App() {
  const [search, setSearch] = useState('')

  const theme = createTheme({
    palette: {
      primary: {
        main: '#EEEDDE',
        light: '#eedde7',
        dark: '#ddeee5',
        contrastText: '#141E27',
      },
      secondary: {
        main: '#203239',
        light: '#253820',
        dark: '#332038',
        contrastText: '#141E27',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box height="100vh" display="flex" flexDirection="column">
        <Navbar />
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: 'primary.light',
            display: 'flex',
          }}
        >
          <Container maxWidth="xl" sx={{ paddingTop: 4 }}>
            <TextField
              label="movie title"
              variant="filled"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="contained" sx={{ padding: 2, ml: 1 }}>
              Search
            </Button>
          </Container>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
