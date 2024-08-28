const peopleData = [
  {
    id: 1,
    name: "Olivia Rhye",
    username: "@olivia",
    status: "Active",
    role: "Product Designer",
    email: "olivia@untitledui.com",
    teams: [
      "Design",
      "Product",
      "Marketing",
      "Design",
      "Product",
      "Marketing",
      "Marketing",
    ],
    dateOfBirth: "29-04-1990",
    gender: "Female",
    nationality: "Canadian",
    contactNo: "1234567890",
    personalEmail: "oliviadesign@gmail.com",
    workEmail: "olivia@untitledui.com",
    publications: [
      {
        title: "AI and User Experience: The Future of Design",
        journal: "Journal of Modern Design",
        year: "2023",
      },
      {
        title: "Responsive Design Patterns for Mobile Applications",
        details:
          "A comprehensive study on effective design patterns for mobile user interfaces",
      },
    ],
  },

  {
    id: 2,
    name: "Phoenix Baker",
    username: "@phoenix",
    status: "Active",
    role: "Product Manager",
    email: "phoenix@untitledui.com",
    teams: [
      "Design",
      "Product",
      "Marketing",
      "Design",
      "Product",
      "Marketing",
      "Marketing",
    ],
    dateOfBirth: "15-07-1988",
    gender: "Male",
    nationality: "American",
    contactNo: "2345678901",
    personalEmail: "phoenixbaker@gmail.com",
    workEmail: "phoenix@untitledui.com",
    publications: [
      {
        title: "Agile Product Management in the Digital Age",
        journal: "International Journal of Product Management",
        year: "2022",
      },
      {
        title: "The Impact of AI on Product Development Cycles",
        details:
          "An analysis of how artificial intelligence is reshaping product management practices",
      },
    ],
  },
  {
    id: 3,
    name: "Lana Steiner",
    username: "@lana",
    status: "Active",
    role: "Frontend Developer",
    email: "lana@untitledui.com",
    teams: [
      "Design",
      "Product",
      "Marketing",
      "Design",
      "Product",
      "Marketing",
      "Marketing",
    ],
    dateOfBirth: "03-12-1992",
    gender: "Female",
    nationality: "German",
    contactNo: "3456789012",
    personalEmail: "lanasteiner@gmail.com",
    workEmail: "lana@untitledui.com",
    publications: [
      {
        title: "Modern Frontend Frameworks: A Comparative Study",
        journal: "Web Development Today",
        year: "2023",
      },
      {
        title: "Optimizing Web Performance: Techniques and Best Practices",
        details:
          "A deep dive into strategies for improving website speed and user experience",
      },
    ],
  },
  {
    id: 4,
    name: "Demi Wilkinson",
    username: "@demi",
    status: "Active",
    role: "Backend Developer",
    email: "demi@untitledui.com",
    teams: [
      "Design",
      "Product",
      "Marketing",
      "Design",
      "Product",
      "Marketing",
      "Marketing",
    ],
    dateOfBirth: "22-09-1991",
    gender: "Non-binary",
    nationality: "British",
    contactNo: "4567890123",
    personalEmail: "demiwilkinson@gmail.com",
    workEmail: "demi@untitledui.com",
    publications: [
      {
        title: "Microservices Architecture: Scalability and Flexibility",
        journal: "Journal of Software Engineering",
        year: "2022",
      },
      {
        title: "Securing RESTful APIs: Best Practices and Common Pitfalls",
        details:
          "A comprehensive guide to implementing secure backend services",
      },
    ],
  },
  {
    id: 5,
    name: "Candice Wu",
    username: "@candice",
    status: "Active",
    role: "Fullstack Developer",
    email: "candice@untitledui.com",
    teams: [
      "Design",
      "Product",
      "Marketing",
      "Design",
      "Product",
      "Marketing",
      "Marketing",
    ],
    dateOfBirth: "14-02-1989",
    gender: "Female",
    nationality: "Chinese",
    contactNo: "5678901234",
    personalEmail: "candicewu@gmail.com",
    workEmail: "candice@untitledui.com",
    publications: [
      {
        title: "Full Stack Development: Bridging Frontend and Backend",
        journal: "Modern Web Development",
        year: "2023",
      },
      {
        title: "Implementing Real-time Features with WebSockets",
        details:
          "A practical guide to enhancing web applications with real-time functionality",
      },
    ],
  },
  {
    id: 6,
    name: "Natali Craig",
    username: "@natali",
    status: "Active",
    role: "UX Designer",
    email: "natali@untitledui.com",
    teams: [
      "Design",
      "Product",
      "Marketing",
      "Design",
      "Product",
      "Marketing",
      "Marketing",
    ],
    dateOfBirth: "30-06-1993",
    gender: "Female",
    nationality: "Australian",
    contactNo: "6789012345",
    personalEmail: "natalicraig@gmail.com",
    workEmail: "natali@untitledui.com",
    publications: [
      {
        title: "The Psychology of User Experience Design",
        journal: "UX Research Quarterly",
        year: "2022",
      },
      {
        title: "Designing for Accessibility: Inclusive UX Practices",
        details:
          "An exploration of techniques to create more inclusive digital experiences",
      },
    ],
  },
  {
    id: 7,
    name: "Drew Cano",
    username: "@drew",
    status: "Active",
    role: "UX Copywriter",
    email: "drew@untitledui.com",
    teams: [
      "Design",
      "Product",
      "Marketing",
      "Design",
      "Product",
      "Marketing",
      "Marketing",
    ],
    dateOfBirth: "11-11-1990",
    gender: "Male",
    nationality: "Spanish",
    contactNo: "7890123456",
    personalEmail: "drewcano@gmail.com",
    workEmail: "drew@untitledui.com",
    publications: [
      {
        title: "The Art of Microcopy: Crafting Effective UI Text",
        journal: "Content Strategy Insights",
        year: "2023",
      },
      {
        title: "Voice and Tone in UX Writing: Creating Brand Consistency",
        details:
          "Strategies for maintaining a consistent brand voice across digital platforms",
      },
    ],
  },
  {
    id: 8,
    name: "Orlando Diggs",
    username: "@orlando",
    status: "Active",
    role: "UI Designer",
    email: "orlando@untitledui.com",
    teams: [
      "Design",
      "Product",
      "Marketing",
      "Design",
      "Product",
      "Marketing",
      "Marketing",
    ],
    dateOfBirth: "05-03-1994",
    gender: "Male",
    nationality: "Brazilian",
    contactNo: "8901234567",
    personalEmail: "orlandodiggs@gmail.com",
    workEmail: "orlando@untitledui.com",
    publications: [
      {
        title: "Color Theory in Digital Interface Design",
        journal: "Visual Design Today",
        year: "2022",
      },
      {
        title: "Designing for Dark Mode: Principles and Best Practices",
        details:
          "A guide to creating effective and aesthetically pleasing dark mode interfaces",
      },
    ],
  },
  {
    id: 9,
    name: "Andi Lane",
    username: "@andi",
    status: "Active",
    role: "Product Manager",
    email: "andi@untitledui.com",
    teams: [
      "Design",
      "Product",
      "Marketing",
      "Design",
      "Product",
      "Marketing",
      "Marketing",
    ],
    dateOfBirth: "18-08-1987",
    gender: "Female",
    nationality: "Indian",
    contactNo: "9012345678",
    personalEmail: "andilane@gmail.com",
    workEmail: "andi@untitledui.com",
    publications: [
      {
        title:
          "Data-Driven Product Management: Leveraging Analytics for Success",
        journal: "Product Innovation Journal",
        year: "2023",
      },
      {
        title: "Building Cross-Functional Teams: A Product Manager Guide",
        details:
          "Strategies for effective collaboration across different departments in product development",
      },
    ],
  },
  {
    id: 10,
    name: "Kate Morrison",
    username: "@kate",
    status: "Active",
    role: "QA Engineer",
    email: "kate@untitledui.com",
    teams: [
      "Design",
      "Product",
      "Marketing",
      "Design",
      "Product",
      "Marketing",
      "Marketing",
    ],
    dateOfBirth: "27-01-1992",
    gender: "Female",
    nationality: "Canadian",
    contactNo: "0123456789",
    personalEmail: "katemorrison@gmail.com",
    workEmail: "kate@untitledui.com",
    publications: [
      {
        title: "Automated Testing Strategies for Modern Web Applications",
        journal: "Software Testing Excellence",
        year: "2022",
      },
      {
        title: "Continuous Integration and Quality Assurance: Best Practices",
        details:
          "A comprehensive guide to implementing effective QA processes in agile development environments",
      },
    ],
  },
  {
    id: 11,
    name: "Kate Morrison",
    username: "@kate",
    status: "Active",
    role: "QA Engineer",
    email: "kate@untitledui.com",
    teams: [
      "Design",
      "Product",
      "Marketing",
      "Design",
      "Product",
      "Marketing",
      "Marketing",
    ],
    dateOfBirth: "27-01-1992",
    gender: "Female",
    nationality: "Canadian",
    contactNo: "0123456789",
    personalEmail: "katemorrison@gmail.com",
    workEmail: "kate@untitledui.com",
    publications: [
      {
        title: "Automated Testing Strategies for Modern Web Applications",
        journal: "Software Testing Excellence",
        year: "2022",
      },
      {
        title: "Continuous Integration and Quality Assurance: Best Practices",
        details:
          "A comprehensive guide to implementing effective QA processes in agile development environments",
      },
    ],
  },
  {
    id: 12,
    name: "Kate Morrison",
    username: "@kate",
    status: "Active",
    role: "QA Engineer",
    email: "kate@untitledui.com",
    teams: [
      "Design",
      "Product",
      "Marketing",
      "Design",
      "Product",
      "Marketing",
      "Marketing",
    ],
    dateOfBirth: "27-01-1992",
    gender: "Female",
    nationality: "Canadian",
    contactNo: "0123456789",
    personalEmail: "katemorrison@gmail.com",
    workEmail: "kate@untitledui.com",
    publications: [
      {
        title: "Automated Testing Strategies for Modern Web Applications",
        journal: "Software Testing Excellence",
        year: "2022",
      },
      {
        title: "Continuous Integration and Quality Assurance: Best Practices",
        details:
          "A comprehensive guide to implementing effective QA processes in agile development environments",
      },
    ],
  },
  
   
  ];
  
  export default peopleData;
  