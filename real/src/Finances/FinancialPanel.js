import React from 'react';
import Savings from './Savings'

class FinPanel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            savings: 0,
            income: 0,
            debts: 0

        }
    }
    render(){
        return(
            <React.Fragment>
                <Savings />
                {/* <div id='finances-div'>
                    <ul id='finances-list'>
                        <li>Savings: {this.state.savings}</li>
                        <li>Income: {this.state.income}</li>
                        <li>Debts: {this.state.debts}</li>
                    </ul>
                </div> */}
            </React.Fragment>
        );
    }

}

export default FinPanel;