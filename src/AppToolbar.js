import React from "react";
import {alpha, AppBar, IconButton, InputBase, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {Search, SearchTwoTone} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.common.white,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  title: {
    flex: 1
  }
}));

export default function AppToolbar(props) {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {/*<IconButton*/}
          {/*  edges="start"*/}
          {/*  className={classes.menuButton}*/}
          {/*  color="primary"*/}
          {/*  aria-label="menu"*/}
          {/*>*/}
          {/*  <MenuIcon />*/}
          {/*</IconButton>*/}
          <Typography className={classes.title} variant="h6" noWrap>
            Movie Browser
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchTwoTone />
            </div>
            <InputBase
                placeholder="Filter…"
                onChange={props.onFilterChange}
                value={props.value}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'filter' }}
            />
          </div>

          <form className={classes.search} onSubmit={props.onSearchSubmit}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
                placeholder="Search…"
                value={props.searchValue}
                onChange={props.onSearchChange}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton variant="contained" color="primary" type="submit">
              <Search/>
            </IconButton>
          </form>
        </Toolbar>
      </AppBar>
    </>
  );
}
