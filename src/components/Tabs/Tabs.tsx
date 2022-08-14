import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Container from '@mui/material/Container';

function TabPanel() {
  const [value, setValue] = React.useState(2);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg">
      <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
        <Tab label="SignUp" />
        <Tab label="SignIn" />
        <Tab label="Main" />
        <Tab label="Play" />
        <Tab label="Leaderboard" />
      </Tabs>
    </Container>
  );
}

export default TabPanel;
