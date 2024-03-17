
import Footer from '../our-plumbing-services/ui/footer';
import Head from 'next/head';
import { Navbar } from '../components/ui/Navbar';
import Thanks from './thanks';






export default function PrivacyPolicy() {
  return (
    <div>

<Head>
        {/* Google Tag Manager script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('event', 'conversion', {'send_to': 'AW-11405523497/bEKRCPf7qpwZEKn0yb4q'});
            `,
          }}
        />
      </Head>
      <Navbar/>
   <Thanks/>
     <Footer/>
    
    </div>
  );
}
