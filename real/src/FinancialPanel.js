import React from 'react';

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
                <div>
                    <ul id='financesList'>
                        <li>Savings: {this.state.savings}</li>
                        <li>Income: {this.state.income}</li>
                        <li>Debts: {this.state.debts}</li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }

}

export default FinPanel;