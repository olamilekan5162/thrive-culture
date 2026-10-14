/**
 * Central Configuration for Thrive Culture
 * Crisp, streamlined content with #F28524 brand identity.
 */

import thrive20Image from "../assets/images/thrive20_residential_camp_1791935607590.jpg";
import nslcImage from "../assets/images/students_leadership_conference_1791935607993.jpg";

export const siteConfig = {
  orgName: "Thrive Culture",
  tagline: "Helping Young People See Beyond What's Possible",
  description:
    "Thrive Culture connects young people with ideas, skills, mentors, and networks that expand what their lives can become.",

  // Concise Vision & Mission Placeholders
  statements: {
    vision: {
      isOfficial: false,
      placeholderText:
        "A world where every young person has the exposure, agency, and community to build an extraordinary life.",
      note: "Official vision statement will be supplied by Thrive Culture leadership.",
    },
    mission: {
      isOfficial: false,
      placeholderText:
        "To connect emerging generations with transformative mentors, practical skill camps, and enduring peer circles that turn potential into reality.",
      note: "Official mission statement will be supplied by Thrive Culture leadership.",
    },
  },

  // Core philosophy pillars (Snappy, punchy, memorable)
  philosophy: [
    {
      number: "01",
      title: "Intentional Exposure",
      description:
        "You cannot aim for what you have never seen. We introduce young minds to diverse professions, creators, and ways of thinking.",
    },
    {
      number: "02",
      title: "Practical Skills",
      description:
        "Action beats passive inspiration. We teach real-world execution: decision-making, financial basics, and communication.",
    },
    {
      number: "03",
      title: "Meaningful Networks",
      description:
        "Proximity changes outcomes. We surround participants with ambitious peers and mentors who raise their standards.",
    },
    {
      number: "04",
      title: "Personal Agency",
      description:
        "We build inner ownership. Participants learn to stop drifting and take active charge of their choices and trajectory.",
    },
    {
      number: "05",
      title: "Immersive Camps",
      description:
        "Stepping away from daily distraction creates space for deep clarity, honest reflection, and lifelong friendships.",
    },
  ],

  // Initiatives within the Thrive Culture ecosystem
  initiatives: [
    {
      id: "thrive-20-camp",
      title: "Thrive 20 Camp",
      badge: "Flagship Programme",
      isFlagship: true,
      summary:
        "A four-day residential retreat for young people entering their twenties to gain clarity, build practical life skills, and create a concrete personal roadmap.",
      fullDescription:
        "Entering your twenties is life's most defining transition. Thrive 20 Camp brings 25–30 young adults together in a distraction-free setting to build durable habits, examine their ambitions, and forge lasting peer bonds.",
      image: thrive20Image,
      cohortDetails: {
        duration: "4 Days / 3 Nights",
        pilotTarget: "25–30 Participants",
        format: "Residential Retreat",
        location: "Announced to Admitted Cohort",
      },
      applicationUrl:
        "https://docs.google.com/forms/d/1iNq2dtTLsrXk5U0kAoT5Nyf1zmN3pwDfWKp2LJLeElg/edit",
      applicationConfigNote: "Configurable Google Form application link.",
      lifeFramework: {
        isOfficial: false,
        placeholderText:
          "The Thrive 20 Life Framework provides a clear mental compass across four key pillars: Self-Mastery, Practical Skills, Financial Health, and Relationship Standards.",
        note: "Official curriculum framework document will be integrated upon confirmation.",
      },
      faqs: [
        {
          question: "What is Thrive 20 Camp?",
          answer:
            "A four-day residential experience where young people entering their twenties pause, reflect, learn practical life skills from mentors, and author a clear personal roadmap.",
        },
        {
          question: "Who should apply?",
          answer:
            "Curious, ambitious young adults (typically ages 19–23) who want clarity, better habits, and a high-standard peer group.",
        },
        {
          question: "Why only 25–30 participants?",
          answer:
            "To guarantee deep conversations, personal attention from mentors, and close cohort trust.",
        },
        {
          question: "What happens after the camp?",
          answer:
            "Participants leave with an actionable personal plan and join peer accountability circles that continue meeting after the retreat.",
        },
      ],
    },
    {
      id: "nslc",
      title: "National Students Leadership Conference",
      badge: "National Initiative",
      isFlagship: false,
      summary:
        "A nationwide summit bringing student leaders together to tackle institutional innovation, civic governance, and youth-led initiatives.",
      fullDescription:
        "NSLC unites campus pioneers across universities and schools for intensive working labs, dialogue with seasoned leaders, and cross-institutional problem-solving.",
      image: nslcImage,
      cohortDetails: {
        duration: "Multi-Day Summit",
        pilotTarget: "Campus & Student Delegates",
        format: "Plenary & Working Labs",
        location: "Central Venue",
      },
      note: "Dates and partner host campuses are currently being finalized.",
    },
  ],

  // 6 Partnership Categories (Clean & scannable)
  partnerships: [
    {
      id: "funding",
      number: "01",
      title: "Funding Partner",
      role: "Capital & Scholarships",
      description:
        "Underwrite participant scholarships so finances never block a deserving young person from attending.",
      offerings: [
        "Participant scholarship underwriting",
        "Camp operational funding",
        "Micro-seed grants for participant projects",
      ],
    },
    {
      id: "venue",
      number: "02",
      title: "Venue Partner",
      role: "Retreat Facilities",
      description:
        "Provide serene retreat spaces, lodges, or campus facilities for immersive four-day camps.",
      offerings: [
        "Residential retreat venues for Thrive 20",
        "Conference auditoriums for student summits",
        "Breakout workshop rooms",
      ],
    },
    {
      id: "knowledge",
      number: "03",
      title: "Knowledge Partner",
      role: "Mentors & Facilitators",
      description:
        "Contribute real-world expertise, guest masterclasses, and executive mentorship.",
      offerings: [
        "Guest masterclasses & clinics",
        "Practical workshop facilitation",
        "One-on-one cohort mentoring",
      ],
    },
    {
      id: "opportunity",
      number: "04",
      title: "Opportunity Partner",
      role: "Jobs & Internships",
      description:
        "Open doors to internships, apprenticeships, and shadowing opportunities for cohort alumni.",
      offerings: [
        "Curated internships & fellowships",
        "Shadow-a-Leader workplace days",
        "Direct talent pipeline access",
      ],
    },
    {
      id: "media",
      number: "05",
      title: "Media Partner",
      role: "Storytelling & Reach",
      description:
        "Help document cohort stories, broadcast youth perspectives, and amplify our mission.",
      offerings: [
        "Documentary & photo coverage",
        "Editorial spotlights & features",
        "Media distribution & podcasts",
      ],
    },
    {
      id: "strategic",
      number: "06",
      title: "Strategic Partner",
      role: "Long-Term Alliance",
      description:
        "Collaborate with universities, foundations, or civic bodies for regional and national scale.",
      offerings: [
        "Multi-year programmatic alliance",
        "Joint youth research & data",
        "Institutional accreditation",
      ],
    },
  ],

  // Core Values (Concise)
  coreValues: [
    {
      title: "Radical Possibility",
      description:
        "We refuse to let zip codes or current circumstances limit a young person's future.",
    },
    {
      title: "High Standards",
      description:
        "Our camps, mentors, and environments reflect excellence, care, and dignity.",
    },
    {
      title: "Authentic Community",
      description:
        "Real growth happens in high-trust spaces where people can be honest and ambitious.",
    },
    {
      title: "Action Over Talk",
      description:
        "No empty motivational slogans. Everything translates into real habits and decisions.",
    },
  ],

  // Team Structure
  team: [
    {
      role: "Executive Leadership",
      title: "Founder & Executive Director",
      name: "Announcement Pending",
      isPlaceholder: true,
      bio: "Official leadership announcement will be shared upon public launch.",
    },
    {
      role: "Programmes & Experience",
      title: "Director of Programmes",
      name: "Appointment in Progress",
      isPlaceholder: true,
      bio: "Leading cohort curriculum design and residential operations for Thrive 20.",
    },
    {
      role: "Partnerships & Impact",
      title: "Head of Partnerships",
      name: "Appointment in Progress",
      isPlaceholder: true,
      bio: "Coordinating institutional donors, venue partners, and corporate alliances.",
    },
  ],

  // Verified Contact Details
  contact: {
    officialEmail: "hello@thriveculture.org",
    partnershipsEmail: "partnerships@thriveculture.org",
    admissionsEmail: "admissions@thriveculture.org",
    officeLocation: "Regional hubs and retreat locations announced per cohort",
    channels: [
      {
        name: "General Inquiries",
        address: "hello@thriveculture.org",
        note: "General questions & correspondence",
      },
      {
        name: "Partnership Desk",
        address: "partnerships@thriveculture.org",
        note: "Funding, venues, & mentorship",
      },
      {
        name: "Admissions Desk",
        address: "admissions@thriveculture.org",
        note: "Thrive 20 Camp cohort applications",
      },
    ],
    socials: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/company/thrive-culture-placeholder",
        isPlaceholder: true,
      },
      {
        platform: "Twitter / X",
        url: "https://x.com/thriveculture_placeholder",
        isPlaceholder: true,
      },
      {
        platform: "Instagram",
        url: "https://instagram.com/thriveculture_placeholder",
        isPlaceholder: true,
      },
    ],
  },

  // Journal / Updates Structure
  stories: [
    {
      id: "architecture-of-possibility",
      title: "The Power of Exposure: Why Proximity Changes Everything",
      category: "Perspective",
      date: "October 2026",
      readTime: "3 min read",
      author: "Thrive Culture Editorial",
      summary:
        "How meeting real-world practitioners transforms what young people consider possible for their own lives.",
      body: [
        "When young people only see a narrow set of career paths around them, their dreams naturally fit inside that box.",
        "Exposure breaks that box. By placing a nineteen-year-old in conversation with builders, founders, and civic leaders, the invisible barrier between 'their world' and 'my world' disappears.",
        "Thrive 20 Camp was created on this conviction: four immersive days can spark forty years of purposeful momentum.",
      ],
    },
    {
      id: "navigating-the-twenties",
      title: "Stepping Into Your Twenties: Why You Need a Framework",
      category: "Programme Design",
      date: "September 2026",
      readTime: "3 min read",
      author: "Advisory Team",
      summary:
        "The shift from school to adult life is wide open. Having a clear compass makes all the difference.",
      body: [
        "In school, the syllabus is given to you. In your twenties, the syllabus vanishes. You have to decide what to value, what habits to build, and who to spend time with.",
        "At Thrive 20 Camp, we give participants the space and tools to create their own playbook—grounded in personal values, financial literacy, and strong peer accountability.",
      ],
    },
  ],
};
