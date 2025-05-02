import Script from 'next/script';

export default function LoadScript() {

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "A to Z Dispatch",
                "url": "https://atozdispatch.com",
                "logo": "https://atozdispatch.com/static/media/logo.a62a1c11203da22975bb96f6764b70be.svg",
                "description": "A to Z Dispatch offers advanced limo and chauffeur dispatch software solutions across the US. Our platform includes a web console, driver app, and passenger app, all designed to streamline transportation services.",
                "email": "support@atozdispatch.com",
                "telephone": "+1-302-499-1612",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "1111B South Governors Avenue",
                    "addressLocality": "Dover",
                    "addressRegion": "DE",
                    "postalCode": "19904",
                    "addressCountry": "US"
                },
                "areaServed": "US",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+1-302-499-1612",
                    "contactType": "Customer Support",
                    "email": "support@atozdispatch.com"
                },
                "sameAs": [
                    "https://www.facebook.com/atozdispatch",
                    "https://www.linkedin.com/company/atozdispatch",
                    "https://www.trustpilot.com/review/atozdispatch.com",
                    "https://sourceforge.net/software/product/A-to-Z-Dispatch/?pk_campaign=badge&pk_source=vendor"
                ]
            },
            {
                "@type": "SoftwareApplication",
                "name": "A to Z Dispatch",
                "operatingSystem": "iOS, Android, Web",
                "applicationCategory": "BusinessApplication",
                "description": "A to Z Dispatch is a cloud-based limo and chauffeur dispatch system that includes an admin dashboard, driver app, and passenger app with real-time booking and tracking features.",
                "offers": {
                    "@type": "Offer",
                    "price": "99.00",
                    "priceCurrency": "USD",
                    "url": "https://atozdispatch.com/signup",
                    "description": "30-day free trial, then $99/month for full access."
                },
                "creator": {
                    "@type": "Organization",
                    "name": "A to Z Dispatch"
                },
                "url": "https://atozdispatch.com",
                "screenshot": "https://atozdispatch.com/static/media/atoz-test-banner.6a7ff3ea2c167c73b576.png",
                "applicationSuite": "A to Z Dispatch Platform",
                "category": [
                    "Limo Dispatch Software",
                    "Chauffeur Dispatch Software",
                    "Limo Booking App",
                    "Limo App",
                    "Chauffeur App"
                ]
            }
        ]
    };





    return (
        <>  {/* Google Analytics */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-0XM9RCKELN"
                strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0XM9RCKELN');
        `}
            </Script>

            {/* Google Tag Manager */}
            <Script id="gtm" strategy="afterInteractive">
                {`
                    (function(w,d,s,l,i){
                        w[l]=w[l]||[];
                        w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                        var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
                        j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                        f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-NTH57W7F');
                `}
            </Script>

            {/* Cookie Script */}
            <Script type="text/javascript" charSet="UTF-8"
                src="//cdn.cookie-script.com/s/3d625d570db063a7ed6aa36df5ff9352.js" >
            </Script>

            {/* JSON-LD Schema */}
            <Script id="ld-json" type="application/ld+json" strategy="afterInteractive">
                {JSON.stringify(schema)}
            </Script>








        </>
    );
}
