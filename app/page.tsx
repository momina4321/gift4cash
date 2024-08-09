import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection' ;
import PaidInstantly from './components/PaidInstantly';
import './globals.css'
import HassleFree from './components/HassleFree';
import Faq from './components/FAQ';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
     <div className='flex flex-col justify-center px-4 md:px-8 lg:px-16 py-8 gap-60 h-1/4  ' >
      <div className='bg-heroimg'>

<Navbar/>
<HeroSection/>
</div>
<PaidInstantly/>
<HassleFree/>
<Faq/>

     </div>
     
    <Footer/>    </div>
        
  );
}
