import { useContext } from "react";

import { Tabs, Tab } from "@mui/material";

import { grey } from "@mui/material/colors";

import MainContext from "../../context";
import { tabsData } from "../../constants/tabsData";
import { useTheme } from "@emotion/react";

const SidebarTabs = () => {
  const theme = useTheme();
  const { pageNumber, handlePageNumber, setDrawerOpen } =
    useContext(MainContext);

  const data = tabsData();

  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButton="auto"
      allowScrollButtonsMobile
      value={pageNumber}
      indicatorColor={theme.palette.mode === "dark" ? "primary" : "secondary"}
      textColor={theme.palette.mode === "dark" ? "primary" : "secondary"}
      onChange={handlePageNumber}
    >
      {data.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          icon={tab.icon}
          iconPosition="start"
          sx={{
            backgroundColor:
              theme.palette.mode === "dark" ? grey[800] : grey[500],
            color: "text.primary",
            borderRadius: 2,
            my: 0.5,
            mx: 1,
            "&.MuiTab-root": {
              minHeight: 30,
            },
          }}
          onClick={() => setDrawerOpen(false)}
          {...tab}
        />
      ))}
    </Tabs>
  );
};

export default SidebarTabs;
