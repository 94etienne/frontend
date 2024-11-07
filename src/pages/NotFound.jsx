import { Box, Toolbar, Typography } from '@mui/material';


const InvalidPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        px: 2, // Horizontal padding for smaller screens
        textAlign: 'center',
      }}
    >
      <Toolbar />
      <Typography variant="h1" component="h1" sx={{ fontSize: { xs: '2rem', sm: '3rem', md: '4rem', color:'gray' }, fontWeight: 'bold' }}>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' }, mt: 2, color:'gray' }}>
        Sorry, the page you are looking for does not exist.
      </Typography>
    </Box>
  );
};

export default InvalidPage;
