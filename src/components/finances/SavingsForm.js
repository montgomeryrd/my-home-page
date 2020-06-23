import React from 'react';

const SavingsForm = (props) => {
    return (
        <div className="savings-form-content">
            <form className="savings-form" onSubmit={props.handleSavingsSubmit}>
                <input 
                    id="savings" 
                    name="savings" 
                    type="number"
                    autoComplete="off"
                    value={props.savingsvalue}
                    onChange={props.handleSavingsChange}
                    required={true}
                    placeholder="amount saved"
                />
                <input 
                    id="total" 
                    name="total-list" 
                    type="number"
                    autoComplete="off"
                    value={props.totalvalue}
                    onChange={props.handleTotalChange}
                    required={true}
                    placeholder="total savings"
                />
                <button className="form-btn" onSubmit={props.handleSavingsSubmit}>add</button>
            </form>
        </div>
    )
}
export default SavingsForm;