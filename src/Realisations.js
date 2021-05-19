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


const styles = {
    bloc: {
        margin: 0,
    },
    blocExp: {
        //width: window.innerWidth < 825 ? "100vw":"80vw",
        paddingTop: "6px"
    },
    blocExpText: {
        //width: window.innerWidth < 825 ? "100vw":"80vw",
        paddingTop: 0,
    },
    menuButton: {
        marginRight: "2px",
    },
    techList: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: "5px",
        },
        paddingTop: "15px"
    },
    emptySpace: {
        //marginRight: "70px"
        flexGrow: 1,
    },
    downloadButton: {
        paddingRight: "17px"
    }
    
};

class Realisations extends React.Component {
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
        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={12} className={this.props.classes.bloc} style={{height: this.state.heightBloc}}>
                        <Container className={this.props.classes.blocExp} style={{width: this.state.widthBlocExp}} maxWidth="false">
                            <AppBar position="static">
                                <Toolbar variant="dense">
                                    <IconButton edge="start" className={this.props.classes.menuButton} color="inherit" aria-label="menu">
                                        <ComputerIcon />
                                    </IconButton>
                                    <Typography variant="h6" color="inherit">
                                        Mon site web portfolio
                                    </Typography>
                                    <div className={this.props.classes.emptySpace}></div>
                                    <IconButton href="https://github.com/FidalyAbassePerso/mon-site-perso" edge="start" color="inherit" aria-label="menu">
                                        <GitHubIcon className={this.props.classes.downloadButton}/>
                                    </IconButton>
                                    <IconButton href="https://fidalyabasseperso.github.io/mon-site-perso/" edge="start" color="inherit" aria-label="menu">
                                        <PublicIcon />
                                    </IconButton>
                                </Toolbar>
                            </AppBar>

                        </Container>
                        <Container className={this.props.classes.blocExpText} style={{width: this.state.widthBlocExpText}} maxWidth="false">
                            <p>Réalisation de mon site web portfolio.</p>
                        </Container>
                        <Container className={this.props.classes.techList} style={{width: this.state.widthBlocExpText}} maxWidth="false">
                            <Chip label="ReactJS"/>
                            <Chip label="Javascript"/>
                            <Chip label="Material-ui"/>
                        </Container>
                        

                    </Grid>

                    <Grid item xs={12} className={this.props.classes.bloc} style={{height: this.state.heightBloc}}>
                        <Container className={this.props.classes.blocExp} style={{width: this.state.widthBlocExp}} maxWidth="false">
                            <AppBar position="static">
                                <Toolbar variant="dense">
                                    <IconButton edge="start" className={this.props.classes.menuButton} color="inherit" aria-label="menu">
                                        <ComputerIcon />
                                    </IconButton>
                                    <Typography variant="h6" color="inherit">
                                        Site web dreamveloper
                                    </Typography>
                                    <div className={this.props.classes.emptySpace}></div>
                                    <IconButton href="https://github.com/FidalyAbassePerso/site-dreamveloper" edge="start" color="inherit" aria-label="menu">
                                        <GitHubIcon className={this.props.classes.downloadButton} />
                                    </IconButton>
                                    <IconButton href="https://dreamveloper-studio.com/" edge="start"  color="inherit" aria-label="menu">
                                        <PublicIcon />
                                    </IconButton>
                                </Toolbar>
                            </AppBar>
                        </Container>
                        <Container className={this.props.classes.blocExpText} style={{width: this.state.widthBlocExpText}} maxWidth="false">
                            <p>Réalisation du site web dreamveloper-studio.com.</p>
                    
                        </Container>
                        <Container className={this.props.classes.techList} style={{width: this.state.widthBlocExpText}} maxWidth="false">
                            <Chip label="HTML/CSS"/>
                            <Chip label="Bootstrap"/>
                            <Chip label="Javascript"/>
                        </Container>
                    </Grid>

                    <Grid item xs={12} className={this.props.classes.bloc} style={{height: this.state.heightBloc}}>
                        <Container className={this.props.classes.blocExp} style={{width: this.state.widthBlocExp}} maxWidth="false">
                            <AppBar position="static">
                                <Toolbar variant="dense">
                                    <IconButton edge="start" className={this.props.classes.menuButton} color="inherit" aria-label="menu">
                                        <ComputerIcon />
                                    </IconButton>
                                    <Typography variant="h6" color="inherit">
                                        Site web bloopy & droopy 
                                    </Typography>
                                    <div className={this.props.classes.emptySpace}></div>
                                    <IconButton href="https://github.com/FidalyAbassePerso/site-bloopy" edge="start"  color="inherit" aria-label="menu">
                                        <GitHubIcon className={this.props.classes.downloadButton}/>
                                    </IconButton>
                                    <IconButton href="https://dreamveloper-studio.com/Site%20Bloopy/index.html" edge="start"  color="inherit" aria-label="menu">
                                        <PublicIcon />
                                    </IconButton>
                                </Toolbar>
                            </AppBar>
                        </Container>
                        <Container className={this.props.classes.blocExpText} style={{width: this.state.widthBlocExpText}} maxWidth="false">
                            <p>Réalisation du site web bloopy and droopy.</p>
                            
                        </Container>
                        <Container className={this.props.classes.techList} style={{width: this.state.widthBlocExpText}} maxWidth="false">
                            <Chip label="HTML/CSS"/>
                            <Chip label="Bootstrap"/>
                        </Container>
                    </Grid>
                </Grid>

            </div>      
        
        );
      }
      
      
    }
  

  
  export default withStyles(styles)(Realisations);