import React from "react";
import RoutesModule from "./Components/RoutesModule";
import Box from "@mui/material/Box";
import AppHeader from "./Components/AppHeader";
import InfoPage from "./Components/InfoPage";
import { Stack } from "@mui/material";

function Portfolio() {
  return (
    <Stack>
      <AppHeader />
      <Stack direction="row" className="mainContainer" justifyContent="space-between">
        <InfoPage />
        <RoutesModule />
      </Stack>
    </Stack>
  );
}

export default Portfolio;
