import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import FeedIcon from '@mui/icons-material/Feed';
import BusinessIcon from '@mui/icons-material/Business';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import TheatersIcon from '@mui/icons-material/Theaters';
import AdbIcon from '@mui/icons-material/Adb';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
export default function Tabone() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 400 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Home" icon={<HomeIcon />} iconPosition="start" href="/Home" />
        <Tab label="Item Two" icon={<FeedIcon />} iconPosition="start" href="/Feed"  />
        <Tab label="Item Three"  />
        <Tab label="Item Four"  />
        <Tab label="Item Five"  />
        <Tab label="Item Six" />
        <Tab label="Item Seven"  />
        <Tab label="Item Three"  />
        <Tab label="Item Four"  />
        <Tab label="Item Five"  />
        <Tab label="Item Six" />
        <Tab label="Item Seven"  />
      </Tabs>
    </Box>
  );
}
