import React, { useEffect }  from "react";
import Card from "../../components/Card/index"
import Box from '@mui/material/Box';
import { getYourDepartment } from "../../api/api";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Dashboard() {
  const [department, setDepartment] = React.useState([]);
  const [dep, setYourDep] = React.useState("");
  const [totalApp, setTotalApp] = React.useState("");
  const [totalPatients, setTotalPatients] = React.useState("");

  
  const Department = () => {
    getYourDepartment().then((res) => {
      console.log("appointment",res)
      setYourDep(res.data.data.department_id.name);
      setTotalApp(res.data.appointment)
      setTotalPatients(res.data.setTotalPatients)

      
      //   Doctor(formik.setFieldValue("department_id"));
    });
  };
  useEffect(() => {
    Department()

  }, []);
  
  return (
    
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
      
          <Grid item xs={4}>
            <Card className="d-flex">
              <Typography sx={{ fontSize: 16 }} variant="body1" color="text.secondary" gutterBottom>
                Total Patients<h2><b>{totalPatients}</b></h2>
                
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
          <Grid item xs={4}>
            <Card className="d-flex">
              <Typography sx={{ fontSize: 16 }} variant="body2" color="text.secondary" gutterBottom>
                Your Department Is <h2><b>{dep}</b></h2>
              </Typography>

            </Card>
          </Grid>
  
        
        </Grid>
      </Box>
      
    </>
  );
}
