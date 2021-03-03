import { Component } from 'react'; //ask him why import component
import '../Styles/RightPanel.css';

export class RightPanel extends Component {
    render(){
        return(
            <div className="rightpanel">
                <h4>Right Subject 1</h4>
                <h4>Subject 2</h4>
                <h4>Subject 3</h4>
                <h4>Subject 4</h4>
                <h4>Subject 5</h4>
            </div>
        )
    }
};