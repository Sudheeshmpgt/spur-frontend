import { Box, Grid } from "@mui/material";
import React from "react";
import AdminAside from "../../components/Admin/AdminAside";
import UpdateUser from "../../components/Admin/UserManagement/UpdateUser";
import AdminLayout from "../../Layouts/adminLayout"

function UpdateUserPage() {
  return (
    <AdminLayout>
    <Grid container>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor:''
        }}
      >
        <Box sx={{ width: "26%", display: "flex", ml: "auto", mr: "auto",  }}>
          <AdminAside />
        </Box>
        <Box
          sx={{
            width: "74%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
          }}>
            <UpdateUser/>
          <Box
            className="scrollbar-hidden"
            width="100%"
            sx={{ mt: -8.0, overflow: "scroll" }}
          ></Box>
        </Box>
      </Box>
    </Grid>
  </AdminLayout>
  )
}

export default UpdateUserPage