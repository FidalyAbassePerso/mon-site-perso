import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";


const styles = {
    grow: {
        flexGrow: 1,
        width: "98vw"
    },
    sectionDesktop: {
        display: "flex"
    },
    sectionMobile: {
        display: "none"
    },
    title: {
        overflow: "visible"
    },
};


class NavigationBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {mobileMoreAnchorEl: null,mobileMenuDisplay: "flex",largeScreenMenuDisplay: "flex"};
      this.responsiveValueWidth = 825;
      
    }
    handleMenuChange = (e) => {
        this.props.onMenuSelect(e.target.outerText);            
    }

    handleMobileMenuClose = () => {
        this.setState({mobileMoreAnchorEl: null});
    };
    handleMobileMenuOpen = (event) => {
        this.setState({mobileMoreAnchorEl: event.currentTarget});
    };

    updateComponentSize = () =>{
        let mobileMenuDisplay = window.innerWidth < 980 ? "flex" : "none";
        let largeScreenMenuDisplay = window.innerWidth > 980 ? "flex" : "none";;
        this.setState({mobileMenuDisplay,largeScreenMenuDisplay});
    }

    componentDidMount() {
        this.updateComponentSize();
        window.addEventListener("resize", this.updateComponentSize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateComponentSize);
    }

    render() {
      var classes = this.props.classes;

      return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                    Abasse FIDALY
                    </Typography>
                    <div className={classes.grow} />
                    

                    <div style= {{display: this.state.mobileMenuDisplay}}>
                            <IconButton
                                aria-label="show more"
                                aria-controls="primary-search-account-menu"
                                aria-haspopup="true"
                                onClick={this.handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                    </div>
                    <div style= {{display: this.state.largeScreenMenuDisplay}}>
                        <MenuItem onClick={this.handleMenuChange}>Acceuil</MenuItem>
                        <MenuItem onClick={this.handleMenuChange}>Mes compétences</MenuItem>
                        <MenuItem onClick={this.handleMenuChange}>Mes expériences professionnel</MenuItem>
                        <MenuItem onClick={this.handleMenuChange}>Mes réalisations</MenuItem>
                    </div>
                    
                </Toolbar>
            </AppBar>
            <Menu
                anchorEl={this.state.mobileMoreAnchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                id="primary-search-account-menu"
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={Boolean(this.state.mobileMoreAnchorEl)}
                onClose={this.handleMobileMenuClose}
            >
          <MenuItem onClick={this.handleMenuChange}>Acceuil</MenuItem>
          <MenuItem onClick={this.handleMenuChange}>Mes compétences</MenuItem>
          <MenuItem onClick={this.handleMenuChange}>Mes expériences professionnel</MenuItem>
          <MenuItem onClick={this.handleMenuChange}>Mes réalisations</MenuItem>
        </Menu>
      </div>
        
      );
    }
  }

  
  export default withStyles(styles)(NavigationBar);