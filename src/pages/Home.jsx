import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DomainSearch from "../components/DomainSearch";
import HostingPlans from "../components/HostingPlans";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function Home() {
  return (
      <>
            <Navbar />
                  <Hero />
                        <DomainSearch />
                        <HostingPlans />
                        <Features />
                        <Testimonials />
                        <FAQ />
                        <Footer />
                            </>
                              );
                              }

                              export default Home;