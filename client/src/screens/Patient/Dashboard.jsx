import React from "react";
import Card from "../../components/Card/index"
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function PatientDashboard() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
      
          <Grid item xs={4}>
            <Card className="d-flex">
              <Typography sx={{ fontSize: 16 }} variant="body1" color="text.secondary" gutterBottom>
                Pending Appointments
              </Typography>
          
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className="d-flex">
              <Typography sx={{ fontSize: 16 }} variant="body1" color="text.secondary" gutterBottom>
                Total Appointments
              </Typography>

            </Card>
          </Grid>
         
  
        
        </Grid>
      </Box>
      
    </>
  );
}
