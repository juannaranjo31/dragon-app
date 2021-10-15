import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import data from '../json/warriors.json';

export const usePage = (count=4) => {
    let aux = count;
    const {characters} = data;
    const [page, setPage] = useState(characters.slice(0, 4));

    useEffect(() => {
        setPage(characters.slice(aux, count));
    }, [count])

    return page;
}
