import React, { Component } from 'react';
import Navigation from '../components/Navigation/Navigation'
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm.js'
import Rank from '../components/Rank/Rank.js'
import Particles from 'react-particles-js'
import './App.css'
import Logo from '../components/Logo/Logo'

console.log(process.env.REACT_APP_API_KEY)
console.log(process.env)

const particlesOption= {
  particles: {
      number: {
           value: 300,
           density: {
             enable: true,
             value_area: 1800 
           }
          },
      color: {value:'#314998'}
        }
  }

class App extends Component {
 render() {
     return (
            <div className="App">
                <Particles className='particles'
                    params={particlesOption}/>
                
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm />
                {/*<FaceRecognition /> */}
                
            </div>
     );
 }
}

export default App;