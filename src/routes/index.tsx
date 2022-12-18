import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts/ThemeContext";
export const AppRoutes = () => {
    const { toggleTheme } = useAppThemeContext()

    return (
        <Routes>
            <Route path="/main-page" element={<Button onClick={toggleTheme} variant='contained' color='primary'>toggle theme</Button>} />
            
            <Route path="*" element={<Navigate to="/main-page" />} />
        </Routes>
    );
};
