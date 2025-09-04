import React from 'react'

function FormattedDate({ date, format = 'short' }){
    const options = {
        short: {month: 'short',day: 'numeric',year: 'numeric' },
        long: {weekday: 'long',year: 'numeric',month:'long',day: 'numeric'},
    };
    const formatter = new Intl.DateTimeFormat('en-US',options[format]);

    return <span className="formatted-date">{formatter.format(new Date(date))}</span>;
}
export default FormattedDate;