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
        width: "70vw",
        borderRadius: 5,
        marginLeft: "6vw",
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
      this.state = {widthBlocExp: "80vw", widthBlocExpText: "80vw", heightBloc: "33vh"};
      
    }

    updateComponentSize = () =>{
        let widthBlocExp = this.state.widthBlocExp;
        if (window.innerWidth < 1172) {
            widthBlocExp = "98vw"; 
        }
        else if (window.innerWidth > 1172){
            widthBlocExp = "80vw"; 
        }
        let widthBlocExpText = widthBlocExp;
        let heightBloc = (window.innerWidth < 1513) || (window.innerHeight < 554) ? "auto" : "33vh";
        this.setState({widthBlocExp,widthBlocExpText,heightBloc});
    }

    componentDidMount() {
        this.updateComponentSize();
        window.addEventListener("resize", this.updateComponentSize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateComponentSize);
    }
    
    render() {
        var barLabelWidth = "80vw"
        return (
            <div>
                
                <Grid container spacing={3} className={this.props.classes.root}>

                    <div className={this.props.classes.bloc}>
                        <Grid item xs={12}>
                            <Typography style={{width: barLabelWidth}}>Technologies Spring (SpringMVC, SpringBatch, SpringRest, SpringBoot) </Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <LinearProgress className={this.props.classes.barProgress} variant="determinate" value={70} />
                        </Grid>
                    </div>
                    
                    <div className={this.props.classes.bloc}>
                        <Grid item xs={12}>
                            <Typography style={{width: barLabelWidth}}>Strusts2 </Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <LinearProgress className={this.props.classes.barProgress} variant="determinate" value={70} />
                        </Grid>
                    </div>
                    
                    <div className={this.props.classes.bloc}>
                        <Grid item xs={12}>
                            <Typography style={{width: barLabelWidth}}>ReactJs </Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <LinearProgress className={this.props.classes.barProgress} variant="determinate" value={40} />
                        </Grid>
                    </div>
                    
                    <div className={this.props.classes.bloc}>
                        <Grid item xs={12}>
                            <Typography style={{width: barLabelWidth}}>JQuery</Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <LinearProgress className={this.props.classes.barProgress} variant="determinate" value={60} />
                        </Grid>
                    </div>
                    

                    <div className={this.props.classes.bloc}>
                        <Grid item xs={12}>
                            <Typography style={{width: barLabelWidth}}>Maven</Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <LinearProgress className={this.props.classes.barProgress} variant="determinate" value={60} />
                        </Grid>
                    </div>
                    

                    <div className={this.props.classes.bloc}>
                        <Grid item xs={12}>
                            <Typography style={{width: barLabelWidth}}>Hibernate</Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <LinearProgress className={this.props.classes.barProgress} variant="determinate" value={60} />
                        </Grid>
                    </div>
                    
                    
                    <div className={this.props.classes.bloc}>
                        <Grid item xs={12}>
                            <Typography style={{width: barLabelWidth}}>PostGreSql</Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <LinearProgress className={this.props.classes.barProgress} variant="determinate" value={70} />
                        </Grid>
                    </div>
                    


                </Grid>

            </div>      
        
        );
      }
      
      
    }
  

  
  export default withStyles(styles)(Competences);