import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers: Array<number | string> = ['<'];

    for (let i = 1; i <= Math.min(2, totalPages); i++) {
        pageNumbers.push(i);
    }

    const startPage = Math.max(3, currentPage - 1);
    const endPage = Math.min(totalPages - 2, currentPage + 1);

    if (startPage > 3) {
        pageNumbers.push('...');
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    if (endPage < totalPages - 2) {
        pageNumbers.push('...');
    }

    for (let i = Math.max(totalPages - 1, endPage + 1); i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    pageNumbers.push('>');

    return (
        <div className="flex justify-between items-center space-x-2">
            {pageNumbers.map((number, index) => (
                <button
                    key={index}
                    onClick={() => typeof number === 'number' && onPageChange(number)}
                    className={`px-4 py-2 rounded ${typeof number === 'number' ? 'text-orange-500' : 'text-white'} ${currentPage === number ? 'text-white' : 'text-black'}`}
                    disabled={number === '...'}
                >
                    {number}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
