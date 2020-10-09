import React from 'react';
import Dropdown from './Dropdown';

const options = [
    {
        label: 'The color Red',
        value: 'red'
    },
    {
        label: 'The color Green',
        value: 'green'
    },
    {
        label: 'A shade of Blue',
        value: 'blue'
    }
];

const App = () => {
    return (
        <div>
            <Dropdown options={options} />
        </div>
    );
};
export default App;