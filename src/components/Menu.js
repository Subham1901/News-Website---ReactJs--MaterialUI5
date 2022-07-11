import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import FeedIcon from '@mui/icons-material/Feed';
import BusinessIcon from '@mui/icons-material/Business';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import TheatersIcon from '@mui/icons-material/Theaters';
import AdbIcon from '@mui/icons-material/Adb';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import { Box, Divider } from '@mui/material';
import { color } from '@mui/system';
export default function IconTabs() {

  return (
    <div>
<Box
      sx={{ boxShadow:5, borderRadius:2, flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 700, marginLeft:4 }}
    >
<Tabs
        orientation="vertical"
        variant="scrollable"
        aria-label="Vertical tabs example"
        sx={{ width:205 }}
      >
      <Tab icon={<HomeIcon />} iconPosition="start" href="/Home" label="Home" aria-label="Home" />
      <Tab icon={<FeedIcon />} iconPosition="start" href="/Feed" label="Feed" aria-label="Home" />
      <Tab icon={<BusinessIcon />} iconPosition="start" href="/Business" label="BizS"  />
      <Tab icon={<HealthAndSafetyIcon />} iconPosition="start" href="/Health" label="Hlth" />
      <Tab icon={<SportsBaseballIcon />} iconPosition="start" href="/Sports" label="Spots" />
      <Tab icon={<TheatersIcon />}  iconPosition="start" href="/Entertainment" label="Entmt" />
      <Tab icon={<AdbIcon />}  iconPosition="start" href="/Technology" label="Tech" />
      <Divider/>
      <Tab icon={<ViewHeadlineIcon />}  iconPosition="start" href="/Headlines" label="HEad | usa" />
    </Tabs>
    </Box>
    </div>
  );
}
