import ComputerIcon from '@material-ui/icons/Computer';
import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import PublicIcon from '@material-ui/icons/Public';
import GitHubIcon from '@material-ui/icons/GitHub';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';



const styles = {
    barProgress: {
        borderRadius: 5,
        height: 10,
    },
    root: {
        paddingTop: "2vw",
    },
    bloc: {
        height: "14vh"
    }
    
};

class Competences extends React.Component {
    constructor(props) {
      super(props);
      this.state = {widthBar: "70vw",labelWidth: "80vw", marginBar: "6vw"};
      
    }

    updateComponentSize = () =>{
        let widthBar = this.state.widthBar;
        let marginBar = this.state.marginBar;
        let labelWidth = this.state.labelWidth;
        if (window.innerWidth < 1172) {
            widthBar = "88vw"; 
            labelWidth = "98vw"
        }
        else if (window.innerWidth > 1172){
            widthBar = "70vw"; 
            labelWidth = "80vw"
        }
        else if (window.innerWidth <= 355) {
            marginBar = "8vw";
        }
        this.setState({widthBar,labelWidth,marginBar});
    }

    componentDidMount() {
        this.updateComponentSize();
        window.addEventListener("resize", this.updateComponentSize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateComponentSize);
    }
    
    render() {
        var barLabelWidth = this.state.labelWidth;
        var marginBar = this.state.marginBar;
        return (
            <div>
                
                <Grid container spacing={3} className={this.props.classes.root}>

                    <div className={this.props.classes.bloc}>
                        <Grid item xs={12}>
                            <Typography style={{width: barLabelWidth}}>Technologies Spring (SpringMVC, SpringBatch, SpringRest, SpringBoot) </Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <LinearProgress className={this.props.classes.barProgress} style={{width: this.state.widthBar,marginLeft: marginBar}} variant="determinate" value={70} />
                        </Grid>
                    </div>
                    
                    <div className={this.props.classes.bloc}>
                        <Grid item xs={12}>
                            <Typography style={{width: barLabelWidth}}>Strusts2 </Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <LinearProgress className={this.props.classes.barProgress} style={{width: this.state.widthBar,marginLeft: marginBar}} variant="determinate" value={70} />
                        </Grid>
                    </div>
                    
                    <div className={this.props.classes.bloc}>
                        <Grid item xs={12}>
                            <Typography style={{width: barLabelWidth}}>ReactJs </Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <LinearProgress className={this.props.classes.barProgress} style={{width: this.state.widthBar,marginLeft: marginBar}} variant="determinate" value={40} />
                        </Grid>
                    </div>
                    
                    <div className={this.props.classes.bloc}>
                        <Grid item xs={12}>
                            <Typography style={{width: barLabelWidth}}>JQuery</Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <LinearProgress className={this.props.classes.barProgress} style={{width: this.state.widthBar,marginLeft: marginBar}} variant="determinate" value={60} />
                        </Grid>
                    </div>
                    

                    <div className={this.props.classes.bloc}>
                        <Grid item xs={12}>
                            <Typography style={{width: barLabelWidth}}>Maven</Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <LinearProgress className={this.props.classes.barProgress} style={{width: this.state.widthBar,marginLeft: marginBar}} variant="determinate" value={60} />
                        </Grid>
                    </div>
                    

                    <div className={this.props.classes.bloc}>
                        <Grid item xs={12}>
                            <Typography style={{width: barLabelWidth}}>Hibernate</Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <LinearProgress className={this.props.classes.barProgress} style={{width: this.state.widthBar,marginLeft: marginBar}} variant="determinate" value={60} />
                        </Grid>
                    </div>
                    
                    
                    <div className={this.props.classes.bloc}>
                        <Grid item xs={12}>
                            <Typography style={{width: barLabelWidth}}>PostGreSql</Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <LinearProgress className={this.props.classes.barProgress} style={{width: this.state.widthBar,marginLeft: marginBar}} variant="determinate" value={70} />
                        </Grid>
                    </div>
                    


                </Grid>

            </div>      
        
        );
      }
      
      
    }
  

  
  export default withStyles(styles)(Competences);