import ComputerIcon from '@material-ui/icons/Computer';
import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import ReceiptIcon from '@material-ui/icons/Receipt';
import Chip from '@material-ui/core/Chip';


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
        marginTop: 0,
    },
    
};

class ExpProfessionnel extends React.Component {
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
                                        Octobre 2019 - aujourd'hui : Développeur Java fullstack à l'INSEE 
                                    </Typography>
                                </Toolbar>
                            </AppBar>

                        </Container>
                        <Container className={this.props.classes.blocExpText} style={{width: this.state.widthBlocExpText}} maxWidth="false">
                            <p>Développeur full stack au sein de l'INSEE. J'ai intégré le domaine secrétariat général et ai participé
                                au développement et à la maintenance des applications du domaines.J'ai pu travailler et monter en compétence 
                                sur les technologies Springs et notamment quelques frameworks Javascript tel que ReactJS et Jquery.</p>

                        </Container>
                        <Container className={this.props.classes.techList} style={{width: this.state.widthBlocExpText}} maxWidth="false">
                            <Chip label="SpringBatch"/>
                            <Chip label="SpringMVC"/>
                            <Chip label="SpringRest"/>
                            <Chip label="Spring Boot"/>
                            <Chip label="Strust2"/>
                            <Chip label="Jquery"/>
                            <Chip label="ReactJS"/>
                            <Chip label="Maven"/>
                            <Chip label="Hibernate"/>
                            <Chip label="PostGreSql"/>
                            <Chip label="JEE"/>
                            <Chip label="Travail d'équipe"/>
                            <Chip label="Agilité"/>
                        </Container>

                    </Grid>

                    <Grid item xs={12} className={this.props.classes.bloc} style={{height: this.state.heightBloc}}>
                        <Container className={this.props.classes.blocExp} style={{width: this.state.widthBlocExp}} maxWidth="false">
                            <AppBar position="static">
                                <Toolbar variant="dense">
                                    <IconButton edge="start" className={this.props.classes.menuButton} color="inherit" aria-label="menu">
                                        <ReceiptIcon />
                                    </IconButton>
                                    <Typography variant="h6" color="inherit">
                                        Juillet 2019 - Octobre 2019 : Adjoint administratif à l'OFPRA
                                    </Typography>
                                </Toolbar>
                            </AppBar>
                        </Container>
                        <Container className={this.props.classes.blocExpText} style={{width: this.state.widthBlocExpText}} maxWidth="false">
                            <p>En tant qu'adjoint administratif au sein de l'OFRPA j'avais pour mission de traiter les demandes et décisions
                                des demandeurs d'asiles. J'y ai pu améliorer mon organisation et enrichir mes capacité de rédaction.</p>

                        </Container>
                        <Container className={this.props.classes.techList} style={{width: this.state.widthBlocExpText}} maxWidth="false">
                            <Chip label="Organisation"/>
                            <Chip label="Rédaction"/>
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
                                        Avril 2019 - Juillet 2019 : Développeur Java JEE à l'OPTAE 
                                    </Typography>
                                </Toolbar>
                            </AppBar>
                        </Container>
                        <Container className={this.props.classes.blocExpText} style={{width: this.state.widthBlocExpText}} maxWidth="false">
                            <p>Lors de ma première expérience professionnel dans le monde du développement web à l'OPTAE en tant que développeur web 
                                JEE,j'ai eu l'occasion de monter en compétence sur des frameworks tels que Struts2,Maven, Hibernate. J'avais 
                                pour mission de coder une application JAVA from scratch, mais également la maintenance d'une application 
                                dans laquelle j'ai pu monter en compétence sur AngularJS.</p>

                        </Container>
                        <Container className={this.props.classes.techList} style={{width: this.state.widthBlocExpText}} maxWidth="false">
                            <Chip label="Struts2"/>
                            <Chip label="AngularJS"/>
                            <Chip label="MySQL"/>
                            <Chip label="JEE"/>
                            <Chip label="Développement par couches"/>
                        </Container>
                    </Grid>
                </Grid>

            </div>      
        
        );
        }
      
    }
  

  
  export default withStyles(styles)(ExpProfessionnel);