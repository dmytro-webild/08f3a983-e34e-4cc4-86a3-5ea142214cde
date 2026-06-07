"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="small"
        sizing="mediumLargeSizeLargeTitles"
        background="blurBottom"
        cardStyle="outline"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Case Studies",
          id: "#case-studies",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "Blog",
          id: "#blog",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="InnovateGrowth Agency"
      button={{
        text: "Get a Quote",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="InnovateGrowth Agency"
      description="Driving B2B success with targeted content and high-impact advertising strategies."
      buttons={[
        {
          text: "Explore Our Services",
          href: "#services",
        },
        {
          text: "Get a Free Consultation",
          href: "#contact",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/laptop-table-displaying-greenscreen_482257-123662.jpg",
          imageAlt: "B2B Marketing Team collaborating on content and ads strategy",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/startup-team-meeting-with-remote-manager_482257-121121.jpg",
          imageAlt: "Marketing team brainstorming B2B content ideas with whiteboards",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-sitting-desk-analyzing-business-paperwork-working-management-presentation-planning-company-strategy-startup-office-entrepreneur-looking-marketing-documents_482257-27715.jpg",
          imageAlt: "Person optimizing a paid advertising campaign on a laptop",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/brand-branding-project-goals-word-concept_53876-120034.jpg",
          imageAlt: "Conceptual image of B2B content and advertising connection",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-colorful-overloaded-bullet-journal_23-2150168648.jpg",
          imageAlt: "Tablet displaying a B2B content calendar",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/hand-holding-tablet_1134-215.jpg",
          imageAlt: "Abstract visualization of data flowing through digital pipelines for ad targeting",
        },
      ]}
      autoplayDelay={4000}
      showDimOverlay={true}
      ariaLabel="Hero section with agency branding and service highlights"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="About InnovateGrowth Agency"
      description="We are a results-driven B2B agency specializing in creating compelling content and executing high-performing digital ad campaigns. Our expertise lies in understanding complex B2B sales cycles and crafting strategies that deliver measurable growth and connect you with your ideal customers."
      metrics={[
        {
          value: "10+",
          title: "Years Experience",
        },
        {
          value: "95%",
          title: "Client Retention",
        },
        {
          value: "200+",
          title: "Successful Campaigns",
        },
      ]}
      tag="Our Story"
      imageSrc="http://img.b2bpic.net/free-photo/workplace-with-laptop_23-2147651756.jpg"
      imageAlt="Diverse marketing team collaborating in a modern agency office"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Strategic Content Development",
          description: "We craft data-driven content strategies that resonate with your target B2B audience, from thought leadership articles to comprehensive whitepapers and case studies.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/hands-with-smartphone-documents_1150-94.jpg",
            imageAlt: "Smartphone displaying B2B content strategy dashboard",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiling-businesswoman-browsing-internet-touchpad-work_637285-75.jpg",
            imageAlt: "Tablet showing engaging long-form B2B content",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/laptop-table-displaying-greenscreen_482257-123662.jpg",
          imageAlt: "b2b content strategy dashboard mobile",
        },
        {
          title: "High-Impact Digital Advertising",
          description: "Our expertise in B2B paid media ensures your campaigns reach decision-makers effectively on platforms like LinkedIn, Google Ads, and industry-specific networks, driving qualified leads.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/representation-user-experience-interface-design-smartphone_23-2150165982.jpg",
            imageAlt: "Smartphone displaying B2B ad campaign performance report",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-psd/business-template-design_23-2150759700.jpg",
            imageAlt: "Laptop showcasing targeted B2B ad creatives",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/startup-team-meeting-with-remote-manager_482257-121121.jpg",
          imageAlt: "b2b content strategy dashboard mobile",
        },
        {
          title: "Integrated Campaign Management",
          description: "We unify your content and ad efforts into cohesive campaigns, optimizing for maximum impact and a seamless customer journey from awareness to conversion.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/production-manufacture-process-chart-diagram_53876-120646.jpg",
            imageAlt: "Smartphone displaying multi-channel content distribution calendar",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/tablet-with-applications_1134-123.jpg",
            imageAlt: "Tablet showing B2B audience segmentation and targeting tool",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-sitting-desk-analyzing-business-paperwork-working-management-presentation-planning-company-strategy-startup-office-entrepreneur-looking-marketing-documents_482257-27715.jpg",
          imageAlt: "b2b content strategy dashboard mobile",
        },
      ]}
      showStepNumbers={true}
      title="Our Core Services"
      description="We offer a comprehensive suite of B2B content and advertising services designed to fuel your growth."
      tag="What We Do"
    />
  </div>

  <div id="case-studies" data-section="case-studies">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "cs-1",
          name: "TechCo Solutions",
          price: "50% Lead Increase",
          imageSrc: "http://img.b2bpic.net/free-vector/geometric-abstract-echos-web-design-agency-logo_1421494-124.jpg",
          imageAlt: "Tech company logo on a modern office wall",
        },
        {
          id: "cs-2",
          name: "ManuTech Global",
          price: "35% MQL Growth",
          imageSrc: "http://img.b2bpic.net/free-photo/line-graph-data-analysis-icon_53876-20801.jpg",
          imageAlt: "Digital graph showing website traffic and lead generation growth",
        },
        {
          id: "cs-3",
          name: "SaaS Innovators Inc.",
          price: "20% Engagement Boost",
          imageSrc: "http://img.b2bpic.net/free-photo/ideas-fresh-brainstorming-creative-strategy-concept_53876-120157.jpg",
          imageAlt: "B2B content being shared across multiple digital platforms",
        },
        {
          id: "cs-4",
          name: "FinConnect Capital",
          price: "15% Conversion Rate",
          imageSrc: "http://img.b2bpic.net/free-photo/digital-assets-business-management-system-concept_53876-121226.jpg",
          imageAlt: "Infographic showing increased conversion rates for a fintech client",
        },
        {
          id: "cs-5",
          name: "MediCare Systems",
          price: "Targeted Reach Achieved",
          imageSrc: "http://img.b2bpic.net/free-photo/hand-holding-megaphone-with-paper-shape_23-2148796032.jpg",
          imageAlt: "Screenshot of a highly targeted B2B ad campaign for healthcare",
        },
        {
          id: "cs-6",
          name: "LogiRoute Solutions",
          price: "Brand Consistency Improved",
          imageSrc: "http://img.b2bpic.net/free-photo/plan-planning-strategy-communication-icon_53876-21214.jpg",
          imageAlt: "Conceptual image of brand identity for a logistics company",
        },
      ]}
      title="Our Success Stories"
      description="Explore how we've helped B2B companies achieve remarkable results through strategic content and impactful advertising."
      tag="Case Studies"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m-1",
          value: "2.5M+",
          title: "Leads Generated",
          items: [
            "Across all campaigns",
            "Targeted B2B audience",
          ],
        },
        {
          id: "m-2",
          value: "3x",
          title: "Average ROI",
          items: [
            "On ad spend",
            "Optimized for profit",
          ],
        },
        {
          id: "m-3",
          value: "40%",
          title: "Content Engagement",
          items: [
            "Higher than industry avg.",
            "Captivating narratives",
          ],
        },
      ]}
      title="Driving Tangible Results"
      description="Our commitment to data-driven strategies ensures your investment translates into significant growth and measurable impact."
      tag="Our Impact"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah Johnson",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-woman-with-long-brown-hair-black-t-shirt-white-jacket_613910-8245.jpg",
          imageAlt: "Sarah Johnson, CEO of TechCorp",
        },
        {
          id: "2",
          name: "Michael Chen",
          imageSrc: "http://img.b2bpic.net/free-photo/young-person-intership_23-2149315641.jpg",
          imageAlt: "Michael Chen, Marketing Director at Innovate Manufacturing",
        },
        {
          id: "3",
          name: "Emily Rodriguez",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-businessman-making-hand-gesture-with-laptop-desk-restaurant_23-2147956345.jpg",
          imageAlt: "Emily Rodriguez, Head of Sales at GrowthWorks SaaS",
        },
        {
          id: "4",
          name: "David Kim",
          imageSrc: "http://img.b2bpic.net/free-photo/employee-working-with-trendy-clothes_482257-78860.jpg",
          imageAlt: "David Kim, Founder of EduFuture Platform",
        },
        {
          id: "5",
          name: "Jessica Lee",
          imageSrc: "http://img.b2bpic.net/free-photo/senior-male-with-black-headphone-looking-laptop_23-2147859661.jpg",
          imageAlt: "Jessica Lee, Communications Manager at SecureShield Cybersecurity",
        },
        {
          id: "6",
          name: "Robert Green",
          imageSrc: "http://img.b2bpic.net/free-photo/solar-panels-industry-technician-high-tech-factory-inspection-quality-control-production_482257-132256.jpg",
          imageAlt: "Robert Green, Product Manager at DataFlow Analytics",
        },
      ]}
      cardTitle="What Our Clients Say"
      cardTag="Trusted Voices"
      cardAnimation="slide-up"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "GlobalTech Solutions",
        "Quantum Financial",
        "Apex Manufacturing",
        "Digital Dynamics",
        "SecureNet Corp",
        "Synergy HR",
        "Velocity Logistics",
        "HealthSphere AI",
        "EcoInnovate Energy",
      ]}
      title="Trusted by Industry Leaders"
      description="Our proven strategies have delivered exceptional results for leading businesses across various sectors."
      tag="Our Partners"
      showCard={true}
    />
  </div>

  <div id="blog" data-section="blog">
      <BlogCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      title="Latest Insights & Strategy"
      description="Stay ahead in the B2B marketing landscape with our expert articles and actionable strategies."
      tag="Our Blog"
      blogs={[
        {
          id: "b-1",
          category: "Content Marketing",
          title: "The Future of B2B Content: AI-Driven Personalization",
          excerpt: "Discover how AI is transforming B2B content strategies, enabling deeper personalization and superior engagement. Learn practical tips to integrate AI into your content workflow.",
          imageSrc: "http://img.b2bpic.net/free-photo/ui-ux-representations-with-smartphone_23-2150201875.jpg",
          imageAlt: "AI-Driven Personalization for B2B Content",
          authorName: "Jane Doe",
          authorAvatar: "http://img.b2bpic.net/free-photo/portrait-handsome-man-glasses-sits-cafe-points-finger-laptop-screen-video-chats-connects_1258-314127.jpg",
          date: "July 15, 2024",
        },
        {
          id: "b-2",
          category: "Paid Advertising",
          title: "Maximizing ROI: Advanced Strategies for B2B Paid Ads",
          excerpt: "Go beyond the basics with advanced tactics for B2B paid advertising. This article covers audience targeting, bidding strategies, and creative optimization to boost your ROI.",
          imageSrc: "http://img.b2bpic.net/free-photo/view-earnings-accounting-financial-money-concept_53876-15880.jpg",
          imageAlt: "Advanced Strategies for B2B Paid Ads",
          authorName: "John Smith",
          authorAvatar: "http://img.b2bpic.net/free-photo/male-graphic-designer-using-digital-tablet_1170-779.jpg",
          date: "July 10, 2024",
        },
        {
          id: "b-3",
          category: "B2B Storytelling",
          title: "Crafting Compelling Narratives: Storytelling in B2B Marketing",
          excerpt: "Learn the art of B2B storytelling to create powerful connections with your audience. We break down how to build narratives that resonate and convert complex solutions into engaging stories.",
          imageSrc: "http://img.b2bpic.net/free-photo/people-holding-social-media-icons_53876-49335.jpg",
          imageAlt: "Storytelling in B2B Marketing",
          authorName: "Alice Brown",
          authorAvatar: "http://img.b2bpic.net/free-photo/business-man-with-beard-working-hard-his-desk-office-motivated-young-man_482257-18759.jpg",
          date: "July 5, 2024",
        },
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-1",
          title: "What kind of results can I expect?",
          content: "Our clients typically see a significant increase in qualified leads, improved content engagement rates, and a measurable return on their advertising investment. Results vary based on industry and specific goals, but we focus on tangible growth.",
        },
        {
          id: "faq-2",
          title: "How do you tailor strategies for B2B?",
          content: "We begin with in-depth research into your industry, target audience, and unique sales cycle. Our strategies are then custom-built to address the specific pain points and decision-making processes of your B2B customers, ensuring highly relevant content and ad placements.",
        },
        {
          id: "faq-3",
          title: "What's your approach to content creation?",
          content: "Our content process involves strategic planning, expert writing, and SEO optimization. We create a wide range of content, from technical whitepapers and e-books to engaging blog posts and video scripts, all designed to educate and convert your B2B audience.",
        },
        {
          id: "faq-4",
          title: "Which advertising platforms do you specialize in?",
          content: "We specialize in B2B-focused platforms such as LinkedIn Ads, Google Ads, and various programmatic advertising networks tailored to reach business decision-makers. We select platforms based on where your target audience spends their time online.",
        },
        {
          id: "faq-5",
          title: "How do you measure campaign success?",
          content: "We track key performance indicators (KPIs) relevant to B2B, including lead quality, conversion rates, cost per lead (CPL), marketing-qualified leads (MQLs), and sales-qualified leads (SQLs). Regular reporting and transparent analytics are central to our approach.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find answers to common questions about our B2B content and advertising services."
      tag="Got Questions?"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient",
      }}
      tag="Get in Touch"
      title="Ready to Grow Your Business?"
      description="Let's discuss your B2B content and advertising needs. Fill out the form below to schedule a free consultation."
      inputPlaceholder="Your business email"
      buttonText="Schedule Consultation"
      termsText="By clicking Schedule Consultation you agree to our Privacy Policy."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="InnovateGrowth Agency"
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Content Strategy",
              href: "#services",
            },
            {
              label: "Paid Advertising",
              href: "#services",
            },
            {
              label: "Integrated Campaigns",
              href: "#services",
            },
            {
              label: "SEO for B2B",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Case Studies",
              href: "#case-studies",
            },
            {
              label: "Testimonials",
              href: "#testimonials",
            },
            {
              label: "Blog",
              href: "#blog",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "LinkedIn",
              href: "https://linkedin.com",
            },
            {
              label: "Twitter",
              href: "https://twitter.com",
            },
          ],
        },
      ]}
      copyrightText="© 2024 InnovateGrowth Agency. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
