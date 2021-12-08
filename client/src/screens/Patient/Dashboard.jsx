import React, { useEffect} from "react";
import Card from "../../components/Card/index"
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { getYourAppointment } from "../../api/api";

export default function PatientDashboard() {
  const [pending, setRemainingApp] = React.useState("");
  const [totalApp, setTotalApp] = React.useState("");

  const GetAppointment = () => {
    getYourAppointment().then((res) => {
      console.log("appointment", res)
      setRemainingApp(res.data.data);
      setTotalApp(res.data.pending)
     


      //   Doctor(formik.setFieldValue("department_id"));
    });
  };
  useEffect(() => {
    GetAppointment()

  }, []);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
      
          <Grid item xs={4}>
            <Card className="d-flex">
              <Typography sx={{ fontSize: 16 }} variant="body1" color="text.secondary" gutterBottom>
                Pending Appointments<h2><b>{pending}</b></h2>
              </Typography>
          
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className="d-flex">
              <Typography sx={{ fontSize: 16 }} variant="body1" color="text.secondary" gutterBottom>
                Total Appointments<h2><b>{totalApp}</b></h2>
              </Typography>

            </Card>
          </Grid>
         
  
        
        </Grid>
      </Box>
      
    </>
  );
}
