import React, { useMemo } from 'react'
import { useTheme } from '@/components/theme-provider';

const LogoNormal = () => {
    const { theme } = useTheme();

    const logoDarkPath = "../src/assets/img/Logo_Backend_Abschlussprojekt_dark.png";
    const logoLightPath = "../src/assets/img/Logo_Backend_Abschlussprojekt.png";

    const logoPath = useMemo(() => {
        return theme === "dark" ? logoDarkPath : logoLightPath;
    }, [theme]);

    return (
        <div className='px-4 pt-2'>
            <img src={logoPath} alt="" className='w-9 h-9'/>
        </div>
    )
}

export default LogoNormal