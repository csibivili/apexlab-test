import { Box, Container, Toolbar, Typography } from '@mui/material'

const Navbar = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        backgroundColor: 'secondary.main',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              color: 'primary.main',
            }}
          >
            Apexlab Test
          </Typography>
        </Toolbar>
      </Container>
    </Box>
  )
}

export default Navbar
