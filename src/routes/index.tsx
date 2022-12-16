import { Routes, Route, Navigate } from "react-router-dom";
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/main-page" element={<p>Main Page</p>} />
            
            <Route path="*" element={<Navigate to="/main-page" />} />
        </Routes>
    );
};
