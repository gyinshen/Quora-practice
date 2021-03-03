import { Component } from 'react'; //ask him why import component
import '../Styles/Header.css';

export class Header extends Component {
    render(){
        return(
            <div className="header">
                <h3>Logo</h3>
                <h3>Home</h3>
                <h3>Btn1</h3>
            </div>
        )
    }
};