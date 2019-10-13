import React from 'react';
import Savings from './Savings'
import Income from './Income'
import Debt from './Debt'
import './FinancialPanel.css'
class FinPanel extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id='fin-panel'>
                <Savings />
                <Income />
                <Debt />
            </div>
        );
    }

}

export default FinPanel;