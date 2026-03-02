import { Helmet } from 'react-helmet-async'
import HeroSection from '../components/HeroSection'
import TrustCounters from '../components/TrustCounters'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import PortfolioGallery from '../components/PortfolioGallery'
import LocationsSection from '../components/LocationsSection'
import TestimonialsSlider from '../components/TestimonialsSlider'
import InstagramPreview from '../components/InstagramPreview'
import ContactSection from '../components/ContactSection'

function Home() {
    return (
        <>
            <Helmet>
                <title>Singh Photographers | Wedding Photographer in Punjab & London</title>
                <meta name="description" content="Established in 1990, Singh Photographers offers luxury wedding photography & cinematic videography services across Punjab, Chandigarh, London, Birmingham & Bristol." />
                {/* LocalBusiness Schema mapped to JSON-LD */}
                <script type="application/ld+json">
                    {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Singh Photographers",
              "image": "https://singhphotographers.com/logo.png",
              "url": "https://singhphotographers.com",
              "telephone": "+919876543210",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Lohian Khas",
                "addressLocality": "Jalandhar",
                "addressRegion": "Punjab",
                "postalCode": "144629",
                "addressCountry": "IN"
              },
              "priceRange": "$$$$"
            }
          `}
                </script>
            </Helmet>
            <main className="flex-1">
                <HeroSection />
                <TrustCounters />
                <AboutSection />
                <ServicesSection />
                <PortfolioGallery />
                <LocationsSection />
                <TestimonialsSlider />
                <InstagramPreview />
                <ContactSection />
            </main>
        </>
    )
}

export default Home
