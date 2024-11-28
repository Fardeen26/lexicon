'use client';
import { Button } from '@/components/ui/button';
import React from 'react';

const DownloadButton = ({ fileLink }: { fileLink: string }) => {
    const handleDownload = () => {
        window.open(fileLink, '_blank');
    };

    return (
        <Button onClick={handleDownload} className='mt-9'>
            Download & Read
        </Button>
    );
};

export default DownloadButton;