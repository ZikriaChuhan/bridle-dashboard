import Image from "next/image";
import Logo from '../images/logo-white.png'

export default function HeaderBanner() {
    return (
      <>
       <section className="header-banner text-white px-10 py-10">
          <div>
            <Image src={Logo} alt="Logo" width={90} height={90} className=" grayscale" />
            <h3 className=" mt-3 text-2xl">Supercharge your equine business</h3>
            <h3 className=" text-2xl">all in one place with Bridle</h3>
            <p className=" mt-3 text-md">Manage horses & clients, streamline finances, automate bookings & events, and more.</p>
          </div>
       </section>
      </>
    );
  }
  