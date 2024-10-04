import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  CardHeader,
  Divider,
  Tabs,
  Tab
} from '@mui/material';
import { useState, useEffect } from 'react';
import logo from '../assets/trinity_logo.png';


// Flag image URLs mapping
const flagUrls = {
  Rwanda: 'https://flagcdn.com/w320/rw.png',
  Uganda: 'https://flagcdn.com/w320/ug.png',
  Kenya: 'https://flagcdn.com/w320/ke.png',
  'South Sudan': 'https://flagcdn.com/w320/ss.png',
};

// Sample Route Data
const routeData = {
  "KIGALI/RWANDA": [
    { route: "Kigali - Kampala", price: "20,000 RWF", hours: ["9AM", "15h:30'PM", "20hPM", "21hPM"] },
    { route: "Kigali - Nairobi", price: "55,000 RWF", hours: ["17h PM"] }
  ],
  "KAMPALA/UGANDA": [
    { route: "Kampala - Kigali", price: "80,000 UGX", hours: ["9h AM", "20h PM", "21h PM"] },
    { route: "Kampala - Nairobi", price: "100,000 UGX", hours: ["17h PM", "19h PM"] },
    { route: "Kampala - Juba", price: "140,000 UGX", hours: ["20h PM", "21h PM"] }
  ],
  "NAIROBI/KENYA": [
    { route: "Nairobi - Kigali", price: "6,500 KES", hours: ["14h PM"] },
    { route: "Nairobi - Kampala", price: "3,500 KES", hours: ["20h PM"] }
  ],
  "JUBA/SOUTH SUDAN": [
    { route: "Juba - Bor", price: "20,000 SSP", hours: ["8h AM"] },
    { route: "Bor - Juba", price: "20,000 SSP", hours: ["8h AM"] },
    { route: "Juba - Wau", price: "90,000 SSP", hours: ["5h AM"] },
    { route: "Wau - Juba", price: "90,000 SSP", hours: ["10h AM"] },
    { route: "Juba - Kampala", price: "130,000 SSP", hours: ["7h AM", "8h AM"] }
  ]
};

// Days of the week
const days = [
  { label: 'Monday', kinyarwanda: 'Kuwa Mbere', french: 'Lundi', swahili: 'Jumatatu' },
  { label: 'Tuesday', kinyarwanda: 'Kuwa Kabiri', french: 'Mardi', swahili: 'Jumanne' },
  { label: 'Wednesday', kinyarwanda: 'Kuwa Gatatu', french: 'Mercredi', swahili: 'Jumatano' },
  { label: 'Thursday', kinyarwanda: 'Kuwa Kane', french: 'Jeudi', swahili: 'Alhamisi' },
  { label: 'Friday', kinyarwanda: 'Kuwa Gatanu', french: 'Vendredi', swahili: 'Ijumaa' },
  { label: 'Saturday', kinyarwanda: 'Kuwa Gatandatu', french: 'Samedi', swahili: 'Jumamosi' },
  { label: 'Sunday', kinyarwanda: 'Kuwa Cyumweru', french: 'Dimanche', swahili: 'Jumapili' },
];

function Bus() {
  const [selectedDay, setSelectedDay] = useState(0);

  // Get the current day index
  useEffect(() => {
    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    setSelectedDay(today === 0 ? 6 : today - 1); // Adjust to match the days array
  }, []);

  const getCountryFlag = (city) => {
    if (city.includes("Kigali")) return flagUrls.Rwanda;
    if (city.includes("Kampala")) return flagUrls.Uganda;
    if (city.includes("Nairobi")) return flagUrls.Kenya;
    if (city.includes("Juba") || city.includes("Bor") || city.includes("Wau")) return flagUrls["South Sudan"];
    return null;
  };

  return (
    <Container>
    {/* Sticky Wrapper for the Header */}
    <div style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <CardHeader
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Trinity Express Logo" style={{ width: '250px', marginRight: '20px' }} />
            <Typography variant="h4" style={{ color: '#fff', fontWeight: 'bold' }}>
              Trinity Express Country Route Information
            </Typography>
          </div>
        }
        sx={{
          backgroundColor: '#3f51b5',
          backgroundImage: 'linear-gradient(45deg, #3f51b5 30%, #5c6bc0 90%)',
          padding: '20px',
          textAlign: 'center',
          marginBottom: '30px',
          borderRadius: '10px',
        }}
      />
    </div>



      {/* Tabs for selecting days */}
      <Tabs
        value={selectedDay}
        centered
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
      >
        <Tab
          label={`${days[selectedDay].label} / ${days[selectedDay].kinyarwanda} / ${days[selectedDay].french} / ${days[selectedDay].swahili}`}
          sx={{
            transition: '0.3s',
            '&:hover': {
              color: '#fff',
              backgroundColor: '#1976d2',
            },
          }}
        />
      </Tabs>

      {/* Display routes for the selected day */}
      {Object.entries(routeData).map(([country, routes], index) => (
        <div key={index} style={{ marginBottom: '50px' }}>
          <Typography
            variant="h4"
            color="primary"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: '#1976d2',
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.7rem' },
            }}
          >
            {country}
          </Typography>
          <Divider
            sx={{ marginBottom: { xs: '15px', sm: '20px' }, height: '2px', backgroundColor: '#1976d2' }}
          />

          {/* Grid layout for routes */}
          <Grid container spacing={3}>
            {routes.map((route, idx) => {
              const [fromCity, toCity] = route.route.split(' - '); // Split the route into "from" and "to"
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                  <Card
                    sx={{
                      borderRadius: '12px',
                      boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)',
                      transition: 'transform 0.3s ease-in-out',
                      backgroundColor: '#f4f6f8',
                      '&:hover': { transform: 'scale(1.05)' },
                      minWidth: '100%',
                    }}
                  >
                    <CardHeader
                      title={
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <img
                            src={getCountryFlag(fromCity)}
                            alt={`${fromCity} Flag`}
                            style={{ width: '30px', marginRight: '10px' }}
                          />
                          {route.route}
                          <img
                            src={getCountryFlag(toCity)}
                            alt={`${toCity} Flag`}
                            style={{ width: '30px', marginLeft: '10px' }}
                          />
                        </div>
                      }
                      titleTypographyProps={{ variant: 'h6', style: { color: '#fff', fontWeight: 'bold' } }}
                      sx={{
                        backgroundColor: '#3f51b5',
                        backgroundImage: 'linear-gradient(45deg, #3f51b5 30%, #5c6bc0 90%)',
                        textAlign: 'center',
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6" color="textPrimary" gutterBottom>
                        Price: <span style={{ color: '#1976d2', fontWeight: 'bold' }}>{route.price}</span>
                      </Typography>
                      <Typography variant="body1" color="textSecondary" gutterBottom>
                        Available Hours:
                      </Typography>
                      <ul style={{ paddingLeft: '20px' }}>
                        {route.hours.map((hour, index) => (
                          <li key={index} style={{ listStyle: 'circle', color: '#1976d2' }}>
                            <Typography variant="body2">{hour}</Typography>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </div>
      ))}
    </Container>
  );
}

export default Bus