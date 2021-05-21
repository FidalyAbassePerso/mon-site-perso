import logo from './logo.svg';
import './App.css';
import NavigationPanel from './NavigationPanel.js'
import NavigationBar from './NavigationBar.js'
import ExpProfessionnel from './ExpProfessionnel'
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Realisations from './Realisations';
import Acceuil from './Acceuil'
import Competences from './Competences';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {windowWidth:0,menuExperiencePro: false,menuAcceuil: true, menuRealisation: false,menuCompetence: false,menuContact: false};
    document.title = "Abasse FIDALY"

  }

  componentDidMount() {
    window.addEventListener("resize", this.updateComponentSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateComponentSize);
  }
  
  updateComponentSize = () => {
    let windowWidth = 0;
    this.setState({ windowWidth });
  }

  handleMenuSelected = (menu) => {
    console.log(menu);
    if (menu == "Mes expériences professionnel"){
      this.setState({menuExperiencePro: true,menuAcceuil: false, menuRealisation: false,menuCompetence: false,menuContact: false});
    }
    else if (menu == 'Mes réalisations'){
      this.setState({menuExperiencePro: false,menuAcceuil: false, menuRealisation: true,menuCompetence: false,menuContact: false});
    }
    else if (menu == 'Contact'){
      this.setState({menuExperiencePro: false,menuAcceuil: false, menuRealisation: false,menuCompetence: false,menuContact: true});
    }
    else if (menu == 'Mes compétences') {
      this.setState({menuExperiencePro: false,menuAcceuil: false, menuRealisation: false,menuCompetence: true,menuContact: false});
    }
    else {
      this.setState({menuExperiencePro: false,menuAcceuil: true, menuRealisation: false,menuCompetence: false,menuContact: false});
    }
  }

  render() {
    return (
      <div className="App">
        <Grid container>
          {window.innerWidth < 1172 | window.innerHeight < 539? (
            <NavigationBar onMenuSelect={this.handleMenuSelected}/>
          ) : (
            <NavigationPanel isOnHeightHundredPercent={this.state.menuExperiencePro} onMenuSelect={this.handleMenuSelected}/>
          )}
          {this.state.menuAcceuil ? (
            <Grid item xs={2}>
              <Acceuil />
            </Grid>
          ) : (
            <br/>
          )}
          {this.state.menuExperiencePro ? (
            <Grid item xs={2}>
              <ExpProfessionnel />
            </Grid>
          ) : (
            <br/>
          )}
          {this.state.menuRealisation ? (
            <Grid item xs={2}>
              <Realisations />
            </Grid>
          ) : (
            <br/>
          )}

          {this.state.menuCompetence ? (
            <Grid item xs={2}>
              <Competences />
            </Grid>
          ) : (
            <br/>
          )}
          
        </Grid>
        
      </div>
    );
  }
  
}

export default App;
