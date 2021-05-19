import Paper from '@material-ui/core/Paper';
import MuiMenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import abasse from "./Images/AbasseLogo.png";


const styles = {
    root: {
        margin: 0,
        padding: 0,
        width: "20vw",
        //backgroundColor: "#3240a8"
    },
    paper: {
        //height: "100vh",
        //paddingTop: "25vh",
        backgroundColor: "#3240a8",
        color: "white",
    },
    avatar: {
        width: "10vw",
        height: "10vw",
        marginBottom: "7vh"
    },
    menu: {
        paddingTop: "25vh",
    },
    
  };

  const MenuItem = withStyles({
    root: {
      justifyContent: "center"
    }
  })(MuiMenuItem);

class NavigationPanel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {heightHundredPercent: false};
      
    }
    handleMenuChange = (e) => {
        this.props.onMenuSelect(e.target.outerText);  
        if (e.target.outerText == 'Mes expériences professionnel') {
          let heightHundredPercent = true;
          this.setState({heightHundredPercent});
        }
        else{
          let heightHundredPercent = false;
          this.setState({heightHundredPercent});
        }
    }
    render() {
      var heightPaper =  this.props.isOnHeightHundredPercent && (window.screen.height <= 720)  ? "100%" : "100vh";
      return (
            <Container  className={this.props.classes.root} maxWidth="xs">
                <Paper style={{height: heightPaper}} className = {this.props.classes.paper}>
                    <MenuList className = {this.props.classes.menu}>
                        <center><Avatar alt="Abasse FIDALY" src={abasse} className={this.props.classes.avatar} /></center>
                        <MenuItem onClick={this.handleMenuChange}>Acceuil</MenuItem>
                        <MenuItem onClick={this.handleMenuChange}>Mes compétences</MenuItem>
                        <MenuItem onClick={this.handleMenuChange}>Mes expériences professionnel</MenuItem>
                        <MenuItem onClick={this.handleMenuChange}>Mes réalisations</MenuItem>
                    </MenuList>
                </Paper>
            </Container>
        
      );
    }
  }

  
  export default withStyles(styles)(NavigationPanel);