import React from 'react';
import { createRoot } from 'react-dom/client';
import Button from '@/comps/Button'
import './index.css';

const root = createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <h1>Dashboard</h1>      
        <Button>
            this is button
        </Button>
    </React.StrictMode>
);