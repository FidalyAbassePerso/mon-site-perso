import React from 'react';
import Container from '@material-ui/core/Container';
import {Image} from 'react-native';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import MyPdf from './Document/CV_FIDALY_ABASSE.pdf';



const styles = {
    root: {
        margin: 0,
        padding: 0,

        //width: "80vw",
        //backgroundColor: "#3240a8"
    },
    bloc: {
        margin: 0,
    },
    blocExpText: {
        //width: window.innerWidth < 825 ? "100vw":"80vw",
        paddingTop: 0,
    },
    image: {
        width: "80vw",
        //height: "80vw",
    }
    
};

class Acceuil extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          widthBlocExp: window.innerWidth < 1172 || window.innerHeight < 539 ?  "96vw" : "78vw", 
        };
      
    }

    updateComponentSize = () =>{
        let widthBlocExp = this.state.widthBlocExp;
        if (window.innerWidth < 1172 || window.innerHeight < 539) {
            widthBlocExp = "96vw"; 
        }
        if (window.innerWidth > 1172){
            widthBlocExp = "78vw"; 
        }
        this.setState({widthBlocExp});
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateComponentSize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateComponentSize);
    }

    render() {
        return (
            <div>
                    <Container className={this.props.classes.root} style={{width: this.state.widthBlocExp}} maxWidth="false">
                        <Image style={{width: this.state.widthBlocExp,width: window.innerWidth < 1172 || window.innerHeight < 539 ? "98.6vw" : "80vw" ,height: "100vh"}}  source={{uri: 'https://www.ecv.fr/app/uploads/2019/09/christopher-gower-m_HRfLhgABo-unsplash.jpg'}}/>
                    </Container>

            </div>      
        
        );
      }
      
      
    }
  

  
  export default withStyles(styles)(Acceuil);