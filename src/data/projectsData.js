import gg from '../assets/beneshty.png'
import pm from '../assets/pm.png'
import shein from '../assets/shein.png'
import etruk from '../assets/etruk.png'
import cash from '../assets/cash.png'
import dash from '../assets/dash.png'
import shipdash from '../assets/DASH2.PNG'
import stock from '../assets/stock.png'
import adminpanel from '../assets/Untitled design.png'
import lasscar from '../assets/lasscar.png'

export const projects = [
  {
    id: 1,
    title: "BeNeshty",
    description:
      "A full-featured eCommerce platform for fashion and clothing products, providing customers with a seamless shopping experience and administrators with a powerful management dashboard.",
    longDescription: `
Developed a complete eCommerce ecosystem consisting of a customer-facing online store and a comprehensive administration dashboard.

The platform enables customers to browse products, search and filter items, manage shopping carts, place orders, and complete secure checkout processes while supporting multiple languages and responsive experiences across all devices.

The administration dashboard provides centralized management for products, categories, banners, colors, sizes, orders, users, content management, customer communication, and system settings.

Key contributions:
• Built a scalable and responsive eCommerce platform using Next.js and TypeScript.
• Implemented multilingual support with full Arabic and English localization.
• Developed advanced product search, filtering, and sorting functionalities.
• Created dynamic product detail pages with SEO optimization.
• Integrated secure authentication and user account management.
• Implemented shopping cart, wishlist, and checkout workflows.
• Developed order management and order tracking systems.
• Built a comprehensive Admin Dashboard for managing products, categories, banners, colors, and sizes.
• Implemented Role-Based Access Control (RBAC) for dashboard users.
• Integrated real-time customer support chat using Firebase.
• Developed content management modules for policies, terms, and website content.
• Optimized application performance through server-side rendering, image optimization, and efficient data fetching.

Main Modules:
Online Store, Product Catalog, Search & Filtering, Shopping Cart, Checkout & Payments, Authentication, Order Management, Wishlist, Customer Accounts, Categories Management, Products Management, Banners Management, Colors & Sizes Management, Customer Support Chat, Content Management, User Roles & Permissions, Policies & Settings.
`,
    image: gg,
    category: "E-Commerce",
    url: "https://beneshty.com/",
    role: "Frontend Developer",
    year: "2024",
    techStack: [
      { label: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
      { label: "State Management", items: ["Redux Toolkit", "Context API"] },
      { label: "Internationalization", items: ["next-i18next", "i18n"] },
      { label: "Authentication", items: ["NextAuth"] },
      { label: "Real-Time", items: ["Firebase"] },
      { label: "E-Commerce Features", items: ["Search", "Filtering", "Wishlist", "Cart", "Checkout", "Payment Integration"] },
    ],
    highlights: [
      "Complete E-Commerce Platform",
      "Admin Dashboard Management",
      "Role-Based Access Control (RBAC)",
      "Real-Time Customer Chat",
      "Advanced Search & Filtering",
      "Multilingual Support (Arabic & English)",
      "Responsive Mobile-First Design",
      "SEO Optimized Pages",
    ],
    media: [
      { type: 'image', src: gg, alt: 'BeNeshty Store Homepage' },
    ],
  },

  {
    id: 2,
    title: "LassCar",
    description:
      "A comprehensive transportation management platform that enables administrators to manage drivers, companies, vehicles, trips, bookings, subscriptions, and live operations through a centralized dashboard.",
    longDescription: `
Developed a large-scale transportation management dashboard designed to streamline and centralize operations across multiple transportation services.

The platform provides a complete administration environment for managing transportation companies, drivers, customers, subscriptions, bookings, vehicles, airport transportation, heavy transport services, reports, support tickets, live tracking, and system configurations.

Key contributions:
• Built a scalable and responsive Admin Dashboard using React, TypeScript, and Vite.
• Implemented Role-Based Access Control (RBAC) with dynamic permissions and administrative roles.
• Developed advanced analytics dashboards with KPIs, charts, and reporting tools.
• Built multilingual interfaces with full Arabic and English support.
• Integrated real-time communication and notifications using Socket.IO.
• Developed complex dynamic forms with advanced validation workflows.
• Implemented Google Maps and Leaflet integrations for live tracking, route visualization, and service zone management.
• Built QR code generation and validation workflows for transportation and booking management.
• Developed customer support, complaints, and real-time chat systems.
• Implemented subscription plans, billing management, and coupon systems.
• Created reporting modules with PDF and CSV export capabilities.

Main Modules:
Dashboard & Analytics, Role & Permission Management, Admin Management, Company Management, Driver Management, Customer Management, Vehicle & Fleet Management, Airport Management, Equipment & Material Types, Subscription Plans, Discount Coupons, Support Center, Real-Time Chat, Trip Tracking, Reports & System Settings.
`,
    image: lasscar,
    category: "Transportation Management",
    url: "",
    role: "Frontend Developer",
    year: "2026",
    techStack: [
      {
        label: "Frontend",
        items: ["React", "TypeScript", "Vite", "React Router", "Redux Toolkit", "React Hook Form", "Zod", "Tailwind CSS", "Mantine UI", "CSS Modules"],
      },
      { label: "Maps & Geolocation", items: ["Google Maps API", "Leaflet", "@vis.gl/react-google-maps"] },
      { label: "Real-Time", items: ["Socket.IO", "WebSockets"] },
      { label: "Data Visualization", items: ["ApexCharts", "React ApexCharts"] },
      { label: "Internationalization", items: ["i18next", "react-i18next"] },
      { label: "Documents & Reports", items: ["PDFMake", "jsPDF"] },
      { label: "Editors & UI", items: ["TipTap", "Framer Motion", "Swiper", "React Icons"] },
    ],
    highlights: [
      "Role-Based Access Control (RBAC)",
      "Real-Time GPS Trip Tracking",
      "Subscription & Billing Management",
      "QR Code Booking Validation",
      "Interactive Maps & Polygon Zones",
      "Advanced Analytics & Reporting",
      "Multi-language Support (Arabic & English)",
      "Real-Time Chat & Notifications",
    ],
    media: [{
        type: 'video',
        embedUrl: 'https://drive.google.com/file/d/1zBFIid1X_dkFiO-y4MqD7XzzRGWzIErC/preview',
        poster: lasscar,
        alt: 'LassCar Platform Demo Video',
      },
      { type: 'image', src: lasscar, alt: 'LassCar Dashboard Overview' },
      
    ],
  },

  {
    id: 3,
    title: "Shein Stuff",
    description: "A trendy fashion destination offering a wide range of imported Shein apparel for women.",
    longDescription: "From casual wear to chic dresses, Shein Stuff brings the latest fashion trends at affordable prices.",
    image: shein,
    category: "E-commerce",
    url: "https://sheinstuff.com/",
    role: "Frontend Developer",
    year: "2024",
    techStack: [{ label: "Frontend", items: ["React", "Tailwind CSS"] }],
    highlights: ["Wide product catalog", "Affordable pricing display", "Fully responsive design"],
    media: [{ type: 'image', src: shein, alt: 'Shein Stuff homepage' }],
  },

  {
    id: 4,
    title: "Etruk Athar",
    description: "A platform dedicated to making a positive impact by connecting individuals with charitable causes.",
    longDescription: "Connects users with poverty alleviation initiatives and volunteering opportunities. We aim to empower communities through meaningful action.",
    image: etruk,
    category: "Charities",
    url: "https://drive.google.com/file/d/15Galft6_yVIlKigYJl3d41i2g8G_jbYs/view?usp=drive_link",
    role: "Frontend Developer",
    year: "2024",
    techStack: [{ label: "Frontend", items: ["React", "CSS Modules"] }],
    highlights: ["Charity cause discovery", "Volunteering opportunity listings", "Community-focused design"],
    media: [{ type: 'image', src: etruk, alt: 'Etruk Athar homepage' }],
  },

  {
    id: 5,
    title: "Trauxit Cash",
    description: "Providing businesses and individuals with reliable, fast, and secure methods for digital and physical payments.",
    longDescription: "With a focus on advanced security measures, we ensure your transactions are safe and seamless.",
    image: cash,
    category: "Payment",
    url: "https://cash-kohl.vercel.app/",
    role: "Frontend Developer",
    year: "2024",
    techStack: [
      { label: "Frontend", items: ["React", "TypeScript"] },
      { label: "Integrations", items: ["Payment APIs", "Security"] },
    ],
    highlights: ["Secure payment processing", "Fast transaction handling", "Responsive across all devices"],
    media: [{ type: 'image', src: cash, alt: 'Trauxit Cash homepage' }],
  },

  {
    id: 6,
    title: "Genuis System Admin Panel",
    description:
      "A comprehensive eCommerce administration dashboard designed to manage products, categories, customer orders, banners, notifications, customer communication, and user permissions from a centralized interface.",
    longDescription: `
Developed a complete administration dashboard for managing eCommerce operations and customer interactions.

The platform enables administrators to manage products, categories, orders, banners, notifications, customer accounts, and customer support conversations through a unified control panel.

Key contributions:
• Built a responsive and scalable Admin Dashboard using React and TypeScript.
• Implemented Role-Based Access Control (RBAC) with customizable user permissions.
• Developed product and category management modules with full CRUD functionality.
• Built an order management system allowing administrators to create orders, update statuses, track order progress, and print order details.
• Implemented real-time customer support chat with dedicated conversations for each customer.
• Developed notification management and announcement systems.
• Created banner management tools for homepage and promotional content.
• Implemented customer management features and order history tracking.

Main Modules:
Dashboard Analytics, Product Management, Category Management, Order Management, Order Status Tracking, Order Printing, Customer Management, Real-Time Customer Chat, Banner Management, Notifications Management, User Roles & Permissions, System Settings.
`,
    image: adminpanel,
    category: "E-Commerce Administration",
    url: "https://drive.google.com/file/d/1sq6ipTFRiPMdjfPXCOSwb2NBqttVc62k/view?usp=sharing",
    role: "Frontend Developer",
    year: "2024",
    techStack: [
      { label: "Frontend", items: ["React", "TypeScript", "Redux", "React Router", "CSS Modules"] },
      { label: "State Management", items: ["Redux Toolkit"] },
      { label: "Real-Time", items: ["Firebase", "WebSockets"] },
      { label: "Administration Features", items: ["RBAC", "Order Management", "Order Printing", "Notifications", "Banner Management"] },
    ],
    highlights: [
      "Role-Based Access Control (RBAC)",
      "Real-Time Customer Support Chat",
      "Order Creation & Status Management",
      "Order Printing System",
      "Product & Category Management",
      "Banner & Notification Management",
      "Customer Management",
      "Responsive Admin Dashboard",
    ],
    media: [{ type: 'image', src: adminpanel, alt: 'Genuis System Admin Dashboard' }],
  },

  {
    id: 7,
    title: "Trauxit Dashboard",
    description: "Developed and maintained a Dashboard with reusable components and responsive layout.",
    longDescription: "Users can share posts, chat with others, create shipment details, and view logistics information.",
    image: dash,
    category: "Dashboard",
    url: "https://drive.google.com/file/d/12cThw0IeWOwk1d79465zPAvFMKdgRFnu/view",
    role: "Frontend Developer",
    year: "2024",
    techStack: [
      { label: "Frontend", items: ["React", "CSS Modules"] },
      { label: "Features", items: ["Real-time Chat", "Shipment Tracking"] },
    ],
    highlights: ["Reusable component architecture", "Social post sharing", "Shipment creation and tracking", "Responsive layout"],
    media: [{ type: 'image', src: dash, alt: 'Trauxit Dashboard' }],
  },

  {
    id: 8,
    title: "Shipments Dashboard",
    description: "Built a logistics dashboard using React.js, TomTom Maps, and Chart.js.",
    longDescription: "Developed features to create shipments, track package routes on interactive maps, and visualize revenue and distance data with charts.",
    image: shipdash,
    category: "Dashboard",
    url: "https://drive.google.com/file/d/1W6H_HTAAZADHQZQL5mZHsZWa2yPTXgP2/view?usp=sharing",
    role: "Frontend Developer",
    year: "2024",
    techStack: [
      { label: "Frontend", items: ["React.js", "Chart.js"] },
      { label: "Maps", items: ["TomTom Maps API"] },
    ],
    highlights: ["Interactive shipment route maps", "Revenue & distance charts", "Shipment creation flow", "Real-time tracking visualization"],
    media: [{ type: 'image', src: shipdash, alt: 'Shipments Dashboard' }],
  },

  {
    id: 9,
    title: "Stock Dashboard",
    description: "Built a stock management dashboard to track available stock and identify out-of-stock items.",
    longDescription: "Included options to assign products to people and print receipts without calculating salary, plus revenue charts to monitor sales performance.",
    image: stock,
    category: "Dashboard",
    url: "https://drive.google.com/file/d/1W6H_HTAAZADHQZQL5mZHsZWa2yPTXgP2/view?usp=sharing",
    role: "Frontend Developer",
    year: "2024",
    techStack: [
      { label: "Frontend", items: ["React", "Chart.js"] },
      { label: "Features", items: ["Stock Tracking", "Receipt Printing", "Revenue Charts"] },
    ],
    highlights: ["Real-time stock level tracking", "Out-of-stock alerts", "Product assignment system", "Revenue monitoring charts"],
    media: [{ type: 'image', src: stock, alt: 'Stock Dashboard' }],
  },
]