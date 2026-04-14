// font
 tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          sans: ["Vazirmatn", "sans-serif"]
        }
      }
    }
  }
  function loadNavbar() {
  const navbarHTML = `

  <!-- PASTE YOUR FULL NAVBAR + SIDEBAR HERE -->
  <!-- EXACTLY what you sent me -->
<!-- HERO OVERLAY NAVBAR -->
<nav id="navbar"
  class="fixed top-0 left-0 w-full z-50 transition-all duration-500">

  <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

    <!-- Logo -->
    <a href="index.html" class="flex items-center gap-3 group">
      <img src="Asia_Kara_Industrial_Tools_Logo_Final_1-removebg-preview.png"
        class="h-9 transition duration-300 group-hover:scale-105" alt="Logo">
      <span class="text-lg font-semibold tracking-wide text-white group-hover:text-[#05e3e8] transition"
        data-i18n="brand_name">
        Asia Kara
      </span>
    </a>

    <!-- Desktop Menu -->
   <div class="relative hidden md:flex items-center gap-10 text-sm font-medium text-white/90">
  <a href="index.html" data-i18n="nav_home" class="hover:text-[#05e3e8] transition">Home</a>
  <a href="about.html" data-i18n="nav_about" class="hover:text-[#05e3e8] transition">About</a>
  <!-- Products Dropdown -->
<div class="relative group">
  <!-- Main Products link -->
  <button id="products-btn" class="hover:text-[#05e3e8] transition flex items-center gap-1">
    <span data-i18n="nav_products">Products</span>
    <svg class="w-3 h-3 transition-transform duration-300 group-hover:rotate-180"
      fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M19 9l-7 7-7-7"/>
    </svg>
  </button>
  <!-- Main Dropdown -->
  <div
    class="absolute top-full left-0 mt-3 w-64 bg-neutral-900/95 backdrop-blur-xl border border-[#05e3e8]/20 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.6) opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 z-50">
    <a href="color.html" class="block px-5 py-3 text-white hover:text-[#05e3e8] hover:bg-neutral-800/70 transition" data-i18n="nav_color"> Powder Coatings
    </a>
    <!-- Industrial Tools -->
    <div class="relative group/tools">
      <a href="#"
        class="flex justify-between items-center px-5 py-3 text-white hover:text-[#05e3e8] hover:bg-neutral-800/70 transition">
        <span data-i18n="nav_tools">Industrial Tools</span>
        <span class="text-white/60" data-i18n="flash1">
            </span>
      </a>
      <!-- Submenu -->
      <div
        class="absolute top-0 left-full ml-2 w-72 bg-neutral-900/95 backdrop-blur-x border border-[#05e3e8]/20 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] opacity-0 invisible group-hover/tools:visible group-hover/tools:opacity-100 transition-all duration-300 rtl:left-auto rtl:right-full rtl:ml-0 rtl:mr-2">
        <a href="welding&cutting.html" class="block px-5 py-3 text-white hover:text-[#05e3e8] hover:bg-neutral-800/70" data-i18n="toc_item1">Welding and Cutting Machinery</a>
        <a href="welding wire.html" class="block px-5 py-3 text-white hover:text-[#05e3e8] hover:bg-neutral-800/70" data-i18n="toc_item2">Welding Wire</a>
        <a href="spot welding.html" class="block px-5 py-3 text-white hover:text-[#05e3e8] hover:bg-neutral-800/70" data-i18n="toc_item3">Spot Welding Machine</a>
        <a href="drillpress.html" class="block px-5 py-3 text-white hover:text-[#05e3e8] hover:bg-neutral-800/70" data-i18n="toc_item4">Drill Press</a>
        <a href="electric tools.html" class="block px-5 py-3 text-white hover:text-[#05e3e8] hover:bg-neutral-800/70" data-i18n="toc_item5">Electric and Cordless Power Tools</a>
        <a href="cutting&welding accessories.html" class="block px-5 py-3 text-white hover:text-[#05e3e8] hover:bg-neutral-800/70" data-i18n="toc_item6">Cutting and Welding Accessories</a>
        <a href="disc.html" class="block px-5 py-3 text-white hover:text-[#05e3e8] hover:bg-neutral-800/70" data-i18n="toc_item7">Abrasive Grinding and Cutting Discs</a>
        <a href="torch.html" class="block px-5 py-3 text-white hover:text-[#05e3e8] hover:bg-neutral-800/70" data-i18n="toc_item8">Welding Torch</a>
        <a href="powdermachine.html" class="block px-5 py-3 text-white hover:text-[#05e3e8] hover:bg-neutral-800/70" data-i18n="toc_item9">Powder Coating Machine</a>
      </div>
    </div>
  </div>
</div>
    <a href="services.html" data-i18n="nav_services" class="hover:text-[#05e3e8] transition">Services</a>
  <a href="contact.html" data-i18n="nav_contact" class="hover:text-[#05e3e8] transition">Contact</a>
</div>

   <!-- RIGHT SIDE (Language + Hamburger Together) -->
    <div class="flex items-center gap-4">
<!-- 🌐 Modern Language Toggle with Translation -->
<div class="relative">
  <div id="lang-toggle" class="flex items-center bg-white/10 backdrop-blur-md rounded-full p-1 cursor-pointer w-max select-none">
    
    <button data-lang="en" class="px-4 py-1 rounded-full text-xs md:text-sm font-semibold transition-all duration-300">
      EN
    </button>
    
    <button data-lang="fa" class="px-4 py-1 rounded-full text-xs md:text-sm font-semibold transition-all duration-300">
      FA
    </button>
    
  </div>
</div>
      <!-- Hamburger -->
      <button id="hamburger"
        class="md:hidden flex flex-col justify-center gap-[4px] w-8 h-8">
        <span class="w-6 h-[2px] bg-white transition-all duration-300"></span>
        <span class="w-6 h-[2px] bg-white transition-all duration-300"></span>
        <span class="w-6 h-[2px] bg-white transition-all duration-300"></span>
      </button>

    </div>

  </div>
</nav>

<!-- Mobile-Only Glassy Sidebar -->
<div id="mobile-sidebar" class="fixed inset-0 z-50 overflow-y-auto text-white backdrop-blur-2xl bg-white/10 border-l border-white/20 shadow-2xl transform -translate-x-full transition-transform duration-300 md:hidden">
  <!-- md:hidden ensures this sidebar disappears on medium+ screens -->

  <!-- Close Button -->
  <div class="flex justify-end p-4">
    <button id="sidebar-close" class="p-2 text-white/70 hover:text-[#05e3e8] transition-all duration-300">
      <i class="text-2xl fa-solid fa-xmark"></i>
    </button>
  </div>

  <!-- Logo -->
  <div class="flex items-center px-4 mb-10 space-x-3 rtl:space-x-reverse">
    <img src="Asia_Kara_Industrial_Tools_Logo_Final_1-removebg-preview.png" class="h-10" alt="Logo">
    <span class="text-2xl text-[#05e3e8] font-bold tracking-wide whitespace-nowrap" data-i18n="brand_name">Asia Kara</span>
  </div>

  <!-- Sidebar Menu Links -->
  <ul class="flex flex-col space-y-4 px-6 text-[16px]">

    <!-- Home -->
    <li class="relative group">
      <a href="index.html" class="flex items-center gap-3 p-3 rounded-xl backdrop-blur-md transition-all duration-300 hover:bg-white/10">
        <span class="absolute left-0 top-0 h-full w-1 bg-[#05e3e8] rounded-tr-xl rounded-br-xl scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></span>
        <i class="fa-solid fa-house text-white group-hover:text-[#05e3e8] transition-transform duration-300"></i>
        <span class="text-white group-hover:text-white transition-colors duration-300" data-i18n="nav_home">Home</span>
      </a>
    </li>

    <!-- About -->
    <li class="relative group">
      <a href="about.html" class="flex items-center gap-3 p-3 rounded-xl backdrop-blur-md transition-all duration-300 hover:bg-white/10">
        <span class="absolute left-0 top-0 h-full w-1 bg-[#05e3e8] rounded-tr-xl rounded-br-xl scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></span>
        <i class="fa-solid fa-circle-info text-white group-hover:text-[#05e3e8] transition-all duration-300"></i>
        <span class="text-white group-hover:text-white transition-colors duration-300" data-i18n="nav_about">About</span>
      </a>
    </li>
  <!-- Products Dropdown with Accent -->
<li class="relative group">

  <button id="products-toggle" class="flex items-center justify-between w-full gap-3 p-3 rounded-xl backdrop-blur-md transition-all duration-300 hover:bg-white/10 relative">

    <!-- Accent Bar -->
    <span class="absolute left-0 top-0 h-full w-1 bg-[#05e3e8] rounded-tr-xl rounded-br-xl scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></span>

    <div class="flex items-center gap-3">
      <i class="fa-solid fa-box-open text-white group-hover:text-[#05e3e8] transition-all duration-300"></i>
      <span class="text-white group-hover:text-white transition-colors duration-300 font-semibold" data-i18n="nav_products">Products</span>
    </div>

    <i id="products-chevron" class="fa-solid fa-chevron-down text-white/50 transition-transform duration-300"></i>

  </button>


  <!-- Dropdown Submenu -->
  <ul id="products-submenu" class="flex flex-col space-y-2 mt-2 pl-10 overflow-hidden max-h-0 transition-all duration-300">

    <!-- Powder Coatings -->
    <li>
      <a href="color.html" class="flex items-center gap-2 p-2 rounded-lg backdrop-blur-md hover:bg-white/10 transition duration-300">
        <span class="text-white hover:text-[#05e3e8]" data-i18n="nav_color">Powder Coatings</span>
      </a>
    </li>
    <!-- Industrial Tools -->
    <li class="flex flex-col">
      <button id="tools-toggle" class="flex items-center justify-between p-2 rounded-lg backdrop-blur-md hover:bg-white/10 transition duration-300">
        <span class="text-white hover:text-[#05e3e8]" data-i18n="nav_tools">
          Industrial Tools
        </span>
        <i id="tools-chevron" class="fa-solid fa-chevron-down text-white/50 text-xs transition-transform duration-300"></i>
      </button>

      <!-- TOOLS SUBMENU -->
<ul id="tools-submenu"
class="flex flex-col space-y-1 mt-1 pl-4 overflow-hidden max-h-0 transition-all duration-300">
        <li>
          <a href="welding&cutting.html" class="block px-3 py-2 rounded-lg text-white hover:bg-white/5 transition" data-i18n="toc_item1">Welding and Cutting Machinery</a>
        </li>
        <li>
          <a href="welding wire.html" class="block px-3 py-2 rounded-lg text-white hover:bg-white/5 transition" data-i18n="toc_item2">Welding Wire</a>
        </li>
        <li>
          <a href="spot welding.html" class="block px-3 py-2 rounded-lg text-white hover:bg-white/5 transition" data-i18n="toc_item3">Spot Welding Machine</a>
        </li>
        <li>
          <a href="drillpress.html" class="block px-3 py-2 rounded-lg text-white hover:bg-white/5 transition" data-i18n="toc_item4">Drill Press</a>
        </li>
        <li>
          <a href="electric tools.html" class="block px-3 py-2 rounded-lg text-white hover:bg-white/5 transition" data-i18n="toc_item5">Electric and Cordless Power Tools</a>
        </li>
        <li>
          <a href="cutting&welding accessories.html" class="block px-3 py-2 rounded-lg text-white hover:bg-white/5 transition" data-i18n="toc_item6">Cutting and Welding Accessories</a>
        </li>
        <li>
          <a href="disc.html" class="block px-3 py-2 rounded-lg text-white hover:bg-white/5 transition" data-i18n="toc_item7">Abrasive Grinding and Cutting Discs</a>
        </li>
        <li>
          <a href="torch.html" class="block px-3 py-2 rounded-lg text-white hover:bg-white/5 transition" data-i18n="toc_item8">Welding Torch</a>
        </li>
        <li>
          <a href="powdermachine.html" class="block px-3 py-2 rounded-lg text-white hover:bg-white/5 transition" data-i18n="toc_item9">Powder Coating Machine</a>
        </li>
      </ul>
    </li>
  </ul>
</li>
    <!-- Services -->
    <li class="relative group">
      <a href="services.html" class="flex items-center gap-3 p-3 rounded-xl backdrop-blur-md transition-all duration-300 hover:bg-white/10">
        <span class="absolute left-0 top-0 h-full w-1 bg-[#05e3e8] rounded-tr-xl rounded-br-xl scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></span>
        <i class="fa-solid fa-wrench text-white group-hover:text-[#05e3e8] transition-all duration-300"></i>
        <span class="text-white group-hover:text-white transition-colors duration-300" data-i18n="nav_services">Services</span>
      </a>
    </li>
    <!-- Contact -->
    <li class="relative group">
      <a href="contact.html" class="flex items-center gap-3 p-3 rounded-xl backdrop-blur-md transition-all duration-300 hover:bg-white/10">
        <span class="absolute left-0 top-0 h-full w-1 bg-[#05e3e8] rounded-tr-xl rounded-br-xl scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></span>
        <i class="fa-solid fa-envelope text-white group-hover:text-[#05e3e8] transition-all duration-300"></i>
        <span class="text-white group-hover:text-white transition-colors duration-300" data-i18n="nav_contact">Contact</span>
      </a>
    </li>

  </ul>

</div>
  `;

 document.getElementById("navbar-container").innerHTML = navbarHTML;
}

/* =========================
   GLOBAL STATE
========================= */
let currentLang = "en";
let buttons = [];



  
  // Full translations object
  const translations = {
    en: {
      brand_name: "Asia Kara",
      lang_label: "🌐",
      nav_home: "Home",
      nav_about: "About",
      nav_services: "Services",
      nav_products: "Products",
      nav_contact: "Contact",
      nav_tools:"Industrial Tools",
      nav_color:"Powder Coatings",
        hero_title: "Innovating Industry. Every Day",
    hero_text: "We provide cutting-edge tools and powder coating solutions designed to enhance efficiency, durability, and precision in every project.",
    link_tools: "Industrial Tools",
    link_colors: "Industrial Powder Coatings",
    flash1:"→",
    flash2:"→",
    about_title: "About Asia Kara",

about_p1: "Operating since 2010, Asia Kara has been a trusted name in the industrial tools sector, delivering precision, reliability, and innovation in every product. We proudly serve professionals and businesses across Afghanistan with a comprehensive range of high-quality industrial solutions.",

about_p2: "In addition to industrial tools, we are a reliable distributor of premium industrial powder coatings and pigments, offering vibrant, high-performance materials for diverse industrial applications. Our commitment to excellence ensures consistent quality and dependable supply.",

about_p3: "Our experienced team is dedicated to empowering your operations by providing products that enhance efficiency, durability, and overall performance. At Asia Kara, we do more than supply tools and coatings — we deliver integrated solutions designed to support sustainable growth and long-term success.",

about_p4: "By combining technical expertise, superior products, and exceptional customer service, we have built strong, lasting partnerships since 2010. Our mission is to continue driving innovation while maintaining the highest standards of quality and professionalism.",
vision_title: "Our Vision",
  vision_text: "Our vision is to become a trusted global provider of industrial tools, engineering solutions, and powder coatings, empowering individuals and businesses with products that combine durability, precision, and innovation.",
  mission_title: "Our Mission",
  mission_text: "Our mission is to provide accessible, reliable, and high-performance tools and industrial powder coatings that meet the diverse needs of professionals, industries, and households. We focus on continuous improvement, customer satisfaction, and sustainable practices.",
  values_title: "Our Values",
  value1_title: "Integrity",
  value1_text: "We operate with honesty, transparency, and a strong commitment to delivering products that meet their promises.",
  value2_title: "Innovation",
  value2_text: "We continuously evolve, embracing new technologies and design improvements to ensure our tools and powder coatings remain modern and efficient.",
  value3_title: "Customer Focus",
  value3_text: "Every decision we make begins with the needs of our customers. We aim to provide exceptional support and long-term value.",
  cta_title: "Contact Us Today for High-Quality Tools",
  cta_text: "Get the best industrial tools and powder coatings for your business. We are ready to provide solutions tailored to your needs.",
  cta_button: "Get in Touch",
  name:"Faraydoon Rasooli",
  ceo:"CEO",
contact_name: "Faraydoon Rasooli",
contact_title: "Business Owner",
contact_description:"At Asia Kara, we provide reliable and high-quality industrial tools, helping professionals and small businesses work more efficiently and confidently.",
contact_phone_label: "Phone",
contact_email_label: "Email",
contact_country: "Afghanistan",
contact_address: "No. 10-1, 10-2, Behzad 13, Behzad Road, Herat, Afghanistan",
quick_links: "Quick Links",
    home: "Home",
    about_us: "About Us",
    services: "Services",
    products: "Products",
    contact: "Contact",
    
    contact_info: "Contact Info",
    contact_phone: "(+93) 797441003",
    contact_email_1: "asiakara2010gmail.com",
    contact_email_2: "f.rasooli2010@gmail.com",
    contact_location: "Herat, Afghanistan",

    working_hours: "Working Hours",
    working_days: "Saturday – Thursday: 8:00 AM – 6:00 PM",
    friday: "Friday: Closed",

    social_media: "Social Media",
    whatsapp_chat: "Chat with us on WhatsApp",

    customer_support: "Customer Support",
    warranty_support: "Warranty Support",
    return_policy: "Return Policy",
    technical_assistance: "Technical Assistance",

    slogan: "“Precision Tools for a Stronger Tomorrow.”",
    powered_by: "Powered by Asia Kara Web Team",
    copyright: "© 2026 Asia Kara Industrial Tools. All Rights Reserved.",
    hero_legacy_text: "Engineered with heritage. Built with precision. Designed for progress.",
    why_heading: "Why Choose Us?",
    why_subtext: "We provide top-quality industrial tools and powder coatings, ensuring your projects succeed with precision, durability, and beauty.",
    quality_heading: "High-Quality Products",
    quality_text: "From industrial tools to powder coatings, every product is carefully selected and tested for performance and durability.",
    custom_heading: "Custom Solutions",
    custom_text: "We offer tailored solutions for your projects, whether it’s specialized tools or custom powder coatings to meet your exact needs.",
    support_heading: "Expert Support",
    support_text: "Our knowledgeable team is ready to assist with both tools and powder coatings, ensuring you get the guidance and support you need.",
    ceo_quote: "“Our history is rooted in craftsmanship. Our future is driven by innovation. And every step forward is powered by the trust of our customers.”",
    ceo_name: "— CEO, Asia Kara",
    tools_title: "Industrial Tools",
      tools_desc: "Precision. Power. Innovation.",
      view_tools: "View Tools",
      contact_us: "Contact Us",
      colors_title: "Powder Colors",
      colors_desc: "Beauty. Durability. Elegance.",
      view_colors: "View Colors",
      lang_label: "English (US)",
      contact_heading: "Contact Us",
    contact_intro: "Fill in your name and message below, and we'll get back to you as soon as possible.",
    contact_name_label: "Your Name",
    contact_name_placeholder: "Enter your name",
    contact_message_label: "Your Message",
    contact_message_placeholder: "Type your message...",
    contact_submit: "Send Message",
    your_email:"Your Email",
    thank_you:"Thank you",
    thank_you_message:"Your message has been sent successfully.",
    services_tag: "Industrial Excellence & Engineering Innovation",
services_hero_title: "Advanced Industrial Solutions Engineered for the Future",
services_hero_subtitle: "From high-precision tools to state-of-the-art powder coating technologies — we deliver performance, durability, and innovation that elevate every industrial project.",
service1_title: "Industrial Tools Supply",
service1_text: "Premium-grade industrial tools carefully selected to ensure precision, operational reliability, and long-term efficiency in demanding industrial environments.",

service2_title: "Advanced Powder Coating Solutions",
service2_text: "High-performance and visually refined coating systems engineered to enhance surface aesthetics while delivering superior protection and durability.",

service3_title: "Technical Consultation & Project Support",
service3_text: "Specialized engineering guidance to assist in selecting optimal tools and coating systems for maximum efficiency, durability, and project success.",

why_choose_us_title: "Why Choose Asia Kara?",
why_choose_us_text: "With extensive industry experience, precision-driven engineering, and an uncompromising commitment to quality, we deliver solutions that consistently exceed expectations.",

why_us_quality_title: "Premium Quality",
why_us_quality_text: "Our industrial tools and coating systems are engineered to ensure durability, accuracy, and sustained high-level performance.",

why_us_support_title: "Professional Support",
why_us_support_text: "Our expert team collaborates closely with clients to guarantee smooth, efficient, and successful project execution.",

why_us_trust_title: "Trusted & Reliable",
why_us_trust_text: "Clients trust us for consistent excellence, on-time delivery, and advanced technical expertise.",

contact_cta_title: "Have a Project in Mind? Let’s Build It Together.",
contact_cta_text: "Share your project requirements with us, and our team will deliver customized industrial solutions engineered for precision, durability, and long-term success.",
contact_cta_button: "Contact Us",
warranty_title: "Warranty & Product Support",
warranty_subtitle: "Comprehensive warranty coverage designed to safeguard your industrial investment.",
warranty_intro: "Asia Kara Industrial Tools provides structured warranty support to ensure confidence, operational reliability, and long-term product performance.",

warranty_coverage_title: "Warranty Coverage",
warranty_cov_1: "● Coverage against manufacturing defects",
warranty_cov_2: "● Valid for a specified period from the date of purchase",
warranty_cov_3: "● Applies to electrical and mechanical components",
warranty_cov_4: "● Warranty terms vary depending on product category",

warranty_not_title: "Exclusions & Limitations",
warranty_not_1: "● Damage caused by misuse, improper installation, or accidents",
warranty_not_2: "● Normal wear and tear",
warranty_not_3: "● Unauthorized repairs or modifications",
warranty_not_4: "● Consumable items such as filters, wires, or electrodes",

warranty_claim_title: "Warranty Claim Process",
warranty_claim_1: "Contact our warranty support team",
warranty_claim_2: "Provide proof of purchase and product details",
warranty_claim_3: "Describe the issue with photos or videos if available",
warranty_claim_4: "Our technical team will review and guide you through the next steps",

warranty_repair_title: "Repair, Replacement, or Refund",
warranty_repair_text: "Depending on the nature of the issue and inspection results, products may be repaired, replaced, or refunded in accordance with the official warranty policy.",

warranty_help_title: "Need Warranty Assistance?",
warranty_help_text: "Our support specialists are ready to assist you with any warranty-related inquiries.",
warranty_help_btn1: "Submit Warranty Request",
warranty_help_btn2: "View Products",
return_policy_title: "Return Policy",
    return_policy_subtitle: "Clear, fair, and transparent return conditions for your peace of mind.",
    return_policy_intro_text: "At Asia Kara Industrial Tools, customer satisfaction is our top priority. This Return Policy explains the conditions under which products may be returned or exchanged.",
    
    eligibility_title: "Eligibility for Returns",
    eligibility_item1: "● The product must be unused and in its original packaging",
    eligibility_item2: "● Return requests must be made within 7 days of delivery",
    eligibility_item3: "● Proof of purchase (invoice or receipt) is required",
    eligibility_item4: "● Items damaged due to misuse are not eligible for return",

    non_returnable_title: "Non-Returnable Items",
    non_returnable_item1: "● Consumables (electrodes, wires, filters)",
    non_returnable_item2: "● Products with physical damage after delivery",
    non_returnable_item3: "● Custom or special-order equipment",

    return_process_title: "Return Process",
    return_process_step1: "Contact our support team to request a return authorization",
    return_process_step2: "Provide order details and reason for return",
    return_process_step3: "Once approved, safely pack and return the product",
    return_process_step4: "Our team will inspect the item upon arrival",

    refunds_title: "Refunds & Exchanges",
    refunds_text: "Approved returns may be exchanged for another product or refunded. Refunds are processed within <span dir='ltr'>5–10</span> business days after inspection.",

    need_help_title: "Need Help?",
    need_help_text: "If you have any questions about returns or exchanges, our support team is ready to help.",
    contact_support_btn: "Contact Support",
    view_products_btn: "View Products",
    atasiakara:"At",
    asia_kara_industrial_tools:"Asia Kara Industrial Tools",
    tech_title: "Technical Assistance",
    tech_subtitle: "Professional support to keep your industrial equipment running at peak performance.",

    card1_title: "Expert Consultation",
    card1_text: "Get direct guidance from our technical experts for selecting, installing, and operating industrial tools safely and efficiently.",

    card2_title: "Installation & Setup",
    card2_text: "We assist with proper installation and setup to ensure optimal performance and long-term durability of your equipment.",

    card3_title: "Troubleshooting & Repair",
    card3_text: "Fast diagnosis and technical solutions to minimize downtime and restore your tools to full working condition.",

    card4_title: "Manuals & Documentation",
    card4_text: "Access technical manuals, specifications, and safety documentation for all supported products.",

    card5_title: "Warranty Support",
    card5_text: "Clear warranty assistance, claim processing, and replacement guidance for eligible industrial equipment.",

    card6_title: "Direct Support Channel",
    card6_text: "Contact our technical team via phone or WhatsApp for fast and reliable industrial support.",

    cta_btn: "Request Technical Support",
    toc_button: "Contents",
    toc_title: "Contents",
    toc_item1: "Welding and Cutting Machinery",
    toc_item2: "Welding Wire",
    toc_item3: "Spot Welding Machine",
    toc_item4: "Drill Press",
    toc_item5: "Electric and Cordless Power Tools",
    toc_item6: "Cutting and Welding Accessories",
    toc_item7:"Abrasive Grinding and Cutting Discs",
    toc_item8:"Welding Torch",
    toc_item9:"Powder Coating Machine",
    read_more:"Read More",
    back:"Back",
    wm_section_title: "Welding and Cutting Machinery",

    wm1_info1: "ARC Welding",
    wm1_info2: "Three-phase 380V<br>Welding current up to 500A<br>Electrode diameter up to 5mm",
    wm1_title: "ARC Welding Machine ARC 500A",
    wm1_subtitle: "Power, precision, and reliability for heavy-duty industrial welding",
    wm1_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Three-phase power input 380V</li>
  <li>Welding current up to 500A</li>
  <li>Continuous operation with electrode diameter up to 5mm</li>
  <li>Hot Start system for smooth arc ignition</li>
  <li>Overheat Protection system</li>
  <li>Durable industrial design with limited portability</li>
</ul>`,

wm2_info1:"MIG Welding",
wm2_info2:"Three-phase 380V<br>Output current up to 500A<br>MIG/MAG CO₂ compatible",
wm2_title: `MIG Welding Machine MIG 500T`,
wm2_subtitle: `Stable power, deep penetration, and consistent weld quality for demanding industrial applications`,
wm2_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Three-phase power input 380V</li>
  <li>Output current up to 500A</li>
  <li>Suitable for MIG/MAG (CO₂) welding processes</li>
  <li>Stable arc performance with minimal spatter</li>
  <li>High-efficiency cooling system for continuous operation</li>
  <li>Compatible with welding wire for heavy steel fabrication projects</li>
  <li>Integrated Overheat Protection system</li>
  <li>Durable industrial-grade design suitable for workshops and production lines</li>
   <li>Ideal for steel structures, metal frameworks, warehouses, and heavy industrial applications</li>
   <strong>Included Accessories:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Welding torch</li>
      <li>Ground cable</li>
      <li>Heated regulator</li>
      <li>Gas hose</li>
      <li>Separate wire feeder with 10-meter cable and hose</li>
    </ul>
</ul>`,

wm3_info1:"ARC Welding",
wm3_info2:"Three-phase 380V<br>Welding current up to 500A<br>Electrode diameter up to 6mm",
wm3_title: `ARC Welding Machine ARC 500A`,
wm3_subtitle: `High power output, precise arc control, and dependable performance for demanding industrial welding`,
wm3_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Three-phase power input 380V</li>
  <li>Welding current up to 500A</li>
  <li>Continuous operation with electrode diameter up to 6mm</li>
  <li>Hot Start system for smooth and stable arc ignition</li>
  <li>Integrated Overheat Protection system</li>
  <li>Robust industrial-grade design with limited portability</li>
</ul>
`,

wm4_info1:"MIG Welding",
wm4_info2:"Power input: 380V<br>Medium-duty operation<br>Sheet welding 0.5–8mm",
wm4_title: `Welding Machine MIG NBC 270W`,
wm4_subtitle: `Reliable power and precision for medium-duty industrial applications`,
wm4_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Power input: 380V</li>
  <li>Designed for medium-duty operations</li>
  <li>Welding capacity for sheet thickness from 0.5mm to 8mm</li>
</ul>
`,

wm5_info1:"MIG Welding",
wm5_info2:"Single-phase power<br>Sheet welding 0.8–10mm<br>Flux-cored wire compatible",
wm5_title: `Welding Machine <span dir="ltr">MIG 225D</span>`,
wm5_subtitle: `Strength, durability, and precision engineered for professional workshops`,
wm5_details: `
<ul class="list-disc pl-5 space-y-1">
  <li><strong>Specifications & Capabilities:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Single-phase power – suitable for workshops and urban power supply</li>
      <li>Continuous industrial operation up to 10 hours without performance degradation</li>
      <li>Suitable for welding sheets from 0.8mm to 10mm</li>
      <li>Compatible with flux-cored welding wire</li>
      <li>Stable arc performance with low spatter and excellent weld pool control</li>
    </ul>
  </li>
  <strong>Included Accessories:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>MIG torch</li>
      <li>Heated regulator</li>
      <li>Ground cable</li>
      <li>Gas hose</li>
    </ul>
</ul>`,

wm6_info1:"MIG Welding",
wm6_info2:"220V / 380V input<br>Welding current up to 270A<br>Steel thickness 1–14mm",
wm6_title: "MIG Welding Machine 270 SY",
wm6_subtitle: "Power, precision, and superior performance for professional industrial welding",
wm6_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Dual power input: Single-phase 220V & Three-phase 380V</li>
  <li>Welding current up to 270A – suitable for steel thickness 1–14mm</li>
  <li>Generator compatible</li>
  <li>MIG / CO₂ technology with CO₂ gas shielding</li>
  <li>Includes: MIG torch, heated regulator, ground cable, and gas hose</li>
  <li>Hot Start system for smooth and fast arc ignition</li>
  <li>Overheat protection system</li>
  <li>Ideal for workshops, industrial and semi-industrial projects</li>
</ul>
`,

spot_title: "Industrial Pedal-Operated Spot Welding Machine",
spot_subtitle: "Heavy-duty resistance spot welder designed for precise sheet metal joining in industrial applications",
spot_info1: "Spot Welding Machine",
spot_info2: "Power Output: 10–15 kVA<br>Foot Pedal Control<br>Suitable for stainless & alloy steel",
spot_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Industrial-grade pedal-operated spot welding machine for sheet metal joining.</li>
  <li>Uses resistance welding technology for strong and precise metal bonding.</li>
  <li>Copper alloy welding arms ensure high conductivity and stable performance.</li>
  <li>Typical power range: 10–15 kVA for industrial fabrication tasks.</li>
  <li>Capable of welding stainless steel and various alloy metals.</li>
  <li>Foot pedal control allows precise manual operation and better welding accuracy.</li>
  <li>Air-cooled system for stable thermal performance during continuous use.</li>
  <li>Heavy-duty reinforced body for durability and structural strength.</li>
  <li>Ideal for automotive, metal fabrication, workshop, and light industrial production.</li>
</ul>
`,

drill_info1: "Single-Phase",
drill_info2: "Powerful motor<br>Fixed vertical drilling system<br>Low vibration",
drill_title: `Drill Press <span dir="ltr">Single-Phase</span>`,
drill_subtitle: `High precision and stable performance for industrial workshops`,
drill_details: `
<ul class="list-disc pl-5 space-y-1">
  <li><strong>Key Specifications & Features:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Powerful and durable motor designed for continuous operation</li>
      <li>Fixed vertical drilling system for maximum accuracy</li>
      <li>Low vibration during operation to enhance drilling quality</li>
      <li>Adjustable worktable height</li>
      <li>Precise drilling depth control mechanism</li>
      <li>Multiple speed settings suitable for various materials</li>
      <li>Scratch-resistant heavy-duty industrial metal body</li>
    </ul>
  </li>
  <li><strong>Applications:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Drilling metal components</li>
      <li>Metal fabrication and structural workshops</li>
      <li>Wood and <span dir="ltr">MDF</span> industries</li>
      <li>Repair workshops</li>
      <li>Technical and industrial projects</li>
      <li>High-precision repetitive production tasks</li>
    </ul>
  </li>
</ul>
`,
    kd56_info1: "Demolition Hammer",
    kd56_info2: "Power: 1700W<br>Impact Energy: 55 Joules<br>Weight: 14.1 kg",
    kd56_title: "KYNKO KD56 Demolition Hammer",
    kd56_subtitle: "Industrial-Grade 1700W High-Impact Demolition Tool for Heavy-Duty Applications",
    kd56_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Model: KD56 – Professional demolition hammer engineered for construction and industrial use.</li>
  <li>Powerful 1700W high-performance motor delivering consistent and reliable output.</li>
  <li>Impact Energy: 55 Joules for efficient concrete breaking and heavy material removal.</li>
  <li>Heavy-duty design suitable for concrete demolition, road work, foundations, and structural removal.</li>
  <li>Advanced shock-absorption system reduces vibration for improved operator comfort.</li>
  <li>Durable metal housing and reinforced internal components for long service life.</li>
  <li>Weight: Approximately 14.1 kg – optimized for balance and stability during operation.</li>
</ul>
`,
    s1m_info1: "Angle Grinder",
    s1m_info2: "Rated Power: 1050W<br>No-Load Speed: 11,000 RPM<br>Wheel Compatibility: 100/115/125mm",
    s1m_title: "KYNKO S1M-KD91 Electric Angle Grinder",
    s1m_subtitle: "Professional 1050W High-Speed Grinder with Multi-Diameter Wheel Compatibility",
    s1m_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Rated Power: 1050W – powerful motor for fast material removal and cutting tasks.</li>
  <li>No-Load Speed: 11,000 RPM for high-speed precision grinding and cutting.</li>
  <li>Wheel Compatibility: Supports 100mm, 115mm, and 125mm wheels.</li>
  <li>360° cooling system improves performance and extends tool life.</li>
  <li>Patented motor coating reduces wear under heavy use.</li>
  <li>Deadman switch improves safety and prevents accidental startup.</li>
  <li>Double insulation design; safety gear recommended.</li>
</ul>
`,
    s1m19_info1: "Angle Grinder",
    s1m19_info2: "Rated Power: 900W<br>No-Load Speed: 11,000 RPM<br>Wheel Diameter: 100/115/125mm",
    s1m19_title: "KYNKO S1M-KD19 Electric Angle Grinder",
    s1m19_subtitle: "Compact 900W Professional Grinder with Multi-Diameter Wheel Compatibility",
   s1m19_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Rated Power: 900W – lightweight yet powerful.</li>
  <li>Voltage: 220–240V, 50/60Hz.</li>
  <li>No-Load Speed: 11,000 RPM.</li>
  <li>Supports 100mm, 115mm, 125mm wheels.</li>
  <li>Double insulation for safety.</li>
  <li>360° cooling system.</li>
  <li>Patented motor protection design.</li>
</ul>
`,
    s1m71_info1: "Angle Grinder",
    s1m71_info2: "Power: 2600W<br>No-Load Speed: 8,000 / 6,600 RPM<br>Max Wheel Diameter: 180/230mm",
    s1m71_title: "KYNKO S1M-KD71 Electric Angle Grinder",
    s1m71_subtitle: "Heavy-Duty 2600W Grinder with Large 180/230mm Discs for Industrial Use",
    s1m71_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Power: 2600W – extremely powerful for large-scale cutting, grinding, and surface preparation.</li>
  <li>Voltage: 220–240V, 50/60Hz – compatible with standard professional power sources.</li>
  <li>No-Load Speed: 8,000 RPM (180mm disc) / 6,600 RPM (230mm disc).</li>
  <li>Maximum Wheel Diameter: 180mm or 230mm.</li>
  <li>Double insulation for enhanced operator safety.</li>
  <li>Designed for professional use; proper ear, eye, and face protection required.</li>
  <li>Ideal for concrete, metal, masonry, and other demanding industrial materials.</li>
</ul>
`,
    s1m78_info1: "Angle Grinder",
    s1m78_info2: "Rated Power: 1800W<br>No-Load Speed: 9,000 RPM<br>Max Disc Capacity: 180mm",
    s1m78_title: "KYNKO S1M-KD78E-180 Electric Angle Grinder",
    s1m78_subtitle: "Professional 1800W Industrial Grinder for Heavy Cutting & Grinding",
   s1m78_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Rated Power: 1800W high-performance motor designed for industrial workloads.</li>
  <li>No-Load Speed: 9,000 RPM for controlled yet powerful grinding and cutting.</li>
  <li>Maximum Disc Capacity: Supports up to 180mm wheel diameter.</li>
  <li>Voltage: 220–240V, 50/60Hz.</li>
  <li>Heavy-duty construction for extended durability.</li>
  <li>Optimized airflow cooling system for longer motor life.</li>
  <li>Ideal for metal fabrication, construction, surface preparation, and cutting tasks.</li>
</ul>
`,

kd28_info1: "Rotary Hammer 800W",
kd28_info2: "Impact Rate: 0–4,800 BPM<br>No-Load Speed: 0–1,300 RPM<br>Drilling Capacity: 26mm",
    kd28_title: "KYNKO Z1C-KD28-26 Rotary Hammer",
    kd28_subtitle: "800W Professional Rotary Hammer for Concrete & Masonry Applications",
   kd28_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Rated Power: 800W high-efficiency motor.</li>
  <li>Impact Rate: 0–4,800 BPM.</li>
  <li>No-Load Speed: 0–1,300 RPM.</li>
  <li>Max drilling capacity: 26mm in concrete.</li>
  <li>Three modes: drilling, hammer drilling, chiseling.</li>
  <li>Double insulation.</li>
  <li>Suitable for construction applications.</li>
</ul>
`,

kd107_title: "KYNKO Z1C-KD107-32 Rotary Hammer",
kd107_subtitle: "1500W Heavy-Duty SDS PLUS Rotary Hammer for Concrete & Masonry",

kd107_info1: "Rotary Hammer 1500W",
kd107_info2: "Voltage: 220–240V<br>Impact Energy: 0–6.0J<br>No-Load Speed: 0–850 RPM",

kd107_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Rated Power: 1500W high-performance motor for heavy-duty applications.</li>
  <li>Voltage: 220–240V suitable for construction and industrial environments.</li>
  <li>No-Load Speed: 0–850 RPM for controlled and precise drilling.</li>
  <li>Impact Energy: 0–6.0 Joules for strong concrete breaking performance.</li>
  <li>SDS PLUS chuck system for fast and secure bit changes.</li>
  <li>Maximum Drilling Capacity: 32mm in concrete.</li>
  <li>Double insulation for enhanced electrical safety.</li>
  <li>Requires ear, eye, and respiratory protection during operation.</li>
  <li>Ideal for construction, demolition, masonry, and renovation work.</li>
</ul>
`,

    kd35_title: "KYNKO KD35-1 Cordless Impact Drill",
    kd35_subtitle: "21V High-Torque Professional Impact Drill for Multi-Material Applications",
    kd35_info1: "Cordless Drill",
    kd35_info2: "Voltage: 21V<br>Max Torque: 70 Nm<br>Two-Speed: 0–500 / 0–1800 RPM",
   kd35_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Voltage: 21V cordless system for flexible job-site use.</li>
  <li>Maximum Torque: 70 Nm.</li>
  <li>Two-Speed Gearbox: 0–500 / 0–1800 RPM.</li>
  <li>Impact Rate: 0–8,000 / 0–28,800 BPM.</li>
  <li>Drilling Capacity: 13mm steel, 38mm wood, 14mm concrete.</li>
  <li>Ergonomic design with balanced weight.</li>
  <li>Ideal for construction, installation, maintenance, and workshops.</li>
</ul>
`,
    kd34_info1: "Impact Drill",
    kd34_info2: "Rated Power: 1050W<br>Dual-Speed No-Load Rotation: 0–1,200 / 0–3,200 RPM<br>Impact Rate: 0–19,200 / 0–51,200 BPM",
    kd34_title: "KYNKO Z1J-KD34-13 Impact Drill",
    kd34_subtitle: "1050W Dual-Speed Professional Impact Drill for Multi-Material Drilling",
    kd34_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Rated Power: 1050W high-performance motor.</li>
  <li>Dual-Speed Rotation: 0–1,200 / 0–3,200 RPM.</li>
  <li>Impact Rate: 0–19,200 / 0–51,200 BPM.</li>
  <li>Drilling Capacity: 13mm steel, 23mm wood, 16mm concrete.</li>
  <li>Industrial construction for continuous use.</li>
  <li>Net Weight: 2.92 kg for improved stability.</li>
  <li>Ideal for professional construction and workshop tasks.</li>
</ul>
`,
    kd09_info1: "Impact Drill",
    kd09_info2: "Rated Power: 850W<br>No-Load Speed: 0–3,000 RPM<br>Impact Rate: 0–48,000 BPM",
    kd09_title: "KYNKO Z1J-KD09-13 Impact Drill",
    kd09_subtitle: "850W Professional Impact Drill for Steel, Wood & Concrete",
   kd09_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Rated Power: 850W efficient motor.</li>
  <li>No-Load Speed: 0–3,000 RPM.</li>
  <li>Impact Rate: 0–48,000 BPM.</li>
  <li>Drilling Capacity: 13mm steel, 25mm wood, 16mm concrete.</li>
  <li>Compact and lightweight design.</li>
  <li>Net Weight: 2.1 kg.</li>
  <li>Suitable for construction, installation, maintenance, and workshops.</li>
</ul>
`,
    kd64_info1: "Impact Drill",
kd64_info2: "Power: 710W <br> Drilling Capacity: 13mm <br> No-Load Speed: 0–2,800 RPM",
   kd64_title: "KYNKO Z1J-KD64-13 Impact Drill",
    kd64_subtitle: "710W Compact Professional Impact Drill with Aluminum Gearbox",
kd64_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Rated Power: 710W efficient motor.</li>
  <li>No-Load Speed: 0–2,800 RPM.</li>
  <li>Impact Rate: Up to 44,800 BPM.</li>
  <li>Maximum Drilling Capacity: 13mm.</li>
  <li>Variable speed switch for better control.</li>
  <li>Forward and reverse rotation function.</li>
  <li>Durable aluminum gearbox for long service life.</li>
</ul>
`,

    kd17_info1: "Electric Drill",
    kd17_info2: "Drill Capacity: 10mm / 13mm <br> Variable speed with forward & reverse",
    kd17_title: "KYNKO KD17-10 Electric Drill",
    kd17_subtitle: "A compact and reliable corded tool designed for precise drilling in wood, metal, and light construction materials.",
    kd17_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Brand: KYNKO professional power tools.</li>
  <li>Drill Capacity: Available in 10mm or 13mm chuck size.</li>
  <li>Variable speed control with forward and reverse functionality.</li>
  <li>Durable housing with reinforced components and aluminum gearbox in some models.</li>
</ul>
`,

    kd50_info1:"Electric Drill",
    kd50_info2:"Motor Power: 450W <br> Drilling Capacity:10mm <br> Voltage: 220–240V",
    kd50_title: "KYNKO J1Z-KD50-10 Electric Drill",
    kd50_subtitle: "Engineered for precision drilling in wood, metal, and light-duty construction materials",
   kd50_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Motor Power: 450W high-efficiency motor.</li>
  <li>Variable speed up to 3300 RPM.</li>
  <li>Maximum drilling capacity: 10mm.</li>
  <li>Voltage: 220–240V, 50/60Hz.</li>
  <li>Double-insulated design for enhanced safety.</li>
</ul>
`,

  kd75_110_info1: "Marble & Tile Cutter",
  kd75_110_info2: "High-performance motor: 1550W <br> Blade size: 110mm <br> Adjustable cutting depth",
  kd75_110_title: `Marble & Tile Cutter Z1E-KD75-110`,
  kd75_110_subtitle: `Powerful and precise cutter designed for stone, ceramic, and brick materials`,
  kd75_110_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>High-performance motor power: 1550W</li>
  <li>Blade size: 110mm</li>
  <li>Designed for cutting marble, tiles, ceramics, and bricks</li>
  <li>Waterproof and dustproof technology for longer lifespan</li>
  <li>Durable imported plastic housing</li>
  <li>Adjustable cutting depth for different materials</li>
  <li>Compact and ergonomic design for easy handling</li>
</ul>
`,

 kd76_info1: "185mm Electric Circular Saw",
 kd76_info2: "Motor power: 1500W <br> No-load speed: 8000 RPM <br> Adjustable cutting angle up to 45°",
 kd76_title: `185mm Electric Circular Saw KD76`,
 kd76_subtitle: `Powerful saw designed for precise wood cutting with adjustable depth and angle`,
 kd76_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Motor power: 1500W</li>
  <li>No-load speed: 8000 RPM</li>
  <li>Adjustable cutting capacity and angle up to 45°</li>
  <li>Includes dust collection bag for cleaner operation</li>
  <li>Ergonomic and compact design for easy handling</li>
</ul>
`,

  m1b_kd48_82_info1: "Electric Planer",
  m1b_kd48_82_info2: "Motor power: 710W <br> Ergonomic handle with rubber grip <br> Anti-lock switch for safety",
  m1b_kd48_82_title: `M1B-KD48-82 Electric Planer`,
  m1b_kd48_82_subtitle: `Powerful planer for flat and precise woodworking`,
  m1b_kd48_82_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Motor power: 710W</li>
  <li>Ergonomic handle with rubber grip</li>
  <li>Big switch with locking button for comfortable operation</li>
  <li>Superior plastic housing with chute bottom plate for flat surface</li>
  <li>Anti-lock switch for safe heavy-duty work</li>
</ul>
`,

  s1j_kd42_25_info1: "Die Grinder",
  s1j_kd42_25_info2: "Motor power: 710W <br> No-load speed: 27,000 RPM <br> Maximum wheel diameter: 25mm",
  s1j_kd42_25_title: `S1J-KD42-25 Die Grinder`,
  s1j_kd42_25_subtitle: `High-speed grinder for precision and heavy-duty tasks`,
  s1j_kd42_25_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Motor power: 710W</li>
  <li>No-load speed: 27,000 RPM</li>
  <li>Maximum wheel diameter: 25mm</li>
  <li>Low-temperature front bearing for long-lasting operation</li>
  <li>Insulated sleeve for comfortable handling</li>
</ul>
`,

  q1b_kd14_600p_info1: "Heat Gun",
  q1b_kd14_600p_info2: "Power: 2000W <br> Temperature range: 60°C – 600°C <br> Variable temperature control",
  q1b_kd14_600p_title: `Q1B-KD14-600P Heat Gun`,
  q1b_kd14_600p_subtitle: `Adjustable heat gun for versatile heating applications`,
  q1b_kd14_600p_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Power: 2000W</li>
  <li>Temperature range: 60°C – 600°C</li>
  <li>Airflow: 300–500 L/min</li>
  <li>Variable temperature control</li>
  <li>Double insulation for safety</li>
</ul>
`,

  m1q_kd20_65a_info1: "Jigsaw",
  m1q_kd20_65a_info2: "Motor power: 550W <br> Variable speed dial & orbital control <br> Cutting depth up to 65mm",
  m1q_kd20_65a_title: `M1Q-KD20-65A Jigsaw`,
  m1q_kd20_65a_subtitle: `Corded jigsaw for precise woodworking cuts`,
  m1q_kd20_65a_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Motor power: 550W</li>
  <li>Variable speed dial & orbital control knob</li>
  <li>Lock-on switch for continuous operation</li>
  <li>Rubber-covered soft grip for comfort</li>
  <li>Cutting depth up to 65mm</li>
</ul>
`,

  m1q_kd20_65_info1: "Jigsaw",
  m1q_kd20_65_info2: "Motor: 550W <br> Cutting capacity: 65mm <br> 0-45° bevel adjustment",
  m1q_kd20_65_title: `M1Q-KD20-65 Jigsaw`,
  m1q_kd20_65_subtitle: `Versatile jigsaw with adjustable speed and bevel cutting`,
  m1q_kd20_65_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Motor: 550W</li>
  <li>Cutting capacity: 65mm</li>
  <li>Six-speed dial for stepless speed adjustment</li>
  <li>Rigid aluminum base with 0-45° bevel adjustment</li>
  <li>Ergonomic rubber-covered handle with lock-on switch</li>
</ul>
`,

  mask_info1:"Respiratory Mask",
  mask_info2:"3M 6001 filter<br>Protection from organic vapors<br>Ergonomic soft design",
  mask_title: "Respiratory Half-Face Mask 3M 7502",
  mask_subtitle: "The professional choice for safe breathing in tough work environments",
  mask_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Equipped with original 3M filter model 6001</li>
  <li>Effective protection against organic vapors, smoke, and chemical pollutants</li>
  <li>Ergonomic and soft design for long-term use without fatigue</li>
  <li>Excellent face seal preventing air leakage</li>
  <li>Suitable for industrial painting, workshops, factories, and polluted environments</li>
  <li>Genuine 3M quality with durability and long lifespan</li>
</ul>
`,

  helmet_info1:"Auto-darkening Helmet",
  helmet_info2:"DIN 9–13 lens<br>1/25,000s switching<br>Wide viewing area",
  helmet_title: "Auto-darkening Welding Helmet",
  helmet_subtitle: "Advanced protection and comfort for professional welders",
  helmet_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Auto-darkening lens with adjustable shade (DIN 9-13)</li>
  <li>Fast switching time of 1/25,000 second for eye safety</li>
  <li>Lightweight ergonomic design reduces neck and head strain</li>
  <li>High-quality impact-resistant polycarbonate shell</li>
  <li>Wide viewing area for better visibility and precision</li>
  <li>UV/IR protection even when lens is in light state</li>
  <li>Adjustable sensitivity and delay for different welding conditions</li>
  <li>Suitable for MIG, TIG, and ARC welding</li>
  <li>Complies with international safety standards (ANSI Z87.1 & EN379)</li>
</ul>`,

gloves_info1:"Welding Gloves",
gloves_info2:"Split cowhide leather<br>Heat & spark resistant<br>Reinforced palm",
gloves_title: "Professional Welding Safety Gloves",
gloves_subtitle:"Premium split cowhide leather gloves engineered for extreme industrial protection",
gloves_details: `
      <ul class="list-disc pl-5 space-y-2 text-sm md:text-base">
        <li>Manufactured from high-grade split cowhide leather for superior durability and flexibility</li>
        <li>Exceptional resistance against high temperatures, welding sparks, molten metal splashes, and mechanical abrasion</li>
        <li>Reinforced palm and thumb areas for extended service life in heavy-duty environments</li>
        <li>Soft inner lining for enhanced comfort during long working hours</li>
        <li>Extended cuff design for additional wrist and forearm protection</li>
        <li>Heat-insulated stitching made with flame-resistant threads</li>
        <li>Ergonomic design allowing firm grip and improved tool control</li>
        <li><strong>Available Models:</strong> <span dir="ltr">MS-870, MS-611A, MS-557, MS-551, MS-775</span></li>
        <li><strong>Applications:</strong> MIG, TIG, ARC welding, metal fabrication, foundries, shipbuilding, and heavy industrial operations</li>
        <li>Designed to meet professional industrial safety requirements</li>
      </ul>
    `,
apron_info1:"Leather Welding Apron",
apron_info2:"Cowhide leather<br>Heat & spark protection<br>Extended coverage",
apron_title: "Leather Welding Apron – Model MS-480",
apron_subtitle:
      "Heavy-duty cowhide leather protection for professional welding operations",
apron_details: `
      <ul class="list-disc pl-5 space-y-2">
        <li>Manufactured from premium-grade durable cowhide leather</li>
        <li>Designed to provide maximum protection against heat, welding sparks, molten metal splashes, and open flames</li>
        <li>Excellent resistance to abrasion and mechanical wear in industrial environments</li>
        <li>Extended coverage design to protect chest, torso, and upper legs</li>
        <li>Reinforced stitching using heat-resistant industrial threads</li>
        <li>Adjustable straps for secure fit and improved working comfort</li>
        <li>Suitable for MIG, TIG, and ARC welding applications</li>
        <li>Ideal for workshops, metal industries, foundries, and construction sites</li>
      </ul>
    `,

mb25_info1:"MIG Welding Torch MB25",
mb25_info2:"230A CO₂ / 200A mixed gas<br>Air-cooled system<br>Euro connector<br>0.8–1.2mm wire",
mb25_title: "Air-Cooled MIG Welding Torch MB25",
mb25_subtitle: "Durable and ergonomic industrial torch for professional MIG/MAG welding",
mb25_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Rated up to 230A with CO₂ and 200A with mixed gas at 60% duty cycle</li>
  <li>Efficient air-cooled system for reliable heat dissipation</li>
  <li>Standard <span dir="ltr">Euro Connector</span> compatible with most MIG welding machines</li>
  <li>Supports 0.8 – 1.2 mm welding wire</li>
  <li>Ergonomic anti-slip handle for long working hours</li>
  <li>Heavy-duty flexible industrial cable assembly</li>
  <li>Standard <span dir="ltr">MB25</span> consumables and nozzle system</li>
  <li>Ideal for fabrication workshops, metal works, and construction projects</li>
</ul>`,

mb15_info1:"MIG Welding Torch MB15",
mb15_info2:"180A CO₂ / 150A mixed gas<br>Air-cooled system<br>Euro connector<br>0.6–1.0mm wire",
mb15_title: "Air-Cooled MIG Welding Torch MB15",
mb15_subtitle: "Lightweight and reliable torch for medium-duty MIG/MAG welding applications",
mb15_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Rated up to 180A with CO₂ and 150A with mixed gas at 60% duty cycle</li>
  <li>Efficient air-cooled system for stable performance</li>
  <li>Standard <span dir="ltr">Euro Connector</span> compatible with most MIG welding machines</li>
  <li>Supports 0.6 – 1.0 mm welding wire</li>
  <li>Lightweight ergonomic handle for improved control and reduced fatigue</li>
  <li>Durable and flexible industrial cable assembly</li>
  <li>Standard <span dir="ltr">MB15</span> consumables and nozzle system</li>
  <li>Ideal for fabrication workshops, repair works, and light industrial applications</li>
</ul>`,

panasonic_info1:"Panasonic Type MIG Torch",
panasonic_info2:"Up to 350A capacity<br>Air-cooled design<br>0.8–1.2mm wire<br>Industrial cable",
panasonic_title: "Panasonic Type Air-Cooled MIG Torch",
panasonic_subtitle: "Heavy-duty industrial torch for professional MIG/MAG welding applications",
panasonic_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Rated up to 350A (depending on model) at 60% duty cycle</li>
  <li>Air-cooled system with heat-resistant design</li>
  <li>Compatible with Panasonic-type MIG welding machines</li>
  <li>Supports 0.8 – 1.2 mm welding wire</li>
  <li>Ergonomic heat-insulated handle for operator safety</li>
  <li>Reinforced flexible industrial cable assembly</li>
  <li>Standard Panasonic-type consumables and nozzle system</li>
  <li>Ideal for heavy fabrication, structural steel, and large industrial projects</li>
</ul>`,

panasonic500_info1:"Panasonic MIG 500 Torch",
panasonic500_info2:"Up to 500A capacity<br>Heavy-duty air-cooled<br>1.0–1.6mm wire<br>Industrial welding use",
panasonic500_title: "Panasonic MIG 500 Air-Cooled Torch",
panasonic500_subtitle: "High-amperage industrial torch built for continuous heavy-duty welding",
panasonic500_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Rated up to 500A at 60% duty cycle</li>
  <li>Industrial air-cooled system with high thermal resistance</li>
  <li>Designed for continuous heavy welding operations</li>
  <li>Supports 1.0 – 1.6 mm welding wire</li>
  <li>Ergonomic heat-insulated handle for enhanced operator safety</li>
  <li>Reinforced cable with abrasion and heat-resistant outer jacket</li>
  <li>Compatible with Panasonic-type consumables</li>
  <li>Ideal for shipbuilding, tank fabrication, structural steel, and heavy industry</li>
</ul>`,

powder_general_info1:"Electrostatic Powder Coating System",
powder_general_info2:"Electrostatic spray system<br>Uniform metal coating<br>45L powder hopper",
powder_general_title: "Electrostatic Powder Coating Machine",
powder_general_subtitle: "Professional solution for durable and protective metal finishing",
powder_general_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Utilizes electrostatic technology to attract powder particles to grounded metal surfaces</li>
  <li>Ensures uniform coating even on complex and detailed shapes</li>
  <li>Large powder hopper capacity (approximately 45 liters) for industrial and high-volume projects</li>
  <li>Includes powder spray gun, pneumatic powder pump, and air pressure regulators</li>
  <li>Mounted on a portable trolley base for easy mobility in workshops</li>
  <li>Widely used for coating furniture, Household Applliances, mechanical components, and hardware</li>
</ul>`,

powder_general2_info1:"Electrostatic Powder Coating System",
powder_general2_info2:"Electrostatic spray technology<br>55L fluidizing powder hopper<br>LCD digital control panel",
powder_general2_title: "Electrostatic Powder Coating System",
powder_general2_subtitle: "Advanced industrial solution for precise and uniform powder application",
powder_general2_details: `
      <li>Professional manual powder coating system engineered for continuous industrial operation.</li>
      <li>Electrostatic spray technology ensures superior adhesion and uniform coverage on complex geometries.</li>
      <li>High-capacity fluidizing hopper (up to 55L) designed for uninterrupted production cycles.</li>
      <li>Intelligent LCD control panel with precise digital adjustment of voltage, current, and airflow parameters.</li>
      <li>Optimized powder fluidization and delivery system to minimize defects such as back ionization and high-voltage sparking.</li>
    `,

powder_industrial_info1:"Electrostatic Powder Coating System",
powder_industrial_info2:"Digital control panel<br>Uniform powder adhesion<br>Mobile trolley system",
powder_industrial3_title: "Industrial Electrostatic Powder Coating Machine",
powder_industrial3_subtitle: "Advanced system for protective and decorative metal surface finishing",
powder_industrial3_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Designed for applying protective and decorative coatings to metal parts</li>
  <li>Utilizes electrostatic charging technology for uniform powder adhesion</li>
  <li>Equipped with a digital control panel to adjust voltage and powder output</li>
  <li>Includes preset programs optimized for flat surfaces and complex geometries</li>
  <li>Features a powder hopper (tank), spray gun, and integrated control unit</li>
  <li>Mounted on a trolley base for easy mobility in industrial environments</li>
  <li>High-voltage output capability for deep penetration into grooves and corners</li>
</ul>`,

powder_decor_info1:"Powder Coating Machine",
powder_decor_info2:"Decorative metal coating<br>Electrostatic spray gun<br>Industrial powder hopper<br>Factory production use",
powder_decor_title: "Electrostatic Powder Coating Machine",
powder_decor_subtitle: "Industrial solution for decorative and protective metal finishing",
powder_decor_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Designed to apply decorative and protective finishes to various metal surfaces</li>
  <li>Uses an electrostatic spray gun for uniform powder application</li>
  <li>Equipped with industrial-grade hopper suitable for high-volume production</li>
  <li>Includes control unit for adjusting voltage, powder flow rate, and gun speed</li>
  <li>Stable and efficient performance for factory production lines</li>
  <li>Commonly used for coating automotive parts, metal furniture, and household appliances</li>
</ul>`,

wire_info1: "MIG Welding Wire",
wire_info2: "Sizes: 0.8mm • 1.0mm • 1.2mm • 1.6mm<br>Carbon steel fabrication<br>Smooth arc with low spatter",
wire_title: "Copper-Coated MIG Welding Wire",
wire_subtitle: "High-quality solid mild steel welding wire for smooth and stable MIG welding performance",
wire_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Solid copper-coated mild steel welding wire for MIG/MAG welding applications.</li>
  <li>Designed for carbon steel fabrication and general industrial welding.</li>
  <li>Available diameters: 0.8mm, 1.0mm, 1.2mm, and 1.6mm.</li>
  <li>Ensures stable arc performance with smooth wire feeding.</li>
  <li>Reduced spatter for cleaner welds and less post-processing.</li>
  <li>High conductivity copper coating improves welding efficiency.</li>
  <li>Suitable for automotive, construction, fabrication, and workshop use.</li>
</ul>
`,

disc_title: "Torkit 7-Inch Cutting Disc for Metal & INOX",
disc_subtitle: "High-speed abrasive cutting disc engineered for fast and precise cutting of metal and stainless steel",
disc_info1: "Cutting Disc 7\" (180mm)",
disc_info2: "Size: 180×1.6×22.23mm<br>Max Speed: 8500 RPM<br>For Metal & Stainless Steel",
disc_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>7-inch (180mm) cutting disc designed for metal and stainless steel (INOX).</li>
  <li>Dimensions: 180mm diameter, 1.6mm thickness, 22.23mm arbor size (7" × 1/16" × 7/8").</li>
  <li>Maximum speed rating: 80 m/s (8500 RPM) for high-performance cutting.</li>
  <li>Engineered for fast, smooth, and precise cutting with minimal effort.</li>
  <li>Thin profile reduces material loss and improves cutting efficiency.</li>
  <li>Compatible with standard angle grinders.</li>
  <li>Manufactured in compliance with EN12413 safety standards.</li>
  <li>Ideal for metal fabrication, stainless steel cutting, and workshop use.</li>
</ul>
`,

wm2_info3: "Works well on scaled, rusty, or oily metals <br> Stable welding performance",
wm2_info4: "Diameter range: 0.6mm – 1.2mm <br> Available in different spool weights",
// color page
powder_hero_title: "Industrial Electro Estatic Coatings ",
  powder_hero_intro:
    "High-performance thermoset and thermoplastic powder coatings designed for durability, corrosion resistance, and premium surface finishes across industrial applications.",

  powder_type_epoxy: "Epoxy Coatings",
  powder_type_epoxy_desc: "Superior corrosion protection",

  powder_type_polyester: "Polyester Coatings",
  powder_type_polyester_desc: "UV & weather resistance",

  powder_type_hybrid: "Hybrid Systems",
  powder_type_hybrid_desc: "Balanced indoor performance",

  powder_type_texture: "Textured Finishes",
  powder_type_texture_desc: "Modern aesthetic coatings"
},
    fa: {
      brand_name: "آسیا کارا",
      lang_label: " 🌐",
      nav_home: "خانه",
      nav_about: "درباره ما",
      nav_services: "خدمات",
      nav_products: "محصولات",
      nav_contact: "تماس با ما",
      nav_tools:"ابزارآلات صنعتی",
      nav_color:"پوشش های صنعتی",
    hero_title: "هر روز، نو آوی در صنعت",
    hero_text: "ما ابزارها و راهکارهای پوشش پودری پیشرفته‌ای ارائه می‌دهیم که کارایی، دوام و دقت را در هر پروژه بهبود می‌بخشد.",
    link_tools: "ابزارآلات صنعتی",
    link_colors: "  پوشش های پودری صنعتی",
    flash1:"←",
    flash2:"←",
    about_title: "درباره آسیا کارا",

about_p1: "آسیا کارا از سال 2010 فعالیت خود را در حوزه ابزارآلات صنعتی آغاز نموده و به عنوان نامی معتبر در این صنعت شناخته می‌شود. ما با ارائه محصولات دقیق، قابل اعتماد و نوآورانه، افتخار خدمت‌رسانی به متخصصان و کسب‌وکارهای سراسر افغانستان را داریم.",

about_p2: "علاوه بر ابزارآلات صنعتی، ما تأمین‌کننده معتبر پوشش‌های صنعتی و رنگ‌های پودری ممتاز نیز هستیم و مواد باکیفیت و کارآمد برای کاربردهای متنوع صنعتی ارائه می‌دهیم. تعهد ما به کیفیت، تضمین‌کننده عرضه پایدار و استانداردهای حرفه‌ای است.",

about_p3: "تیم متخصص ما با هدف ارتقای بهره‌وری، دوام و عملکرد کلی پروژه‌های شما فعالیت می‌کند. در آسیا کارا، ما صرفاً فروشنده ابزار و رنگ نیستیم؛ بلکه ارائه‌دهنده راهکارهای یکپارچه صنعتی برای رشد پایدار و موفقیت بلندمدت شما هستیم.",

about_p4: "با تکیه بر تخصص فنی، محصولات باکیفیت و خدمات مشتریان در سطح حرفه‌ای، از سال 2010 تاکنون روابطی پایدار و مبتنی بر اعتماد با مشتریان خود ایجاد کرده‌ایم. مأموریت ما استمرار نوآوری و حفظ بالاترین استانداردهای کیفیت و حرفه‌ای‌گری است.",
vision_title: "چشم‌انداز ما",
  vision_text: "چشم‌انداز ما تبدیل شدن به یک ارائه‌دهنده معتبر ابزارهای صنعتی، راه‌حل‌های مهندسی و پوشش های صنعتی الکترواستاتیک است و به افراد و کسب‌وکارها محصولات با دوام، دقت و نوآوری ارائه می‌کنیم.",
  mission_title: "ماموریت ما",
  mission_text: "ماموریت ما ارائه ابزارها و پوشش های صنعتی الکترو استاتیک قابل دسترس، قابل اعتماد و با عملکرد بالا است که نیازهای متنوع حرفه‌ای‌ها، صنایع و صنعت کاران را برآورده کند. ما بر بهبود مستمر، رضایت مشتری و اقدامات پایدار تمرکز داریم.",
  values_title: "ارزش‌های ما",
  value1_title: "صداقت",
  value1_text: "ما با صداقت، شفافیت و تعهد قوی عمل می‌کنیم تا محصولاتی ارائه دهیم که به وعده‌های خود عمل کنند.",
  value2_title: "نوآوری",
value2_text: "ما همواره در حال پیشرفت و نوآوری هستیم، با پذیرش فناوری‌های جدید و بهبودهای طراحی، تا ابزارها و پوشش‌های صنعتی ما همواره مدرن، با کیفیت و کارآمد باقی بمانند.",  value3_title: "تمرکز بر مشتری",
  value3_text: "هر تصمیمی که می‌گیریم با نیازهای مشتریان آغاز می‌شود. هدف ما ارائه پشتیبانی استثنایی و ارزش بلندمدت است.",
  cta_title: "همین امروز با ما تماس بگیرید",
cta_text: "بهترین ابزارآلات و ماشین‌آلات صنعتی، به‌همراه پوشش‌های صنعتی باکیفیت را برای توسعه کسب‌وکار خود تهیه کنید. تیم ما آماده است تا راه‌حل‌هایی دقیق، کاربردی و متناسب با نیاز شما ارائه دهد.",
cta_button: "تماس با ما",
name:"فریدون رسولی",
ceo:"مدیریت مجموعه",
contact_name: "فریدون رسولی",
contact_title: "مدیر مجموعه",
contact_description: "در آسیا کارا، ما با ارائه ابزارآلات دقیق، قابل اعتماد و نوآورانه، مسیر پیشرفت کار شما را هموار می‌کنیم.",
contact_phone_label: "تلفن",
contact_email_label: "ایمیل",
contact_country: "افغانستان",
contact_address: "پلاک ۱۰-۱ و ۱۰-۲، بهزاد ۱۳، جاده بهزاد، هرات، افغانستان",
 quick_links: "لینک‌های سریع",
    home: "خانه",
    about_us: "درباره ما",
    services: "خدمات",
    products: "محصولات",
    contact: "تماس با ما",
    
    contact_info: "اطلاعات تماس",
    contact_phone: "(+۹۳) ۷۹۷۴۴۱۰۰۳",
    contact_email_1: "asiakara2010gmail.com",
    contact_email_2: "f.rasooli2010@gmail.com",
    contact_location: "هرات، افغانستان",

    working_hours: "ساعات کاری",
    working_days: "شنبه تا پنج‌شنبه: ۸ صبح تا ۶ عصر",
    friday: "جمعه: تعطیل",

    social_media: "شبکه‌های اجتماعی",
    whatsapp_chat: "چت با ما در واتساپ",

    customer_support: "پشتیبانی مشتری",
    warranty_support: "پشتیبانی گارانتی",
    return_policy: "سیاست بازگشت",
    technical_assistance: "کمک فنی",
    slogan: "ابزار دقیق برای فردایی قدرتمندتر.",
    powered_by: "توسط تیم وب آسیا کارا ارائه شده است",
    copyright: "© 2026 ابزار صنعتی آسیا کارا. کلیه حقوق محفوظ است.",
    hero_legacy_text: "برآمده از تجربه‌ای ماندگار. ساخته‌شده با دقت. طراحی‌شده برای پیشرفت.",
     why_heading: "چرا ما را انتخاب کنید؟",
    why_subtext: "ما ابزارهای صنعتی و پوشش های صنعتی با کیفیت بالا ارائه می‌دهیم تا پروژه‌های شما با دقت، دوام و زیبایی تکمیل شوند.",
    quality_heading: "محصولات با کیفیت بالا",
    quality_text: "از ابزارهای صنعتی تا پوشش‌های پودری، هر محصول با دقت انتخاب و برای عملکرد و دوام تست می‌شود.",
    custom_heading: "راهکارهای سفارشی",
    custom_text: "ما راهکارهای سفارشی برای پروژه‌های شما ارائه می‌دهیم، چه ابزارهای تخصصی و چه پوشش های پودری مطابق نیاز دقیق شما.",
    support_heading: "پشتیبانی متخصص",
    support_text: "تیم با دانش ما آماده است تا در زمینه ابزارها و پوشش های پودری شما را راهنمایی کند و پشتیبانی لازم را ارائه دهد.",
    ceo_quote: "«تاریخ ما ریشه در هنر و مهارت دارد. آینده ما با نوآوری هدایت می‌شود. و هر گام رو به جلو با اعتماد مشتریانمان قدرت می‌گیرد.»",
    ceo_name: "— مدیرعامل، آسیا کارا",
    tools_title: "ابزارهای صنعتی",
      tools_desc: "دقت. قدرت. نوآوری.",
      view_tools: "مشاهده ابزارها",
      contact_us: "تماس با ما",
      colors_title: "پوشش های صنعتی",
      colors_desc: "زیبایی. دوام. ظرافت.",
      view_colors: "مشاهده رنگ‌ها",
      lang_label: "فارسی",
       contact_heading: "تماس با ما",
    contact_intro: "نام و پیام خود را وارد کنید و ما در اسرع وقت با شما تماس خواهیم گرفت.",
    contact_name_label: "نام شما",
    contact_name_placeholder: "نام خود را وارد کنید",
    contact_message_label: "پیام شما",
    contact_message_placeholder: "پیام خود را تایپ کنید...",
    contact_submit: "ارسال پیام",
    thank_you:"از شما متشکریم",
    thank_you_message:"پیام شما با موفقیت ارسال شد.",
    your_email:"ایمیل شما",
    services_tag: "تعالی صنعتی و نوآوری مهندسی",
services_hero_title: "راهکارهای پیشرفته صنعتی، مهندسی‌شده برای آینده",
services_hero_subtitle: "از ابزارهای فوق‌دقیق تا فناوری‌های پیشرفته پوشش پودری — ما عملکرد برتر، دوام پایدار و نوآوری هدفمند را برای ارتقای هر پروژه صنعتی ارائه می‌دهیم.",
service1_title: "تأمین ابزارآلات صنعتی",
service1_text: "ابزارآلات صنعتی با کیفیت ممتاز که با دقت انتخاب شده‌اند تا حداکثر دقت، قابلیت اطمینان عملیاتی و بهره‌وری بلندمدت را در محیط‌های صنعتی سخت فراهم سازند.",

service2_title: "راهکارهای پیشرفته پوشش پودری",
service2_text: "سیستم‌های پوشش‌دهی با عملکرد بالا و جلوه بصری ممتاز که با هدف ارتقای زیبایی سطح و ارائه حفاظت و دوام برتر مهندسی شده‌اند.",

service3_title: "مشاوره فنی و پشتیبانی پروژه",
service3_text: "ارائه راهنمایی‌های تخصصی مهندسی جهت انتخاب بهینه ابزارآلات و سیستم‌های پوششی با هدف دستیابی به حداکثر کارایی، دوام و موفقیت پروژه.",

why_choose_us_title: "چرا آسیا کارا را انتخاب کنیم؟",
why_choose_us_text: "با سال‌ها تجربه صنعتی، مهندسی مبتنی بر دقت و تعهدی راسخ به کیفیت، ما راهکارهایی ارائه می‌دهیم که همواره فراتر از انتظارات عمل می‌کنند.",

why_us_quality_title: "کیفیت ممتاز",
why_us_quality_text: "ابزارآلات و سیستم‌های پوششی ما با تمرکز بر دوام، دقت و عملکرد پایدار در سطحی حرفه‌ای مهندسی شده‌اند.",

why_us_support_title: "پشتیبانی حرفه‌ای",
why_us_support_text: "تیم متخصص ما با همکاری نزدیک با مشتریان، اجرای روان، کارآمد و موفق پروژه‌ها را تضمین می‌کند.",

why_us_trust_title: "مورد اعتماد و قابل اتکا",
why_us_trust_text: "مشتریان ما را به دلیل کیفیت پایدار، تحویل به‌موقع و تخصص فنی پیشرفته انتخاب می‌کنند.",

contact_cta_title: "پروژه‌ای در ذهن دارید؟ با ما در ارتباط باشید.",
contact_cta_text: "نیازمندی‌های پروژه خود را با ما در میان بگذارید تا تیم ما راهکارهای صنعتی سفارشی، مهندسی‌شده برای دقت، دوام و موفقیت بلندمدت ارائه دهد.",
contact_cta_button: "تماس با ما",
warranty_title: "گارانتی و پشتیبانی محصولات",
warranty_subtitle: "پوشش جامع گارانتی با هدف حفاظت از سرمایه‌گذاری صنعتی شما.",
warranty_intro: "آسیا کارا ابزارآلات صنعتی با ارائه خدمات گارانتی ساختارمند، اطمینان، قابلیت اطمینان عملیاتی و عملکرد بلندمدت محصولات را تضمین می‌نماید.",

warranty_coverage_title: "دامنه پوشش گارانتی",
warranty_cov_1: "● پوشش نقص‌های ناشی از فرآیند تولید",
warranty_cov_2: "● معتبر برای مدت مشخص از تاریخ خرید",
warranty_cov_3: "● شامل قطعات الکتریکی و مکانیکی",
warranty_cov_4: "● شرایط گارانتی بسته به نوع محصول متفاوت است",

warranty_not_title: "موارد خارج از پوشش",
warranty_not_1: "● خسارات ناشی از استفاده نادرست، نصب غیر اصولی یا حوادث",
warranty_not_2: "● استهلاک و فرسودگی طبیعی",
warranty_not_3: "● تعمیرات یا تغییرات غیرمجاز",
warranty_not_4: "● اقلام مصرفی مانند فیلترها، سیم‌ها یا الکترودها",

warranty_claim_title: "فرآیند ثبت درخواست گارانتی",
warranty_claim_1: "تماس با تیم پشتیبانی گارانتی",
warranty_claim_2: "ارائه فاکتور خرید و مشخصات محصول",
warranty_claim_3: "شرح مشکل به همراه تصاویر یا ویدئو در صورت امکان",
warranty_claim_4: "بررسی توسط تیم فنی و ارائه راهنمایی‌های لازم برای مراحل بعدی",

warranty_repair_title: "تعمیر، تعویض یا بازپرداخت",
warranty_repair_text: "بر اساس ماهیت مشکل و نتایج بررسی فنی، محصول مطابق با شرایط رسمی گارانتی تعمیر، تعویض یا بازپرداخت خواهد شد.",

warranty_help_title: "نیاز به راهنمایی در خصوص گارانتی دارید؟",
warranty_help_text: "متخصصان پشتیبانی ما آماده پاسخگویی به تمامی پرسش‌های مرتبط با گارانتی می‌باشند.",
warranty_help_btn1: "ثبت درخواست گارانتی",
warranty_help_btn2: "مشاهده محصولات",
 return_policy_title: "سیاست بازگشت کالا",
    return_policy_subtitle: "شرایط بازگشت شفاف، عادلانه و روشن برای آرامش خاطر شما.",
     atasiakara:"در",
    asia_kara_industrial_tools:"ابزارآلات صنعتی آسیا کارا",
 return_policy_intro_text: "رضایت مشتری در اولویت ما قرار دارد. این سیاست بازگشت کالا شرایطی را توضیح می‌دهد که تحت آن محصولات قابل بازگرداندن یا تعویض هستند.",
        
    eligibility_title: "شرایط واجد شرایط بودن برای بازگشت",
    eligibility_item1: "● محصول باید استفاده نشده و در بسته‌بندی اصلی خود باشد",
    eligibility_item2: "● درخواست بازگشت باید ظرف 7 روز پس از تحویل ثبت شود",
    eligibility_item3: "● ارائه مدرک خرید (فاکتور یا رسید) الزامی است",
    eligibility_item4: "● اقلامی که به دلیل استفاده نادرست آسیب دیده‌اند، قابل بازگشت نیستند",

    non_returnable_title: "موارد غیرقابل بازگشت",
    non_returnable_item1: "● مواد مصرفی (الکترودها، سیم‌ها، فیلترها)",
    non_returnable_item2: "● محصولاتی که پس از تحویل آسیب فیزیکی دیده‌اند",
    non_returnable_item3: "● تجهیزات سفارشی یا ویژه",

    return_process_title: "فرآیند بازگشت",
    return_process_step1: "با تیم پشتیبانی ما تماس بگیرید تا مجوز بازگشت دریافت کنید",
    return_process_step2: "جزئیات سفارش و دلیل بازگشت را ارائه دهید",
    return_process_step3: "پس از تأیید، محصول را به‌طور ایمن بسته‌بندی و بازگردانید",
    return_process_step4: "تیم ما پس از دریافت محصول، آن را بررسی خواهد کرد",

    refunds_title: "بازپرداخت و تعویض",
    refunds_text: "بازگشت‌های تأیید شده ممکن است با محصول دیگری تعویض یا بازپرداخت شوند. بازپرداخت‌ها ظرف <span dir='ltr'>۵–۱۰</span> روز کاری پس از بررسی انجام می‌شوند.",

    need_help_title: "نیاز به کمک دارید؟",
    need_help_text: "اگر سوالی در مورد بازگشت یا تعویض دارید، تیم پشتیبانی ما آماده کمک به شماست.",
    contact_support_btn: "تماس با پشتیبانی",
    view_products_btn: "مشاهده محصولات",
   tech_title: "پشتیبانی فنی",
    tech_subtitle: "پشتیبانی تخصصی برای حفظ عملکرد بهینه تجهیزات صنعتی شما.",

    card1_title: "مشاوره تخصصی",
    card1_text: "راهنمایی مستقیم از کارشناسان فنی ما برای انتخاب، نصب و استفاده ایمن و بهینه از ابزارهای صنعتی.",

    card2_title: "نصب و راه‌اندازی",
    card2_text: "کمک در نصب و راه‌اندازی صحیح برای اطمینان از عملکرد بهینه و دوام طولانی‌مدت تجهیزات شما.",

    card3_title: "عیب‌یابی و تعمیر",
    card3_text: "تشخیص سریع و ارائه راه‌حل‌های فنی برای کاهش زمان توقف و بازگرداندن ابزارها به شرایط کامل کاری.",

    card4_title: "راهنما و مستندات",
    card4_text: "دسترسی به راهنماهای فنی، مشخصات و مستندات ایمنی برای تمام محصولات پشتیبانی‌شده.",

    card5_title: "پشتیبانی گارانتی",
    card5_text: "کمک شفاف گارانتی، پردازش درخواست‌ها و راهنمایی جایگزینی برای تجهیزات صنعتی واجد شرایط.",

    card6_title: "کانال پشتیبانی مستقیم",
    card6_text: "ارتباط با تیم فنی ما از طریق تلفن یا واتساپ برای پشتیبانی سریع و مطمئن.",

    cta_btn: "درخواست پشتیبانی فنی",
    toc_button: "فهرست محتوا",
    toc_title: "فهرست محتوا",
    toc_item1: " ماشین‌آلات جوشکاری و برشکاری",
    toc_item2: "سیم جوشکاری",
    toc_item3: "دستگاه جوش نقطه‌ای پدالی",
    toc_item4: "دریل ستونی",
    toc_item5: "ابزارآلات برقی و شارژی",
    toc_item6: "لوازم جانبی جوشکاری و برشکاری",
    toc_item7:"صفحه های دیسک ساب و برش ",
    toc_item8:"تورچ جوش",
    toc_item9:"دستگاه پاشش رنگ پودری",
    read_more:"بیشتر بخوانید",
    back:"برگشت",
    wm_section_title: "ماشین‌آلات جوشکاری و برشکاری",

    wm1_info1:"دستگاه جوش ARC",
    wm1_info2:"سه فاز 380 ولت<br>جریان جوش تا 500 آمپر<br>قطر الکترود تا 5 میلی‌متر",
    wm1_title: "دستگاه جوش ARC 500A",
    wm1_subtitle: "قدرت، دقت و اطمینان برای جوشکاری‌های سنگین صنعتی",
    wm1_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>ورودی برق سه‌فاز 380 ولت</li>
  <li>جریان جوش تا 500 آمپر</li>
  <li>قابلیت کار مداوم با الکترود تا قطر 5 میلی‌متر</li>
  <li>مجهز به سیستم شروع گرم (Hot Start)</li>
  <li>دارای سیستم حفاظت حرارتی</li>
  <li>طراحی صنعتی مقاوم با قابلیت حمل محدود</li>
</ul>`,

wm2_info1:"دستگاه جوش MIG",
wm2_info2:"سه فاز 380 ولت<br>جریان خروجی تا 500 آمپر<br>سازگار با MIG/MAG CO₂",   
wm2_title: `دستگاه جوشکاری MIG 500T`,
wm2_subtitle: `توان پایدار، نفوذ عمیق و کیفیت یکنواخت جوش برای کاربردهای سنگین صنعتی`,
wm2_details: `
<ul class="list-disc pr-5 space-y-1">
  <li>ورودی برق سه‌فاز ۳۸۰ ولت</li>
  <li>جریان خروجی تا ۵۰۰ آمپر</li>
  <li>مناسب برای جوشکاری MIG/MAG (CO₂)</li>
  <li>پایداری قوس با حداقل پاشش مذاب</li>
  <li>سیستم خنک‌کننده قدرتمند جهت کارکرد مداوم</li>
  <li>سازگار با سیم جوش برای پروژه‌های سنگین فولادی</li>
  <li>مجهز به سیستم محافظت در برابر افزایش حرارت</li>
  <li>طراحی صنعتی مستحکم مناسب کارگاه‌ها و خطوط تولید</li>
  <li>ایده‌آل برای سازه‌های فولادی، اسکلت‌های فلزی، انبارها و صنایع سنگین</li>
 <strong>متعلقات همراه:</strong>
    <ul class="list-disc pr-5 mt-2 space-y-1">
      <li>تورچ جوشکاری</li>
      <li>کابل اتصال زمین</li>
      <li>رگلاتور گرم‌کن‌دار</li>
      <li>شیلنگ گاز</li>
      <li>وایرفیدر مجزا با کابل و شیلنگ ۱۰ متری</li>
    </ul>
</ul>
`,

wm3_info1:"دستگاه جوش ARC",
wm3_info2:"Three-phase 380V<br>Welding current up to 500A<br>Electrode diameter up to 6mm",
wm3_title: `دستگاه جوشکاری ARC 500A`,
wm3_subtitle: `توان خروجی بالا، کنترل دقیق قوس و عملکرد قابل‌اعتماد برای جوشکاری‌های صنعتی سنگین`,
wm3_details: `
<ul class="list-disc pr-5 space-y-1">
  <li>ورودی برق سه‌فاز ۳۸۰ ولت</li>
  <li>جریان جوشکاری تا ۵۰۰ آمپر</li>
  <li>قابلیت کار مداوم با الکترود تا قطر ۶ میلی‌متر</li>
  <li>مجهز به سیستم Hot Start برای شروع نرم و پایدار قوس</li>
  <li>دارای سیستم محافظت در برابر افزایش حرارت</li>
  <li>طراحی صنعتی مستحکم با قابلیت جابجایی محدود</li>
</ul>
`,

wm4_info1:"دستگاه جوش MIG",
wm4_info2:"ورودی برق: 380 ولت<br>عملیات نیمه صنعتی<br>جوشکاری ورق 0.5–8 میلی‌متر",   
wm4_title: `دستگاه جوشکاری <span dir="ltr">MIG NBC 270W</span>`,
wm4_subtitle: `توان و دقت قابل‌اعتماد برای کاربردهای صنعتی نیمه‌سنگین`,
wm4_details: `
<ul class="list-disc pr-5 space-y-1">
  <li>ورودی برق: ۳۸۰ ولت</li>
  <li>طراحی‌شده برای عملیات نیمه‌سنگین</li>
  <li>ظرفیت جوشکاری برای ضخامت ورق از ۰.۵ تا ۸ میلی‌متر</li>
</ul>
`,

wm5_info1:"دستگاه جوش MIG",
wm5_info2:"برق تک‌فاز<br>جوشکاری ورق 0.8–10 میلی‌متر<br>سازگار با سیم جوش توپودری",   
wm5_title: `دستگاه جوشکاری <span dir="ltr">MIG 225D</span>`,
wm5_subtitle: `استحکام، دوام و دقت مهندسی‌شده برای کارگاه‌های حرفه‌ای`,
wm5_details: `
<ul class="list-disc pr-5 space-y-1">
  <li><strong>مشخصات و قابلیت‌ها:</strong>
    <ul class="list-disc pr-5 mt-2 space-y-1">
      <li>تک‌فاز – مناسب برای کارگاه‌ها و برق شهری</li>
      <li>قابلیت کار صنعتی مداوم تا ۱۰ ساعت بدون افت عملکرد</li>
      <li>مناسب برای جوشکاری ورق‌های ۰.۸ تا ۱۰ میلی‌متر</li>
      <li>سازگار با سیم جوش توپودری (Flux-Cored)</li>
      <li>پایداری قوس با حداقل پاشش و کنترل عالی حوضچه مذاب</li>
    </ul>
  </li>
  <strong>متعلقات همراه:</strong>
    <ul class="list-disc pr-5 mt-2 space-y-1">
      <li>تورچ MIG</li>
      <li>رگلاتور گرم‌کن‌دار</li>
      <li>کابل اتصال زمین</li>
      <li>شیلنگ گاز</li>
    </ul>
</ul>
`,

wm6_info1:"دستگاه جوش MIG",
wm6_info2:"ورودی 220 و 380 ولت<br>جریان جوش تا 270 آمپر<br>ضخامت فولاد 1–14 میلی‌متر",   
wm6_title: "ماشین ولدینگ MIG 270 SY",
wm6_subtitle: "قدرت، دقت و کیفیت بالا برای جوشکاری صنعتی حرفه‌ای",
wm6_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>قابلیت ورودی برق تکفاز 220 ولت و سه‌فاز 380 ولت</li>
  <li>جریان جوش تا 270 آمپر – مناسب ضخامت فولاد 1 تا 14 میلی‌متر</li>
  <li>قابلیت کار با ژنراتور</li>
  <li>تکنولوژی MIG / CO₂ با محافظت گاز CO₂</li>
  <li>شامل تورچ، مانومتر گرمکن، کابل ارت (اتصال) و شیلنگ گاز</li>
  <li>سیستم Hot Start برای شروع جوش نرم و سریع</li>
  <li>دارای سیستم حفاظت حرارتی (Overheat Protection)</li>
  <li>مناسب کارگاه‌ها، پروژه‌های صنعتی و نیمه‌صنعتی</li>
</ul>
`,

spot_title: "دستگاه جوش نقطه‌ای پدالی صنعتی",
spot_subtitle: "دستگاه جوش مقاومتی سنگین برای اتصال دقیق ورق‌های فلزی در صنایع",
spot_info1: "دستگاه جوش نقطه‌ای",
spot_info2: "توان خروجی: 10 تا 15 کیلوولت آمپر<br>کنترل پدالی<br>مناسب فولاد ضدزنگ و آلیاژی",
spot_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>دستگاه جوش نقطه‌ای صنعتی پدالی برای اتصال ورق‌های فلزی.</li>
  <li>استفاده از فناوری جوش مقاومتی برای اتصال قوی و دقیق فلزات.</li>
  <li>بازوهای آلیاژ مس برای رسانایی بالا و عملکرد پایدار.</li>
  <li>توان کاری معمول: 10 تا 15 kVA مناسب برای کارهای صنعتی.</li>
  <li>قابلیت جوش فولاد ضدزنگ و انواع فلزات آلیاژی.</li>
  <li>کنترل پدالی برای دقت بیشتر در عملیات جوشکاری.</li>
  <li>سیستم خنک‌کاری هوا برای عملکرد پایدار در استفاده طولانی.</li>
  <li>بدنه تقویت‌شده و مقاوم برای دوام بالا.</li>
  <li>مناسب برای صنایع فلزی، خودروسازی و کارگاه‌ها.</li>
</ul>
`,

drill_info1: "تک‌فاز",
drill_info2: "موتور قدرتمند<br>سیستم دریل عمودی ثابت<br>لرزش کم",
drill_title: `دریل ستونی <span dir="ltr">تک‌ فاز</span>`,
drill_subtitle: `دقت بالا و عملکرد پایدار برای کارگاه‌های صنعتی`,
drill_details: `
<ul class="list-disc pr-5 space-y-1">
  <li><strong>مشخصات و ویژگی‌های کلیدی:</strong>
    <ul class="list-disc pr-5 mt-2 space-y-1">
      <li>موتور قدرتمند و بادوام مناسب کارکرد مداوم</li>
      <li>سیستم دریل عمودی ثابت جهت دستیابی به حداکثر دقت</li>
      <li>لرزش حداقلی هنگام کار برای افزایش کیفیت سوراخ‌کاری</li>
      <li>قابلیت تنظیم ارتفاع میز کار</li>
      <li>مکانیزم تنظیم دقیق عمق سوراخ‌کاری</li>
      <li>چندین سرعت مختلف برای کار روی متریال‌های گوناگون</li>
      <li>بدنه فلزی صنعتی مستحکم و مقاوم در برابر خراش</li>
    </ul>
  </li>
  <li><strong>کاربردها:</strong>
    <ul class="list-disc pr-5 mt-2 space-y-1">
      <li>سوراخ‌کاری قطعات فلزی</li>
      <li>کارگاه‌های آهنگری و ساخت سازه</li>
      <li>صنایع چوب و <span dir="ltr">MDF</span></li>
      <li>تعمیرگاه‌ها</li>
      <li>پروژه‌های فنی و صنعتی</li>
      <li>کارهای سری‌کاری با دقت بالا</li>
    </ul>
  </li>
</ul>
`,
     
    kd56_info1: "چکش تخریب",
    kd56_info2: "قدرت: 1700 وات<br>انرژی ضربه: 55 ژول<br>وزن: 14.1 کیلوگرم",
    kd56_title: "چکش تخریب KYNKO مدل KD56",
    kd56_subtitle: "ابزار تخریب صنعتی 1700 وات با قدرت ضربه بالا برای کاربردهای سنگین",
    kd56_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>مدل: KD56 – چکش تخریب حرفه‌ای طراحی شده برای پروژه‌های ساختمانی و صنعتی.</li>
  <li>مجهز به موتور قدرتمند 1700 وات با عملکرد پایدار و بازدهی بالا.</li>
  <li>قدرت ضربه: 55 ژول برای تخریب سریع بتن و مصالح سخت.</li>
  <li>مناسب برای تخریب بتن، عملیات راه‌سازی، فونداسیون و تخریب سازه‌های سنگین.</li>
  <li>سیستم پیشرفته جذب لرزش جهت کاهش خستگی کاربر در استفاده طولانی‌مدت.</li>
  <li>بدنه فلزی مقاوم و قطعات داخلی تقویت‌شده برای طول عمر بیشتر.</li>
  <li>وزن تقریبی: 14.1 کیلوگرم – طراحی متعادل برای کنترل و پایداری بهتر هنگام کار.</li>
</ul>
`,

    s1m_info1: "سنگ فرز برقی",
    s1m_info2: "قدرت: 1050 وات<br>سرعت در حالت آزاد: 11000 دور در دقیقه<br>سازگاری با دیسک: 100/115/125 میلی‌متر",
    s1m_title: "فرز زاویه‌ای برقی KYNKO مدل S1M-KD91",
    s1m_subtitle: "فرز حرفه‌ای 1050 وات با سرعت بالا و سازگاری با صفحه‌های چند اندازه",
   s1m_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>قدرت موتور: 1050 وات – مناسب برای برش و سایش سریع مواد.</li>
  <li>سرعت آزاد: 11,000 دور در دقیقه برای عملکرد دقیق و سریع.</li>
  <li>پشتیبانی از صفحه‌های 100، 115 و 125 میلی‌متری.</li>
  <li>سیستم خنک‌کننده 360 درجه برای افزایش طول عمر.</li>
  <li>پوشش موتور برای کاهش فرسایش در استفاده سنگین.</li>
  <li>کلید ایمنی برای جلوگیری از روشن شدن ناگهانی.</li>
  <li>عایق دوگانه؛ استفاده از تجهیزات ایمنی توصیه می‌شود.</li>
</ul>
`,

     s1m19_info1: "سنگ فرز برقی",
    s1m19_info2: "قدرت: 900 وات<br>سرعت در حالت آزاد: 11000 دور در دقیقه<br>قطر دیسک: 100/115/125 میلی‌متر",
    s1m19_title: "فرز زاویه‌ای برقی KYNKO مدل S1M-KD19",
    s1m19_subtitle: "فرز حرفه‌ای 900 وات با سازگاری با صفحه‌های چند اندازه",
   s1m19_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>Rated Power: 900W – lightweight yet powerful.</li>
  <li>Voltage: 220–240V, 50/60Hz.</li>
  <li>No-Load Speed: 11,000 RPM.</li>
  <li>Supports 100mm, 115mm, 125mm wheels.</li>
  <li>Double insulation for safety.</li>
  <li>360° cooling system.</li>
  <li>Patented motor protection design.</li>
</ul>
`,

     s1m71_info1: "سنگ فرز برقی",
    s1m71_info2: "قدرت: 2600 وات<br>سرعت در حالت آزاد: 8000 / 6600 دور در دقیقه<br>حداکثر قطر دیسک: 180/230 میلی‌متر",
    s1m71_title: "فرز زاویه‌ای برقی KYNKO مدل S1M-KD71",
    s1m71_subtitle: "فرز صنعتی 2600 وات با صفحه‌های بزرگ 180/230 میلی‌متری برای کاربردهای سنگین",
    s1m71_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>قدرت موتور: 2600 وات – بسیار قدرتمند برای برش، سایش و آماده‌سازی سطوح سنگین.</li>
  <li>ولتاژ: 220–240 ولت، 50/60 هرتز – سازگار با منابع برق حرفه‌ای استاندارد.</li>
  <li>سرعت آزاد: 8,000 دور در دقیقه (صفحه 180 میلی‌متری) / 6,600 دور در دقیقه (صفحه 230 میلی‌متری).</li>
  <li>حداکثر قطر صفحه: 180 یا 230 میلی‌متر.</li>
  <li>عایق دوگانه برای ایمنی بیشتر اپراتور.</li>
  <li>برای استفاده حرفه‌ای طراحی شده؛ استفاده از محافظ گوش، چشم و صورت الزامی است.</li>
  <li>مناسب برای بتن، فلز، مصالح ساختمانی و سایر مواد صنعتی سنگین.</li>
</ul>
`,

    s1m78_info1: "سنگ فرز برقی",
    s1m78_info2: "قدرت: 1800 وات<br>سرعت در حالت آزاد: 9000 دور در دقیقه<br>حداکثر قطر دیسک: 180 میلی‌متر",
    s1m78_title: "فرز زاویه‌ای برقی KYNKO مدل S1M-KD78E-180",
    s1m78_subtitle: "فرز صنعتی حرفه‌ای 1800 وات برای برش و سایش سنگین",
    s1m78_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>قدرت موتور: 1800 وات با عملکرد بالا برای کارهای صنعتی سنگین.</li>
  <li>سرعت آزاد: 9,000 دور در دقیقه برای سایش و برش قدرتمند.</li>
  <li>حداکثر ظرفیت صفحه: تا قطر 180 میلی‌متر.</li>
  <li>ولتاژ: 220–240 ولت، 50/60 هرتز.</li>
  <li>ساختار مقاوم و صنعتی برای دوام بالا.</li>
  <li>سیستم خنک‌کاری بهینه برای افزایش طول عمر موتور.</li>
  <li>مناسب برای فلزکاری، ساخت‌وساز، آماده‌سازی سطوح و برش صنعتی.</li>
</ul>
`,
    
kd28_info1: "دریل چکشی 800 وات",
kd28_info2: "نرخ ضربه: 0 تا 4,800 ضربه در دقیقه<br>سرعت آزاد: 0 تا 1,300 دور در دقیقه<br>ظرفیت سوراخکاری: 26 میلی‌متر",
    kd28_title: "دریل بتن‌کن KYNKO مدل Z1C-KD28-26",
    kd28_subtitle: "دریل بتن‌کن حرفه‌ای 800 وات برای کاربردهای بتن و مصالح ساختمانی",
   kd28_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>قدرت موتور: 800 وات.</li>
  <li>نرخ ضربه: 0 تا 4,800.</li>
  <li>سرعت: 0 تا 1,300 دور.</li>
  <li>ظرفیت: 26 میلی‌متر در بتن.</li>
  <li>سه حالت کاری.</li>
  <li>عایق دوگانه.</li>
  <li>مناسب پروژه‌های ساختمانی.</li>
</ul>
`,

kd107_title: "دریل چکشی KYNKO Z1C-KD107-32",
kd107_subtitle: "دریل چکشی 1500 وات SDS PLUS سنگین برای بتن و مصالح ساختمانی",
kd107_info1: "دریل چکشی 1500 وات",
kd107_info2: "ولتاژ: 220–240 ولت<br>انرژی ضربه: 0–6.0 ژول<br>سرعت آزاد: 0 تا 850 دور در دقیقه",
kd107_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>قدرت موتور: 1500 وات مناسب برای کارهای سنگین صنعتی.</li>
  <li>ولتاژ: 220–240 ولت مناسب محیط‌های ساختمانی.</li>
  <li>سرعت آزاد: 0 تا 850 دور در دقیقه برای کنترل دقیق کار.</li>
  <li>انرژی ضربه: 0 تا 6.0 ژول برای تخریب و سوراخکاری قوی.</li>
  <li>سیستم SDS PLUS برای تعویض سریع و ایمن مته.</li>
  <li>حداکثر ظرفیت سوراخکاری: 32 میلی‌متر در بتن.</li>
  <li>عایق دوبل برای افزایش ایمنی کاربر.</li>
  <li>استفاده از محافظ گوش، چشم و تنفسی ضروری است.</li>
  <li>مناسب برای تخریب، بتن‌کاری و پروژه‌های ساختمانی.</li>
</ul>
`,

    kd35_info1: "دریل چکشی",
    kd35_info2: "ولتاژ: 21 ولت<br>حداکثر گشتاور: 70 نیوتن‌متر<br>دو سرعت: 0–500 / 0–1800 دور در دقیقه",
    kd35_title: "دریل پیچ‌گوشتی چکشی شارژی KYNKO مدل KD35-1",
    kd35_subtitle: "دریل حرفه‌ای 21 ولت با گشتاور بالا برای کاربردهای متنوع",
    kd35_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>ولتاژ: سیستم شارژی 21 ولت برای کار در محل پروژه.</li>
  <li>حداکثر گشتاور: 70 نیوتن‌متر.</li>
  <li>گیربکس دو سرعته: 0–500 / 0–1800 دور در دقیقه.</li>
  <li>نرخ ضربه: 0–8,000 / 0–28,800 ضربه در دقیقه.</li>
  <li>ظرفیت سوراخکاری: 13 میلی‌متر فولاد، 38 میلی‌متر چوب، 14 میلی‌متر بتن.</li>
  <li>طراحی ارگونومیک با وزن متعادل.</li>
  <li>مناسب برای ساخت‌وساز، نصب، تعمیرات و کارگاه‌ها.</li>
</ul>
`,

    kd34_info1: "دریل چکشی",
    kd34_info2: "قدرت: 1050 وات<br>سرعت در حالت آزاد دوگانه: 0–1200 / 0–3200 دور در دقیقه<br>نرخ ضربه: 0–19200 / 0–51200 ضربه در دقیقه",
    kd34_title: "دریل چکشی KYNKO مدل Z1J-KD34-13",
    kd34_subtitle: "دریل چکشی حرفه‌ای 1050 وات دو سرعته برای سوراخکاری چندمنظوره",
   kd34_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>قدرت موتور: 1050 وات.</li>
  <li>سرعت دو حالته: 0–1,200 / 0–3,200 دور در دقیقه.</li>
  <li>نرخ ضربه: 0–19,200 / 0–51,200 ضربه در دقیقه.</li>
  <li>ظرفیت سوراخکاری: 13 میلی‌متر فولاد، 23 میلی‌متر چوب، 16 میلی‌متر بتن.</li>
  <li>ساختار صنعتی مقاوم.</li>
  <li>وزن خالص: 2.92 کیلوگرم.</li>
  <li>مناسب برای پروژه‌های ساختمانی و کارگاهی.</li>
</ul>
`,

    kd09_info1: "دریل چکشی",
    kd09_info2: "قدرت: 850 وات<br>سرعت در حالت آزاد: 0–3000 دور در دقیقه<br>نرخ ضربه: 0–48000 ضربه در دقیقه",
    kd09_title: "دریل چکشی KYNKO مدل Z1J-KD09-13",
    kd09_subtitle: "دریل چکشی حرفه‌ای 850 وات برای فولاد، چوب و بتن",
    kd09_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>قدرت موتور: 850 وات.</li>
  <li>سرعت آزاد: 0 تا 3,000 دور در دقیقه.</li>
  <li>نرخ ضربه: 0 تا 48,000 ضربه در دقیقه.</li>
  <li>ظرفیت سوراخکاری: 13 میلی‌متر فولاد، 25 میلی‌متر چوب، 16 میلی‌متر بتن.</li>
  <li>طراحی سبک و جمع‌وجور.</li>
  <li>وزن خالص: 2.1 کیلوگرم.</li>
  <li>مناسب برای ساخت‌وساز، نصب، تعمیرات و کارگاه‌ها.</li>
</ul>
`,

    kd64_info1: "دریل چکشی",
    kd64_info2: "توان: ۷۱۰ وات <br> ظرفیت سوراخکاری: ۱۳ میلی‌متر <br> سرعت در حالت بی‌باری: ۰ تا ۲۸۰۰ دور در دقیقه",    kd64_title: "دریل چکشی KYNKO مدل Z1J-KD64-13",
    kd64_subtitle: "دریل چکشی حرفه‌ای 710 وات با گیربکس آلومینیومی",
    kd64_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>قدرت موتور: 710 وات.</li>
  <li>سرعت آزاد: 0 تا 2,800 دور در دقیقه.</li>
  <li>نرخ ضربه: تا 44,800 ضربه در دقیقه.</li>
  <li>حداکثر ظرفیت سوراخکاری: 13 میلی‌متر.</li>
  <li>کلید کنترل سرعت متغیر.</li>
  <li>قابلیت چرخش راست‌گرد و چپ‌گرد.</li>
  <li>گیربکس آلومینیومی مقاوم برای طول عمر بیشتر.</li>
</ul>
`,

    kd17_info1: "دریل برقی",
    kd17_info2: "ظرفیت سوراخکاری: ۱۰ و ۱۳ میلی‌متر <br> دارای سرعت متغیر و چرخش راست و چپ",
    kd17_title: "دریل برقی KYNKO KD17-10",
    kd17_subtitle: "طراحی شده برای سوراخ‌کاری دقیق در چوب، فلز و مصالح ساختمانی سبک",
    kd17_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>برند: ابزارآلات حرفه‌ای KYNKO.</li>
  <li>ظرفیت سوراخکاری: دارای سه‌نظام 10 یا 13 میلی‌متری.</li>
  <li>کنترل سرعت متغیر با قابلیت چرخش راست‌گرد و چپ‌گرد.</li>
  <li>بدنه مقاوم با قطعات تقویت‌شده و گیربکس آلومینیومی در برخی مدل‌ها.</li>
</ul>
`,

    kd50_info1:"دریل برقی",
    kd50_info2:"توان موتور: 450 وات <br> ظرفیت سوراخ کاری: 10 میلی متر <br> ولتاژ: 2200-240",
    kd50_title: "دریل برقی KYNKO J1Z-KD50-10",
    kd50_subtitle: "  طراحی شده که برای سوراخ‌کاری دقیق در چوب، فلز و مصالح ساختمانی سبک ",
    kd50_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>توان موتور: 450 وات.</li>
  <li>قابلیت تنظیم سرعت تا 3300 دور در دقیقه.</li>
  <li>حداکثر ظرفیت سوراخکاری: 10 میلی‌متر.</li>
  <li>ولتاژ: 220–240 ولت، 50/60 هرتز.</li>
  <li>دارای عایق دوبل برای ایمنی بیشتر.</li>
</ul>
`,

  kd75_110_info1: "اره سرامیک و سنگ",
  kd75_110_info2: "قدرت موتور: ۱۵۵۰ وات <br> قطر تیغه: ۱۱۰ میلی‌متر <br> عمق برش قابل تنظیم",
  kd75_110_title: `کاتر سنگ و کاشی KYNKO Z1E-KD75-110`,
  kd75_110_subtitle: `ابزاری قدرتمند و دقیق برای برش سنگ، سرامیک و آجر`,
  kd75_110_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>قدرت موتور بالا: 1550 وات</li>
  <li>سایز تیغه: 110 میلی‌متر</li>
  <li>مناسب برای برش مرمر، کاشی، سرامیک و آجر</li>
  <li>تکنولوژی ضد آب و ضد گرد و غبار برای طول عمر بیشتر</li>
  <li>بدنه پلاستیکی وارداتی و بادوام</li>
  <li>عمق برش قابل تنظیم برای انواع مواد</li>
  <li>طراحی جمع و جور و ارگونومیک برای سهولت استفاده</li>
</ul>
`,

  kd76_info1: "اره گرد برقی ۱۸۵ میلی‌متری",
  kd76_info2: "قدرت موتور: ۱۵۰۰ وات <br> سرعت بدون بار: ۸۰۰۰ دور در دقیقه <br> زاویه برش قابل تنظیم تا ۴۵°",
  kd76_title: `اره گرد بر برقی 185 میلی‌متری KD76`,
  kd76_subtitle: `اره قدرتمند برای برش دقیق چوب با قابلیت تنظیم عمق و زاویه برش`,
  kd76_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>قدرت موتور: 1500 وات</li>
  <li>سرعت بدون بار: 8000 دور در دقیقه</li>
  <li>قابلیت تنظیم عمق و زاویه برش تا 45 درجه</li>
  <li>دارای کیسه جمع‌آوری گرد و غبار برای کار تمیزتر</li>
  <li>طراحی ارگونومیک و جمع و جور برای سهولت استفاده</li>
</ul>
`,

  
  m1b_kd48_82_info1: "رنده برقی",
  m1b_kd48_82_info2: "قدرت موتور: ۷۱۰ وات <br> دسته ارگونومیک با روکش پلاستیک <br> کلید ضد قفل برای ایمنی",
  m1b_kd48_82_title: `رنده برقی M1B-KD48-82`,
  m1b_kd48_82_subtitle: `رنده قدرتمند برای کارهای نجاری دقیق و صاف`,
  m1b_kd48_82_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>قدرت موتور: 710 وات</li>
  <li>دسته ارگونومیک با روکش لاستیکی</li>
  <li>کلید بزرگ با دکمه قفل برای راحتی در کار</li>
  <li>بدنه پلاستیکی مقاوم با صفحه پایینی صاف</li>
  <li>کلید ضد قفل برای ایمنی در کارهای سنگین</li>
</ul>
`,

  s1j_kd42_25_info1: "سنگ رومیزی",
  s1j_kd42_25_info2: "قدرت موتور: ۷۱۰ وات <br> سرعت بدون بار: ۲۷۰۰۰ دور در دقیقه <br> حداکثر قطر صفحه: ۲۵ میلی‌متر",
  s1j_kd42_25_title: `سنگ فرز S1J-KD42-25`,
  s1j_kd42_25_subtitle: `سنگ فرز پرسرعت برای کارهای دقیق و سنگین`,
  s1j_kd42_25_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>قدرت موتور: 710 وات</li>
  <li>سرعت بدون بار: 27,000 دور در دقیقه</li>
  <li>حداکثر قطر صفحه: 25 میلی‌متر</li>
  <li>بلبرینگ جلویی کم‌دما برای دوام طولانی</li>
  <li>روکش عایق برای راحتی در کار</li>
</ul>
`,

  q1b_kd14_600p_info1: "سشوار صنعتی",
  q1b_kd14_600p_info2: "توان: ۲۰۰۰ وات <br> محدوده دما: ۶۰–۶۰۰ درجه سانتی‌گراد <br> کنترل دمای متغیر",
  q1b_kd14_600p_title: `سشوار صنعتی Q1B-KD14-600P`,
  q1b_kd14_600p_subtitle: `سشوار قابل تنظیم برای کاربردهای مختلف حرارتی`,
  q1b_kd14_600p_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>قدرت: 2000 وات</li>
  <li>دامنه دما: 60 تا 600 درجه سانتی‌گراد</li>
  <li>حجم هوا: 300–500 لیتر در دقیقه</li>
  <li>کنترل دمای متغیر</li>
  <li>دو عایق برای ایمنی بیشتر</li>
</ul>
`,

  m1q_kd20_65a_info1: "اره عمودبر",
  m1q_kd20_65a_info2: "قدرت موتور: ۵۵۰ وات <br> ولوم سرعت متغیر و کنترل اوربیتال <br> عمق برش تا ۶۵ میلی‌متر",
  m1q_kd20_65a_title: `اره عمودبر M1Q-KD20-65A`,
  m1q_kd20_65a_subtitle: `اره برقی سیمی برای برش دقیق چوب`,
  m1q_kd20_65a_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>قدرت موتور: 550 وات</li>
  <li>ولوم سرعت متغیر و کنترل حرکت گردشی</li>
  <li>کلید قفل برای کار مداوم</li>
  <li>دسته نرم با روکش لاستیکی برای راحتی</li>
  <li>عمق برش تا 65 میلی‌متر</li>
</ul>
`,

  m1q_kd20_65_info1: "اره عمودبر",
  m1q_kd20_65_info2: "قدرت موتور: ۵۵۰ وات <br> ظرفیت برش: ۶۵ میلی‌متر <br> تنظیم زاویه ۰-۴۵°",
  m1q_kd20_65_title: `اره عمودبر M1Q-KD20-65`,
  m1q_kd20_65_subtitle: `اره چندکاره با سرعت قابل تنظیم و برش شیب‌دار`,
  m1q_kd20_65_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>قدرت موتور: 550 وات</li>
  <li>عمق برش: 65 میلی‌متر</li>
  <li>ولوم شش سرعته برای تنظیم بی‌پله سرعت</li>
  <li>پایه آلومینیومی مقاوم با تنظیم شیب 0-45 درجه</li>
  <li>دسته ارگونومیک با روکش لاستیکی و کلید قفل</li>
</ul>
`,
    mask_info1:"ماسک تنفسی",
    mask_info2:"فیلتر 3M مدل 6001<br>محافظت در برابر بخارات آلی<br>طراحی نرم و ارگونومیک",
    mask_title: "ماسک نیم‌صورت تنفسی 3M 7502",
    mask_subtitle: "انتخاب حرفه‌ای‌ها برای تنفس ایمن در محیط‌های کاری سخت",
    mask_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>مجهز به فیلتر اورجینال 3M مدل 6001</li>
  <li>محافظت مؤثر در برابر بخارات آلی، دود و آلودگی‌های شیمیایی</li>
  <li>طراحی ارگونومیک و نرم برای استفاده طولانی بدون خستگی</li>
  <li>آب‌بندی عالی روی صورت و جلوگیری از نشت هوا</li>
  <li>مناسب رنگ‌کاری صنعتی، کارگاه‌ها، کارخانه‌ها و محیط‌های آلوده</li>
  <li>کیفیت اصلی 3M با دوام و طول عمر بالا</li>
</ul>
`,
  
    helmet_info1:"کلاه جوشکاری اتوماتیک",
    helmet_info2:"لنز DIN 9–13<br>تغییر حالت 1/25000 ثانیه<br>دید وسیع",
    helmet_title: "کلاه ایمنی جوشکاری با تیره‌شدن خودکار",
    helmet_subtitle: "حفاظت پیشرفته و راحتی برای جوشکاران حرفه‌ای",
    helmet_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>لنز خودتیره‌شونده با درجه قابل تنظیم (DIN 9-13)</li>
  <li>زمان سوئیچ سریع 1/25,000 ثانیه برای ایمنی چشم</li>
  <li>طراحی سبک و ارگونومیک برای کاهش فشار گردن و سر</li>
  <li>پوسته پلی‌کربنات مقاوم در برابر ضربه با کیفیت بالا</li>
  <li>مساحت دید وسیع برای دقت و دید بهتر</li>
  <li>حفاظت UV/IR حتی زمانی که لنز روشن است</li>
  <li>حساسیت و تأخیر قابل تنظیم برای شرایط جوشکاری مختلف</li>
  <li>مناسب برای جوشکاری MIG، TIG و ARC</li>
  <li>مطابق با استانداردهای بین‌المللی ایمنی (<span dir="ltr">ANSI Z87.1 & EN379</span>)</li>
</ul>`,

gloves_info1:"دستکش جوشکاری",
gloves_info2:"چرم گاوی اشبالت<br>مقاوم در برابر حرارت و جرقه<br>کف تقویت‌شده",
gloves_title: "دستکش ایمنی جوشکاری حرفه‌ای",
gloves_subtitle:"دستکش چرمی گاوی اشبالت با کیفیت بالا، طراحی شده برای حداکثر محافظت در محیط‌های صنعتی سنگین",
gloves_details: `
      <ul class="list-disc pl-5 space-y-2 text-sm md:text-base">
        <li>تولید شده از چرم اشبالت گاوی درجه یک با دوام و انعطاف‌پذیری بالا</li>
        <li>مقاومت فوق‌العاده در برابر حرارت بالا، جرقه‌های جوشکاری، پاشش فلز مذاب و سایش مکانیکی</li>
        <li>تقویت‌شده در قسمت کف دست و انگشت شست برای افزایش طول عمر در شرایط کاری سنگین</li>
        <li>آستر داخلی نرم برای راحتی بیشتر در ساعات کاری طولانی</li>
        <li>طراحی ساق بلند برای محافظت بیشتر از مچ و ساعد دست</li>
        <li>دوخت مقاوم در برابر حرارت با نخ‌های نسوز صنعتی</li>
        <li>طراحی ارگونومیک برای کنترل بهتر ابزار و گرفتن مطمئن‌تر</li>
        <li><strong>مدل‌های موجود:</strong> <span dir="ltr">MS-870, MS-611A, MS-557, MS-551, MS-775</span></li>
        <li><strong>کاربردها:</strong> جوشکاری MIG، TIG، ARC، صنایع فلزی، ریخته‌گری، کشتی‌سازی و فعالیت‌های صنعتی سنگین</li>
        <li>طراحی شده مطابق با استانداردهای حرفه‌ای ایمنی صنعتی</li>
      </ul>
    `,

    apron_info1:"پیش‌بند چرمی جوشکاری",
    apron_info2:"چرم گاوی<br>محافظت در برابر حرارت و جرقه<br>پوشش محافظتی گسترده",
    apron_title: "پیش‌بند چرمی جوشکاری – مدل MS-480",
    apron_subtitle:"محافظ چرمی سنگین‌کار از جنس چرم گاوی برای عملیات حرفه‌ای جوشکاری",
    apron_details: `
      <ul class="list-disc pl-5 space-y-2">
        <li>تولید شده از چرم گاوی درجه یک با دوام بالا</li>
        <li>طراحی شده برای محافظت حداکثری در برابر حرارت، جرقه‌های جوشکاری، پاشش فلز مذاب و شعله مستقیم</li>
        <li>مقاومت عالی در برابر سایش و استهلاک در محیط‌های صنعتی</li>
        <li>طراحی با پوشش گسترده برای محافظت از سینه، بالاتنه و قسمت فوقانی پاها</li>
        <li>دوخت تقویت‌شده با نخ‌های صنعتی مقاوم در برابر حرارت</li>
        <li>دارای بندهای قابل تنظیم برای فیت شدن بهتر و راحتی بیشتر هنگام کار</li>
        <li>مناسب برای جوشکاری MIG، TIG و ARC</li>
        <li>ایده‌آل برای کارگاه‌ها، صنایع فلزی، ریخته‌گری و پروژه‌های ساختمانی</li>
      </ul>
    `,

mb25_info1:"تورچ جوشکاری MIG مدل MB25",
mb25_info2:"230 آمپر CO₂ / 200 آمپر گاز ترکیبی<br>سیستم خنک‌کاری هوا<br>اتصال یورو<br>سیم جوش 0.8 تا 1.2 میلی‌متر",
mb25_title: "تورچ MIG هواخنک مدل MB25",
mb25_subtitle: "تورچ صنعتی مقاوم و ارگونومیک برای جوشکاری حرفه‌ای MIG/MAG",
mb25_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>جریان نامی تا 230 آمپر با گاز CO₂ و 200 آمپر با گاز ترکیبی در سیکل کاری 60٪</li>
  <li>سیستم خنک‌کاری هواخنک با دفع حرارت مؤثر</li>
  <li>دارای اتصال استاندارد یورو (<span dir="ltr">Euro Connector</span>) سازگار با اکثر دستگاه‌های MIG</li>
  <li>مناسب برای سیم جوش با قطر 0.8 تا 1.2 میلی‌متر</li>
  <li>دسته ارگونومیک با طراحی ضدلغزش برای کار طولانی‌مدت</li>
  <li>کابل صنعتی مقاوم با انعطاف‌پذیری بالا</li>
  <li>نازل و قطعات مصرفی استاندارد مدل <span dir="ltr">MB25</span></li>
  <li>مناسب برای کارگاه‌های صنعتی، پروژه‌های فلزی و ساخت‌وساز</li>
</ul>`,

mb15_info1:"تورچ جوشکاری MIG مدل MB15",
mb15_info2:"180 آمپر CO₂ / 150 آمپر گاز ترکیبی<br>سیستم خنک‌کاری هوا<br>اتصال یورو<br>سیم جوش 0.6 تا 1.0 میلی‌متر",
mb15_title: "تورچ MIG هواخنک مدل MB15",
mb15_subtitle: "تورچ سبک و کاربردی برای جوشکاری نیمه‌سنگین MIG/MAG",
mb15_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>جریان نامی تا 180 آمپر با گاز CO₂ و 150 آمپر با گاز ترکیبی در سیکل کاری 60٪</li>
  <li>سیستم خنک‌کاری هواخنک با عملکرد پایدار در کارهای مداوم</li>
  <li>دارای اتصال استاندارد <span dir="ltr">Euro Connector</span> سازگار با اکثر دستگاه‌های MIG</li>
  <li>مناسب برای سیم جوش با قطر 0.6 تا 1.0 میلی‌متر</li>
  <li>دسته ارگونومیک و سبک برای کنترل بهتر و کاهش خستگی</li>
  <li>کابل انعطاف‌پذیر صنعتی با دوام بالا</li>
  <li>قطعات مصرفی و نازل استاندارد مدل <span dir="ltr">MB15</span></li>
  <li>مناسب برای کارگاه‌های فلزکاری، تعمیرات و پروژه‌های سبک صنعتی</li>
</ul>`,

panasonic_info1:"تورچ MIG نوع پاناسونیک",
panasonic_info2:"توان تا 350 آمپر<br>سیستم خنک‌کاری هوا<br>سیم جوش 0.8 تا 1.2 میلی‌متر<br>کابل صنعتی مقاوم",
panasonic_title: "تورچ پاناسونیک هواخنک",
panasonic_subtitle: "تورچ صنعتی قدرتمند برای جوشکاری حرفه‌ای MIG/MAG",
panasonic_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>جریان نامی تا 350 آمپر (بسته به مدل) در سیکل کاری 60٪</li>
  <li>سیستم خنک‌کاری هواخنک با طراحی مقاوم در برابر حرارت</li>
  <li>سازگار با دستگاه‌های جوش نوع پاناسونیک و مدل‌های مشابه</li>
  <li>مناسب برای سیم جوش با قطر 0.8 تا 1.2 میلی‌متر</li>
  <li>دسته ارگونومیک و عایق حرارتی برای ایمنی بیشتر اپراتور</li>
  <li>کابل صنعتی تقویت‌شده با انعطاف‌پذیری بالا</li>
  <li>نازل و قطعات مصرفی استاندارد نوع پاناسونیک</li>
  <li>مناسب برای صنایع سنگین، ساخت اسکلت فلزی و پروژه‌های بزرگ صنعتی</li>
</ul>`,

panasonic500_info1:"تورچ MIG پاناسونیک 500",
panasonic500_info2:"توان تا 500 آمپر<br>خنک‌کاری هوا صنعتی<br>سیم جوش 1.0 تا 1.6 میلی‌متر<br>مناسب کار سنگین",
panasonic500_title: "تورچ پاناسونیک MIG 500 هواخنک",
panasonic500_subtitle: "تورچ فوق سنگین با آمپراژ بالا برای پروژه‌های صنعتی بزرگ",
panasonic500_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>جریان نامی تا 500 آمپر در سیکل کاری 60٪</li>
  <li>سیستم هواخنک صنعتی با تحمل حرارتی بالا</li>
  <li>مناسب برای جوشکاری‌های سنگین و مداوم</li>
  <li>پشتیبانی از سیم جوش با قطر 1.0 تا 1.6 میلی‌متر</li>
  <li>دسته ارگونومیک عایق حرارت برای ایمنی اپراتور</li>
  <li>کابل تقویت‌شده با روکش مقاوم در برابر سایش و حرارت</li>
  <li>قطعات مصرفی استاندارد نوع پاناسونیک</li>
  <li>ایده‌آل برای صنایع سنگین، ساخت مخازن، کشتی‌سازی و سازه‌های فولادی</li>
</ul>`,

powder_general_info1:"دستگاه رنگ پودری الکترواستاتیک",
powder_general_info2:"سیستم پاشش الکترواستاتیک<br>پوشش یکنواخت فلز<br>مخزن پودر 45 لیتری",
powder_general_title1: "دستگاه رنگ پودری الکترواستاتیک",
powder_general_subtitle1: "راهکار حرفه‌ای برای ایجاد پوشش مقاوم و بادوام روی قطعات فلزی",
powder_general_details1: `
<ul class="list-disc pl-5 space-y-1">
  <li>استفاده از فناوری الکترواستاتیک برای جذب یکنواخت ذرات پودر به سطح فلزات ارت‌شده</li>
  <li>ایجاد پوشش یکدست حتی بر روی سطوح با اشکال پیچیده</li>
  <li>مجهز به مخزن پودر بزرگ (حدود 45 لیتر) مناسب برای پروژه‌های صنعتی و پرحجم</li>
  <li>شامل تفنگ پاشش پودر، پمپ پنوماتیک، رگولاتورهای تنظیم فشار هوا</li>
  <li>دارای پایه چرخ‌دار جهت جابجایی آسان در محیط کارگاه</li>
  <li>مناسب برای رنگ‌آمیزی مبلمان فلزی، لوازم خانگی و تجهیزات مکانیکی  </li>
</ul>`,

powder_general2_info1:"سیستم رنگ پودری الکترواستاتیک",
powder_general2_info2:"فناوری پاشش الکترواستاتیک<br>پوشش یکنواخت سطوح پیچیده<br>مخزن پودر 55 لیتری<br>پنل کنترل دیجیتال LCD",
powder_general_title2: "سیستم پوشش‌دهی پودری الکترواستاتیک",
powder_general_subtitle2: "راهکار پیشرفته صنعتی برای اعمال یکنواخت و دقیق پوشش پودری",
powder_general_details2: `
      <li>سیستم حرفه‌ای پوشش‌دهی پودری دستی، مهندسی‌شده برای عملکرد مداوم در محیط‌های صنعتی.</li>
      <li>بهره‌گیری از فناوری پاشش الکترواستاتیک جهت ایجاد چسبندگی بالا و پوشش یکنواخت روی سطوح و اشکال پیچیده.</li>
      <li>هاپر روان‌کننده با ظرفیت بالا (تا ۵۵ لیتر) مناسب برای چرخه‌های تولید بدون وقفه.</li>
      <li>پنل کنترل LCD هوشمند با قابلیت تنظیم دیجیتال دقیق ولتاژ، جریان و پارامترهای جریان هوا.</li>
      <li>سیستم بهینه انتقال و روان‌سازی پودر جهت کاهش عیوبی مانند یونیزاسیون معکوس و جرقه‌های ولتاژ بالا.</li>
    `,

powder_industrial_info1:"دستگاه صنعتی رنگ پودری",
powder_industrial_info2:"تکنولوژی پاشش الکترواستاتیک<br>پنل کنترل دیجیتال<br>چسبندگی یکنواخت پودر<br>سیستم چرخ‌دار صنعتی",
powder_industrial_title3: "دستگاه رنگ پودری الکترواستاتیک صنعتی",
powder_industrial_subtitle3: "سیستم قدرتمند برای پوشش محافظتی و تزئینی سطوح فلزی",
powder_industrial_details3: `
<ul class="list-disc pl-5 space-y-1">
  <li>مناسب برای اعمال پوشش‌های محافظتی و تزئینی بر روی قطعات فلزی</li>
  <li>استفاده از فناوری شارژ الکترواستاتیک برای چسبندگی یکنواخت ذرات پودر</li>
  <li>مجهز به پنل کنترل دیجیتال جهت تنظیم ولتاژ و میزان خروجی پودر</li>
  <li>دارای برنامه‌های از پیش تنظیم‌شده برای قطعات تخت یا دارای اشکال پیچیده</li>
  <li>شامل مخزن پودر (تانک)، تفنگ پاشش و یونیت کنترل مرکزی</li>
  <li>دارای شاسی چرخ‌دار برای جابجایی آسان در محیط صنعتی</li>
  <li>توان خروجی ولتاژ بالا برای نفوذ مؤثر در شیارها و گوشه‌های عمیق</li>
</ul>`,

powder_decor_info1:"دستگاه رنگ پودری",
powder_decor_info2:"گان پاشش الکترواستاتیک<br>مخزن صنعتی پودر<br>مناسب خطوط تولید کارخانه",
powder_decor_title4: "دستگاه رنگ پودری الکترواستاتیک",
powder_decor_subtitle4: "سیستم حرفه‌ای برای پوشش تزئینی و محافظتی سطوح فلزی",
powder_decor_details4: `
<ul class="list-disc pl-5 space-y-1">
  <li>طراحی شده برای ایجاد پوشش تزئینی و مقاوم بر روی انواع سطوح فلزی</li>
  <li>استفاده از تفنگ پاشش الکترواستاتیک برای توزیع یکنواخت پودر</li>
  <li>مجهز به مخزن صنعتی مناسب برای تولیدات پرحجم</li>
  <li>دارای واحد کنترل جهت تنظیم ولتاژ خروجی، میزان پودر و سرعت پاشش</li>
  <li>عملکرد پایدار و مناسب برای خطوط تولید کارخانه‌ای</li>
  <li>کاربرد گسترده در پوشش قطعات خودرو، مبلمان فلزی و لوازم خانگی</li>
</ul>`,

wire_info1: "سیم جوش MIG",
wire_info2: "سایزها: 0.8 • 1.0 • 1.2 • 1.6 میلی‌متر<br>مناسب فولاد کربنی<br>قوس نرم با پاشش کم",
wire_title: "سیم جوش MIG روکش مسی",
wire_subtitle: "سیم جوش فولاد نرم با کیفیت بالا برای جوشکاری MIG با قوس پایدار و تمیز",
wire_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>سیم جوش فولاد نرم با روکش مسی مناسب برای جوشکاری MIG/MAG.</li>
  <li>طراحی شده برای ساخت و ساز فولاد کربنی و کاربردهای صنعتی.</li>
  <li>در سایزهای 0.8، 1.0، 1.2 و 1.6 میلی‌متر موجود است.</li>
  <li>ایجاد قوس پایدار و تغذیه روان سیم در حین جوشکاری.</li>
  <li>کاهش پاشش برای جوش تمیزتر و نیاز کمتر به تمیزکاری.</li>
  <li>روکش مسی با رسانایی بالا برای افزایش راندمان جوشکاری.</li>
  <li>مناسب برای کارگاه‌ها، صنایع فلزی، خودرو و ساخت‌وساز.</li>
</ul>
`,
disc_title: "صفحه برش 7 اینچ تورکیت مخصوص فلز و استیل",
disc_subtitle: "صفحه برش حرفه‌ای با سرعت بالا برای برش سریع و دقیق فلز و استیل (INOX)",

disc_info1: "صفحه برش 7 اینچ",
disc_info2: "سایز: 180×1.6×22.23 میلی‌متر<br>حداکثر سرعت: 8500 دور در دقیقه<br>مناسب فلز و استیل",

disc_details: `
<ul class="list-disc pl-5 space-y-1">
  <li>صفحه برش 7 اینچ (180 میلی‌متر) مناسب فلز و استیل (INOX).</li>
  <li>ابعاد: قطر 180 میلی‌متر، ضخامت 1.6 میلی‌متر، سوراخ مرکزی 22.23 میلی‌متر.</li>
  <li>حداکثر سرعت: 80 متر بر ثانیه (8500 دور در دقیقه).</li>
  <li>طراحی شده برای برش سریع، روان و دقیق.</li>
  <li>ضخامت کم برای کاهش پرت متریال و افزایش راندمان برش.</li>
  <li>قابل استفاده با انواع فرزهای استاندارد.</li>
  <li>تولید شده مطابق با استاندارد ایمنی EN12413.</li>
  <li>مناسب برای کارگاه‌ها، فلزکاری و برش استیل.</li>
</ul>
`,

    // color page
 powder_hero_title: "پوشش های صنعتی الکترو استاتیک",
  powder_hero_intro:
    "پوشش‌های پودری ترموست و ترموپلاستیک با عملکرد بالا، طراحی شده برای دوام، مقاومت در برابر خوردگی و ایجاد سطوح با کیفیت ممتاز در کاربردهای صنعتی.",

  powder_type_epoxy: "پوشش‌های اپوکسی",
  powder_type_epoxy_desc: "محافظت عالی در برابر خوردگی",

  powder_type_polyester: "پوشش‌های پلی‌استر",
  powder_type_polyester_desc: "مقاوم در برابر اشعه UV و شرایط جوی",

  powder_type_hybrid: "سیستم‌های هیبریدی",
  powder_type_hybrid_desc: "عملکرد متعادل برای محیط‌های داخلی",

  powder_type_texture: "پوشش‌های بافت‌دار",
  powder_type_texture_desc: "پوشش‌های مدرن و تزئینی"
  }
  };
/* =========================
   LANGUAGE SYSTEM
========================= */
function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");

    if (translations[lang]?.[key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

function updateDirection(lang) {
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  document.documentElement.lang = lang === "fa" ? "fa" : "en";
}

function updateToggle(selectedLang) {
  if (!buttons.length) return;

  buttons.forEach(btn => {
    const active = btn.dataset.lang === selectedLang;

    btn.style.backgroundColor = active ? "#05e3e8" : "transparent";
    btn.style.color = "white";
  });

  currentLang = selectedLang;

  localStorage.setItem("siteLang", selectedLang);

  updateDirection(selectedLang);
  changeLanguage(selectedLang);
}

/* =========================
   SIDEBAR
========================= */
function initSidebar() {
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("mobile-sidebar");
  const closeBtn = document.getElementById("sidebar-close");

  if (hamburger && sidebar) {
    hamburger.addEventListener("click", () => {
      sidebar.classList.remove("-translate-x-full");
    });
  }

  if (closeBtn && sidebar) {
    closeBtn.addEventListener("click", () => {
      sidebar.classList.add("-translate-x-full");
    });
  }
}

/* =========================
   DROPDOWNS
========================= */
function initNavbar() {
  const productsToggle = document.getElementById("products-toggle");
  const submenu = document.getElementById("products-submenu");

  const toolsToggle = document.getElementById("tools-toggle");
  const toolsSubmenu = document.getElementById("tools-submenu");

  if (productsToggle && submenu) {
    productsToggle.addEventListener("click", () => {
      submenu.classList.toggle("max-h-0");
      submenu.classList.toggle("max-h-[500px]");
    });
  }

  if (toolsToggle && toolsSubmenu) {
    toolsToggle.addEventListener("click", () => {
      toolsSubmenu.classList.toggle("max-h-0");
      toolsSubmenu.classList.toggle("max-h-[500px]");
    });
  }
}

/* =========================
   ACTIVE LINK
========================= */
function highlightActivePage() {
  const currentURL = window.location.href;

  document.querySelectorAll("a").forEach(link => {
    if (link.href === currentURL) {
      link.classList.add("text-[#05e3e8]", "font-bold");
    }
  });
}
/* =========================
   NAVBAR SCROLL EFFECT (DARK GLASS)
========================= */
function initNavbarScrollEffect() {
  const navbar = document.getElementById("navbar");

  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add(
        "bg-neutral-900/80",     // 🔥 dark glass
        "backdrop-blur-xl",
        "shadow-[0_8px_30px_rgba(0,0,0,0.8)]",
      );
    } else {
      navbar.classList.remove(
        "bg-neutral-900/80",
        "backdrop-blur-xl",
        "shadow-[0_8px_30px_rgba(0,0,0,0.8)]",
      );
    }
  });
}
/* =========================
   LOAD FOOTER (GLOBAL)
========================= */
function loadFooter() {
  const footerHTML = `

<footer class="py-16 text-gray-300 border-t bg-neutral-900 border-neutral-700">

  <div class="grid grid-cols-1 gap-10 px-6 mx-auto max-w-7xl md:grid-cols-4">

    <!-- Contact Info -->
    <div>
      <h3 class="mb-4 text-xl font-semibold text-white" data-i18n="contact_info">Contact Info</h3>
      <p class="flex items-center gap-2"><i class="fa-solid fa-phone"></i> <span data-i18n="contact_phone">(+93) 797441003</span></p>
      <p class="flex items-center gap-2"><i class="fa-solid fa-envelope"></i> <span data-i18n="contact_email_1">asiakara2010gmail.com</span></p>
      <p class="flex items-center gap-2"><i class="fa-solid fa-envelope"></i> <span data-i18n="contact_email_2">f.rasooli2010@gmail.com</span></p>
      <p class="flex items-center gap-2"><i class="fa-solid fa-location-dot"></i> <span data-i18n="contact_location">Herat, Afghanistan</span></p>
    </div>

    <!-- Working Hours -->
    <div>
      <h3 class="mb-4 text-xl font-semibold text-white" data-i18n="working_hours">Working Hours</h3>
      <p data-i18n="working_days">Saturday – Thursday: 8:00 AM – 6:00 PM</p>
      <p data-i18n="friday">Friday: Closed</p>
    </div>

    <!-- Social Media -->
    <div>
      <h3 class="mt-6 mb-4 text-xl font-semibold text-white" data-i18n="social_media">Social Media</h3>

      <div class="flex gap-4 mt-2">

        <a href="https://www.facebook.com/share/1CSbg9S2V8/" target="_blank"
          class="p-3 rounded-full bg-white/5 backdrop-blur-md text-gray-400 hover:text-[#05e3e8] hover:shadow-[0_0_15px_#05e3e8] transition duration-300 hover:scale-110">
          <i class="fa-brands fa-facebook-f text-xl md:text-2xl leading-none"></i>
        </a>

        <a href="https://www.instagram.com/asiakara.af?igsh=cnI4NDEyZ2owd2cz" target="_blank"
          class="p-3 rounded-full bg-white/5 backdrop-blur-md text-gray-400 hover:text-[#05e3e8] hover:shadow-[0_0_15px_#05e3e8] transition duration-300 hover:scale-110">
          <i class="fa-brands fa-instagram text-xl md:text-2xl leading-none"></i>
        </a>

        <a href="https://t.me/asiakara2010" target="_blank"
          class="p-3 rounded-full bg-white/5 backdrop-blur-md text-gray-400 hover:text-[#05e3e8] hover:shadow-[0_0_15px_#05e3e8] transition duration-300 hover:scale-110">
          <i class="fa-brands fa-telegram text-xl md:text-2xl leading-none"></i>
        </a>

        <a href="https://wa.me/93797441003?text=Hello%20Asia%20Kara" target="_blank"
          class="p-3 rounded-full bg-white/5 backdrop-blur-md text-gray-400 hover:text-[#05e3e8] hover:shadow-[0_0_15px_#05e3e8] transition duration-300 hover:scale-110">
          <i class="fa-brands fa-whatsapp text-xl md:text-2xl leading-none"></i>
        </a>

      </div>

      <!-- Floating WhatsApp -->
      <a href="https://wa.me/93797441003?text=Hello%20Asia%20Kara"
        target="_blank"
        class="fixed z-50 flex items-center justify-center text-white transition bg-green-500 rounded-full shadow-lg bottom-6 right-6 hover:bg-green-600 w-14 h-14">
        <i class="text-2xl fa-brands fa-whatsapp"></i>
      </a>
    </div>

    <!-- Customer Support -->
    <div>
      <h3 class="mb-4 text-xl font-semibold text-white" data-i18n="customer_support">Customer Support</h3>
      <ul class="space-y-2">
        <li><a href="Warranty Support.html" class="hover:text-[#05e3e8]" data-i18n="warranty_support">Warranty Support</a></li>
        <li><a href="Return Policy.html" class="hover:text-[#05e3e8]" data-i18n="return_policy">Return Policy</a></li>
        <li><a href="Technical Assistance.html" class="hover:text-[#05e3e8]" data-i18n="technical_assistance">Technical Assistance</a></li>
      </ul>
    </div>

  </div>

  <!-- Bottom -->
  <div class="pt-6 mt-12 text-center border-t border-neutral-700">
    <p class="text-lg font-medium mb-2 text-[#05e3e8]" data-i18n="slogan">“Precision Tools for a Stronger Tomorrow.”</p>
    <p class="text-sm text-gray-400" data-i18n="powered_by">Powered by <span class="text-[#05e3e8]">Asia Kara Web Team</span></p>
    <p class="mt-3 text-sm text-gray-500" data-i18n="copyright">© 2026 Asia Kara Industrial Tools. All Rights Reserved.</p>
  </div>

</footer>
`;

  document.getElementById("footer-container").innerHTML = footerHTML;
}
/* =========================
   INIT
========================= */
document.addEventListener("DOMContentLoaded", () => {
  loadNavbar();
  loadFooter(); // ✅ ADD THIS

  initNavbar();
  initSidebar();
  initNavbarScrollEffect(); // ✅ ADD THIS

  const toggle = document.getElementById("lang-toggle");

  if (!toggle) return;

  buttons = toggle.querySelectorAll("button");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => updateToggle(btn.dataset.lang));
  });

  const savedLang = localStorage.getItem("siteLang") || "en";

  setTimeout(() => {
    updateToggle(savedLang);
  }, 0);

  highlightActivePage();
});
// let currentLang = "en"; // or "fa"
// currentLang = "fa";
// changeLanguage(currentLang);

 // language toggle new
//   const toggle = document.getElementById("lang-toggle");
// const buttons = toggle.querySelectorAll("button");

// function updateToggle(selectedLang) {
//   // Update active/inactive styles
//   buttons.forEach(btn => {
//     if(btn.dataset.lang === selectedLang){
//       btn.style.backgroundColor = "#05e3e8"; // active pill
//       btn.style.color = "white";
//     } else {
//       btn.style.backgroundColor = "transparent"; // inactive
//       btn.style.color = "white";
//     }
//   });
//   document.documentElement.dir = selectedLang === "fa" ? "rtl" : "ltr";
//   localStorage.setItem("siteLang", selectedLang);
//   if (typeof changeLanguage === "function") changeLanguage(selectedLang);
// }
// buttons.forEach(btn => btn.addEventListener("click", () => updateToggle(btn.dataset.lang)));
// const savedLang = localStorage.getItem("siteLang") || "fa"; // FA default
// language toggle new finish


document.addEventListener("DOMContentLoaded", () => {
  const hero = document.getElementById("services-hero");
  const glow = document.getElementById("mouse-glow");

  // ✅ Stop immediately if section does not exist
  if (!hero || !glow) return;

  const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (isDesktop) {
    // 🖱 DESKTOP
    hero.addEventListener("mousemove", (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      glow.style.left = `${x - 200}px`;
      glow.style.top = `${y - 200}px`;
      glow.style.opacity = "1";
    });

    hero.addEventListener("mouseleave", () => {
      glow.style.opacity = "0";
    });

  } else {
    // 📱 MOBILE
    glow.style.opacity = "1";

    let centerX = hero.offsetWidth / 2;
    let centerY = hero.offsetHeight / 2;

    function animateGlow() {
      const time = Date.now() * 0.001;

      const floatX = Math.sin(time) * 100;
      const floatY = Math.cos(time * 0.8) * 80;

      glow.style.left = `${centerX + floatX - 200}px`;
      glow.style.top = `${centerY + floatY - 200}px`;

      requestAnimationFrame(animateGlow);
    }

    animateGlow();
  }
});

// image slider
 document.addEventListener("DOMContentLoaded", function () {

  const sliders = document.querySelectorAll(".premium-slider");

  sliders.forEach(slider => {

    const slides = slider.querySelector(".slides");
    const images = slides.children;
    const nextBtn = slider.querySelector(".nextBtn");
    const prevBtn = slider.querySelector(".prevBtn");
    const indicatorsContainer = slider.querySelector(".indicators");

    let currentIndex = 0;
    let autoSlideInterval;
    let startX = 0;
    let isDragging = false;

    // Create indicators dynamically
    for (let i = 0; i < images.length; i++) {
      const dot = document.createElement("span");
      dot.className = "w-3 h-3 rounded-full bg-white/50 cursor-pointer transition-all duration-300";
      indicatorsContainer.appendChild(dot);
    }

    const indicators = indicatorsContainer.querySelectorAll("span");

    function updateSlider() {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;

      indicators.forEach(dot => {
        dot.classList.remove("bg-black", "scale-125");
        dot.classList.add("bg-white/50");
      });

      indicators[currentIndex].classList.remove("bg-white/50");
      indicators[currentIndex].classList.add("bg-black", "scale-125");
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % images.length;
      updateSlider();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateSlider();
    }

    function startAutoSlide() {
      autoSlideInterval = setInterval(nextSlide, 4000);
    }

    function stopAutoSlide() {
      clearInterval(autoSlideInterval);
    }

    // Buttons
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    // Indicators click
    indicators.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlider();
      });
    });

    // Pause on hover
    slider.addEventListener("mouseenter", stopAutoSlide);
    slider.addEventListener("mouseleave", startAutoSlide);

    // Swipe Support (Mobile + Touch)
    slides.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    });

    slides.addEventListener("touchmove", (e) => {
      if (!isDragging) return;
      let diff = e.touches[0].clientX - startX;

      if (diff > 50) {
        prevSlide();
        isDragging = false;
      }

      if (diff < -50) {
        nextSlide();
        isDragging = false;
      }
    });

    slides.addEventListener("touchend", () => {
      isDragging = false;
    });

    // Initialize
    updateSlider();
    startAutoSlide();

  });

});

// fade in on scroll
document.addEventListener("DOMContentLoaded", function () {

  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, {
    threshold: 0.15
  });

  reveals.forEach(el => observer.observe(el));

});
 

// contactform
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contact-form");

  if (!form) return;

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const data = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      document.getElementById("contact-content").style.display = "none";
      document.getElementById("success-message").classList.remove("hidden");
    } else {
      alert("Something went wrong. Please try again.");
    }
  });

});
// contact form finish
// torch page start

document.addEventListener("DOMContentLoaded", function () {

  let currentLang = "en"; // default language

  const langEnBtn = document.getElementById("en");
  const langFaBtn = document.getElementById("fa");

  // Make sure buttons exist before adding listeners
  if (langEnBtn) {
    langEnBtn.addEventListener("click", () => {
      currentLang = "en";
      if (typeof updateTranslations === "function") {
        updateTranslations(currentLang);
      }
    });
  }

  if (langFaBtn) {
    langFaBtn.addEventListener("click", () => {
      currentLang = "fa";
      if (typeof updateTranslations === "function") {
        updateTranslations(currentLang);
      }
    });
  }

  // 👇 YOUR EXISTING CARD CODE
  const cards = document.querySelectorAll(".card");
  const cardsContainer = document.getElementById("cards-container");

  const productView = document.getElementById("product-view");
  const titleEl = document.getElementById("product-title");
  const subtitleEl = document.getElementById("product-subtitle");
  const detailsEl = document.getElementById("product-details");
  const imageEl = document.getElementById("product-image");
  const backBtn = document.getElementById("back-btn");

  const productImages = {
    mb25: "torchMIG.jpeg",
    mb15: "torch tig.jpeg",
    panasonic: "torch plasma.jpeg",
    panasonic500: "torch gun.jpeg",
    wm1:"tool1.jpeg",
    wm2:"tool2.jpeg",
    wm3:"tool3.jpeg",
    wm4:"tool4.jpeg",
    wm5:"tool5.jpeg",
    wm6:"tool6.jpeg",
    spot:"spot1.jpg",
    disc:"disc1.jpg",

drill:"D1.jpeg",
    kd56:"charging tools 1.jpeg",
    s1m:"charging tools 5.jpeg",
    s1m19:"charging tools 6.jpeg",
    s1m71:"charging tools 7.jpeg",
    s1m78:"charging tools 9.jpeg",
kd28:"chargng tools 8.jpeg",
kd107:"charging tools 11.jpeg",
kd35:"charging tools 12.jpeg",
kd34:"charging tools 13.jpeg",
kd09:"cahrging tools 14.jpeg",
kd64:"charging tools 15.jpeg",
kd17:"charging tools 16.jpeg",
kd50:"charging tools 17.jpeg",
kd75_110:"charging tools 18.jpeg",
kd76:"charging tools 19.jpeg",
m1b_kd48_82:"charging tools 20.jpeg",
s1j_kd42_25:"charging tools 21.jpeg",
q1b_kd14_600p:"charging tools 22.jpeg",
m1q_kd20_65a:"charging tools 23.jpeg",
m1q_kd20_65:"charging tools 24.jpeg",

    mask:"toolz1.jpeg",
    helmet:"toolaccessory2.jpeg",
    gloves:"toolaccessory3.jpeg",
    apron:"toolaccessory8.jpeg",
    powder_general:"powdercoatingmachine1.jpeg",
    powder_general2:"powdercoatingmachine2.jpeg",
    powder_industrial3:"powdercoatingmachine3.jpeg",
    powder_decor:"powdercoatingmachine4.jpeg",
    wire:"welding wire 1.jpeg",
    };

  cards.forEach(card => {
    card.addEventListener("click", function (e) {
      e.preventDefault();

      const key = this.dataset.product;
      if (!key) return;

      imageEl.src = productImages[key];

      titleEl.setAttribute("data-i18n", key + "_title");
      subtitleEl.setAttribute("data-i18n", key + "_subtitle");
      detailsEl.setAttribute("data-i18n", key + "_details");

   setTimeout(() => {
  updateToggle("en");
}, 0);

      cardsContainer.classList.add("hidden");
      productView.classList.remove("hidden");

      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });


  backBtn.addEventListener("click", function () {
    productView.classList.add("hidden");
    cardsContainer.classList.remove("hidden");
  });

});

// torch page finish
// footer