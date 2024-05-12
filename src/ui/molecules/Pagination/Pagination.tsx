

interface Props {
    totalPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

import './Pagination.css';

export const Pagination = (props: Props) => {

    const pagination = new Set();

    for(let i = 0; i < props.totalPage; i++) {
        pagination.add(i + 1);
    }

    const paginationSorted = [...pagination].sort((a, b) => Number(a) - Number(b));
    if (paginationSorted.length === 1) return null;

    return (
        <nav className='pagination'>
            <a className={props.currentPage === 1 ? "disabled" : ""}
               onClick={() => props.onPageChange(Number(props.currentPage - 1))}>{'<'}</a>
                {paginationSorted.map((page, index) => (
                    <a key={index} onClick={() => props.onPageChange(Number(page))}>{Number(page)}</a>
                ))}
            <a className={props.currentPage === props.totalPage ? "disabled" : ""}
               onClick={() => props.onPageChange(Number(props.currentPage + 1))}>{'>'}</a>
        </nav>
    )
}