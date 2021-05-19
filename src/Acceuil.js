import React from 'react';
import Container from '@material-ui/core/Container';
import {Image} from 'react-native';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MyPdf from './Document/CV_FIDALY_ABASSE.pdf';



const styles = {
    root: {
        margin: 0,
        padding: 0,
        paddingLeft: "6px",
        paddingRight: "6px"
        //width: "80vw",
        //backgroundColor: "#3240a8"
    },
    bloc: {
        margin: 0,
    },
    blocExp: {
        //width: window.innerWidth < 825 ? "100vw":"80vw",
        //paddingTop: "6px"
    },
    blocExpText: {
        //width: window.innerWidth < 825 ? "100vw":"80vw",
        paddingTop: 0,
    },
    menuButton: {
        position: "absolute",
        top: "50vh",
        paddingLeft: "1vw",
        paddingRight: "1vw",
        fontSize: "16px"
    },
    image: {
        width: "80vw",
        //height: "80vw",
    }
    
};

class Acceuil extends React.Component {
    constructor(props) {
      super(props);
      this.state = {widthBlocExp: "78vw", widthBlocExpText: "80vw", heightBloc: "33vh",widthButtonDownload: "62vw"};
      
    }

    updateComponentSize = () =>{
        let widthBlocExp = this.state.widthBlocExp;
        let widthButtonDownload = this.state.widthButtonDownload;
        if (window.innerWidth < 1172) {
            widthBlocExp = "96vw"; 
            widthButtonDownload = "74vw";
        }
        if (window.innerWidth <= 504) {
            widthButtonDownload = "62vw";
        }
        if (window.innerWidth <= 355) {
            widthButtonDownload = "42vw";
        }
        else if (window.innerWidth > 1172){
            widthBlocExp = "78vw"; 
            widthButtonDownload = "62vw";
        }
        let widthBlocExpText = widthBlocExp;
        let heightBloc = window.innerHeight < 554 ? "40vh" : this.state.heightBloc;
        this.setState({widthBlocExp,widthBlocExpText,heightBloc,widthButtonDownload});
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
                <Container className={this.props.classes.root} style={{width: this.state.widthBlocExp}} maxWidth="false">
                    <Image style={{width: this.state.widthBlocExp, height: "100vh"}}  source={{uri: 'https://www.ecv.fr/app/uploads/2019/09/christopher-gower-m_HRfLhgABo-unsplash.jpg'}}/>
                </Container>
                <Container className={this.props.classes.blocExp} style={{width: this.state.widthButtonDownload}} maxWidth="false">
                    <a href={MyPdf} download="CV_FIDALY_ABASSE.pdf">
                        <Button className={this.props.classes.menuButton} variant="contained" color="primary">
                            Télécharger mon CV
                        </Button>
                    </a>
                </Container>

            </div>      
        
        );
      }
      
      
    }
  

  
  export default withStyles(styles)(Acceuil);