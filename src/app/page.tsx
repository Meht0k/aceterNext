import Navbar from '@/components/Navbar';
import SVGMaskEffectDemo from '@/components/Home';
import TracingBeamDemo from '@/components/Home2';
import BackgroundBeamsDemo from '@/components/backgroundBeans';
import "./globals.css";
import BackgroundBoxesDemo from '@/components/bg-boxes';


const page = () => {

  return (
    <>
      <Navbar />
      <BackgroundBoxesDemo />
      <SVGMaskEffectDemo />
      <TracingBeamDemo />
      <BackgroundBeamsDemo />
    </>
  )
}

export default page