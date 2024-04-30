import React, { useMemo, useEffect, useState } from 'react';
import { useTheme } from '@/components/theme-provider';

const LogoNormal = () => {
    const { theme, setTheme } = useTheme();
    const [systemTheme, setSystemTheme] = useState(null);

    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        setSystemTheme(darkModeMediaQuery.matches ? "dark" : "light");

        const handleThemeChange = (e) => {
            setTheme(e.matches ? "dark" : "light");
        };

        darkModeMediaQuery.addEventListener("change", handleThemeChange);

        return () => darkModeMediaQuery.removeEventListener("change", handleThemeChange);
    }, [setTheme]);

    const logoDarkPath = "../src/assets/img/Logo_Backend_Abschlussprojekt_dark.png";
    const logoLightPath = "../src/assets/img/Logo_Backend_Abschlussprojekt.png";

    const logoPath = useMemo(() => {
        return theme === "dark" || (theme === null && systemTheme === "dark") ? logoDarkPath : logoLightPath;
    }, [theme, systemTheme]);

    return (
        <div className='px-4 pt-2'>
            <img src={logoPath} alt="" className='w-9 h-9'/>
        </div>
    );
};

export default LogoNormal;