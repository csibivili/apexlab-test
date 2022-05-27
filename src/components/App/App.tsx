import { Box, Typography, CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import Footer from '../Footer'
import Navbar from '../Navbar'

function App() {
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
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography color="secondary.main" variant="h1">
            Starter App
          </Typography>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
