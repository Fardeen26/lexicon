'use client';
import React from 'react';

const DownloadButton = ({ fileLink }: { fileLink: string }) => {
    const handleDownload = () => {
        window.open(fileLink, '_blank');
    };

    return (
        <button
            onClick={handleDownload}
            className="mt-10 h-10 rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white active:bg-primary-700 dark:bg-white dark:text-black">
            Download the book
        </button>
    );
};

export default DownloadButton;