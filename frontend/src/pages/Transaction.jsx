import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import LogoNormal from "@/components/logo/LogoNormal";
import { transactionsByDate } from "@/functions/filter/transactionsByDate";

const Transaction = () => {
    return ( 
        <>
        <LogoNormal/>
        <section className='py-5 px-4 h-dvh'>
            <Header/>
            <h3>hallo ich bin transaction</h3>
        </section>
        <NavBar/>
        </>
     );
}
 
export default Transaction;