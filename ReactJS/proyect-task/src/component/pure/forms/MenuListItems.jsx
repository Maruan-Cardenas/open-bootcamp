import React from "react";
import { ListItem, List, ListItemIcon, ListItemText } from "@mui/material";
import { Settings, Home } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const getIcon = (icon) => {
  switch (icon) {
    case "HOME":
      return <Home />;
    case "TASK":
      return <Home />;
    case "SETTINGS":
      return <Settings />;
    default:
      break;
  }
};

const MenuListItems = ({ list }) => {
  const navigate = useNavigate()
  const navigation = (paht) => {
    navigate(paht)
  }

  return (
    <List>
      {
        list.map(({text, paht, icon}, index) => (
          <ListItem key={index} button onClick={() => navigation(paht)}>
            <ListItemIcon>
              {getIcon(icon)}
            </ListItemIcon>
            <ListItemText primary={text}/>
          </ListItem>
        ))
      }
    </List>
  )
};

export default MenuListItems;
