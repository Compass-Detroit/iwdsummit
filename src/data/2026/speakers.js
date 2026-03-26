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
import IdaByrdHill from './assets/images/speakers/IdaByrd-Hill.webp'
import JennaRitten from './assets/images/speakers/JennaRitten.webp'
import JeseekiaVaughn from './assets/images/speakers/JeseekiaVaughn.webp'
import MarilynNash from './assets/images/speakers/MarilynNash.webp'
import TatianaJackson from './assets/images/speakers/TatianaJackson.webp'
import TracieHightower from './assets/images/speakers/TracieHightower.webp'
import YanaGrant from './assets/images/speakers/YanaGrant.webp'
import UmeloOnyejiaka from './assets/images/speakers/UmeloOnyejiaka.webp'
import TabiceWard from './assets/images/speakers/TabiceWard.webp'
import BrittanieDabney from './assets/images/speakers/BrittanieDabney.jpg'
import NaghamAlsamari from './assets/images/speakers/NaghamAlsamari.webp'
import ChericeCaldwellWilliams from './assets/images/speakers/ChericeCaldwell-Williams.webp'
import DrEmilyJacobs from './assets/images/speakers/DrEmilyJacobs.webp'
// New 2026 Speaker Headshots
import BandhanKaur from './assets/images/speakers/BandhanKaur.jpg'
import BryneBerry from './assets/images/speakers/BryneBerry.jpg'
import DichondraJohnson from './assets/images/speakers/DichondraJohnson.jpg'
import DonnaBell from './assets/images/speakers/DonnaBell.png'
import HodaSolati from './assets/images/speakers/HodaSolati.jpg'
import JahsiahKidd from './assets/images/speakers/JahsiahKidd.jpeg'
import KendallBraxton from './assets/images/speakers/KendallBraxton.jpg'
import LilahKole1 from './assets/images/speakers/LilahKole-1.png'
import LilahKole2 from './assets/images/speakers/LilahKole-2.jpeg'
import OnorioCatenacci from './assets/images/speakers/OnorioCatenacci.jpg'
import RaniaHoteit from './assets/images/speakers/RaniaHoteit.jpg'
import RashedaWilliams from './assets/images/speakers/RashedaWilliams.jpg'
import RobinKinnie from './assets/images/speakers/RobinKinnie.jpg'
import ShalondaOwens from './assets/images/speakers/ShalondaOwens.jpeg'
import SheneeliaLogan from './assets/images/speakers/SheneeliaLogan.png'
import ShimaSolati from './assets/images/speakers/ShimaSolati.jpg'
import TalonaJohnson from './assets/images/speakers/TalonaJohnson.jpeg'
import VitalAnne from './assets/images/speakers/VitalAnne.jpg'
import YeshaPatel from './assets/images/speakers/YeshaPatel.png'
import YuktiGoyal from './assets/images/speakers/YuktiGoyal.jpg'
import EberechiOgbuaku from './assets/images/speakers/EberechiOgbuaku.jpeg'
import RamonaFellmy from './assets/images/speakers/RamonaFellmy.png'
import RishirajSarkar from './assets/images/speakers/RishirajSarkar.webp'
import DavidCardozo from './assets/images/speakers/DavidCardozo.webp'
import MackHendricks from './assets/images/speakers/MackHendricks.jpeg'
import BryantDumas from './assets/images/speakers/BryantDumas.jpg'
import MaridyMazaira from './assets/images/speakers/MaridyMazaira.jpeg'

const rawSpeakersData = [
  {
    id: 1,
    name: 'Jenna Ritten',
    avatar: JennaRitten,
    bio: 'Jenna is the visionary behind Detroits Innovation Summit series and Founding Executive Director of Compass (Collective of Minority Professionals and STEAM Societies), the organization bringing together Michigans diverse tech talent to combat brain drain and create local opportunities. As Chief Developer Advocate & Architect at IBM Research, she leads IBMs technical community while scaling their global developer ecosystem from 2 million to 9 million members.A cornerstone of Michigans tech renaissance, Jenna serves as Co-Leader of Google Developer Group Detroit, lead organizer of Michigan DevFest (1,000+ attendees), and board member of Automation Workz. As a local leader in Michigans tech ecosystem since 2018, she pioneered hackathon culture in the region by introducing the first hackathons to both the AfroTech Conference in 2023 and Michigan DevFest in 2025, creating hands-on opportunities for developers to showcase their skills and solve real-world challenges.Through Compass partnerships with NSBE Detroit, SHPE Detroit, IBM, Google, DTE Energy, and other leading organizations, Jenna is building bridges between corporate innovation and community empowerment. Her mission: ensuring Michigans next generation of Black technologists not only have opportunities to excel but can do so without leaving the state they call home.Connect with Jenna to learn how Compass is transforming Michigans tech ecosystem, one community at a time.',
    linkedIn: 'https://www.linkedin.com/in/jennaritten',
    organization: 'IBM Research',
    position: 'Chief Developer Advocate & Architect',
    session: {
      title: 'Welcome & Opening Remarks',
      abstract:
        'Welcome and Opening Remarks by Compass Detroit, MCWT, Women Techmakers, GDG Detroit, NSBE Detroit, SHPE Detroit, DevOps Detroit, and Detroit Hacker House.',
      description:
        'Welcome and Opening Remarks by Compass Detroit, MCWT, Women Techmakers, GDG Detroit, NSBE Detroit, SHPE Detroit, DevOps Detroit, and Detroit Hacker House.',
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '09:00',
      room: 'Pizza Treat',
      sessionDuration: 10,
    },
    isWTM: true,
    isGDE: false,
  },
  {
    id: 2,
    name: 'Angela Richardson',
    avatar: AngelaRichardson,
    bio: 'Angela Richardson, CAE, is a strategic governance and programs executive with more than 20 years of experience leading national industry councils, executive peer networks, and board-driven organizations, facilitating high-trust national conversations for Fortune 1000 ESG, CSR, and social media executives on accountability, reputational risk, and long-term institutional impact, currently directing three national councils within the automotive sector while partnering with volunteer leaders to align strategy, strengthen member engagement, and shape long-range priorities, and bringing a governance and executive accountability perspective to emerging technology by engaging with AI and cybersecurity through the lens of institutional risk and long-term leadership responsibility while actively supporting mid-career women in tech as a member of the Michigan Council of Women in Technology and a graduate of its Reignite program.',
    linkedIn: 'https://www.linkedin.com/in/angelamrichardson/',
    organization: 'Specialty Equipment Marketing Association (SEMA)',
    position: 'Council Director',
    session: {
      title: 'Welcome & Opening Remarks',
      abstract:
        'Welcome and Opening Remarks by Compass Detroit, MCWT, Women Techmakers, GDG Detroit, NSBE Detroit, SHPE Detroit, DevOps Detroit, and Detroit Hacker House.',
      description:
        'Welcome and Opening Remarks by Compass Detroit, MCWT, Women Techmakers, GDG Detroit, NSBE Detroit, SHPE Detroit, DevOps Detroit, and Detroit Hacker House.',
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '09:00',
      room: 'Pizza Treat',
      sessionDuration: 10,
    },
    isWTM: true,
    isGDE: false,
  },
  {
    id: 3,
    name: 'Maridy Mazaira',
    avatar: MaridyMazaira,
    bio: 'Maridy Mazaira is a passionate community leader and advocate for STEM education, dedicated to empowering students and underrepresented communities to pursue meaningful careers in engineering and technology. As President of the Society of Hispanic Professional Engineers (SHPE) Detroit Chapter, she leads initiatives that bridge the gap between students and industry by creating opportunities for mentorship, networking, and professional growth.With a background from the University of Michigan-Dearborn, where she was recognized as a “Difference Maker,” Maridy has demonstrated a strong commitment to leadership, service, and community impact. She has played a key role in organizing large-scale events such as college fairs, STEM workshops, and professional development programs that connect students with real-world opportunities.Maridy is driven by a mission to create inclusive spaces where individuals feel supported, represented, and empowered to succeed. She believes that access to resources, guidance, and strong professional networks can transform lives. Through her work, she continues to inspire and uplift others, helping them build confidence and navigate their academic and career journeys with purpose.',
    linkedIn: 'https://www.linkedin.com/in/maridy-mazaira',
    organization: 'SHPE Detroit Professional',
    position: 'President',
    session: {
      title: 'Welcome & Opening Remarks',
      abstract:
        'Welcome and Opening Remarks by Compass Detroit, MCWT, Women Techmakers, GDG Detroit, NSBE Detroit, SHPE Detroit, DevOps Detroit, and Detroit Hacker House.',
      description:
        'Welcome and Opening Remarks by Compass Detroit, MCWT, Women Techmakers, GDG Detroit, NSBE Detroit, SHPE Detroit, DevOps Detroit, and Detroit Hacker House.',
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '09:00',
      room: 'Pizza Treat',
      sessionDuration: 10,
    },
    isWTM: true,
    isGDE: false,
  },
  {
    id: 4,
    name: 'Jeseekia Vaughn',
    avatar: JeseekiaVaughn,
    bio: 'Software Engineer passionate about growing the community through teaching, promoting STEM education, youth mentoring, and entrepreneurship, with a career progression from front end web development to full stack engineering including API development and vehicle connectivity, now focusing on AI and machine learning with goals of becoming a Machine Learning Engineer in the short term and pursuing a PhD in the long term, actively live streaming AI and ML studies and projects while co-hosting the trainX.ai podcast to help developers integrate AI tools, deeply involved in educating future and early career developers through bootcamps and organizations like Girl Develop It, and contributing to the Detroit tech ecosystem as a co-founder of Detroit Black Tech and organizer of the Hacking With The Homies Developer Conference, with extensive experience leading and speaking at meetups and large scale conferences including serving as the 2019 NSBE Convention Vice Chair for an event hosting around 15000 attendees, driven by a mission to reduce barriers for others entering tech and continuously building educational content through the upcoming MetaDevWorld platform.',
    linkedIn: 'https://www.linkedin.com/in/jeseekiavaughn',
    organization: 'Detroit Hacker House',
    position: 'Co-Founder',
    session: {
      title: 'Welcome & Opening Remarks',
      abstract:
        'Welcome and Opening Remarks by Compass Detroit, MCWT, Women Techmakers, GDG Detroit, NSBE Detroit, SHPE Detroit, DevOps Detroit, and Detroit Hacker House.',
      description:
        'Welcome and Opening Remarks by Compass Detroit, MCWT, Women Techmakers, GDG Detroit, NSBE Detroit, SHPE Detroit, DevOps Detroit, and Detroit Hacker House.',
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '09:00',
      room: 'Pizza Treat',
      sessionDuration: 10,
    },
    isWTM: true,
    isGDE: false,
  },
  {
    id: 5,
    name: 'Umelo Onyejiaka',
    avatar: UmeloOnyejiaka,
    bio: 'Umelo Onyejiaka is a cloud and DevOps engineer, community builder, and founder of DevOps Detroit, holding multiple industry certifications including AWS Certified Solutions Architect Professional, AWS Certified DevOps Engineer Professional, Certified Kubernetes Administrator, and Terraform Associate, whose work focuses on how people grow skills in the real world by emphasizing community driven learning, mentorship, and shared exposure over isolation, creating spaces through DevOps Detroit where individuals can build practical technical skills, gain confidence, and discover opportunities by learning alongside others, and advocating that collective growth strengthens the entire ecosystem, while speaking at the Detroit Black History Month Innovation Summit on how community driven learning accelerates skill development, creates opportunity, and transforms individual potential into collective impact.',
    linkedIn: 'https://www.linkedin.com/in/umeloonyejiaka',
    organization: 'DevOps Detroit',
    position: 'DevOps engineer',
    session: {
      title: 'Welcome & Opening Remarks',
      abstract:
        'Welcome and Opening Remarks by Compass Detroit, MCWT, Women Techmakers, GDG Detroit, NSBE Detroit, SHPE Detroit, DevOps Detroit, and Detroit Hacker House.',
      description:
        'Welcome and Opening Remarks by Compass Detroit, MCWT, Women Techmakers, GDG Detroit, NSBE Detroit, SHPE Detroit, DevOps Detroit, and Detroit Hacker House.',
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '09:00',
      room: 'Pizza Treat',
      sessionDuration: 10,
    },
    isWTM: true,
    isGDE: false,
  },
  {
    id: 6,
    name: 'Rishiraj Sarkar',
    avatar: RishirajSarkar,
    bio: `Experience in working with Network security, Trustworthy ML development, Hardware and Wifi security across various platforms and Cloud.Current Graduate student in University of Michigan, studying Cybersecurity and information assurance with focus on Network security, Cloud Security, Trustworthy AI and Security by design architecturesEx - Cyber strategy consultant at Deloitte, facilitating data and privacy services to multi-national clients.Cybersecurity enthusiast with experience in Kali Linux, Python, SQL and SIEM tools. Well versed in privacy policies like GDPR, CPRA and more.Trained in Enterprise tools like ServiceNow and Aravo.Two years experience in Web development.Motivated to integrate security by design systems across the industry and drive growth towards trustworthy ML.`,
    linkedIn: 'https://www.linkedin.com/in/risarkar/',
    organization: 'GDG Detroit',
    position: 'Co-Leader',
    session: {
      title: 'Welcome & Opening Remarks',
      abstract:
        'Welcome and Opening Remarks by Compass Detroit, MCWT, Women Techmakers, GDG Detroit, NSBE Detroit, SHPE Detroit, DevOps Detroit, and Detroit Hacker House.',
      description:
        'Welcome and Opening Remarks by Compass Detroit, MCWT, Women Techmakers, GDG Detroit, NSBE Detroit, SHPE Detroit, DevOps Detroit, and Detroit Hacker House.',
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '09:00',
      room: 'Pizza Treat',
      sessionDuration: 10,
    },
    isWTM: true,
    isGDE: false,
  },

  {
    id: 7,
    name: 'Angela Richardson',
    avatar: AngelaRichardson,
    bio: 'Angela Richardson, CAE, is a strategic governance and programs executive with more than 20 years of experience leading national industry councils, executive peer networks, and board-driven organizations, facilitating high-trust national conversations for Fortune 1000 ESG, CSR, and social media executives on accountability, reputational risk, and long-term institutional impact, currently directing three national councils within the automotive sector while partnering with volunteer leaders to align strategy, strengthen member engagement, and shape long-range priorities, and bringing a governance and executive accountability perspective to emerging technology by engaging with AI and cybersecurity through the lens of institutional risk and long-term leadership responsibility while actively supporting mid-career women in tech as a member of the Michigan Council of Women in Technology and a graduate of its Reignite program.',
    linkedIn: 'https://www.linkedin.com/in/angelamrichardson/',
    organization: 'Specialty Equipment Marketing Association (SEMA)',
    position: 'Council Director',
    session: {
      title:
        'Innovation Summit Panel Discussion: Who Designs the System? Women Defining the Future of Tech',
      abstract:
        'This panel explores how real impact in technology extends beyond execution into influence where decisions about funding, hiring, and strategic direction are made, featuring women leaders across manufacturing, aerospace, AI, enterprise software, and STEM education, and highlighting the shift from delivering results to shaping organizational and industry futures, while providing attendees with practical insights on navigating influence, expanding their presence in decision making spaces, and intentionally positioning themselves for transformative impact in tech.',
      description:
        'True impact in tech - the kind that changes industries like energy, healthcare, and manufacturing -doesn’t just happen at the keyboard. It is nurtured in the spaces where funding is allocated, rears itself where hiring standards are set, and leaves deep marks as credit, attribution, or kudos are given. Most of us know how to deliver. We lead projects, solve problems, maintain critical systems, and get results. But we don’t always ask: Who is actually deciding what gets built? Who is in the room when funding gets allocated? Who is shaping the future vectors for organizations and industries? Join us for a panel featuring four women working across manufacturing, aerospace, enterprise software, AI, and STEM education who have navigated with influence inside complex organizations. Enter a practical discussion that arcs from delivering results to shaping direction and what that shift actually requires from a twenty-first century woman in tech. You’ll leave seeing your own environment differently and better equipped to move with intention and belonging where transformational decisions are being made. Moderator: Angela Richardson, CAE: Governance & Council Engagement Director, SEMA Panelists: Talona Johnson, MBA, PMP, CMQ/OE, International Product Manager, General Motors Vital Anne, Program Director, Siemens Industries Software Bryne Berry, MSc Mechanical Engineer, Founder and President of Black Girls Do Science® Bandhan Kaur, Data and AI Architect at Slalom',
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '09:10',
      room: 'Pizza Treat',
      sessionDuration: 50,
    },
    isWTM: true,
    isGDE: false,
  },
  {
    id: 8,
    name: 'Talona Johnson MBA, PMP, CMQ/OE',
    avatar: TalonaJohnson,
    bio: 'International Product Manager at General Motors',
    linkedIn: 'https://www.linkedin.com/in/talona-johnson/',
    organization: 'General Motors',
    position: 'International Product Manager',
    session: {
      title:
        'Innovation Summit Panel Discussion: Who Designs the System? Women Defining the Future of Tech',
      abstract:
        'This panel explores how real impact in technology extends beyond execution into influence where decisions about funding, hiring, and strategic direction are made, featuring women leaders across manufacturing, aerospace, AI, enterprise software, and STEM education, and highlighting the shift from delivering results to shaping organizational and industry futures, while providing attendees with practical insights on navigating influence, expanding their presence in decision making spaces, and intentionally positioning themselves for transformative impact in tech.',
      description:
        'True impact in tech - the kind that changes industries like energy, healthcare, and manufacturing -doesn’t just happen at the keyboard. It is nurtured in the spaces where funding is allocated, rears itself where hiring standards are set, and leaves deep marks as credit, attribution, or kudos are given. Most of us know how to deliver. We lead projects, solve problems, maintain critical systems, and get results. But we don’t always ask: Who is actually deciding what gets built? Who is in the room when funding gets allocated? Who is shaping the future vectors for organizations and industries? Join us for a panel featuring four women working across manufacturing, aerospace, enterprise software, AI, and STEM education who have navigated with influence inside complex organizations. Enter a practical discussion that arcs from delivering results to shaping direction and what that shift actually requires from a twenty-first century woman in tech. You’ll leave seeing your own environment differently and better equipped to move with intention and belonging where transformational decisions are being made. Moderator: Angela Richardson, CAE: Governance & Council Engagement Director, SEMA Panelists: Talona Johnson, MBA, PMP, CMQ/OE, International Product Manager, General Motors Vital Anne, Program Director, Siemens Industries Software Bryne Berry, MSc Mechanical Engineer, Founder and President of Black Girls Do Science® Bandhan Kaur, Data and AI Architect at Slalom',
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '09:10',
      room: 'Pizza Treat',
      sessionDuration: 50,
    },
    isWTM: true,
    isGDE: false,
  },
  {
    id: 9,
    name: 'Vital Anne',
    avatar: VitalAnne,
    bio: 'With over 30 years of professional experience spanning engineering, design, crash and safety analysis, software product management, quality assurance, and product delivery, Vital Anne brings a multidisciplinary perspective to building and leading technology driven organizations, having worked with both large OEMs and mid sized consulting firms across the automotive and software industries, currently serving as a Program Director responsible for a large suite of software products across two business lines where she leads cross functional teams to coordinate product delivery, standardize policies and processes, ensure timely releases, and maintain high quality standards, operating at the intersection of technology, strategy, and people to transform ideas into measurable results, while remaining passionate about inclusive leadership and building high performing teams, holding a Master’s degree in Mechanical Engineering from Purdue University, and actively contributing to community leadership as the elected School Board President of a large public school district in Southeast Michigan where she advocates for strong public education and student success.',
    linkedIn: 'https://www.linkedin.com/in/vital-anne-bb48554/',
    organization: 'Siemens Industries Software',
    position: 'Program Director',
    session: {
      title:
        'Innovation Summit Panel Discussion: Who Designs the System? Women Defining the Future of Tech',
      abstract:
        'This panel explores how real impact in technology extends beyond execution into influence where decisions about funding, hiring, and strategic direction are made, featuring women leaders across manufacturing, aerospace, AI, enterprise software, and STEM education, and highlighting the shift from delivering results to shaping organizational and industry futures, while providing attendees with practical insights on navigating influence, expanding their presence in decision making spaces, and intentionally positioning themselves for transformative impact in tech.',
      description:
        'True impact in tech - the kind that changes industries like energy, healthcare, and manufacturing -doesn’t just happen at the keyboard. It is nurtured in the spaces where funding is allocated, rears itself where hiring standards are set, and leaves deep marks as credit, attribution, or kudos are given. Most of us know how to deliver. We lead projects, solve problems, maintain critical systems, and get results. But we don’t always ask: Who is actually deciding what gets built? Who is in the room when funding gets allocated? Who is shaping the future vectors for organizations and industries? Join us for a panel featuring four women working across manufacturing, aerospace, enterprise software, AI, and STEM education who have navigated with influence inside complex organizations. Enter a practical discussion that arcs from delivering results to shaping direction and what that shift actually requires from a twenty-first century woman in tech. You’ll leave seeing your own environment differently and better equipped to move with intention and belonging where transformational decisions are being made. Moderator: Angela Richardson, CAE: Governance & Council Engagement Director, SEMA Panelists: Talona Johnson, MBA, PMP, CMQ/OE, International Product Manager, General Motors Vital Anne, Program Director, Siemens Industries Software Bryne Berry, MSc Mechanical Engineer, Founder and President of Black Girls Do Science® Bandhan Kaur, Data and AI Architect at Slalom',
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '09:10',
      room: 'Pizza Treat',
      sessionDuration: 50,
    },
    isWTM: true,
    isGDE: false,
  },
  {
    id: 10,
    name: 'Bryne Berry',
    avatar: BryneBerry,
    bio: 'Bryne Berry holds both a Master of Science and Bachelor of Science in Mechanical Engineering with a minor in English from the University of Iowa and currently works as an engineer with GE Aerospace, having founded Black Girls Do Science while in college to challenge stereotypes about who can be scientists and to inspire underrepresented girls in grades 4 through 8 to pursue STEAM fields, originally from Des Moines, Iowa and now based in Detroit where she has lived for the past five years and enjoys restoring her historic home.',
    linkedIn: 'https://www.linkedin.com/in/bryne-berry/',
    organization: 'GE Aerospace',
    position: 'Staff Engineer',
    session: {
      title:
        'Innovation Summit Panel Discussion: Who Designs the System? Women Defining the Future of Tech',
      abstract:
        'This panel explores how real impact in technology extends beyond execution into influence where decisions about funding, hiring, and strategic direction are made, featuring women leaders across manufacturing, aerospace, AI, enterprise software, and STEM education, and highlighting the shift from delivering results to shaping organizational and industry futures, while providing attendees with practical insights on navigating influence, expanding their presence in decision making spaces, and intentionally positioning themselves for transformative impact in tech.',
      description:
        'True impact in tech - the kind that changes industries like energy, healthcare, and manufacturing -doesn’t just happen at the keyboard. It is nurtured in the spaces where funding is allocated, rears itself where hiring standards are set, and leaves deep marks as credit, attribution, or kudos are given. Most of us know how to deliver. We lead projects, solve problems, maintain critical systems, and get results. But we don’t always ask: Who is actually deciding what gets built? Who is in the room when funding gets allocated? Who is shaping the future vectors for organizations and industries? Join us for a panel featuring four women working across manufacturing, aerospace, enterprise software, AI, and STEM education who have navigated with influence inside complex organizations. Enter a practical discussion that arcs from delivering results to shaping direction and what that shift actually requires from a twenty-first century woman in tech. You’ll leave seeing your own environment differently and better equipped to move with intention and belonging where transformational decisions are being made. Moderator: Angela Richardson, CAE: Governance & Council Engagement Director, SEMA Panelists: Talona Johnson, MBA, PMP, CMQ/OE, International Product Manager, General Motors Vital Anne, Program Director, Siemens Industries Software Bryne Berry, MSc Mechanical Engineer, Founder and President of Black Girls Do Science® Bandhan Kaur, Data and AI Architect at Slalom',
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '09:10',
      room: 'Pizza Treat',
      sessionDuration: 50,
    },
    isWTM: true,
    isGDE: false,
  },
  {
    id: 11,
    name: 'Mack Hendricks',
    avatar: MackHendricks,
    bio: 'I have been involved in technology since my dad decided to purchase me a Commodore Vic 20 in 1984 - I was hooked! In particular, Ive always been interested in telecommunications. I remember my first modem. It was a Commodore Hayes 300 Baud Modem.I have been in few different technical positions, but I have spent the last 15 years at Sun Microsystems and Oracle primarily focused on positioning and architecting enterprise level middleware solutions for Fortune 500 companies.In parallel, Ive been a technical advisor for a few different projects and companies with a focus on OpenSource VoIP technologies such as Asterisk, FreeSwitch, A2Billing, Vicidial and Kamailio.',
    linkedIn: 'https://www.linkedin.com/in/mackhendricks',
    organization: 'Detroit Hacker House',
    position: 'Founder and Director of Engineering',
    session: {
      title: 'Linux on the Cloud with AWS',
      abstract: 'Hands-on workshop exploring Linux on the Cloud with AWS.',
      description:
        'Join this hands-on workshop to explore Linux on the Cloud with AWS, covering cloud infrastructure, deployment strategies, and practical exercises.',
      tags: ['In-person', 'Build with AI'],
      track: 'Build with AI',
      time: '10:00',
      room: 'Pizza Pizza',
      sessionDuration: 90,
    },
    isWTM: true,
    isGDE: false,
  },
  {
    id: 12,
    name: 'Bryant Dumas',
    avatar: BryantDumas,
    bio: 'Bryant Dumas Jr. is a cloud strategist, who leads the DevOps Detroit Cloud Pathways Program. He has a background in network engineering, and has witnessed the critical role networking plays in both small and large-scale environments. Including on-prem and hybrid infrastructures.',
    linkedIn: 'https://www.linkedin.com/in/bryantdumas-jr/',
    organization: 'MANTECH',
    position: 'Cloud Engineer',
    session: {
      title: 'Linux on the Cloud with AWS',
      abstract: 'Hands-on workshop exploring Linux on the Cloud with AWS.',
      description:
        'Join this hands-on workshop to explore Linux on the Cloud with AWS, covering cloud infrastructure, deployment strategies, and practical exercises.',
      tags: ['In-person', 'Build with AI'],
      track: 'Build with AI',
      time: '10:00',
      room: 'Pizza Pizza',
      sessionDuration: 90,
    },
    isWTM: true,
    isGDE: false,
  },
  {
    id: 13,
    name: 'Ida Byrd-Hill',
    avatar: IdaByrdHill,
    bio: 'Ida is the CEO of Automation Workz, a workforce development organization that has trained thousands of Detroiters in emerging technologies. She is a nationally recognized thought leader in STEAM education and economic mobility.',
    linkedIn: 'https://www.linkedin.com/in/idabyrdhill',
    organization: 'Automation Workz',
    position: 'CEO & Founder',
    session: {
      title: 'AI - Your Career Strategist',
      abstract:
        'This session teaches women in tech to utilize AI as a career strategist for clarifying professional direction and strengthening personal branding. Attendees gain actionable strategies and repeatable frameworks to increase visibility and navigate growth within the evolving technology landscape.',
      description:
        'AI isn’t just reshaping technology—it’s reshaping how careers are built. In this session, women in tech will learn how to use AI as a practical career strategist to clarify direction, strengthen their professional brand, and position themselves for new opportunities. Through real-world use cases and guided prompts, attendees will leave with actionable strategies to navigate career growth, increase visibility, and make more confident decisions in a rapidly evolving tech landscape. LEARNING OBJECTIVES: • Apply AI tools to clarify career goals and identify growth opportunities • Use AI to strengthen personal branding and professional communication • Leverage AI for interview preparation, networking, and career advancement • Develop a repeatable approach to using AI as an ongoing career strategy tool.',
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '10:00',
      room: 'Pizza Treat',
      sessionDuration: 30,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 14,
    name: 'Marilyn Nash',
    avatar: MarilynNash,
    bio: 'Marilyn is a serial entrepreneur who has founded three tech startups, two of which were acquired. She now advises early-stage founders on go-to-market strategy.',
    linkedIn: 'https://www.linkedin.com/in/marilynnash',
    organization: 'Nash Ventures',
    position: 'Founder & Advisor',
    session: {
      title:
        'Demystifying Intellectual Property Protection: What Founders Should Know Now, Not Later',
      abstract:
        'Learn the essentials of patents, trademarks, copyrights, and trade secrets so you can protect your startup’s ideas from day one.',
      description:
        'In this session you will hear from the United States Patent and Trademark Office (USPTO) about the basics of patents, trademarks, copyrights and trade secrets, collectively known as intellectual property (IP), and potential ways to protect your innovations as you transition from idea to product. We will also discuss the value of federal registration, how to avoid common mistakes, and considerations for start-ups. Attendees will be provided with free resources for legal and technical assistance.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: '14:00',
      room: 'The Family Theatre',
      sessionDuration: 60,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 15,
    name: 'Brittanie Dabney',
    avatar: BrittanieDabney,
    bio: `Brittanie Dabney is the Founder and CEO of Ecosphere Organics, a Detroit-based sustainable materials company transforming food and agricultural by-products into manufacturing-ready raw materials. Her work sits at the intersection of climate, supply chains, and material innovation, helping manufacturers transition toward more resilient and circular systems.

With a background in environmental science and urban sustainability, Brittanie has led pilots and partnerships across manufacturing, food systems, design, and mobility sectors to reimagine how organic waste can function as a scalable input for production. She is also a Ph.D. candidate in Biology and Urban Sustainability and teaches climate and earth science at the College for Creative Studies.

Through her work, Brittanie is building the infrastructure layer for circular manufacturing, bridging the gap between waste streams and industrial supply chains.`,
    organization: 'Ecosphere Organics',
    position: 'CEO',
    session: {
      title: 'Who Controls Materials, Controls the Future',
      abstract: 'Who controls materials, controls the future.',
      description: `We talk about AI and software as shaping the future. But every one of those systems depends on physical infrastructure and that infrastructure depends on materials. If we don’t rethink the materials layer, we’re just optimizing systems built on unstable foundations. This talk explores a critical but often overlooked question: who actually controls the inputs that power innovation? As supply chains become more unstable and sustainability requirements reshape industries, materials are emerging as a new point of leverage. Yet most professionals, even in tech, are building on top of systems they didn’t design and don’t control. Drawing from real-world work in circular manufacturing and waste-to-material systems, this session reframes waste as an untapped supply chain and introduces a new way of thinking about infrastructure, decentralization, and local production. Attendees will gain a clearer understanding of how materials shape cost, speed, compliance, and long-term resilience. More importantly, this talk challenges participants to think beyond building products and instead consider how they can influence the systems those products depend on. Because the future isn’t just about what we build. It’s about what we build it from.`,
      tags: ['In-person', 'Leadership'],
      track: 'Leadership',
      time: '14:30',
      room: 'Reserve-n-Ready',
      sessionDuration: 30,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 16,
    name: 'David Cardozo',
    email: null,
    avatar: DavidCardozo,
    bio: `Facilitator for the Agentverse: The Guardian's Bastion - Secure Scalable Inference for AgentOps`,
    twitter: null,
    linkedIn: 'https://www.linkedin.com/in/davidcardozo/',
    github: null,
    organization: 'Dataiku',
    position: 'Founder',
    session: {
      title: `Agentverse: The Guardian's Bastion - Secure Scalable Inference for AgentOps`,
      abstract: null,
      description: `This workshop is the definitive enterprise playbook for mastering the agentic future on Google Cloud. We provide an end-to-end roadmap that guides you from the first vibe of an idea to a full-scale, operational reality. Across these four interconnected labs, you will learn how the specialized skills of a developer, architect, data engineer, and SRE must converge to create, manage, and scale a powerful Agentverse.`,
      tags: ['In-person', 'Build with AI'],
      track: 'Build with AI',
      time: '14:00',
      room: 'Pizza Pizza',
      sessionDuration: 120,
    },
    isWTM: false,
    isGDE: false,
    mastodon: null,
  },
  {
    id: 18,
    name: 'Hoda Solati',
    avatar: HodaSolati,
    bio: 'UX/UI Designer at BraunAbility',
    linkedIn: '',
    organization: 'BraunAbility',
    position: 'UX/UI Designer',
    session: {
      title:
        'Experience Innovation: Designing for Engagement in Immersive Environments',
      abstract: 'Bridging human experience and emerging technologies.',
      description:
        'Design is no longer just about aesthetics or usability, it’s about crafting memorable and meaningful experiences. As immersive technologies like AR and VR evolve, designers are challenged to think beyond screens and start shaping how people feel within digital spaces. This session introduces the concept of Experience Innovation, a mindset that blends creativity, empathy, and strategy to design experiences that are not only functional but emotionally engaging and deeply human. We’ll explore the core principles of experience innovation and how they can transform the way we design for immersive environments. Attendees will learn how to use these principles to create interactions that feel natural, intuitive, and inspiring, while balancing novelty with user comfort.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: '10:30',
      room: 'The Family Theatre',
      sessionDuration: 30,
    },
    isWTM: false,
    isGDE: true,
  },
  {
    id: 19,
    name: 'Dichondra Johnson',
    avatar: DichondraJohnson,
    bio: 'CEO/Founder | Doctoral Research Associate at DRJ & Associates | University of Michigan',
    linkedIn: '',
    organization: 'DRJ & Associates | University of Michigan',
    position: 'CEO/Founder | Doctoral Research Associate',
    session: {
      title:
        'Business Soft Life: A Multi-Tool AI Strategy for Real Entrepreneurs',
      abstract: `Learn the essentials of patents, trademarks, copyrights, and trade secrets so you can protect your startup’s ideas from day one.`,
      description:
        'Dichondra Johnson presents practical AI strategies tailored for real entrepreneurs, exploring how to leverage multiple AI tools to build a sustainable and thriving business.',
      tags: ['In-person', 'AI Foundations'],
      track: 'AI Foundations',
      time: '14:00',
      room: 'Hot-n-Ready',
      sessionDuration: 60,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 20,
    name: 'Donna Bell',
    avatar: DonnaBell,
    bio: 'Chief Product Officer | Founder - The Executive Table at Dunamis Charge',
    linkedIn: '',
    organization: 'Dunamis Charge',
    position: 'Chief Product Officer | Founder - The Executive Table',
    session: {
      title:
        'Breaking the Pattern: Executive Identity as the Missing Link for Women in Technology Leadership',
      abstract:
        'Executive identity as the missing link for women in technology leadership.',
      description:
        'Dr. Donna Bell explores how executive identity serves as the missing link for women in technology leadership, offering frameworks for building confidence and authority in senior roles.',
      tags: ['In-person', 'Leadership'],
      track: 'Leadership',
      time: '14:00',
      room: 'Reserve-n-Ready',
      sessionDuration: 30,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 21,
    name: 'Dr. Emily Jacobs',
    avatar: DrEmilyJacobs,
    bio: 'Founder at Empowered Moms',
    linkedIn: '',
    organization: 'Empowered Moms',
    position: 'Founder',
    session: {
      title: 'Say Yes to Less',
      abstract: 'Details coming soon.',
      description:
        'In “Say Yes to Less,” Dr. Emily Jacobs challenges the cultural belief that constant self-sacrifice and overperforming are the price of success. She reveals how people-pleasing quietly drains our energy, confidence, and creativity and why boundaries are not barriers, but a profound act of self-respect. Through a powerful blend of science, storytelling, and lived experience, she offers a bold framework for reclaiming vitality, clarity, and purpose. This talk invites us to stop seeking permission to rest and begin honoring our limits as the path to authentic fulfillment and personal power.',
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '11:30',
      room: 'Pizza Treat',
      sessionDuration: 30,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 22,
    name: 'Yana Grant',
    avatar: YanaGrant,
    bio: `Yana Grant is a product data operations analyst at Meta, where she helps power the next generation of artificial intelligence and machine learning through high-quality data annotation, labeling, and quality assurance. A proud Long Beach, California native, Yana brings a unique perspective shaped by her West Coast roots and a passion for community empowerment.

Before joining Meta, Yana was a Missile & Fire Control SAP Software DevOps Analyst at Lockheed Martin. She then moved to Detroit to work at LinkedIn in Trust and Safety.

Yana credits her abilities and professional growth to her formative IT internships at the Congressional Budget Office and at NBC Universal, where she supported operations and systems administration.

In addition to her work at Meta, Yana is the founder of Hustle and Brand, a coaching platform dedicated to helping high school and college students turn their career dreams into reality. Through Hustle and Brand, she provides early college-to-career coaching, resume and LinkedIn building tips, and access to internships, scholarships, and leadership opportunities. Yana is known for her ability to inspire confidence, deliver actionable advice, and help others build their personal brand and professional hustle.`,
    linkedIn: 'https://www.linkedin.com/in/yana-grant',
    organization: 'Meta',
    position: 'Data Labeling Analyst',
    session: {
      title:
        'Get Paid to Train AI: Your Work-From-Home Side Hustle Starts Today',
      abstract: 'Leveraging product-led user experiences and data to scale.',
      description: `What if your next paycheck came from teaching an AI how to think? Sounds futuristic — but it's already happening, and regular people are cashing in from their living rooms. In this session, Yana Grant, a member of Meta's Product Data Operations team, pulls back the curtain on the human side of AI. Drawing from her real-world experience in data labeling, annotation, and quality assurance, Yana will show you how this behind-the-scenes work fuels the technology billions of people use every day — and how you can get paid to be part of it. From beginner-friendly platforms paying $5–$15/hr to expert-level opportunities clearing $40–$200/hr, you'll walk away with a clear, actionable roadmap to launching your AI annotation side gig — starting today.`,
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '14:30',
      room: 'Pizza Treat',
      sessionDuration: 30,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 23,
    name: 'Jahsiah Kidd',
    avatar: JahsiahKidd,
    bio: 'Digital Transformation Project Manager at General Motors',
    linkedIn: '',
    organization: 'General Motors',
    position: 'Digital Transformation Project Manager',
    session: {
      title: "AI Is Not the Future - It's the New Advantage",
      abstract: "AI is not the future — it's the new advantage.",
      description:
        'Jahsiah Kidd explores how AI is not just a future trend but a present-day competitive advantage, offering actionable strategies for leveraging AI in your career and organization.',
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '10:30',
      room: 'Pizza Treat',
      sessionDuration: 30,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 24,
    name: 'Cherice Caldwell-Williams',
    avatar: ChericeCaldwellWilliams,
    bio: `Cherice brings more than 36 years of dedicated service to DTE Energy, with the last twenty five years focused on strengthening the company’s cybersecurity capabilities. She currently serves as the Acting Director of Cybersecurity Operations, where she leads teams responsible for protecting critical systems and ensuring operational resilience.

A committed cybersecurity professional, Cherice holds three of the industry’s most respected certifications: CISSP, CRISC, and CISM. Her leadership and impact were nationally recognized in 2019 when she received the Women of Color – Technology Leader Award. Throughout her career, she has guided major security initiatives across DTE Energy, helping the organization navigate an evolving threat landscape with confidence and clarity.

Beyond her professional achievements, Cherice is deeply committed to service. She volunteers with organizations that support women and children, extending her passion for empowerment and community beyond the workplace. She and her husband of 18 years enjoy life as proud empty nesters, with a blended family of four adult children. In her free time, Cherice loves attending sporting events, watching classic films, and traveling.

Cherice lives by a simple guiding principle: be kind, courteous, and respectful to everyone you meet. This philosophy shapes her leadership style, her relationships, and her commitment to fostering peace and understanding wherever she goes.`,
    linkedIn:
      'https://www.linkedin.com/in/cherice-caldwell-williams-cissp-crisc-cism-2172037',
    organization: 'DTE Energy',
    position: 'Acting Director – Cybersecurity Operations',
    session: {
      title:
        'Nobody Handed Us a Map: How We Navigated Bias, Built Our Circles, and Made It to the Top on Our Own Terms',
      abstract: "AI is not the future — it's the new advantage.",
      description: `Nobody Handed Us a Map: How We Navigated Bias, Built Our Circles, and Made It to the Top on Our Own Terms A Keynote Fireside Chat Three women. Three very different paths. And more in common than you'd expect. This keynote is not a list of tips. It is not a framework. It is something rarer — three women who have climbed to the highest levels of their fields in energy, technology, and enterprise pulling back the curtain on what the journey actually looked like. The moments that shaped them. The people who showed up — and the ones who didn't. The decisions that required courage they hadn't yet built. And the quiet, determined way they kept moving anyway. Together, they will explore what it means to build a personal board of advisors — the trusted circle that gives honest counsel at 1 o'clock in the morning when a career decision can't wait. They'll talk about what real sponsorship looks like beyond a title or a favor — and what happens when those relationships shift. They'll speak to the experience of being one of the few women of color in the room, and how they learned to navigate hierarchy, bias, and expectations without losing themselves in the process. This is a conversation about courage — speaking up for yourself, speaking up for others, and recognizing the moments when your voice is exactly what someone else needed to hear. You'll leave this session with more than inspiration. You'll leave with a clearer picture of who you are building around you — and who you are becoming for someone else.`,
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '13:00',
      room: 'Pizza Treat',
      sessionDuration: 60,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 25,
    name: 'Julea Ferrara',
    avatar: null,
    bio: 'CEO / Founder at J. Ferrara Consulting Solutions',
    linkedIn: '',
    organization: 'J. Ferrara Consulting Solutions',
    position: 'CEO / Founder',
    session: {
      title:
        'RootIntelligence™: Using AI-Enabled Technology to Reconnect Identity, Community, and Innovation',
      abstract:
        'Using AI-enabled technology to reconnect identity, community, and innovation.',
      description:
        'Julea Ferrara explores RootIntelligence™, a framework for using AI-enabled technology to reconnect identity, community, and innovation, building bridges between cultural heritage and modern tech.',
      tags: ['In-person', 'AI Foundations'],
      track: 'AI Foundations',
      time: '10:00',
      room: 'Hot-n-Ready',
      sessionDuration: 60,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 26,
    name: 'Kendall Braxton',
    avatar: KendallBraxton,
    bio: 'Braxton is a proud Detroit Native. She brings over ten years of administration and operations management experience. She earned her BBA from Eastern Michigan University and MBA at Wayne State University. She is an alumna of the Goldman Sachs One Million Black Women: Black in Business Program. She founded her first business in 2014 and operated it for ten years. She is the CEO of Braxton Management, a firm specializing in administration and operations management. She is the CEO & Chef of Kenny’s 622 Trowbridge, a love story to her family and Detroit which offers personal chef services and cooking classes. Regardless of industry, all her pursuits are rooted in servant leadership. Braxton published her first novel The Don In Heels: the Inner Thoughts of thee Minnie Mogul in 2024. Outside of business pursuits, Braxton is a Christian minister and serves as assistant to the pastor of Christ Restoration Ministries. She is also a music enthusiast.',
    linkedIn: 'https://www.linkedin.com/in/ktbraxton',
    organization: 'Braxton Management',
    position: 'CEO',
    session: {
      title: 'Holistic Leadership',
      abstract:
        'Bridging the gap between confidence and competence in a developing career.',
      description:
        'In a world of cutting-edge technology and constant transformation, mere management is not enough. Holistic leadership focuses on the humans behind the world, ensuring that investment does not stop at minimal professional development but goes further to support the people. Holistic leadership encompasses collaborative development, ongoing training, wellness, and adaptability. This workshop dives into what it means to be a holistic leader and what it looks like to lead by example.',
      tags: ['In-person', 'Leadership'],
      track: 'Leadership',
      time: '15:00',
      room: 'Reserve-n-Ready',
      sessionDuration: 30,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 27,
    name: 'Lilah Kole',
    avatar: LilahKole1,
    bio: 'Power Platform Developer + Project Manager at Agree Realty',
    linkedIn: '',
    organization: 'Agree Realty',
    position: 'Power Platform Developer + Project Manager',
    session: {
      title:
        'From Buzzword to Business Value: How to Actually Implement AI at Work',
      abstract: 'How to actually implement AI at work.',
      description:
        'Lilah Kole provides a practical guide on moving AI from buzzword to business value, sharing actionable strategies for implementing AI in real workplace scenarios.',
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '15:00',
      room: 'Pizza Treat',
      sessionDuration: 30,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 28,
    name: 'Marcela Billingslea Durini',
    avatar: null,
    bio: 'Messenger Gen AI Creations Team, Software Engineering Intern at Meta Platforms Inc',
    linkedIn: '',
    organization: 'Meta Platforms Inc',
    position: 'Messenger Gen AI Creations Team, Software Engineering Intern',
    session: {
      title: "Building for the World You Come From: A Latina Founder's Story",
      abstract:
        "A Latina founder's story of building for the world you come from.",
      description:
        'Marcela Billingslea Durini shares her personal journey as a Latina founder, exploring how cultural identity shapes innovation and the importance of building solutions for the communities you come from.',
      tags: ['In-person', 'Leadership'],
      track: 'Leadership',
      time: '10:30',
      room: 'Reserve-n-Ready',
      sessionDuration: 30,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 29,
    name: 'Nagham Alsamari',
    avatar: NaghamAlsamari,
    bio: 'Resilience and Leadership Trainer at Imkan Leadership Development',
    linkedIn: '',
    organization: 'Imkan Leadership Development',
    position: 'Resilience and Leadership Trainer',
    session: {
      title:
        'Train Your Resilience Muscle™: Breaking the Reactor Pattern in Tech Leadership',
      abstract: 'Details coming soon.',
      description: `You're in a meeting. You look calm. Laptop open, notes ready, nodding at the right moments. What nobody knows is that your chest is tight, you haven't slept properly in days, and the version of you sitting in that chair is running entirely on adrenaline and willpower. You're not resilient. You're surviving. And you've gotten so good at surviving that you've convinced yourself they're the same thing. This interactive session challenges the pattern that keeps high-performing women in tech stuck in ""Resilience Reactor"" mode, always managing, always one step behind their own nervous system, burning capacity faster than they can rebuild it. Instead of another ""self-care"" talk, you'll learn to train resilience like a muscle: as a repeatable, measurable skill that works under real pressure. Guided by the ""Break the Pattern"" theme, this session addresses how women in tech can dismantle the reactive survival patterns that traditional career advice reinforces, hustle harder, be tougher, push through, and build a sustainable resilience system instead. You'll walk away with: - A 60-second reset you can use before your next hard conversation or after a triggering Slack message - Two core resilience pillars (Self-Awareness and Decision Integrity) with reflection prompts to build your personal resilience plan - The Manager Resilience Scorecard to identify your exact growth levers This isn't motivation. It's training. Expect hands-on activities, Mentimeter polls, and a signature mirror exercise that will shift how you see pressure, and yourself, in 60 seconds. Why this matters for Michigan's tech ecosystem: Women in tech face compounding pressures, imposter syndrome, being the only woman in the room, constant context-switching, always-on culture. Building resilience as a trainable skill isn't just personal development, it's how we retain talent, close leadership gaps, and create sustainable paths to innovation.`,
      tags: ['In-person', 'Leadership'],
      track: 'Leadership',
      time: '11:30',
      room: 'Reserve-n-Ready',
      sessionDuration: 30,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 30,
    name: 'Tracie Hightower',
    avatar: TracieHightower,
    bio: 'Tracie Hightower is a strategic innovation consultant and facilitator focused on helping community-facing organizations build stamina for problem-solving, adaptive strategy, and future-ready decision-making. Her work blends innovation methods with practical tools, dashboards, and workshops which support leaders navigating complexity and rapid technological change. She is especially committed to strengthening Detroit’s social-impact ecosystem through learning experiences that convert ideas into measurable action.',
    linkedIn: 'https://www.linkedin.com/in/traciehightower',
    organization: 'Collective Flow Learning, LLC',
    position: 'Chief Strategy and Innovation Coach',
    session: {
      title: 'Afrofuture Design Lab: Women, AI & the Future of Thriving',
      abstract: 'Afrofuture Design Lab: Women, AI & the Future of Thriving',
      description:
        'What becomes possible when women help design the future instead of simply adapting to it? This dynamic Afrofuture Design Lab invites women into a creative, thought-provoking experience where innovation, AI, and imagination meet lived experience. Together, participants will explore bold new futures for leadership, wellness, entrepreneurship, community, and belonging while designing ideas that center dignity, opportunity, and collective thriving. Come ready to create and shape what comes next.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: '11:00',
      room: 'The Family Theatre',
      sessionDuration: 60,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 31,
    name: 'Onorio Catenacci',
    avatar: OnorioCatenacci,
    bio: 'Technical Trainer II at TEKSystem',
    linkedIn: '',
    organization: 'TEKSystem',
    position: 'Technical Trainer II',
    session: {
      title: 'NuShell - Bringing New Programming Language Ideas To The Shell',
      abstract:
        'A shell scripting language that takes several of the advances of the last few decades in software development and brings them to the shell.',
      description: `If you've ever had to create a batch file or automate a process on Windows or Linux then chances are you've thought to yourself--"This is why I stay in Python! This is the pits!" Well here's hope for you--a shell scripting language that takes several of the advances of the last few decades in software development and brings them to the shell. (More about NuShell here: https://www.nushell.sh)`,
      tags: ['In-person', 'Build with AI'],
      track: 'Build with AI',
      time: '11:30',
      room: 'Pizza Pizza',
      sessionDuration: 30,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 32,
    name: 'Rania Hoteit',
    avatar: RaniaHoteit,
    bio: 'Multi-award-winning Entrepreneur, Impact Leader, and Executive Advisor at ID4A Technologies, Watson Institute, Electus Global Education',
    linkedIn: '',
    organization:
      'ID4A Technologies, Watson Institute, Electus Global Education',
    position:
      'Multi-award-winning Entrepreneur, Impact Leader, and Executive Advisor',
    session: {
      title:
        "Breaking the Pattern: Redefining Women's Leadership in Technology",
      abstract: "Redefining women's leadership in technology.",
      description:
        'Rania Hoteit explores how women are redefining leadership in the technology sector, sharing strategies for breaking barriers and building inclusive leadership models.',
      tags: ['In-person', 'Leadership'],
      track: 'Leadership',
      time: '10:00',
      room: 'Reserve-n-Ready',
      sessionDuration: 30,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 33,
    name: 'Rasheda Williams',
    avatar: RashedaWilliams,
    bio: 'Founder & CEO at Inspired Life Professionals',
    linkedIn: '',
    organization: 'Inspired Life Professionals',
    position: 'Founder & CEO',
    session: {
      title:
        'Embrace Your Excellence & Shine: Step Out of the Shadows and Into the Spotlight',
      abstract: 'Step out of the shadows and into the spotlight.',
      description:
        'Rasheda Williams empowers attendees to embrace their excellence and step into the spotlight, offering practical guidance for building confidence and owning your accomplishments.',
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '11:00',
      room: 'Pizza Treat',
      sessionDuration: 30,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 34,
    name: 'Robin Kinnie',
    avatar: RobinKinnie,
    bio: 'President at Audio Engineers of Detroit',
    linkedIn: '',
    organization: 'Audio Engineers of Detroit',
    position: 'President',
    session: {
      title:
        'Visualize, Cultivate, Leverage: How to Build Relationships in Business',
      abstract: 'Strategies for modern workforce integration in the era of AI.',
      description: `Success in business isn’t just about what you know—it’s about who you grow with. This session is designed for those who want to build authentic, mutually beneficial relationships that support both personal values and professional goals. Participants will learn how to visualize the right connections for their next level, cultivate relationships with intention and trust, and leverage their networks without guilt, self-doubt, or burnout. Through real-world examples and actionable strategies, this session breaks down how women can navigate networking, collaboration, and influence while staying aligned, confident, and true to themselves. growing your career, launching a business, or expanding your impact, you’ll leave with a clear relationship roadmap you can start using right away.`,
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '2:00',
      room: 'Pizza Treat',
      sessionDuration: 30,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 35,
    name: 'Shalonda Owens',
    avatar: ShalondaOwens,
    bio: 'Principal at Livonia Public Schools',
    linkedIn: '',
    organization: 'Livonia Public Schools',
    position: 'Principal',
    session: {
      title: 'Leaders Deserve Joy Too',
      abstract: 'Leaders deserve joy too.',
      description:
        'Dr. Shalonda Owens reminds leaders that joy is not a luxury but a necessity, sharing practical approaches for finding fulfillment and balance in leadership roles.',
      tags: ['In-person', 'Leadership'],
      track: 'Leadership',
      time: '11:00',
      room: 'Reserve-n-Ready',
      sessionDuration: 30,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 36,
    name: 'Sheneelia Logan',
    avatar: SheneeliaLogan,
    bio: 'Founder/Owner at Detroit Edge',
    linkedIn: '',
    organization: 'Detroit Edge',
    position: 'Founder/Owner',
    session: {
      title:
        'From Setback to Stability: Creating Housing Pathways for Real Life',
      abstract: 'Creating housing pathways for real life.',
      description:
        'Sheneelia Logan shares her journey from setback to stability, exploring how to create housing pathways that address real-life challenges and empower communities.',
      tags: ['In-person', 'Leadership'],
      track: 'Leadership',
      time: '15:30',
      room: 'Reserve-n-Ready',
      sessionDuration: 30,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 37,
    name: 'Shima Solati',
    avatar: ShimaSolati,
    bio: 'UX/UI Designer at BraunAbility',
    linkedIn: '',
    organization: 'BraunAbility',
    position: 'UX/UI Designer',
    session: {
      title:
        'Designing for the Mind: Bridging Human Experience and Emerging Technologies',
      abstract: 'Bridging human experience and emerging technologies.',
      description:
        'Shima Solati explores the intersection of human experience and emerging technologies, sharing design principles for creating technology that truly serves people.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: '10:00',
      room: 'The Family Theatre',
      sessionDuration: 30,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 38,
    name: 'Yesha Patel',
    avatar: YeshaPatel,
    bio: 'Senior Solution Architect & eCommerce SME at IBM',
    linkedIn: '',
    organization: 'IBM',
    position: 'Senior Solution Architect & eCommerce SME',
    session: {
      title:
        'Breaking the Pattern: How AI is Redefining Digital Commerce and Customer Experience',
      abstract:
        'How AI is redefining digital commerce and customer experience.',
      description:
        'Yesha Patel explores how AI is transforming digital commerce and customer experience, sharing real-world examples of AI-driven innovations in eCommerce.',
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '15:30',
      room: 'Pizza Treat',
      sessionDuration: 30,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 39,
    name: 'Yukti Goyal',
    avatar: YuktiGoyal,
    bio: 'Lead Software Engineer at Kforce',
    linkedIn: '',
    organization: 'Kforce',
    position: 'Lead Software Engineer',
    session: {
      title:
        'Dive into PHI protection with AI-driven cybersecurity tailored for HIPAA-regulated environments',
      abstract:
        'PHI protection with AI-driven cybersecurity for HIPAA-regulated environments.',
      description:
        'Yukti Goyal dives into PHI protection strategies using AI-driven cybersecurity, specifically tailored for HIPAA-regulated healthcare environments.',
      tags: ['In-person', 'AI Foundations'],
      track: 'AI Foundations',
      time: '15:00',
      room: 'Hot-n-Ready',
      sessionDuration: 60,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 40,
    name: 'Lilah Kole (Alt)',
    avatar: LilahKole2,
    bio: 'Power Platform Developer + Project Manager at Agree Realty',
    linkedIn: '',
    organization: 'Agree Realty',
    position: 'Power Platform Developer + Project Manager',
    session: {
      title:
        'From Buzzword to Business Value: How to Actually Implement AI at Work',
      abstract: 'How to actually implement AI at work.',
      description:
        'Lilah Kole provides a practical guide on moving AI from buzzword to business value, sharing actionable strategies for implementing AI in real workplace scenarios.',
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '15:00',
      room: 'Pizza Treat',
      sessionDuration: 30,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 41,
    name: 'Tatiana Jackson',
    avatar: TatianaJackson,
    bio: `Tatiana Simone is a Detroit-based Chief Culture Strategist, Executive Producer, and ADDY Award–winning marketing leader dedicated to helping women break patterns and build powerful, revenue-generating brands. As the founder of Real Culture, a Black woman–owned media company, she blends storytelling, AI, and strategy to help entrepreneurs show up with clarity, confidence, and consistency.

With over 250 event productions and more than 100 million impressions generated across campaigns, content, and media, Tatiana has supported both global brands and local founders in turning visibility into real growth.

Following a full-capacity workshop at Compass Detroit, she continues to equip women with accessible frameworks—like her P.R.O.F.I.T Method™—designed to move from uncertainty to execution. In alignment with this year’s theme, Break the Pattern, Tatiana empowers women to challenge outdated ways of thinking, embrace technology with intention, and create new pathways for success in Detroit and beyond.`,
    linkedIn: 'https://www.linkedin.com/in/tatiana-simone-jackson',
    organization: 'Real Culture',
    position: 'Founder',
    session: {
      title:
        'Prompt, Plan & Profit: Build AI-Powered Marketing Campaigns That Convert',
      abstract:
        'This workshop features Tatiana Simone guiding women entrepreneurs to replace inconsistent business growth with the structured P.R.O.F.I.T Method™. Participants learn to leverage AI with intention to build repeatable marketing systems that amplify their expertise and generate purposeful revenue.',
      description: `For many women entrepreneurs, the challenge isn’t lack of talent—it’s lack of clarity, structure, and support. Too often, we rely on inconsistent marketing, word-of-mouth, and guesswork to grow businesses that deserve far more visibility and revenue. In this empowering, hands-on workshop, Tatiana Simone—Chief Culture Strategist and ADDY Award–winning marketing leader—guides women through a new way of building. Rooted in her signature P.R.O.F.I.T Method™, this session shows how to use AI not as a shortcut, but as a tool for clarity, confidence, and control. Participants will learn how to position their ideas, connect with their audience, and create marketing that reflects both their voice and their vision. More importantly, they will walk away with a structured, repeatable system to turn what they know into campaigns that generate real results. Aligned with the spirit of breaking patterns and building new pathways, this workshop is designed for women who are ready to move differently—leveraging technology with intention, owning their expertise, and creating businesses that grow with purpose.`,
      tags: ['In-person', 'AI Foundations'],
      track: 'AI Foundations',
      time: '11:00',
      room: 'Hot-n-Ready',
      sessionDuration: 60,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 42,
    name: 'Eberechi Ogbuaku',
    avatar: EberechiOgbuaku,
    bio: 'Eberechi Ogbuaku is an Attorney that does work in probate, estate planning, family, and juvenile law. She’s worked in BigLaw and Public Accounting. Eberechi is also the host of the Young Professional African Collective (YPAC) podcast where she talks to people doing work on the African continent or work pertaining to the African continent. She enjoys spending time with family, traveling, and dancing.',
    linkedIn: '',
    organization: 'Broadstreet Legal',
    position: 'Attorney',
    session: {
      title: 'Professional Dress Presentation',
      abstract: 'Professional dress presentation and styling.',
      description:
        'Eberechi Ogbuaku leads a professional dress presentation, sharing tips and strategies for presenting yourself with confidence through professional attire.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: '15:30',
      room: 'The Family Theatre',
      sessionDuration: 30,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 43,
    name: 'Ramona Fellmy',
    avatar: RamonaFellmy,
    bio: 'Ramona Fellmy is a technology founder, SaaS strategist, and enterprise solutions leader at Dapp Detroit. Her work focuses on building low-code, AI-driven systems for complex, compliance-heavy industries. She operates at the intersection of InsurTech, FinTech, and ethical AI. She was recently recognized as one of the Top Women in Tech in the U.S. (2026).',
    linkedIn: '',
    organization: 'Dapp Detroit',
    position: 'Founder, CTO',
    session: {
      title:
        'Breaking the Pattern: Ethical AI, Low-Code Systems, and the Future of Inclusive Innovation',
      abstract:
        'Building systems with low-code platforms and AI across regulated industries.',
      description:
        'Artificial intelligence is rapidly transforming how systems are built and scaled—but the real challenge is no longer speed. It’s responsibility. This session explores how low-code platforms and AI technologies are changing the way organizations design and deploy solutions in highly regulated industries, while also opening new opportunities in education and community impact. Drawing from her work at Dapp Detroit, Ramona will share practical examples of how tools across the Google ecosystem—including Vertex AI, Google Workspace, and related technologies—can be used to build systems that are not only scalable, but also ethical, transparent, and accessible. A key focus of the session is how these same tools can support neurodiverse and 2e individuals by enabling more adaptive and personalized approaches to learning and problem-solving. Key Takeaways: - A practical approach to building ethical AI systems in real-world environments - Examples of how low-code and AI are being applied across enterprise and education Strategies for leveraging Google tools to support inclusive innovation A new perspective on how AI can be used not just to optimize systems, but to expand how people think, build, and contribute.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: '15:00',
      room: 'The Family Theatre',
      sessionDuration: 30,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 44,
    name: 'Tabice Ward',
    avatar: TabiceWard,
    bio: `Tabice Ward serves as the Chief Information Officer at Walker-Miller Energy Services where she leads the strategic direction of the IT organization. As a technology executive, she focuses on helping organizations develop innovative and transformative technology strategies that drive business enablement, enhance security, and reduce cyber risk.

With 35+ years of experience in the energy sector, she possesses deep expertise in technology management, cybersecurity operations, cyber risk management, physical security, business continuity, regulatory compliance, and security policy. She shares her knowledge as an adjunct lecturer at the University of Detroit Mercy, helping develop the next generation of technology leaders. Additionally, she is an Executive Advisor for Hush, a cyber tech startup.

Tabice has held key leadership positions, including Executive Technology Strategist at ChoiceTel, Area Vice President of Enterprise Security at Xcel Energy and IT Director/CISO at DTE Energy, where she led the strategic direction and transformation of cybersecurity programs. In these roles, she partnered with business leaders to develop and execute comprehensive technology and cybersecurity strategies across IT and ICS/OT environments.`,
    linkedIn: 'https://www.linkedin.com/in/tabiceward',
    organization: 'Walker-Miller Energy Services',
    position: 'Chief Information Officer',
    session: {
      title:
        'Nobody Handed Us a Map: How We Navigated Bias, Built Our Circles, and Made It to the Top on Our Own Terms',
      abstract: "AI is not the future — it's the new advantage.",
      description: `Nobody Handed Us a Map: How We Navigated Bias, Built Our Circles, and Made It to the Top on Our Own Terms A Keynote Fireside Chat Three women. Three very different paths. And more in common than you'd expect. This keynote is not a list of tips. It is not a framework. It is something rarer — three women who have climbed to the highest levels of their fields in energy, technology, and enterprise pulling back the curtain on what the journey actually looked like. The moments that shaped them. The people who showed up — and the ones who didn't. The decisions that required courage they hadn't yet built. And the quiet, determined way they kept moving anyway. Together, they will explore what it means to build a personal board of advisors — the trusted circle that gives honest counsel at 1 o'clock in the morning when a career decision can't wait. They'll talk about what real sponsorship looks like beyond a title or a favor — and what happens when those relationships shift. They'll speak to the experience of being one of the few women of color in the room, and how they learned to navigate hierarchy, bias, and expectations without losing themselves in the process. This is a conversation about courage — speaking up for yourself, speaking up for others, and recognizing the moments when your voice is exactly what someone else needed to hear. You'll leave this session with more than inspiration. You'll leave with a clearer picture of who you are building around you — and who you are becoming for someone else.`,
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '13:00',
      room: 'Pizza Treat',
      sessionDuration: 60,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 45,
    name: 'Jenna Ritten',
    avatar: JennaRitten,
    bio: 'Jenna is the visionary behind Detroits Innovation Summit series and Founding Executive Director of Compass (Collective of Minority Professionals and STEAM Societies), the organization bringing together Michigans diverse tech talent to combat brain drain and create local opportunities. As Chief Developer Advocate & Architect at IBM Research, she leads IBMs technical community while scaling their global developer ecosystem from 2 million to 9 million members.A cornerstone of Michigans tech renaissance, Jenna serves as Co-Leader of Google Developer Group Detroit, lead organizer of Michigan DevFest (1,000+ attendees), and board member of Automation Workz. As a local leader in Michigans tech ecosystem since 2018, she pioneered hackathon culture in the region by introducing the first hackathons to both the AfroTech Conference in 2023 and Michigan DevFest in 2025, creating hands-on opportunities for developers to showcase their skills and solve real-world challenges.Through Compass partnerships with NSBE Detroit, SHPE Detroit, IBM, Google, DTE Energy, and other leading organizations, Jenna is building bridges between corporate innovation and community empowerment. Her mission: ensuring Michigans next generation of Black technologists not only have opportunities to excel but can do so without leaving the state they call home.Connect with Jenna to learn how Compass is transforming Michigans tech ecosystem, one community at a time.',
    linkedIn: 'https://www.linkedin.com/in/jennaritten',
    organization: 'IBM Research',
    position: 'Chief Developer Advocate & Architect',
    session: {
      title:
        'Nobody Handed Us a Map: How We Navigated Bias, Built Our Circles, and Made It to the Top on Our Own Terms',
      abstract: "AI is not the future — it's the new advantage.",
      description: `Nobody Handed Us a Map: How We Navigated Bias, Built Our Circles, and Made It to the Top on Our Own Terms A Keynote Fireside Chat Three women. Three very different paths. And more in common than you'd expect. This keynote is not a list of tips. It is not a framework. It is something rarer — three women who have climbed to the highest levels of their fields in energy, technology, and enterprise pulling back the curtain on what the journey actually looked like. The moments that shaped them. The people who showed up — and the ones who didn't. The decisions that required courage they hadn't yet built. And the quiet, determined way they kept moving anyway. Together, they will explore what it means to build a personal board of advisors — the trusted circle that gives honest counsel at 1 o'clock in the morning when a career decision can't wait. They'll talk about what real sponsorship looks like beyond a title or a favor — and what happens when those relationships shift. They'll speak to the experience of being one of the few women of color in the room, and how they learned to navigate hierarchy, bias, and expectations without losing themselves in the process. This is a conversation about courage — speaking up for yourself, speaking up for others, and recognizing the moments when your voice is exactly what someone else needed to hear. You'll leave this session with more than inspiration. You'll leave with a clearer picture of who you are building around you — and who you are becoming for someone else.`,
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '13:00',
      room: 'Pizza Treat',
      sessionDuration: 60,
    },
    isWTM: true,
    isGDE: false,
  },
  {
    id: 50,
    name: 'Bandhan Kaur',
    avatar: BandhanKaur,
    bio: 'Data and AI Architect at Slalom',
    linkedIn: '',
    organization: 'Slalom',
    position: 'Data and AI Architect',
    session: {
      title:
        'Innovation Summit Panel Discussion: Who Designs the System? Women Defining the Future of Tech',
      abstract:
        'This panel explores how real impact in technology extends beyond execution into influence where decisions about funding, hiring, and strategic direction are made, featuring women leaders across manufacturing, aerospace, AI, enterprise software, and STEM education, and highlighting the shift from delivering results to shaping organizational and industry futures, while providing attendees with practical insights on navigating influence, expanding their presence in decision making spaces, and intentionally positioning themselves for transformative impact in tech.',
      description:
        'True impact in tech - the kind that changes industries like energy, healthcare, and manufacturing -doesn’t just happen at the keyboard. It is nurtured in the spaces where funding is allocated, rears itself where hiring standards are set, and leaves deep marks as credit, attribution, or kudos are given. Most of us know how to deliver. We lead projects, solve problems, maintain critical systems, and get results. But we don’t always ask: Who is actually deciding what gets built? Who is in the room when funding gets allocated? Who is shaping the future vectors for organizations and industries? Join us for a panel featuring four women working across manufacturing, aerospace, enterprise software, AI, and STEM education who have navigated with influence inside complex organizations. Enter a practical discussion that arcs from delivering results to shaping direction and what that shift actually requires from a twenty-first century woman in tech. You’ll leave seeing your own environment differently and better equipped to move with intention and belonging where transformational decisions are being made. Moderator: Angela Richardson, CAE: Governance & Council Engagement Director, SEMA Panelists: Talona Johnson, MBA, PMP, CMQ/OE, International Product Manager, General Motors Vital Anne, Program Director, Siemens Industries Software Bryne Berry, MSc Mechanical Engineer, Founder and President of Black Girls Do Science® Bandhan Kaur, Data and AI Architect at Slalom',
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '09:10',
      room: 'Pizza Treat',
      sessionDuration: 50,
    },
    isWTM: true,
    isGDE: false,
  },
]

const EVENT_PAGE_SPEAKERS = [
  {
    name: 'Angela Richardson',
    organization: 'Specialty Equipment Marketing Association (SEMA)',
    position: 'Governance & Council Engagement Director',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/AngelaRichardson_14ofaIm.png',
  },
  {
    name: 'Bandhan Kaur',
    organization: 'Slalom',
    position: 'Data and AI Architect',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/BandhanKaur_RqGeed5.JPG',
  },
  {
    name: 'Brittanie Dabney',
    organization: 'Ecosphere Organics',
    position: 'CEO',
    avatar: BrittanieDabney,
  },
  {
    name: 'Bryant Dumas',
    organization: 'MANTECH',
    position: 'Cloud Engineer',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/BryantDumas_vPP2oVw.jpg',
  },
  {
    name: 'Bryne Berry',
    organization: 'Black Girls Do Science®',
    position: 'MSc Mechanical Engineer, Founder and President',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/BryneBerry_YhvG4gT.jpg',
  },
  {
    name: 'Cherice Caldwell-Williams',
    organization: 'DTE Energy',
    position: 'IT Manager',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/ChericeCaldwell_6NOT9d6.jpeg',
  },
  {
    name: 'David Cardozo',
    organization: 'Dataiku',
    position: 'Senior AI Engineer',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/DavidCardozo_66QCBbF.jpg',
  },
  {
    name: 'Dichondra Johnson',
    organization: 'DRJ & Associates | University of Michigan',
    position: 'CEO/Founder | Doctoral Research Associate',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/DichondraJohnson_dFOhhwd.jpg',
  },
  {
    name: 'Dr. Donna Bell',
    organization: 'Dunamis Charge',
    position: 'Chief Product Officer | Founder - The Executive Table',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/DonnaBell_JYiDOk3.png',
  },
  {
    name: 'Dr. Emily Jacobs',
    organization: 'Empowered Moms',
    position: 'Founder',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/DrEmilyJacobs_BCVkYiF.jpeg',
  },
  {
    name: 'Eberechi Ogbuaku',
    organization: 'Broadstreet Legal',
    position: 'Attorney',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/EberechiOgbuaku_o4QfPoJ.jpeg',
  },
  {
    name: 'Hoda Solati',
    organization: 'BraunAbility',
    position: 'UX/UI Designer',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/HodaSolati_ZDwQMe1.jpg',
  },
  {
    name: 'Ida Byrd-Hill',
    organization: 'Automation Workz',
    position: 'CEO',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/IdaByrd-Hill_bAb9x65.png',
  },
  {
    name: 'Jahsiah Kidd',
    organization: 'General Motors',
    position: 'Digital Transformation Project Manager',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/JahsiahKidd_4nE1MeY.jpeg',
  },
  {
    name: 'Jenna Ritten',
    organization: 'Chief Developer Advocate & Architect @ IBM Research',
    position: 'Summit Organizer & Founding Executive Director @ Compass',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/jennaphoto_xWpaGgW.jpeg',
  },
  {
    name: 'Jeseekia Vaughn',
    organization: 'Detroit Hacker House',
    position: 'Director',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/JeseekiaVaughn%2520_fioucvn.jpeg',
  },
  {
    name: 'Julea Ferrara',
    organization: 'J. Ferrara Consulting Solutions',
    position: 'CEO / Founder',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/JuleaFerrara_g05Vbu4.jpg',
  },
  {
    name: 'Kendall Braxton',
    organization: 'Braxton Management',
    position: 'CEO',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/KendallBraxton_5HEeNKj.jpg',
  },
  {
    name: 'Lilah Kole',
    organization: 'Entrepreneur',
    position: '',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/LilahKole-2_m0DKpEY.jpeg',
  },
  {
    name: 'Mack Hendricks',
    organization: 'Detroit Hacker House',
    position: 'Executive Director',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/MackHendricks_eJ31rqC.jpeg',
  },
  {
    name: 'Marcela Billingslea Durini',
    organization: 'Meta Platforms Inc',
    position: 'Messenger Gen AI Creations Team, Software Engineering Intern',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/MarcelaBillingsleaDurini_fPLMg56.png',
  },
  {
    name: 'Marilyn Nash',
    organization: 'U.S. Patent and Trademark Office (USPTO)',
    position:
      'Interim Assistant Regional Director and Regional Outreach Officer',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/MarilynNash_6N1yCiX.jpg',
  },
  {
    name: 'Nagham Alsamari',
    organization: 'Imkan Leadership Development',
    position: 'Resilience and Leadership Trainer',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/NaghamAlsamari_CeXFvch.png',
  },
  {
    name: 'Onorio Catenacci',
    organization: 'TEKSystem',
    position: 'Technical Trainer II',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/OnorioCatenacci_RzxcCSn.jpg',
  },
  {
    name: 'Ramona Fellmy',
    organization: 'Dapp Detroit',
    position: 'Founder, CTO',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/RamonaFellmy_rmfDHYz.png',
  },
  {
    name: 'Rania Hoteit',
    organization:
      'ID4A Technologies, Watson Institute, Electus Global Education',
    position:
      'Multi-award-winning Entrepreneur, Impact Leader, and Executive Advisor',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/RaniaHoteit_NoKf9PU.jpg',
  },
  {
    name: 'Rasheda Williams',
    organization: 'Inspired Life Professionals',
    position: 'Founder & CEO',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/RashedaWilliams_LjjTZzh.jpg',
  },
  {
    name: 'Rishiraj Sarkar',
    organization: 'GDG Detroit',
    position: 'Co-Leader',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/RishirajSarkar_Y6ZfWtB.jpg',
  },
  {
    name: 'Robin Kinnie',
    organization: 'Audio Engineers of Detroit',
    position: 'President',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/RobinKinnie_L3iPXsg.jpg',
  },
  {
    name: 'Dr. Shalonda Owens',
    organization: 'Livonia Public Schools',
    position: 'Principal',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/ShalondaOwens_JLgKHoi.jpeg',
  },
  {
    name: 'Sheneelia Logan',
    organization: 'Detroit Edge',
    position: 'Founder/Owner',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/SheneeliaLogan_4uxX9ca.png',
  },
  {
    name: 'Shima Solati',
    organization: 'BraunAbility',
    position: 'UX/UI Designer',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/ShimaSolati_4gE2ZGb.jpg',
  },
  {
    name: 'Tabice Ward',
    organization: 'Walker-Miller',
    position: 'Chief Information Officer',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/TabiceWard-1_uJp7AA1.jpg',
  },
  {
    name: 'Talona Johnson, MBA, PMP, CMQ/OE',
    organization: 'General Motors',
    position: 'International Product Manager',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/TalonaJohnson_RI9lQyn.jpeg',
  },
  {
    name: 'Tatiana Jackson',
    organization: 'Real Culture',
    position: 'Founder',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/TatianaJackson-1_v9SVntk.jpg',
  },
  {
    name: 'Tracie Hightower',
    organization: 'Collective Flow Learning, LLC',
    position: 'Chief Strategy and Innovation Coach',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/TracieHightower-1_LcEe5i8.jpg',
  },
  {
    name: 'Umelo Onyejiaka',
    organization: 'DevOps Detroit',
    position: 'Founder & Cloud Solutions Engineer',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/UmeloOnyejiaka%2520%25281%2529_xk9tWQg.jpeg',
  },
  {
    name: 'Vital Anne',
    organization: 'Siemens Industries Software',
    position: 'Program Director',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/VitalAnne_BzSd9kQ.jpg',
  },
  {
    name: 'Yana Grant',
    organization: 'Meta',
    position: 'Data Labeling Analyst',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/YanaGrant%2520%25281%2529_EvGVIi3.png',
  },
  {
    name: 'Yesha Patel',
    organization: 'IBM',
    position: 'Senior Solution Architect & eCommerce SME',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/YeshaPatel_04hTer3.png',
  },
  {
    name: 'Yukti Goyal',
    organization: 'Kforce',
    position: 'Lead Software Engineer',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/YuktiGoyal_s605Bkp.jpg',
  },
  {
    name: 'Maridy Mazaira',
    organization: 'SHPE Detroit Professional',
    position: 'President',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/MaridyMazaira_uBQx7Al.jpeg',
  },
]

const normalizeSpeakerName = (name) =>
  String(name)
    .toLowerCase()
    .replace(/^dr\.\s+/, '')
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim()

const eventSpeakerByKey = new Map(
  EVENT_PAGE_SPEAKERS.map((speaker) => [
    normalizeSpeakerName(speaker.name),
    speaker,
  ])
)

const enrichedExisting = rawSpeakersData
  .filter((speaker) =>
    eventSpeakerByKey.has(normalizeSpeakerName(speaker.name))
  )
  .map((speaker) => {
    const eventMeta = eventSpeakerByKey.get(normalizeSpeakerName(speaker.name))
    return {
      ...speaker,
      name: eventMeta.name,
      avatar: eventMeta.avatar || speaker.avatar,
      organization: eventMeta.organization || speaker.organization,
      position: eventMeta.position || speaker.position,
      bio:
        speaker.bio ||
        `${eventMeta.name} is a confirmed speaker for the Detroit International Women’s Day Innovation Summit.`,
      session: speaker.session,
    }
  })

export const SpeakersData = enrichedExisting
