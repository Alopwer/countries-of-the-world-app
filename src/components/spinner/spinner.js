import React from 'react';
import './spinner.css';

const Spinner = () => {
    return (
        <div className='spinner'>
            <div className="lds-css ng-scope" styles={{width:'200px',height:'200px'}}>
                <div styles={{width:'100%',height:'100%'}} className="lds-double-ring">
                    <div></div>
                    <div></div>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spinner;