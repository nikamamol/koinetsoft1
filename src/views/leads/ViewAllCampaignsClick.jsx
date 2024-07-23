import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Col, Container, Row } from 'react-bootstrap';

export default function ViewAllCampaignsClick() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Container fluid className='my-5 '>
        <Row className=''>
          <Col lg={3}>
          </Col>
          <Col lg={8}>
            <div className='bgColor rounded-3 shadow'>
              <h4 className='fw-bold py-3 ms-3 text_color'>Campaigns</h4>
            </div>
            <Box sx={{ width: '100%' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example" >
                    <Tab label="ongoing campaign" className='text_color ' value="1" style={{ fontWeight: "bold", fontSize: "15px", backgroundColor: "#ECFFE6", borderRadius: "20px", marginRight: "10px" }} />
                    <Tab label="expired campaign"  className='text_color' value="2" style={{ fontWeight: "bold", fontSize: "15px", backgroundColor: "#FFAAAA", borderRadius: "20px", marginRight: "10px" }} />
                    <Tab label="upcomming campaign"  className='text_color' value="3" style={{ fontWeight: "bold", fontSize: "15px",backgroundColor: "#FEFBD8", borderRadius: "20px", marginRight: "10px" }} />
                    <Tab label="paused campaign"  className='text_color ' value="4" style={{ fontWeight: "bold", fontSize: "15px", backgroundColor: "#DEF9C4", borderRadius: "20px", marginRight: "10px" }} />
                  </TabList>
                </Box>
                <TabPanel value="1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia aliquam quibusdam voluptas quod fugiat sint quia? Optio corrupti aperiam sequi harum, accusamus sint inventore deserunt. Quo ad corrupti totam commodi officiis vero fugit sequi autem maiores quisquam molestias voluptatem tenetur, aspernatur deleniti rem nam libero perspiciatis, maxime possimus eum sapiente!</TabPanel>
                <TabPanel value="2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, voluptatum.</TabPanel>
                <TabPanel value="3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, error.</TabPanel>
                <TabPanel value="4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, eius!</TabPanel>
              </TabContext>
            </Box>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
