import { Box, Paper, Typography, CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#AB46D2',
        light: '#d14684',
        dark: '#4655d1',
        contrastText: '#55D8C1',
      },
      secondary: {
        main: '#FF6FB5',
        light: '#d06fff',
        dark: '#ffa16f',
        contrastText: '#FCF69C',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box height="100vh" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Paper elevation={3} sx={{ padding: '1rem', backgroundColor: 'primary.dark' }}>
          <Typography color="secondary.main" variant="h1">
            Starter App
          </Typography>
        </Paper>
      </Box>
    </ThemeProvider>
  )
}

export default App
