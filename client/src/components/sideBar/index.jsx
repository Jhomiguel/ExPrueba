import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { Link } from "react-router-dom";
import ThemeContext from "../../contexts/Theme/themeContext";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    position: "absolute",
    height: 50,
    ...theme.mixins.toolbar,
  },

  drawer: {
    width: drawerWidth,
  },
  Logo: {
    marginRight: theme.spacing(10),
  },
  drawerContainer: {
    overflow: "auto",
  },
  bcColorText: {
    backgroundColor: theme.palette.primary,
  },
}));

export default function SideBar() {
  const classes = useStyles();

  const themeContext = useContext(ThemeContext);
  const { redTheme, blueTheme, greenTheme } = themeContext;

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Link to={"/"} style={{ textDecoration: "inherit" }}>
            <Typography variant="h6" color={"inherit"}>
              Panel Management
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Drawer className={classes.drawer} variant="permanent">
        <Toolbar />
        <List>
          <Link to={"/department/create"} style={{ textDecoration: "inherit" }}>
            <ListItem button>
              <ListItemIcon>
                <AddBoxIcon />
              </ListItemIcon>
              <ListItemText primary={"Add Department"} />
            </ListItem>
          </Link>
          <Link to={"/"} style={{ textDecoration: "inherit" }}>
            <ListItem button>
              <ListItemIcon>
                <ViewComfyIcon />
              </ListItemIcon>
              <ListItemText primary={"View Departments"} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to={"/employee/add"} style={{ textDecoration: "inherit" }}>
            <ListItem button>
              <ListItemIcon>
                <PersonAddIcon />
              </ListItemIcon>
              <ListItemText primary={"Add Employee"} />
            </ListItem>
          </Link>
          <Link to={"/employee"} style={{ textDecoration: "inherit" }}>
            <ListItem button>
              <ListItemIcon>
                <ViewComfyIcon />
              </ListItemIcon>
              <ListItemText primary={"View Employees"} />
            </ListItem>
          </Link>
        </List>
        <Divider />

        <ListItem button onClick={() => redTheme()}>
          <ListItemIcon>
            <ColorLensIcon />
          </ListItemIcon>
          <ListItemText primary={"Red"} />
        </ListItem>

        <ListItem button onClick={() => blueTheme()}>
          <ListItemIcon>
            <ColorLensIcon />
          </ListItemIcon>
          <ListItemText primary={"Blue"} />
        </ListItem>

        <ListItem button onClick={() => greenTheme()}>
          <ListItemIcon>
            <ColorLensIcon />
          </ListItemIcon>
          <ListItemText primary={"Green"} />
        </ListItem>
      </Drawer>
    </>
  );
}
