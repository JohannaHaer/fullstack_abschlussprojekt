import { useTheme } from '@/components/theme-provider';
import React, { useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom';

const Landingpage = () => {

    const { theme } = useTheme();
    const navigate = useNavigate()

    const logoDarkPath = "../src/assets/img/Logo-wechsel_dark.gif";
    const logoLightPath = "../src/assets/img/Logo-wechsel.gif";

    const logoPath = useMemo(() => {
        return theme === "dark" ? logoDarkPath : logoLightPath;
    }, [theme]);

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/login')
        }, 4200);
        return () => clearTimeout(timer)
    }, [])

    return (
        <section className='h-dvh flex justify-center items-center'>
            <img src={logoPath} alt="" className='w-30 h-30'/>
        </section>
    )
}

export default Landingpage