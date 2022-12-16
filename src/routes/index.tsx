import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/main-page" element={<Button variant='contained' color='primary'>Main Page</Button>} />
            
            <Route path="*" element={<Navigate to="/main-page" />} />
        </Routes>
    );
};
