import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Col, Container, Row } from 'react-bootstrap';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function ViewAllCampaignsClick() {
  const [expanded, setExpanded] = React.useState('panel1');
  const [activeTab, setActiveTab] = React.useState('tele_marketing');


  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (

    <div>
      <Container fluid className='my-5 '>
        <Row className=''>
          <Col lg={3}>
          </Col>
          <Col lg={8}>
            <div className='bgColor rounded-3 shadow'>
              <h4 className='fw-bold py-3 ms-3 text_color'> All Campaign List</h4>
            </div>
            <div className='mt-3'>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="border-0 mb-3">
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" className="rounded-4" style={{ backgroundColor: "#FFF1DB" }}>
                  <Typography>ONGOING CAMPAIGN</Typography>
                </AccordionSummary>
                <AccordionDetails className='border-0'>
                  <Typography>
                    <div className="container-xxl flex-grow-1 container-p-y">
                      <div className="list-group list-group-horizontal-md text-md-center">
                        <a
                          className={`list-group-item list-group-item-action ${activeTab === 'tele_marketing' ? 'active' : ''}`}
                          onClick={() => handleTabClick('tele_marketing')}
                        >
                          Tele Marketing (0)
                        </a>
                        <a
                          className={`list-group-item list-group-item-action ${activeTab === 'email_marketing' ? 'active' : ''}`}
                          onClick={() => handleTabClick('email_marketing')}
                        >
                          Email Marketing (0)
                        </a>
                      </div>
                      <div className="tab-content px-0 mt-3 card rounded-4 border-0 shadow p-4">
                        <div className={`tab-pane fade ${activeTab === 'tele_marketing' ? 'show active' : ''}`} id="tele_marketing">
                          <div className="row ms-3" id="div_ongoing_tele_marketing">
                            <div className="col-md-12">
                              <h3>Tele Marketing Campaigns</h3>
                              <p>Here you can view ongoing Tele Marketing campaigns. Add details and data related to your Tele Marketing campaigns here.</p>
                            </div>
                          </div>
                        </div>
                        <div className={`tab-pane fade ${activeTab === 'email_marketing' ? 'show active' : ''}`} id="email_marketing">
                          <div className="row  ms-3" id="div_ongoing_email_marketing">
                            <div className="col-md-12">
                              <h3>Email Marketing Campaigns</h3>
                              <p>Here you can view ongoing Email Marketing campaigns. Add details and data related to your Email Marketing campaigns here.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="border-0 mb-3">
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" className="rounded-4 border-0" style={{ backgroundColor: "#EECEB9" }}>
                  <Typography>EXPIRED CAMPAIGN</Typography>
                </AccordionSummary>
                <AccordionDetails className='border-0'>
                  <Typography>
                    <div className="container-xxl flex-grow-1 container-p-y">
                      <div className="list-group list-group-horizontal-md text-md-center">
                        <a
                          className={`list-group-item list-group-item-action ${activeTab === 'tele_marketing' ? 'active' : ''}`}
                          onClick={() => handleTabClick('tele_marketing')}
                        >
                          Tele Marketing (0)
                        </a>
                        <a
                          className={`list-group-item list-group-item-action ${activeTab === 'email_marketing' ? 'active' : ''}`}
                          onClick={() => handleTabClick('email_marketing')}
                        >
                          Email Marketing (0)
                        </a>
                      </div>
                      <div className="tab-content px-0 mt-3 card rounded-4 border-0 shadow p-4">
                        <div className={`tab-pane fade ${activeTab === 'tele_marketing' ? 'show active' : ''}`} id="tele_marketing">
                          <div className="row ms-3" id="div_ongoing_tele_marketing">
                            <div className="col-md-12">
                              <h3>Tele Marketing Campaigns</h3>
                              <p>Here you can view ongoing Tele Marketing campaigns. Add details and data related to your Tele Marketing campaigns here.</p>
                            </div>
                          </div>
                        </div>
                        <div className={`tab-pane fade ${activeTab === 'email_marketing' ? 'show active' : ''}`} id="email_marketing">
                          <div className="row  ms-3" id="div_ongoing_email_marketing">
                            <div className="col-md-12">
                              <h3>Email Marketing Campaigns</h3>
                              <p>Here you can view ongoing Email Marketing campaigns. Add details and data related to your Email Marketing campaigns here.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="border-0 mb-3">
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" className="rounded-4 border-0" style={{ backgroundColor: "#FFD3B6" }}>
                  <Typography>UPCOMMING CAMPAIGN</Typography>
                </AccordionSummary>
                <AccordionDetails className='border-0'>
                  <Typography>
                    <div className="container-xxl flex-grow-1 container-p-y">
                      <div className="list-group list-group-horizontal-md text-md-center">
                        <a
                          className={`list-group-item list-group-item-action ${activeTab === 'tele_marketing' ? 'active' : ''}`}
                          onClick={() => handleTabClick('tele_marketing')}
                        >
                          Tele Marketing (0)
                        </a>
                        <a
                          className={`list-group-item list-group-item-action ${activeTab === 'email_marketing' ? 'active' : ''}`}
                          onClick={() => handleTabClick('email_marketing')}
                        >
                          Email Marketing (0)
                        </a>
                      </div>
                      <div className="tab-content px-0 mt-3 card rounded-4 p-4 border-0 shadow">
                        <div className={`tab-pane fade ${activeTab === 'tele_marketing' ? 'show active' : ''}`} id="tele_marketing">
                          <div className="row ms-3" id="div_ongoing_tele_marketing">
                            <div className="col-md-12">
                              <h3>Tele Marketing Campaigns</h3>
                              <p>Here you can view ongoing Tele Marketing campaigns. Add details and data related to your Tele Marketing campaigns here.</p>
                            </div>
                          </div>
                        </div>
                        <div className={`tab-pane fade ${activeTab === 'email_marketing' ? 'show active' : ''}`} id="email_marketing">
                          <div className="row  ms-3" id="div_ongoing_email_marketing">
                            <div className="col-md-12">
                              <h3>Email Marketing Campaigns</h3>
                              <p>Here you can view ongoing Email Marketing campaigns. Add details and data related to your Email Marketing campaigns here.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className="border-0 mb-3">
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" className="rounded-4 border-0" style={{ backgroundColor: "#F7E7DC" }}>
                  <Typography>PAUSED CAMPAIGN</Typography>
                </AccordionSummary>
                <AccordionDetails className='border-0'>
                  <Typography>
                    <div className="container-xxl flex-grow-1 container-p-y">
                      <div className="list-group list-group-horizontal-md text-md-center">
                        <a
                          className={`list-group-item list-group-item-action ${activeTab === 'tele_marketing' ? 'active' : ''}`}
                          onClick={() => handleTabClick('tele_marketing')}
                        >
                          Tele Marketing (0)
                        </a>
                        <a
                          className={`list-group-item list-group-item-action ${activeTab === 'email_marketing' ? 'active' : ''}`}
                          onClick={() => handleTabClick('email_marketing')}
                        >
                          Email Marketing (0)
                        </a>
                      </div>
                      <div className="tab-content px-0 mt-3 card rounded-4 p-4">
                        <div className={`tab-pane fade ${activeTab === 'tele_marketing' ? 'show active' : ''}`} id="tele_marketing">
                          <div className="row ms-3" id="div_ongoing_tele_marketing">
                            <div className="col-md-12">
                              <h3>Tele Marketing Campaigns</h3>
                              <p>Here you can view ongoing Tele Marketing campaigns. Add details and data related to your Tele Marketing campaigns here.</p>
                            </div>
                          </div>
                        </div>
                        <div className={`tab-pane fade ${activeTab === 'email_marketing' ? 'show active' : ''}`} id="email_marketing">
                          <div className="row  ms-3" id="div_ongoing_email_marketing">
                            <div className="col-md-12">
                              <h3>Email Marketing Campaigns</h3>
                              <p>Here you can view ongoing Email Marketing campaigns. Add details and data related to your Email Marketing campaigns here.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

  );
}
