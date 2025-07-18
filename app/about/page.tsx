import styles from "../page.module.css";
import Image from "next/image";

export default function About() {
  return (
    <section className={styles.aboutSection} style={{ background: '#fff', minHeight: '100vh', padding: '48px 0' }}>
      <div className={styles.aboutCard} style={{ maxWidth: 900, margin: '0 auto', background: '#fff', borderRadius: '2rem', boxShadow: '0 6px 32px rgba(84,94,60,0.10)', border: '1.5px solid #B29C6A', padding: '2.5rem 2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <h1 className={styles.aboutHeadline} style={{ color: '#545E3C', fontSize: '2.5rem', fontWeight: 800, textAlign: 'center', marginBottom: 24 }}>About Us</h1>
          <Image src="/Images/Screenshot 2025-07-18 114657.png" alt="AJ in front of his Apache" width={480} height={480} style={{ borderRadius: '8px', objectFit: 'cover' }} />
        </div>
        <h2 style={{ color: '#A1A155', fontWeight: 700, fontSize: '1.5rem', marginBottom: 12, textAlign: 'center' }}>Premium Desiccants Without the Premium Price</h2>
        <p style={{ color: '#545E3C', fontSize: '1.15rem', marginBottom: 24, textAlign: 'center', fontWeight: 500 }}>
          Founded in 2025, Apache Desert is a veteran-owned and operated supplier of high-quality desiccants, proudly serving a variety of industries. Our mission is simple: deliver premium moisture control solutions with exceptional service and unmatched value.
        </p>
        <div style={{ color: '#545E3C', fontSize: '1.08rem', marginBottom: 24, lineHeight: 1.7 }}>
          <p>
            Our story began in Chicagoland, when Scott Springer, a Navy vet with extensive experience in running manufacturing production, teamed up with Anthony Healy, an Army vet with a background in logistics and lean operations. While working in supplement manufacturing, Scott recognized firsthand the supply chain challenges and hidden costs tied to desiccant procurement – delays, markups, and inflexible ordering. Together, they launched Apache Desert to bring a better solution to the market.
          </p>
          <h3 style={{ color: '#B9641B', fontWeight: 700, margin: '32px 0 12px 0', fontSize: '1.25rem' }}>What Makes Us Different</h3>
          <p>
            At Apache Desert, we believe that cost efficiency and customer service shouldn’t be mutually exclusive. We’ve built a lean, scalable operation that allows us to reduce overhead and pass those savings directly to our customers – often cutting desiccant costs by 30-45% compared to traditional suppliers.
          </p>
          <p>
            Our products are available in a range of sizes, packaging formats, and wraps, with full support for custom branding. We make sure all products are manufactured to the right specifications to meet your needs. We ship nationwide from our Illinois-based warehouse and offer flexible, vendor-managed inventory (VMI) models to ensure you get what you need – when you need it.
          </p>
          <p>
            Whether you’re looking to simplify your supply chain, reduce costs, or build a more reliable sourcing relationship, Apache Desert is here to protect your products – and your profits.
          </p>
        </div>
        <h2 style={{ color: '#A1A155', fontWeight: 700, fontSize: '1.5rem', margin: '40px 0 18px 0', textAlign: 'center' }}>About the Founders</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center', marginBottom: 24 }}>
          {/* Anthony Healy */}
          <div style={{ flex: '1 1 320px', background: '#faf8f3', borderRadius: '1.2rem', padding: '1.5rem', border: '1.5px solid #B29C6A', boxShadow: '0 2px 12px rgba(178,156,106,0.07)' }}>
            <div style={{ width: 120, height: 120, borderRadius: '50%', background: '#B29C6A22', margin: '0 auto 1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <Image src="/Images/Screenshot 2025-07-14 124127.png" alt="Anthony Healy" width={120} height={120} style={{ objectFit: 'cover', borderRadius: '50%' }} />
            </div>
            <h3 style={{ color: '#545E3C', fontWeight: 700, fontSize: '1.2rem', marginBottom: 8 }}>Anthony Healy – Co-Founder</h3>
            <p style={{ color: '#545E3C', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Anthony is a native to the suburbs of Chicago. Anthony grew up in Buffalo Grove and has family extending from Antioch to Aurora. Anthony graduated from the United States Military Academy as an Aviation officer and served as an Apache helicopter pilot in Afghanistan. Anthony left the Army as a Captain after 8 years of service and came back to the Chicagoland area, working for 8 years as a Supply Chain Director for technology companies like Encore Repair Services and Quantum Corporation.<br /><br />
              Outside of Apache Desert, Anthony lives in Park Ridge with his wife and daughter and spends his time reading history, writing stories, and finding new places to explore with his family.
            </p>
          </div>
          {/* Scott Springer */}
          <div style={{ flex: '1 1 320px', background: '#faf8f3', borderRadius: '1.2rem', padding: '1.5rem', border: '1.5px solid #B29C6A', boxShadow: '0 2px 12px rgba(178,156,106,0.07)' }}>
            <div style={{ width: 120, height: 120, borderRadius: '50%', background: '#B29C6A22', margin: '0 auto 1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <Image src="/Images/Screenshot 2025-07-14 124137.png" alt="Scott Springer" width={120} height={120} style={{ objectFit: 'cover', borderRadius: '50%' }} />
            </div>
            <h3 style={{ color: '#545E3C', fontWeight: 700, fontSize: '1.2rem', marginBottom: 8 }}>Scott Springer – Co-Founder</h3>
            <p style={{ color: '#545E3C', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Scott grew up in New Jersey and attended the United States Naval Academy. After graduation, he was a Surface Warfare officer and deployed to the Persian Gulf between the wars. After leaving the U.S. Navy, Scott went into manufacturing holding increasing roles of responsibility with both large and small companies including Coca-Cola, Bunge, Omega Protein, Vital Proteins and Lief Labs. In his senior leadership roles including VP of Operations at Vital Proteins and COO at Lief Labs, he oversaw all operation functions including supply chain, manufacturing, quality, and engineering.<br /><br />
              Outside of Apache Desert, Scott spends his time with his wife, 2 daughters and son. An avid outdoorsman, he enjoys hikes with his 2 dogs and road trips.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 