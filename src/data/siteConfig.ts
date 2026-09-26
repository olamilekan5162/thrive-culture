export interface Initiative {
  id: string;
  name: string;
  subheading: string;
  flagship: boolean;
  status: "Applications Open" | "Upcoming Cohort" | "Concept Phase";
  dates: string;
  targetAudience: string;
  cohortSize: string;
  purpose: string;
  problem: string;
  experienceDescription: string;
  pillars: {
    title: string;
    description: string;
    focus: string;
  }[];
  eligibility: string[];
  selectionCriteria: string[];
  ctaText: string;
  image?: string;
}

export interface PartnerTrack {
  id: string;
  title: string;
  description: string;
  involves: string[];
  idealFor: string;
}

export interface Story {
  id: string;
  title: string;
  category:
    | "Stories"
    | "Reflections"
    | "Programme Updates"
    | "Participant Voices"
    | "Thought Leadership";
  readTime: string;
  date: string;
  excerpt: string;
  content: string[];
  quote?: string;
  author: string;
  role: string;
  image?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: "General" | "Eligibility" | "Camp Life" | "Post-Camp";
}

export const SITE_CONFIG = {
  organizationName: "Mirroring Possibilities",
  tagline:
    "Expanding the imagination of young people by connecting them to what is possible.",
  mission:
    "To help young people see beyond the limitations of their immediate environment by bringing them closer to people, ideas, skills, and experiences that expand their imagination of what their lives can become.",
  vision:
    "A world where a young person’s future is shaped by their boundless potential, thoughtful guidance, and real-world exposure—never constrained by zip code or circumstance.",

  // Single configurable Google Form link for applications
  applicationFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSc-placeholder-mirroring-possibilities/viewform",

  // Contact placeholders
  contactEmail: "contact@mirroringpossibilities.org",
  partnershipsEmail: "partners@mirroringpossibilities.org",
  phonePlaceholder: "+1 (555) 019-2026 [Contact number to be announced]",
  locationPlaceholder: "Global Initiative / Regional Cohorts",

  socials: [
    { label: "LinkedIn", url: "https://linkedin.com" },
    { label: "X (Twitter)", url: "https://x.com" },
    { label: "Instagram", url: "https://instagram.com" },
    { label: "YouTube", url: "https://youtube.com" },
  ],
};

export const INITIATIVES: Initiative[] = [
  {
    id: "thrive-20",
    name: "Thrive 20 Camp",
    subheading: "Plan Twenty Flagship Residential Experience",
    flagship: true,
    status: "Applications Open",
    dates: "Four-day immersive residential camp [Dates to be finalized]",
    targetAudience: "Young people turning 20 within the camp year",
    cohortSize: "Pilot target: 25–30 participants",
    purpose:
      "A high-impact, transformative threshold experience designed to equip young people entering their twenties with life clarity, practical tools, human empowerment, meaningful networks, and an actionable life plan.",
    problem:
      "Turning twenty marks an inflection point where societal expectations soar, yet supportive structure abruptly drops off. Many young people navigate critical career, financial, and personal decisions with minimal exposure to diverse life pathways, mentorship, or structured life design.",
    experienceDescription:
      "A carefully curated four-day residential immersion away from everyday distractions. Combining masterclasses, candid mentor firesides, experiential simulations, peer accountability circles, and intensive personal life planning.",
    pillars: [
      {
        title: "Clarity & Self-Discovery",
        description:
          "Uncovering personal core values, authentic strengths, and internal compass before adopting external societal pressures.",
        focus: "Identity, strengths assessment, vision mapping",
      },
      {
        title: "Practical Capabilities",
        description:
          "Real-world competencies often omitted from formal schooling—financial fundamentals, decision frameworks, and communication.",
        focus: "Financial literacy, strategic thinking, effective agency",
      },
      {
        title: "Human Empowerment & Resilience",
        description:
          "Cultivating emotional agility, internal agency, mindset reframing, and the courage to take informed, purposeful risks.",
        focus: "Mental models, emotional health, grit",
      },
      {
        title: "Curated Networks & Mentorship",
        description:
          "Direct, candid access to accomplished professionals, peers, and mentors who model what is genuinely achievable.",
        focus: "Intergenerational wisdom, peer circles, guidance",
      },
      {
        title: "Actionable Life Blueprint",
        description:
          "Translating aspirations into concrete 1-year and 3-year execution frameworks with milestone tracking and peer accountability.",
        focus: "Action plan, accountability partners, milestones",
      },
    ],
    eligibility: [
      "Must be turning 20 years old within the camp year (strict threshold cohort)",
      "Demonstrated curiosity, openness to growth, and willingness to engage deeply with peers",
      "Commitment to participate in the entire 4-day residential experience and post-camp circle",
      "No specific university degree or prerequisite career path required—we value diversity of perspective",
    ],
    selectionCriteria: [
      "Authentic self-reflection and clarity of personal motivation",
      "Willingness to support and elevate fellow cohort members",
      "Desire to build an intentional foundation for the decade ahead",
    ],
    ctaText: "Apply for Thrive 20 Cohort",
  },
  {
    id: "possibility-labs",
    name: "Possibility Labs",
    subheading: "Future Community Innovation Workshops",
    flagship: false,
    status: "Concept Phase",
    dates: "[Pilot schedule to be announced]",
    targetAudience:
      "Secondary and early tertiary youth exploring creative and technological frontiers",
    cohortSize: "[Cohort sizing to be defined]",
    purpose:
      "Hands-on experiential workshops bridging the gap between emerging creative technologies, entrepreneurship, and community challenges.",
    problem:
      "Young people in underserved communities rarely get tactile exposure to cutting-edge tools and innovation methodologies before making academic choices.",
    experienceDescription:
      "Weekend pop-up labs focusing on rapid prototyping, storytelling, and social problem solving with industry creators.",
    pillars: [
      {
        title: "Applied Creativity",
        description:
          "Translating raw imagination into tangible prototypes and digital artifacts.",
        focus: "Prototyping, design thinking",
      },
      {
        title: "Community Problem-Solving",
        description:
          "Addressing localized civic challenges through collective innovation.",
        focus: "Civic tech, empathy",
      },
    ],
    eligibility: ["[Detailed criteria to be published prior to launch]"],
    selectionCriteria: ["[Selection framework to be announced]"],
    ctaText: "Register Interest",
  },
  {
    id: "next-horizon-fellows",
    name: "Next Horizon Fellowship",
    subheading: "Alumni Transition & Incubation Support",
    flagship: false,
    status: "Upcoming Cohort",
    dates: "[Post-Thrive 20 pilot rollout]",
    targetAudience:
      "Graduates of Mirroring Possibilities initiatives executing social impact projects",
    cohortSize: "[Target cohort to be announced]",
    purpose:
      "Sustained six-month micro-grant and advisory support for young leaders advancing community solutions.",
    problem:
      "The momentum of intensive camps can fade without ongoing structural backing and resource access.",
    experienceDescription:
      "Bi-weekly advisory check-ins, seed grants, and executive coaching.",
    pillars: [
      {
        title: "Project Incubation",
        description:
          "Structured milestones for grassroots community initiatives.",
        focus: "Execution, grant allocation",
      },
      {
        title: "Executive Advisory",
        description: "Dedicated 1-on-1 strategic mentorship.",
        focus: "Leadership maturity",
      },
    ],
    eligibility: ["Completed Thrive 20 or associated foundational programmes"],
    selectionCriteria: ["Viability and community impact of proposed project"],
    ctaText: "Learn About the Fellowship",
  },
];

export const PARTNERSHIP_TRACKS: PartnerTrack[] = [
  {
    id: "funding",
    title: "Funding & Underwriting Partner",
    description:
      "Provide financial underwriting to ensure our initiatives remain accessible regardless of a young person’s socioeconomic background. Directly fund cohort scholarships, camp residency, and curriculum materials.",
    involves: [
      "Full or partial cohort scholarships for deserving candidates",
      "Operational support for residential logistics and learning materials",
      "Transparent reporting on participant outcomes and post-programme tracking",
      "Acknowledgement across programme collateral and public records",
    ],
    idealFor:
      "Philanthropic foundations, corporate CSR initiatives, family offices, and individual benefactors.",
  },
  {
    id: "venue",
    title: "Venue & Retreat Partner",
    description:
      "Provide inspiring, safe, and serene residential facilities, retreat grounds, and workshop spaces where young people can disconnect from daily pressures and focus entirely on personal transformation.",
    involves: [
      "Access to retreat lodges, conference venues, or campus residential facilities",
      "Nutritious meal catering and accommodation logistics partnerships",
      "Conducive environments for reflection, campfires, and team simulations",
    ],
    idealFor:
      "Retreat centers, universities, hospitality groups, eco-lodges, and conference facilities.",
  },
  {
    id: "knowledge",
    title: "Knowledge & Curriculum Partner",
    description:
      "Collaborate on world-class life frameworks, educational content, financial literacy modules, and developmental methodologies tailored to the modern 20-year-old journey.",
    involves: [
      "Contributing evidence-based frameworks in youth development and mental wellness",
      "Curating specialized workshops (e.g. personal finance, public speaking, ethics)",
      "Co-authoring research or impact evaluation frameworks",
    ],
    idealFor:
      "Academic institutions, behavioural design institutes, think tanks, and training consultancies.",
  },
  {
    id: "opportunity",
    title: "Opportunity & Career Partner",
    description:
      "Open real doors for cohort alumni by offering micro-internships, apprenticeships, shadowing days, and professional exposure inside forward-thinking organisations.",
    involves: [
      "Workplace visits and day-in-the-life executive shadowing for young adults",
      "Internship or junior pathway placements for programme graduates",
      "Real-world project briefs for alumni challenge sprints",
    ],
    idealFor:
      "Forward-thinking companies, startups, creative agencies, NGOs, and public sector bodies.",
  },
  {
    id: "media",
    title: "Media & Storytelling Partner",
    description:
      "Amplify stories of youth possibility, share documentary coverage of our cohorts, and shift public narratives around young people from deficit to immense promise.",
    involves: [
      "Co-producing documentary spotlights, photo essays, and podcast features",
      "Amplifying participant voices and graduation project outcomes",
      "Press coverage and distribution across youth and industry channels",
    ],
    idealFor:
      "Media houses, documentary filmmakers, publications, journalists, and content studios.",
  },
  {
    id: "strategic",
    title: "Strategic & Ecosystem Partner",
    description:
      "Join hands on long-term systemic alignment, co-designing regional initiatives, and expanding our reach into new geographies and communities.",
    involves: [
      "Cross-organisational referrals and community outreach",
      "Long-term advisory on scaling model to additional demographics",
      "Joint policy advocacy for young adult developmental support",
    ],
    idealFor:
      "Youth development coalitions, national youth bodies, and international non-profits.",
  },
];

export const STORIES: Story[] = [
  {
    id: "why-turning-twenty-matters",
    title: "Why Turning Twenty is the Most Underestimated Threshold in Life",
    category: "Thought Leadership",
    readTime: "5 min read",
    date: "Autumn 2026",
    excerpt:
      "The transition from nineteen to twenty is rarely celebrated with the structural intentionality it demands. Why intentional life architecture at 20 changes the trajectory of a lifetime.",
    quote:
      "We spend twelve years preparing young people for exams, but scarcely four days helping them map the architecture of their twenties.",
    author: "Mirroring Possibilities Research",
    role: "Editorial Team",
    content: [
      "Turning twenty is a subtle yet profound watershed. At eighteen, society legally recognizes adulthood; at twenty-one, celebration often focuses on independence. But the twentieth year is where the true psychological pivot occurs.",
      "For the first time, young people step out of the teenage decade. The decisions made here—around values, peers, financial habits, mental fortitude, and aspirations—compound over the ensuing thirty years with tremendous force.",
      "Yet for millions of young adults, this transition occurs in isolation. Mirroring Possibilities was established to build an ecosystem where young people meet mentors and peers who reflect the highest possibilities of what can be accomplished.",
    ],
  },
  {
    id: "inside-the-four-day-immersion",
    title: "Designing the 4-Day Sanctuary: Inside the Thrive 20 Experience",
    category: "Reflections",
    readTime: "4 min read",
    date: "Summer 2026",
    excerpt:
      "An inside look into the curriculum design, fireside sessions, and contemplative spaces that constitute the flagship Plan Twenty camp.",
    quote:
      "When you remove the noise of constant notifications and give twenty young minds space to breathe, clarity ceases to be a luxury.",
    author: "Programme Facilitation Circle",
    role: "Curriculum Architecture",
    content: [
      "The premise of Thrive 20 is simple: human potential flourishes when provided with a container of deep psychological safety, rigorous tools, and sincere mentors.",
      "Across four days, participants move through a deliberate sequence: Day 1 grounds them in self-awareness and unlearning; Day 2 introduces practical competencies from decision-making to money; Day 3 connects them with intergenerational mentors; Day 4 outputs their personal life blueprint.",
      "We do not present a single formula for success. Instead, we equip each individual with the discernment and courage to define their own path.",
    ],
  },
  {
    id: "ecosystem-of-possibility",
    title: 'The Philosophy of "Mirroring": Seeing What You Can Become',
    category: "Stories",
    readTime: "6 min read",
    date: "Spring 2026",
    excerpt:
      "How intentional exposure to mentors and diverse life trajectories breaks the invisible ceiling of local circumstances.",
    quote:
      "You cannot aim for a horizon you have never had the chance to see reflected in another human being.",
    author: "Mirroring Possibilities Founding Council",
    role: "Organisational Perspective",
    content: [
      "A child raised in an environment where the only visible careers are limited by geography naturally forms aspirations bounded by that horizon.",
      "Mirroring is not about imitation; it is about visibility. When a 20-year-old meets founders, writers, engineers, community organizers, and ethical leaders who share their vulnerabilities and tradecraft, possibility becomes real.",
      "By bringing diverse exemplars directly into the lives of young people, we dismantle artificial limitations and ignite self-directed drive.",
    ],
  },
];

export const FAQS: FAQItem[] = [
  {
    category: "General",
    question:
      "What is the relationship between Mirroring Possibilities and Thrive 20?",
    answer:
      "Mirroring Possibilities is the umbrella non-profit organisation committed to expanding horizons for youth. Thrive 20 (also called Plan Twenty) is our flagship 4-day residential camp initiative specifically targeted at young people turning twenty. In the future, Mirroring Possibilities will launch additional initiatives, labs, and campaigns.",
  },
  {
    category: "Eligibility",
    question: "Who is eligible to apply for the Thrive 20 Camp?",
    answer:
      "The current primary eligibility requirement is that applicants must be turning 20 years old within the camp year. We welcome applicants from all academic backgrounds, vocational pursuits, and walks of life. No university enrollment is required.",
  },
  {
    category: "Camp Life",
    question:
      "What does the four-day residential camp cost for selected participants?",
    answer:
      "Through the generous commitment of our funding and philanthropic partners, participation for selected applicants is subsidized. Full details regarding scholarship allocations, transport stipends, and residential provisions will be confirmed during the candidate selection cycle.",
  },
  {
    category: "Camp Life",
    question: "What happens during the four days of Thrive 20?",
    answer:
      "The camp features an intensive sequence including value-mapping workshops, practical life-skill masterclasses (financial literacy, decision frameworks), candid mentor circles, small-group reflection pods, physical wellness activities, and the drafting of a personal multi-year life plan.",
  },
  {
    category: "Post-Camp",
    question: "What support is provided after the camp concludes?",
    answer:
      "Graduation from the camp is the beginning, not the end. Alumni enter the Possibility Network, receiving ongoing peer accountability check-ins, access to quarterly mentor forums, and eligibility for subsequent fellowship opportunities.",
  },
  {
    category: "General",
    question: "How does an organisation or mentor get involved?",
    answer:
      'We actively invite seasoned practitioners, speakers, and corporate or community partners to join our ecosystem. You can explore partnership pathways on our "Partner With Us" page or register your interest on our "Possibility Network" page.',
  },
];
