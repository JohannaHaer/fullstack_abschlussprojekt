import { useTheme } from '@/components/theme-provider';
import React, { useMemo } from 'react'

const Startpage = () => {

    const { theme } = useTheme();

    const logoDarkPath = "../src/assets/img/Logo-wechsel_dark.gif";
    const logoLightPath = "../src/assets/img/Logo-wechsel.gif";

    const logoPath = useMemo(() => {
        return theme === "dark" ? logoDarkPath : logoLightPath;
    }, [theme]);

    return (
        <section className='h-dvh flex justify-center items-center'>
            <img src={logoPath} alt="" className='w-30 h-30'/>
        </section>
    )
}

export default Startpage