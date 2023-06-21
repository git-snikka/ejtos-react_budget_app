import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import ExpenseItem from './components/ExpenseItem';
import Remaining from './components/Remaining';


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {/* Add Budget component here under */}        
                    // Budget component
                    <div className='col-sm'>
                        <Budget />
                    </div>
                        {/* Add Remaining component here under */}        
                    // Budget component
                    <div className='col-sm'>
                        <Remaining />
                    </div>
                        {/* Add ExpenseTotal component here under */}        
                    // Budget component
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                        {/* Add ExpenseList component here under */}         
                    // Budget component
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                        {/* Add ExpenseItem component here under */}        
                    // Budget component
                    <div className='col-sm'>
                        <ExpenseItem />
                    </div>
                        {/* Add AllocationForm component here under */}        
                    // Budget component
                    <div className='col-sm'>
                        <AllocationForm />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
