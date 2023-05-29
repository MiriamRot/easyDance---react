import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useNavigate } from 'react-router-dom';

export default function Menu() {
  const [value, setValue] = React.useState('1');
  const navigate=useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Personal Erea" value="1"/>
            <Tab label="Sign in" value="2" onClick={()=>{navigate("/signIn")}}/>
            <Tab label="Video Library" value="3"  onClick={()=>{navigate("/videoLibrary")}}/>
          </TabList>
        </Box>
        <TabPanel value="1">Personal Erea</TabPanel>
        <TabPanel value="2">Sign in</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}