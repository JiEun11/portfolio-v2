import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import loadable from '@loadable/component';

const LoadableHome = loadable(() => import('./pages/Home/Home'));
const LoadableAbout = loadable(() => import('./pages/About/About'));
const LoadableSkills = loadable(() => import('./pages/Skills/Skills'));
const LoadableWork = loadable(() => import('./pages/Work/Work'));
const LoadableContact = loadable(() => import('./pages/Contact/Contact'));

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<LoadableHome />} />
            <Route path="/about" element={<LoadableAbout />} />
            <Route path="/skills" element={<LoadableSkills />} />
            <Route path="/work" element={<LoadableWork />} />
            <Route path="/contact" element={<LoadableContact />} />
            {/* 기본 경로 설정 */}
            <Route path="*" element={<LoadableHome />} />
        </Routes>
    );
};

export default AppRoutes;
