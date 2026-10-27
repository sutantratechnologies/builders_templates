export interface ContactInfo {
  phone: string;
  phoneDisplay: string;
  tollFree?: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  tenderEmail: string;
  address: {
    street: string;
    city: string;
    province: string;
    country: string;
    postalCode: string;
    branchOffices: string[];
  };
  googleMapsEmbedUrl: string;
  workingHours: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
  iconName: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  deliverables: string[];
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "Completed" | "Ongoing";
  sector: "Commercial" | "Residential" | "Institutional" | "Infrastructure";
  location: string;
  client: string;
  scope: string;
  completionYear: string;
  image: string;
  featured?: boolean;
}

export interface MachineryItem {
  id: string;
  name: string;
  type: string;
  quantity: string;
  capacity: string;
  status: "Operational" | "On-Site" | "Standby";
}

export interface ValueItem {
  title: string;
  description: string;
  complianceStandard: string;
  icon: string;
}

export interface ClientPartner {
  name: string;
  shortName: string;
  category: "Government Agency" | "Commercial Enterprise" | "International Donor";
  logoPlaceholder: string;
}

export interface SiteConfig {
  companyName: string;
  tagline: string;
  shortDescription: string;
  establishedYear: number;
  registrationNumber: string;
  vatPanNumber: string;
  contractorClassification: string; // e.g. "Class 'A' Construction Company"
  licenseAuthority: string;
  theme: {
    primaryColor: string;
    primaryAccent: string;
    secondaryAccent: string;
    darkBackground: string;
    slateSurface: string;
    concreteLight: string;
  };
  contact: ContactInfo;
  stats: StatItem[];
  services: ServiceItem[];
  projects: ProjectItem[];
  equipment: MachineryItem[];
  safetyAndValues: ValueItem[];
  managingDirector: {
    name: string;
    title: string;
    credentials: string;
    message: string;
    signatureText: string;
    image: string;
  };
  partners: ClientPartner[];
  socialLinks: {
    facebook: string;
    linkedin: string;
    twitter: string;
    youtube: string;
  };
}

export const siteConfig: SiteConfig = {
  companyName: "Lumbini Builders Pvt. Ltd.",
  tagline: "Engineering National Landmarks with Uncompromising Precision",
  shortDescription:
    "Leading Class 'A' Government-Certified Construction and Heavy Infrastructure Contractor in Nepal, specializing in commercial towers, highway networks, institutional complexes, and seismic-resilient civil engineering.",
  establishedYear: 2004,
  registrationNumber: "Govt. Regd. No. 42819/060/061",
  vatPanNumber: "PAN / VAT: 301982741",
  contractorClassification: "Class 'A' General Contractor (Govt. of Nepal / DoLIDAR)",
  licenseAuthority: "Ministry of Physical Infrastructure and Transport, Nepal",
  theme: {
    primaryColor: "#0f172a", // Deep Slate/Black
    primaryAccent: "#e2181d", // Official Lumbini Brand Red
    secondaryAccent: "#c41418", // Deep Red Hover
    darkBackground: "#090d16",
    slateSurface: "#f1f5f9",
    concreteLight: "#f8fafc",
  },
  contact: {
    phone: "+9779857024882",
    phoneDisplay: "+977 98570-24882 / 071-540192",
    tollFree: "1660-71-54000",
    whatsapp: "9779857024882",
    whatsappDisplay: "+977 98570-24882",
    email: "info@lumbinibuilders.com.np",
    tenderEmail: "tenders@lumbinibuilders.com.np",
    address: {
      street: "Lumbini Commercial Avenue, Ward No. 8",
      city: "Butwal - Bhairahawa Corridor",
      province: "Lumbini Province",
      country: "Nepal",
      postalCode: "32907",
      branchOffices: [
        "Kathmandu Corporate Liaison: Tinkune, Kathmandu (+977 01-4498210)",
        "Bhairahawa Transit & Heavy Depot: Belahiya Logistics Hub (+977 071-520412)",
      ],
    },
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113098.80436893644!2d83.39868725965415!3d27.643324622156847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996864275d60161%3A0xf303259d8795861e!2sButwal%2C%20Nepal!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp",
    workingHours: "Sunday – Friday: 8:00 AM – 6:00 PM (Emergency Engineering Services: 24/7)",
  },
  stats: [
    {
      id: "experience",
      value: "22+",
      label: "Years of Excellence",
      description: "Delivering nationwide heavy civil and commercial infrastructure since 2004",
      iconName: "Calendar",
    },
    {
      id: "projects",
      value: "140+",
      label: "Projects Completed",
      description: "Across Lumbini, Bagmati, and Gandaki provinces with zero structural defects",
      iconName: "Building2",
    },
    {
      id: "team",
      value: "350+",
      label: "Engineers & Workforce",
      description: "Permanent structural engineers, site supervisors, and certified technicians",
      iconName: "Users2",
    },
    {
      id: "machinery",
      value: "85+",
      label: "Heavy Equipment Fleet",
      description: "Company-owned excavators, transit mixers, batching plants, and tower cranes",
      iconName: "Tractor",
    },
  ],
  services: [
    {
      id: "civil-infrastructure",
      title: "Heavy Civil & Infrastructure Works",
      shortDescription:
        "Execution of high-load arterial highways, pre-stressed concrete bridges, and deep-foundation retaining systems.",
      fullDescription:
        "Lumbini Builders holds extensive Class 'A' expertise in government and municipal infrastructure projects. We undertake major arterial road expansion, drainage storm-water corridors, culverts, and structural river-bank protection using heavy machinery fleets.",
      icon: "HardHat",
      features: [
        "Pre-stressed Concrete Bridges & Flyovers",
        "Arterial Asphalt & Concrete Roadways",
        "Deep Pile Foundation & Seismic Retaining Walls",
        "Municipal Stormwater & Sewerage Networks",
      ],
      deliverables: [
        "Full NBC 206 & IRC Code Compliance",
        "Third-party soil and concrete laboratory testing",
        "Drone-assisted topographical contour mapping",
      ],
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "commercial-complexes",
      title: "Commercial Complexes & High-Rise Towers",
      shortDescription:
        "Turnkey general contracting for multi-story corporate towers, shopping malls, and trade centers.",
      fullDescription:
        "From sub-grade multi-level basements with diaphragm walls to high-finish glass-curtain facades, we deliver landmark commercial developments designed for maximum leasable space, high foot-traffic durability, and complete MEP integration.",
      icon: "Building2",
      features: [
        "Multi-story Reinforced Concrete Framing",
        "Double & Triple Basement Excavations",
        "Integrated Firefighting, HVAC & MEP Systems",
        "Modern Composite Aluminum & Curtain Wall Facades",
      ],
      deliverables: [
        "Fast-track scheduling with Primavera P6",
        "Acoustic & Thermal insulation engineering",
        "Seismic Zone V structural damping",
      ],
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "3d-architectural-design",
      title: "3D Architectural Design & BIM Modeling",
      shortDescription:
        "Precision structural modeling, BIM clash detection, and photorealistic 3D visualization before ground-breaking.",
      fullDescription:
        "Our in-house design studio bridges client architectural visions with rigorous structural feasibility. We leverage Building Information Modeling (BIM) to identify plumbing, electrical, and structural conflicts before steel is tied on site.",
      icon: "Compass",
      features: [
        "Revit BIM Level 2 Coordination",
        "Photorealistic 3D Renderings & VR Walkthroughs",
        "ETABS & SAP2000 Seismic Structural Modeling",
        "Detailed BOQ (Bill of Quantities) Generation",
      ],
      deliverables: [
        "Permit-ready municipal approval drawings",
        "Energy efficiency and daylight analysis reports",
        "Comprehensive structural calculation dossiers",
      ],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "institutional-medical",
      title: "Institutional & Medical Facilities",
      shortDescription:
        "Specialized construction for universities, hospitals, research centers, and government administrative headquarters.",
      fullDescription:
        "Healthcare and educational facilities demand stringent hygiene protocols, vibration-resistant imaging rooms, reliable backup power distribution, and barrier-free universal access. We build to international healthcare facility standards.",
      icon: "Landmark",
      features: [
        "Hospital O.T. & ICU Cleanroom Construction",
        "University Lecture Theatres & High-bay Laboratories",
        "Municipal & Government Administrative Secretariats",
        "Medical Gas Piping & Heavy Diagnostic Shielding",
      ],
      deliverables: [
        "ISO Cleanroom validation support",
        "Redundant emergency utility provisions",
        "Acoustic control meeting hospital acoustic codes",
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "industrial-warehousing",
      title: "Industrial Plants & Pre-Engineered Warehouses",
      shortDescription:
        "Heavy PEB steel structures, manufacturing shop floors, logistics hubs, and cold-storage complexes.",
      fullDescription:
        "We construct clear-span pre-engineered steel buildings (PEB) engineered for heavy overhead cranes, chemical-resistant epoxy floors, heavy container yard pavements, and rapid assembly timelines.",
      icon: "Factory",
      features: [
        "High-tonnage Pre-Engineered Steel Frames (PEB)",
        "Laser-screed High Tolerance Industrial Floors",
        "Overhead Gantry Crane Rail Installations",
        "Thermal Cold Storage Insulated Enclosures",
      ],
      deliverables: [
        "Floor flatness certifications (FM2 / FM3)",
        "Rapid 90-day erection schedules",
        "Industrial drainage and effluent containment",
      ],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "turnkey-retrofitting",
      title: "Seismic Retrofitting & Structural Strengthening",
      shortDescription:
        "Seismic retrofitting of heritage and existing RCC structures using carbon fiber (CFRP), jacketing, and shear walls.",
      fullDescription:
        "In compliance with post-earthquake safety guidelines in Nepal, we strengthen existing residential, commercial, and heritage structures through micro-piling, RCC column jacketing, and advanced fiber-reinforced polymer wraps.",
      icon: "ShieldCheck",
      features: [
        "CFRP (Carbon Fiber Reinforced Polymer) Wrapping",
        "RCC Column and Beam Section Jacketing",
        "Base Isolation & Steel Bracing Installations",
        "Non-Destructive Concrete Testing (Rebound Hammer & Ultrasonic)",
      ],
      deliverables: [
        "Pre- and post-retrofit structural stability certificates",
        "Core sampling compressive strength reports",
        "Warranty on composite retrofitting materials",
      ],
      image: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?q=80&w=1200&auto=format&fit=crop",
    },
  ],
  projects: [
    {
      id: "horizon-commercial-mall",
      title: "Horizon Commercial Mall & Corporate Center",
      category: "Completed",
      sector: "Commercial",
      location: "Bhairahawa-Butwal Corridor, Lumbini Province",
      client: "Horizon Commercial Group Pvt. Ltd.",
      scope: "Turnkey G+8 Multi-tenant shopping center with double basement parking, central escalators, and glass curtain wall",
      completionYear: "2024",
      image: "/commercial_tower.jpg",
      featured: true,
    },
    {
      id: "lumbini-medical-annex",
      title: "Lumbini Specialized Surgical Annex",
      category: "Completed",
      sector: "Institutional",
      location: "Manigram, Tilottama Municipality",
      client: "Universal Medical Foundation",
      scope: "250-bed modern medical wing with 6 laminar-flow operation suites, ICU, and oxygen generation plant",
      completionYear: "2023",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
      featured: true,
    },
    {
      id: "butwal-expressway-bridge",
      title: "Tinau River Multi-Span Pre-stressed Bridge",
      category: "Completed",
      sector: "Infrastructure",
      location: "Tinau River, Butwal Bypass",
      client: "Department of Roads (DoR), Govt. of Nepal",
      scope: "220-meter pre-stressed girder bridge with deep well foundations and seismic arrester bearings",
      completionYear: "2023",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=1200&auto=format&fit=crop",
      featured: true,
    },
    {
      id: "shikhar-logistics-park",
      title: "Shikhar Agro-Industrial Logistics Park",
      category: "Ongoing",
      sector: "Commercial",
      location: "Belahiya Trade Corridor, Bhairahawa",
      client: "Shikhar Trans-Himalayan Freight Consortium",
      scope: "120,000 sq.ft. PEB clear-span customs warehouse with 16 automated loading docks and cold chain storage",
      completionYear: "2026 (Target Q4)",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
      featured: true,
    },
    {
      id: "zenith-residency-tower",
      title: "Zenith Heights Luxury Gated Residences",
      category: "Ongoing",
      sector: "Residential",
      location: "Golpark Hillside, Butwal",
      client: "Zenith Real Estate Ventures",
      scope: "G+14 twin residential towers featuring earthquake-resilient dual shear core system and rooftop clubhouse",
      completionYear: "2026 (Target Q3)",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
      featured: true,
    },
    {
      id: "tinkune-corporate-hub",
      title: "Kathmandu Central Corporate Chambers",
      category: "Completed",
      sector: "Commercial",
      location: "Tinkune, Kathmandu Ring Road",
      client: "Himalayan Financial Enterprises",
      scope: "State-of-the-art corporate headquarters with acoustic glass envelope, solar photovoltaic canopy, and automated parking",
      completionYear: "2022",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
      featured: false,
    },
    {
      id: "tilottama-educational-campus",
      title: "Lumbini Institute of Technology Campus",
      category: "Completed",
      sector: "Institutional",
      location: "Tilottama, Rupandehi",
      client: "Lumbini Academic Trust",
      scope: "Integrated 4-block university campus with 800-seat auditorium, computer engineering pavilions, and student dormitories",
      completionYear: "2021",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
      featured: false,
    },
    {
      id: "rhododendron-villas",
      title: "The Rhododendron Eco-Luxury Villas",
      category: "Completed",
      sector: "Residential",
      location: "Devdaha Sanctuary Enclave, Rupandehi",
      client: "Private Developer / NRN Consortium",
      scope: "24-unit signature residential cluster built with rammed earth aesthetics, AAC blocks, and solar micro-grid",
      completionYear: "2024",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      featured: false,
    },
  ],
  equipment: [
    {
      id: "eq-1",
      name: "Caterpillar 320D Hydraulic Excavator",
      type: "Heavy Earthmoving",
      quantity: "8 Units",
      capacity: "20 Metric Ton / 1.2 m³ Bucket",
      status: "Operational",
    },
    {
      id: "eq-2",
      name: "Zoomlion TC5013 Tower Crane",
      type: "High-Rise Material Hoisting",
      quantity: "4 Units",
      capacity: "50-meter Jib / 5 Ton Max Tip Load",
      status: "On-Site",
    },
    {
      id: "eq-3",
      name: "Schwing Stetter CP30 Batching Plant",
      type: "Automated Concrete Production",
      quantity: "3 Plants",
      capacity: "30 m³/hour continuous output",
      status: "Operational",
    },
    {
      id: "eq-4",
      name: "Vögele Super 1800-3 Asphalt Paver",
      type: "Highway Paving",
      quantity: "2 Units",
      capacity: "Paving width up to 8.5m / 700 t/h",
      status: "On-Site",
    },
    {
      id: "eq-5",
      name: "Tata Signa Heavy Transit Mixers",
      type: "Concrete Transport",
      quantity: "14 Units",
      capacity: "7 m³ Heavy Drum with GPS tracking",
      status: "Operational",
    },
    {
      id: "eq-6",
      name: "Hamm 311D Soil Compactor Vibratory Roller",
      type: "Sub-base Compaction",
      quantity: "6 Units",
      capacity: "11 Metric Ton / Dual Frequency",
      status: "Operational",
    },
    {
      id: "eq-7",
      name: "Liebherr Mobile Hydraulic Telescopic Crane",
      type: "Mobile Heavy Lift",
      quantity: "2 Units",
      capacity: "60 Metric Ton Lift Capacity",
      status: "Standby",
    },
    {
      id: "eq-8",
      name: "Trimble Robotic Total Stations & Survey Drones",
      type: "Precision Survey & Geomatics",
      quantity: "10 Kits",
      capacity: "Sub-centimeter RTK GPS & LiDAR Survey",
      status: "Operational",
    },
  ],
  safetyAndValues: [
    {
      title: "Zero-Compromise Structural Safety",
      description:
        "Every foot of rebar and every batch of concrete complies with Nepal National Building Code (NBC 105:2020) and Indian Standard Codes for high-seismic zones.",
      complianceStandard: "NBC 105:2020 & IS 1893:2016",
      icon: "ShieldCheck",
    },
    {
      title: "Government Tender Integrity",
      description:
        "Transparent procurement, strict adherence to Public Procurement Act (PPA), and uncompromising audit readiness for multilateral funded initiatives.",
      complianceStandard: "ISO 9001:2015 Certified QA/QC",
      icon: "FileCheck2",
    },
    {
      title: "Occupational Health & Zero Accident Policy",
      description:
        "Mandatory 100% PPE enforcement on all active job sites, daily morning toolbox safety briefings, and certified safety officers on round-the-clock patrol.",
      complianceStandard: "ISO 45001:2018 Certified Safety",
      icon: "HardHat",
    },
    {
      title: "On-Schedule Milestone Guarantee",
      description:
        "Critical Path Method (CPM) tracking and Primavera P6 scheduling prevent cost escalations and ensure timely handover of landmark commercial assets.",
      complianceStandard: "Guaranteed Turnaround SLA",
      icon: "Clock",
    },
  ],
  managingDirector: {
    name: "Er. Rajesh Shrestha",
    title: "Managing Director & Chief Executive Engineer",
    credentials: "B.E. Civil (Pulchowk Campus), M.Sc. Structural Engineering, Nepal Engineering Council Regd. No. 3421 'Civil'",
    message:
      "When we founded Lumbini Builders over two decades ago in the fertile plains of the Terai, our ambition was clear: to build infrastructure that endures not just decades, but generations. In Nepal, where challenging seismic topography and rapid urbanization demand the highest standard of structural resilience, a contractor cannot afford shortcuts.\n\nWhether pouring deep foundations for multi-story commercial landmarks along the Bhairahawa-Butwal Corridor, or delivering critical road infrastructure that links communities, we combine heavy machinery ownership with rigorous engineering oversight. To our esteemed Non-Resident Nepali (NRN) partners and international investors: we treat your capital with the highest degree of corporate transparency and engineering accountability. Welcome to Lumbini Builders — where Nepal’s future takes concrete shape.",
    signatureText: "Er. Rajesh Shrestha — Managing Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
  partners: [
    {
      name: "Department of Roads (DoR)",
      shortName: "Govt. of Nepal DoR",
      category: "Government Agency",
      logoPlaceholder: "DOR NEPAL",
    },
    {
      name: "Nepal Electricity Authority",
      shortName: "NEA Transmission",
      category: "Government Agency",
      logoPlaceholder: "NEA",
    },
    {
      name: "Lumbini Development Trust",
      shortName: "LDT Heritage",
      category: "Government Agency",
      logoPlaceholder: "LDT",
    },
    {
      name: "Butwal Sub-Metropolitan City",
      shortName: "Butwal Metro",
      category: "Government Agency",
      logoPlaceholder: "BUTWAL SUB-METRO",
    },
    {
      name: "Asian Development Bank (ADB) Projects",
      shortName: "ADB Co-funded",
      category: "International Donor",
      logoPlaceholder: "ADB FUNDED",
    },
    {
      name: "Horizon Commercial Conglomerate",
      shortName: "Horizon Corp",
      category: "Commercial Enterprise",
      logoPlaceholder: "HORIZON GROUP",
    },
    {
      name: "Universal Medical Foundation",
      shortName: "Universal Health",
      category: "Commercial Enterprise",
      logoPlaceholder: "UNIVERSAL MED",
    },
  ],
  socialLinks: {
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    youtube: "https://youtube.com",
  },
};
