import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component{
    //A function that is special to the JS language
    constructor(props){
        super(props);

        //number default is null
        //this is the only time we do direct assignment 
        //to this.state
        //everytime we want to change or manipulate a property, use setState
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                //we called setState
                //coords and latitude was found inside the development in chrome
                this.setState({ lat: position.coords.latitude });

                //we did not write:
                //this.state.lat = position.coords.latitude
            },
            err => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    componentDidMount(){
        console.log('My component was rendered to the screen');
    }

    componentDidUpdate(){
        console.log('My component was just updated - it rerendered');
    }

    //React says we have to define render
    render() {
        if (this.state.errorMessage && !this.state.lat){
            return <div> Error: {this.state.errorMessage} </div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat} </div>
        }

        //catchall!
        return <div>Loading!</div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))