import {format} from 'date-fns';

function formatDate(date) {
    return format(new Date(date), 'cccc MMMM do, yyyy');
}

export {formatDate};