/**
 * IWD 2026 Speakers Data
 *
 * Add confirmed speakers here following the format below.
 * Speaker images go in: src/data/2026/assets/images/speakers/
 * Use .webp format for optimal performance.
 *
 * Duplicate speaker entries by name (e.g., same person in Opening + Closing)
 * are intentional. SpeakerProvider de-duplicates for the Speakers section;
 * SessionsSection uses all entries so both sessions appear in the schedule.
 *
 * Required fields: id, name, avatar, session (with title, tags, track, time, room)
 * Optional fields: email, bio, twitter, linkedIn, organization, position, isWTM, isGDE, mastodon
 */

import AngelaRichardson from './assets/images/speakers/AngelaRichardson.webp'
import CherylThompson from './assets/images/speakers/CherylThompson.webp'
import GinaGrant from './assets/images/speakers/GinaGrant.webp'
import IdaByrdHill from './assets/images/speakers/IdaByrd-Hill.webp'
import JennaRitten from './assets/images/speakers/JennaRitten.webp'
import JeseekiaVaughn from './assets/images/speakers/JeseekiaVaughn.webp'
import KamilleTynes from './assets/images/speakers/KamilleTynes.webp'
import LawrielleWest from './assets/images/speakers/LawrielleWest.webp'
import LorrenaBlack from './assets/images/speakers/LorrenaBlack.webp'
import MarilynNash from './assets/images/speakers/MarilynNash.webp'
import TatianaJackson from './assets/images/speakers/TatianaJackson.webp'
import TinettaWilson from './assets/images/speakers/TinettaWilson.webp'
import TracieHightower from './assets/images/speakers/TracieHightower.webp'
import YanaGrant from './assets/images/speakers/YanaGrant.webp'
import ZipporahAbla from './assets/images/speakers/ZipporahAbla.webp'
import TerrellMcKinney from './assets/images/speakers/TerrellMcKinney.webp'
import SaamerMansoor from './assets/images/speakers/SaamerMansoor.webp'
import UmeloOnyejiaka from './assets/images/speakers/UmeloOnyejiaka.webp'
import DesmondBakerJr from './assets/images/speakers/DesmondBakerJr.webp'
import RishirajSarkar from './assets/images/speakers/RishirajSarkar.webp'
import HernandoGonzalezMalabet from './assets/images/speakers/HernandoGonzalezMalabet.webp'
import PriyalSheth from './assets/images/speakers/PriyalSheth.webp'
import SilviyaTopchiyska from './assets/images/speakers/SilviyaTopchiyska.webp'
import TabiceWard from './assets/images/speakers/TabiceWard.webp'

export const SpeakersData = [
  {
    id: 1,
    name: 'Angela Richardson',
    avatar: AngelaRichardson,
    bio: 'Angela is a seasoned software architect with 15+ years building scalable cloud platforms. She leads AI integration strategy at a Fortune 500 automotive company and mentors emerging engineers through Women Who Code Detroit.',
    linkedIn: 'https://www.linkedin.com/in/angelarichardson',
    organization: 'Ford Motor Company',
    position: 'Senior AI Architect',
    session: {
      title: 'Building Responsible AI Systems at Scale',
      abstract:
        'How to embed ethics and fairness into production ML pipelines.',
      description:
        'This session explores practical frameworks for deploying AI responsibly — from bias detection in training data to post-deployment monitoring. Angela draws on real Ford case studies to show how teams can ship fast without cutting corners on fairness.',
      tags: ['In-person', 'Build with AI'],
      track: 'Build with AI',
      time: '10:00',
      room: 'SB 120',
      sessionDuration: 45,
    },
    isWTM: true,
    isGDE: false,
  },
  {
    id: 2,
    name: 'Cheryl Thompson',
    avatar: CherylThompson,
    bio: 'Cheryl is a cybersecurity strategist and former NSA analyst. She now consults on secure architecture and leads the Detroit chapter of ISACA.',
    linkedIn: 'https://www.linkedin.com/in/cherylthompson',
    organization: 'Deloitte',
    position: 'Cybersecurity Principal',
    session: {
      title: 'Zero Trust in the Age of Generative AI',
      abstract:
        'The security landscape is shifting. Are your defenses keeping up?',
      description:
        'Generative AI introduces new attack surfaces — prompt injection, data exfiltration through model outputs, and adversarial fine-tuning. Cheryl breaks down the zero-trust principles that matter most and how to retrofit them into existing enterprise architectures.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: '10:00',
      room: 'WCB 103',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 3,
    name: 'Gina Grant',
    avatar: GinaGrant,
    bio: 'Gina is a UX research lead who has shaped product experiences for over 2 million users. She specializes in inclusive design and accessibility for underserved communities.',
    linkedIn: 'https://www.linkedin.com/in/ginagrant',
    organization: 'Google',
    position: 'UX Research Lead',
    session: {
      title: 'Designing for Everyone: Inclusive UX in Practice',
      abstract:
        'Move beyond compliance — design experiences that genuinely include.',
      description:
        'Accessibility is more than screen readers and color contrast. Gina walks through her research-driven framework for inclusive design, covering cognitive load, cultural context, and economic access. Attendees leave with a toolkit they can use Monday morning.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: '11:00',
      room: 'WCB 103',
      sessionDuration: 45,
    },
    isWTM: true,
    isGDE: true,
  },
  {
    id: 4,
    name: 'Ida Byrd-Hill',
    avatar: IdaByrdHill,
    bio: 'Ida is the CEO of Automation Workz, a workforce development organization that has trained thousands of Detroiters in emerging technologies. She is a nationally recognized thought leader in STEAM education and economic mobility.',
    linkedIn: 'https://www.linkedin.com/in/idabyrdhill',
    organization: 'Automation Workz',
    position: 'CEO & Founder',
    session: {
      title: 'Closing the Digital Divide Through STEAM Education',
      abstract:
        'Building pathways to tech careers for underserved communities.',
      description:
        "Ida shares the Automation Workz model for creating accessible on-ramps to tech careers — from self-driving car training programs to AI literacy bootcamps. This talk examines what works, what doesn't, and why Detroit is ground zero for the future of inclusive tech education.",
      tags: ['In-person', 'Leadership'],
      track: 'Leadership',
      time: '10:00',
      room: 'WCB 275',
      sessionDuration: 60,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 5,
    name: 'Jenna Ritten',
    avatar: JennaRitten,
    bio: 'Jenna is a full-stack developer and open-source contributor who maintains several popular React libraries. She teaches web development at University of Michigan-Dearborn.',
    linkedIn: 'https://www.linkedin.com/in/jennaritten',
    organization: 'University of Michigan-Dearborn',
    position: 'Adjunct Professor & Developer',
    session: {
      title: 'Modern React Patterns That Actually Scale',
      abstract:
        'Server components, suspense boundaries, and the patterns teams actually need.',
      description:
        'The React ecosystem moves fast. Jenna cuts through the hype to focus on patterns that have proven themselves in production: strategic code splitting, composition over prop drilling, and server component architecture. Live coding included.',
      tags: ['In-person', 'Build with AI'],
      track: 'Build with AI',
      time: '11:00',
      room: 'SB 120',
      sessionDuration: 45,
    },
    isWTM: true,
    isGDE: false,
  },
  {
    id: 6,
    name: 'Jeseekia Vaughn',
    avatar: JeseekiaVaughn,
    bio: 'Jeseekia is a community organizer and tech educator who bridges the gap between grassroots activism and digital tools. She runs coding workshops for women and non-binary individuals across Metro Detroit.',
    linkedIn: 'https://www.linkedin.com/in/jeseekiavaughn',
    organization: 'Code313',
    position: 'Community Director',
    session: {
      title: 'Tech as a Tool for Community Power',
      abstract:
        'When communities own their digital infrastructure, everything changes.',
      description:
        'Jeseekia explores how Detroit neighborhoods are using open-source tools, civic tech, and AI to solve real problems — from tracking vacant lots to building mutual aid networks. This is tech in service of people, not the other way around.',
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '10:00',
      room: 'Town Square',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 7,
    name: 'Kamille Tynes',
    avatar: KamilleTynes,
    bio: 'Kamille is a data scientist specializing in NLP and conversational AI. She has published research on reducing bias in large language models.',
    linkedIn: 'https://www.linkedin.com/in/kamilletynes',
    organization: 'IBM',
    position: 'Senior Data Scientist',
    session: {
      title: 'De-Biasing LLMs: From Theory to Production',
      abstract:
        'Practical techniques for making language models more equitable.',
      description:
        'Large language models inherit the biases of their training data. Kamille walks through techniques her team uses at IBM to detect, measure, and mitigate bias — including RLHF strategies, evaluation frameworks, and red-teaming methodologies that work at scale.',
      tags: ['In-person', 'Build with AI'],
      track: 'Build with AI',
      time: '1:00',
      room: 'SB 120',
      sessionDuration: 45,
    },
    isWTM: true,
    isGDE: false,
  },
  {
    id: 8,
    name: 'Lawrielle West',
    avatar: LawrielleWest,
    bio: 'Lawrielle is a product manager who transitioned from journalism to tech. She now leads product strategy for AI-powered tools and advocates for diverse representation in product teams.',
    linkedIn: 'https://www.linkedin.com/in/lawriellewest',
    organization: 'Rocket Mortgage',
    position: 'Senior Product Manager',
    session: {
      title: 'From Journalist to PM: Career Pivots That Work',
      abstract: 'Your non-traditional background is your superpower.',
      description:
        'Lawrielle shares the frameworks that helped her pivot from a journalism career into product management — and why the storytelling skills she built in newsrooms make her a stronger PM. Practical advice for anyone considering a career switch into tech.',
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '11:00',
      room: 'Town Square',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 9,
    name: 'Lorrena Black',
    avatar: LorrenaBlack,
    bio: 'Lorrena is a cloud infrastructure engineer with deep expertise in Kubernetes, Terraform, and multi-cloud architectures. She is a Google Developer Expert for Cloud.',
    linkedIn: 'https://www.linkedin.com/in/lorrenablack',
    organization: 'Stellantis',
    position: 'Principal Cloud Engineer',
    session: {
      title: 'Multi-Cloud Without the Mess',
      abstract: "Taming infrastructure complexity when one cloud isn't enough.",
      description:
        'Stellantis runs workloads across AWS, GCP, and Azure. Lorrena shares the hard-won lessons from building a unified platform layer — including what abstractions actually help, when to embrace cloud-native, and the tooling that keeps her team sane.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: '1:00',
      room: 'WCB 103',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: true,
  },
  {
    id: 10,
    name: 'Marilyn Nash',
    avatar: MarilynNash,
    bio: 'Marilyn is a serial entrepreneur who has founded three tech startups, two of which were acquired. She now advises early-stage founders on go-to-market strategy.',
    linkedIn: 'https://www.linkedin.com/in/marilynnash',
    organization: 'Nash Ventures',
    position: 'Founder & Advisor',
    session: {
      title: 'The First 100 Customers: What Nobody Tells You',
      abstract: 'Forget scale — get your first 100 customers right.',
      description:
        'Marilyn breaks down the strategies that actually work for early customer acquisition in B2B and B2C tech. No growth hacking gimmicks — just the unglamorous, repeatable tactics that got her three startups to product-market fit.',
      tags: ['In-person', 'Leadership'],
      track: 'Leadership',
      time: '11:00',
      room: 'WCB 275',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 11,
    name: 'Tatiana Jackson',
    avatar: TatianaJackson,
    bio: 'Tatiana is a machine learning engineer focused on computer vision applications in healthcare. She volunteers as a mentor for AI bootcamp students.',
    linkedIn: 'https://www.linkedin.com/in/tatianajackson',
    organization: 'Blue Cross Blue Shield of Michigan',
    position: 'ML Engineer',
    session: {
      title: 'Computer Vision in Healthcare: Saving Lives with Pixels',
      abstract: 'How medical imaging AI is changing patient outcomes.',
      description:
        'Tatiana shares real-world case studies of computer vision models detecting cancer earlier, predicting complications, and reducing diagnostic errors. She also addresses the unique challenges of deploying AI in HIPAA-regulated environments.',
      tags: ['In-person', 'Build with AI'],
      track: 'Build with AI',
      time: '2:00',
      room: 'SB 120',
      sessionDuration: 45,
    },
    isWTM: true,
    isGDE: false,
  },
  {
    id: 12,
    name: 'Tinetta Wilson',
    avatar: TinettaWilson,
    bio: 'Tinetta is a DevOps leader who has built CI/CD pipelines serving 50+ development teams. She speaks internationally on platform engineering and developer experience.',
    linkedIn: 'https://www.linkedin.com/in/tinettawilson',
    organization: 'General Motors',
    position: 'Director of Platform Engineering',
    session: {
      title: 'Platform Engineering: Building for Developer Joy',
      abstract: 'The best platform is the one developers actually want to use.',
      description:
        "At GM, Tinetta's team serves hundreds of developers. She shares the principles behind their internal developer platform — from golden paths to self-service infrastructure — and how focusing on developer experience reduced deployment failures by 73%.",
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: '2:00',
      room: 'WCB 103',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 13,
    name: 'Tracie Hightower',
    avatar: TracieHightower,
    bio: 'Tracie is a startup attorney turned tech CEO. She advises founders on IP strategy, fundraising, and building diverse founding teams.',
    linkedIn: 'https://www.linkedin.com/in/traciehightower',
    organization: 'Hightower Legal Tech',
    position: 'CEO',
    session: {
      title: 'Legal Landmines Every Founder Should Avoid',
      abstract: "The mistakes that kill startups aren't always technical.",
      description:
        'Tracie has seen hundreds of startups stumble on legal basics — from IP ownership disputes to cofounding agreement catastrophes. This session covers the top 10 legal mistakes tech founders make and the simple steps to avoid them.',
      tags: ['In-person', 'Leadership'],
      track: 'Leadership',
      time: '1:00',
      room: 'WCB 278',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 14,
    name: 'Yana Grant',
    avatar: YanaGrant,
    bio: 'Yana is a frontend developer and design systems architect who has built component libraries used by thousands of developers. She is passionate about bridging design and engineering.',
    linkedIn: 'https://www.linkedin.com/in/yanagrant',
    organization: 'Dell Technologies',
    position: 'Design Systems Lead',
    session: {
      title: "Design Systems That Don't Suck",
      abstract: 'Building component libraries developers actually adopt.',
      description:
        "Yana shares the hard lessons from building Dell's internal design system — from token architecture to documentation that developers read. Learn why most design systems fail at adoption and the counterintuitive strategies that drive usage.",
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '1:00',
      room: 'Town Square',
      sessionDuration: 45,
    },
    isWTM: true,
    isGDE: false,
  },
  {
    id: 15,
    name: 'Zipporah Abla',
    avatar: ZipporahAbla,
    bio: 'Zipporah is a robotics engineer working on autonomous vehicle perception systems. She holds 3 patents in sensor fusion technology.',
    linkedIn: 'https://www.linkedin.com/in/zipporahabla',
    organization: 'Argo AI',
    position: 'Robotics Engineer',
    session: {
      title: 'The Future of Autonomous Mobility in Detroit',
      abstract:
        "Detroit built the car. Now it's building the robot that drives it.",
      description:
        "Zipporah explores how Detroit's automotive legacy uniquely positions the city for the autonomous vehicle revolution. She covers the state of sensor fusion, edge computing challenges, and why diverse engineering teams build safer autonomous systems.",
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: '3:00',
      room: 'WCB 103',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 16,
    name: 'Terrell McKinney',
    avatar: TerrellMcKinney,
    bio: 'Terrell is a state legislator and tech advocate who champions digital equity policy. He connects technologists with civic opportunities.',
    linkedIn: 'https://www.linkedin.com/in/terrellmckinney',
    organization: 'Michigan State Legislature',
    position: 'State Representative',
    session: {
      title: 'Policy Meets Code: Tech Advocacy That Moves the Needle',
      abstract:
        'How technologists can shape the policies that shape technology.',
      description:
        'Terrell breaks down how tech workers can effectively advocate for digital equity, broadband access, and AI regulation. From testimony tips to coalition-building, this session equips attendees to be as effective in the statehouse as they are in the codebase.',
      tags: ['In-person', 'Leadership'],
      track: 'Leadership',
      time: '2:00',
      room: 'WCB 275',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 17,
    name: 'Saamer Mansoor',
    avatar: SaamerMansoor,
    bio: 'Saamer is a Google Developer Expert in Web Technologies and a full-stack developer who focuses on performance optimization and developer tooling.',
    linkedIn: 'https://www.linkedin.com/in/saamermansoor',
    organization: 'Compass Detroit',
    position: 'Lead Developer & GDE',
    session: {
      title: 'Web Performance Deep Dive: Core Web Vitals in 2026',
      abstract: "Your site is slower than you think. Let's fix that.",
      description:
        'Saamer walks through the latest Core Web Vitals metrics, common performance pitfalls in modern React apps, and the toolchain for diagnosing and fixing them. Expect live profiling, real production examples, and actionable takeaways.',
      tags: ['In-person', 'Build with AI'],
      track: 'Build with AI',
      time: '3:00',
      room: 'SB 120',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: true,
  },
  {
    id: 18,
    name: 'Umelo Onyejiaka',
    avatar: UmeloOnyejiaka,
    bio: 'Umelo is a solutions architect specializing in event-driven systems and microservices. He has led migrations from monolith to microservices at multiple Fortune 500 companies.',
    linkedIn: 'https://www.linkedin.com/in/umeloonyejiaka',
    organization: 'DTE Energy',
    position: 'Solutions Architect',
    session: {
      title: 'Event-Driven Architecture: Beyond the Buzzword',
      abstract:
        "When events make sense, when they don't, and how to tell the difference.",
      description:
        'Umelo shares practical lessons from building event-driven systems at DTE Energy — including the hidden complexity of eventual consistency, schema evolution strategies, and the observability tooling that makes event-driven systems manageable.',
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '2:00',
      room: 'Town Square',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 19,
    name: 'Desmond Baker Jr',
    avatar: DesmondBakerJr,
    bio: 'Desmond is a mobile engineer and community builder who organizes Android meetups across Michigan. He focuses on Kotlin Multiplatform and Jetpack Compose.',
    linkedIn: 'https://www.linkedin.com/in/desmondbakerjr',
    organization: 'United Wholesale Mortgage',
    position: 'Senior Mobile Engineer',
    session: {
      title: 'Kotlin Multiplatform: One Codebase, Every Screen',
      abstract:
        'Ship to Android, iOS, and desktop from a single Kotlin codebase.',
      description:
        'Desmond demonstrates how his team at UWM uses Kotlin Multiplatform to share business logic across platforms while keeping native UI. He covers the architecture decisions, testing strategies, and the state of the KMP ecosystem in 2026.',
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '3:00',
      room: 'Town Square',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 20,
    name: 'Rishiraj Sarkar',
    avatar: RishirajSarkar,
    bio: 'Rishiraj is a graduate researcher in AI alignment and safety. His work focuses on making AI systems more interpretable and controllable.',
    linkedIn: 'https://www.linkedin.com/in/rishirajsarkar',
    organization: 'University of Michigan',
    position: 'AI Research Fellow',
    session: {
      title: 'AI Alignment for Practitioners: What You Need to Know',
      abstract:
        "AI safety isn't just for researchers — it's for every engineer shipping AI.",
      description:
        "Rishiraj translates cutting-edge AI alignment research into practical guidance for engineers building AI products. He covers interpretability tools, evaluation frameworks for model safety, and the red-teaming practices that should be in every AI team's workflow.",
      tags: ['In-person', 'AI Foundations'],
      track: 'AI Foundations',
      time: '10:00',
      room: 'WCB 105',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 21,
    name: 'Hernando Gonzalez Malabet',
    avatar: HernandoGonzalezMalabet,
    bio: 'Hernando is a creative technologist who blends art and code. He builds interactive installations and generative art using WebGL, Three.js, and machine learning.',
    linkedIn: 'https://www.linkedin.com/in/hernandomalabet',
    organization: 'College for Creative Studies',
    position: 'Creative Technologist',
    session: {
      title: 'Generative Art Meets AI: Creative Coding in 2026',
      abstract: 'Where code becomes canvas and algorithms become artists.',
      description:
        'Hernando live-codes a generative art piece using AI models and WebGL. This session explores the intersection of creative expression and machine learning — from style transfer to latent space exploration — showing how anyone can use code as a creative medium.',
      tags: ['In-person', 'AI Foundations'],
      track: 'AI Foundations',
      time: '11:00',
      room: 'WCB 105',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 22,
    name: 'Priyal Sheth',
    avatar: PriyalSheth,
    bio: 'Priyal is a data engineer and GDE for Google Cloud who specializes in building real-time data pipelines. She speaks frequently on BigQuery, Dataflow, and data mesh architectures.',
    linkedIn: 'https://www.linkedin.com/in/priyalsheth',
    organization: 'Altair',
    position: 'Senior Data Engineer',
    session: {
      title: 'Real-Time Data Pipelines on Google Cloud',
      abstract: 'From batch to streaming — without losing your mind.',
      description:
        "Priyal walks through Altair's journey from nightly batch jobs to real-time streaming analytics. She covers Pub/Sub, Dataflow, and BigQuery streaming inserts — plus the operational lessons that textbooks don't teach.",
      tags: ['In-person', 'AI Foundations'],
      track: 'AI Foundations',
      time: '1:00',
      room: 'WCB 105',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: true,
  },
  {
    id: 23,
    name: 'Silviya Topchiyska',
    avatar: SilviyaTopchiyska,
    bio: 'Silviya is a Women Techmakers Ambassador and senior engineer who focuses on developer advocacy and building inclusive engineering cultures.',
    linkedIn: 'https://www.linkedin.com/in/silviyatopchiyska',
    organization: 'Honigman LLP',
    position: 'Technology Director',
    session: {
      title: 'Building Engineering Cultures Where Everyone Thrives',
      abstract: "Culture isn't ping pong tables — it's how you treat people.",
      description:
        'Silviya shares research-backed strategies for building engineering teams where diverse contributors do their best work. From psychological safety to code review practices, she covers the small changes that create big cultural shifts.',
      tags: ['In-person', 'Leadership'],
      track: 'Leadership',
      time: '3:00',
      room: 'WCB 275',
      sessionDuration: 45,
    },
    isWTM: true,
    isGDE: false,
  },
  {
    id: 24,
    name: 'Tabice Ward',
    avatar: TabiceWard,
    bio: 'Tabice is a QA automation lead who has transformed testing cultures at multiple organizations. She is a vocal advocate for shifting quality left in the development process.',
    linkedIn: 'https://www.linkedin.com/in/tabiceward',
    organization: 'Little Caesars',
    position: 'QA Automation Lead',
    session: {
      title: 'Shift Left, Ship Right: Modern Testing Strategies',
      abstract:
        "The fastest code is the code you don't have to fix in production.",
      description:
        "Tabice shares how Little Caesars' engineering team reduced production incidents by 60% through strategic test automation. Covers contract testing, visual regression, and the testing pyramid that actually works for modern web applications.",
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '4:00',
      room: 'Town Square',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
]
