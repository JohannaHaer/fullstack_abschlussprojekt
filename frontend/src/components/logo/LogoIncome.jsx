import React, { useMemo } from 'react'
import { useTheme } from '@/components/theme-provider';

const LogoIncome = () => {

    const { theme } = useTheme();

    const logoDarkPath = "../src/assets/img/Logo-blau-frisst_dark.gif";
    const logoLightPath = "../src/assets/img/Logo-blau-frisst.gif";

    const logoPath = useMemo(() => {
        return theme === "dark" ? logoDarkPath : logoLightPath;
    }, [theme]);

    return (
        <>
            <div className='px-4 pt-2'>
                <img src={logoPath} alt="" className='w-9 h-9'/>
            </div>
        </>
    )
}

export default LogoIncome