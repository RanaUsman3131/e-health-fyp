import React from "react";
import Card from "../../components/Card/index"
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Dashboard() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
      
          <Grid item xs={4}>
            <Card className="d-flex">
              <Typography sx={{ fontSize: 16 }} variant="body1" color="text.secondary" gutterBottom>
                Total Patients
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
          <Grid item xs={4}>
            <Card className="d-flex">
              <Typography sx={{ fontSize: 16 }} variant="body2" color="text.secondary" gutterBottom>
                Total Departments
              </Typography>

            </Card>
          </Grid>
  
        
        </Grid>
      </Box>
      
    </>
  );
}
