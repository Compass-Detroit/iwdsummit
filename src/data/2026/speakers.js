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
import HernandoGonzalezMalabet from './assets/images/speakers/HernandoGonzalezMalabet.webp'
import SilviyaTopchiyska from './assets/images/speakers/SilviyaTopchiyska.webp'
import TabiceWard from './assets/images/speakers/TabiceWard.webp'

// New 2026 Speaker Headshots
import BandhanKaur from './assets/images/speakers/BandhanKaur.jpg'
import BryneBerry from './assets/images/speakers/BryneBerry.jpg'
import DanRey1 from './assets/images/speakers/DanRey-1.png'
import DanRey2 from './assets/images/speakers/DanRey-2.jpeg'
import DichondraJohnson from './assets/images/speakers/DichondraJohnson.jpg'
import DonnaBell from './assets/images/speakers/DonnaBell.png'
import GbemisolaEsho from './assets/images/speakers/GbemisolaEsho.jpg'
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
import SuvadityaMukherjee from './assets/images/speakers/SuvadityaMukherjee.jpg'
import TalonaJohnson from './assets/images/speakers/TalonaJohnson.jpeg'
import VitalAnne from './assets/images/speakers/VitalAnne.jpg'
import YeshaPatel from './assets/images/speakers/YeshaPatel.png'
import YuktiGoyal from './assets/images/speakers/YuktiGoyal.jpg'
import EberechiOgbuaku from './assets/images/speakers/EberechiOgbuaku.jpeg'
import RamonaFellmy from './assets/images/speakers/RamonaFellmy.png'
import RishirajSarkar from './assets/images/speakers/RishirajSarkar.webp'
import DavidCardozo from './assets/images/speakers/DavidCardozo.webp'
import AnnyStaten from './assets/images/speakers/AnnyStaten.jpeg'
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

  // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  {
    id: 3,
    name: 'Anny Staten',
    avatar: AnnyStaten,
    bio: 'Anny Staten is a leader, creator, and community builder who believes growth happens best when people feel seen, supported, and challenged. With seventeen years of experience leading teams, mentoring creatives, and supporting learners in tech and education spaces, Anny brings both heart and strategy to everything she does.As Assistant Director at the Apple Developer Academy-Detroit, I support program leadership and operations. I teach learners coding, business, and design through app development using Apple ecosystem tools. Before stepping into broader leadership, Anny served as a classroom teacher, Dean of Students, and Assistant Principal. She remains a passionate lover of education, grounded in the belief that learning changes lives.She’s driven by authenticity, curiosity, and intentional living, and is deeply committed to creating spaces where the next generation of leaders can thrive. When she’s not leading or building, Anny enjoys investing in her family, being a mother, planning new adventures, and turning purpose into action.',
    linkedIn: 'http://www.linkedin.com/in/anny-staten-mba-a6a1aa25',
    organization: 'Apple Developer Academy Detroit',
    position: 'Assistant Director',
    session: {
      title: 'Building Responsible AI Systems at Scale',
      abstract:
        'How to embed ethics and fairness into production ML pipelines.',
      description:
        'This session explores practical frameworks for deploying AI responsibly — from bias detection in training data to post-deployment monitoring. Angela draws on real Ford case studies to show how teams can ship fast without cutting corners on fairness.',
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '14:00',
      room: 'SB 120',
      sessionDuration: 45,
    },
    isWTM: true,
    isGDE: false,
  },
  {
    id: 4,
    name: 'Mack Hendricks',
    avatar: MackHendricks,
    bio: 'I have been involved in technology since my dad decided to purchase me a Commodore Vic 20 in 1984 - I was hooked! In particular, Ive always been interested in telecommunications. I remember my first modem. It was a Commodore Hayes 300 Baud Modem.I have been in few different technical positions, but I have spent the last 15 years at Sun Microsystems and Oracle primarily focused on positioning and architecting enterprise level middleware solutions for Fortune 500 companies.In parallel, Ive been a technical advisor for a few different projects and companies with a focus on OpenSource VoIP technologies such as Asterisk, FreeSwitch, A2Billing, Vicidial and Kamailio.',
    linkedIn: 'https://www.linkedin.com/in/mackhendricks',
    organization: 'Detroit Hacker House',
    position: 'Founder and Director of Engineering',
    session: {
      title: 'Building Responsible AI Systems at Scale',
      abstract:
        'How to embed ethics and fairness into production ML pipelines.',
      description:
        'This session explores practical frameworks for deploying AI responsibly — from bias detection in training data to post-deployment monitoring. Angela draws on real Ford case studies to show how teams can ship fast without cutting corners on fairness.',
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '14:00',
      room: 'SB 120',
      sessionDuration: 45,
    },
    isWTM: true,
    isGDE: false,
  },
  {
    id: 5,
    name: 'Bryant Dumas',
    avatar: BryantDumas,
    bio: 'Bryant Dumas Jr. is a cloud strategist, who leads the DevOps Detroit Cloud Pathways Program. He has a background in network engineering, and has witnessed the critical role networking plays in both small and large-scale environments. Including on-prem and hybrid infrastructures.',
    linkedIn: 'https://www.linkedin.com/in/bryantdumas-jr/',
    organization: 'MANTECH',
    position: 'Cloud Engineer',
    session: {
      title: 'Building Responsible AI Systems at Scale',
      abstract:
        'How to embed ethics and fairness into production ML pipelines.',
      description:
        'This session explores practical frameworks for deploying AI responsibly — from bias detection in training data to post-deployment monitoring. Angela draws on real Ford case studies to show how teams can ship fast without cutting corners on fairness.',
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '14:00',
      room: 'SB 120',
      sessionDuration: 45,
    },
    isWTM: true,
    isGDE: false,
  },
  {
    id: 5,
    name: 'Maridy Mazaira',
    avatar: MaridyMazaira,
    bio: 'Maridy Mazaira is a passionate community leader and advocate for STEM education, dedicated to empowering students and underrepresented communities to pursue meaningful careers in engineering and technology. As President of the Society of Hispanic Professional Engineers (SHPE) Detroit Chapter, she leads initiatives that bridge the gap between students and industry by creating opportunities for mentorship, networking, and professional growth.With a background from the University of Michigan-Dearborn, where she was recognized as a “Difference Maker,” Maridy has demonstrated a strong commitment to leadership, service, and community impact. She has played a key role in organizing large-scale events such as college fairs, STEM workshops, and professional development programs that connect students with real-world opportunities.Maridy is driven by a mission to create inclusive spaces where individuals feel supported, represented, and empowered to succeed. She believes that access to resources, guidance, and strong professional networks can transform lives. Through her work, she continues to inspire and uplift others, helping them build confidence and navigate their academic and career journeys with purpose.',
    linkedIn: 'https://www.linkedin.com/in/maridy-mazaira',
    organization: 'SHPE Detroit Professional',
    position: 'President',
    session: {
      title: 'Building Responsible AI Systems at Scale',
      abstract:
        'How to embed ethics and fairness into production ML pipelines.',
      description:
        'This session explores practical frameworks for deploying AI responsibly — from bias detection in training data to post-deployment monitoring. Angela draws on real Ford case studies to show how teams can ship fast without cutting corners on fairness.',
      tags: ['In-person', 'Level Up'],
      track: 'Level Up',
      time: '15:00',
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
    organization: 'May Mobility',
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
  {
    id: 47,
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
      room: 'SB 120',
      sessionDuration: 120,
    },
    isWTM: false,
    isGDE: false,
    mastodon: null,
  },

  {
    id: 25,
    name: 'Aditya Joshi',
    avatar: null,
    bio: 'Senior Software Engineer at Walmart',
    linkedIn: '',
    organization: 'Walmart',
    position: 'Senior Software Engineer',
    session: {
      title: 'Workshop by Aditya Joshi',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 26,
    name: 'Afia Phillips',
    avatar: null,
    bio: 'VP of Cybersecurity at Little Caesars Enterprises',
    linkedIn: '',
    organization: 'Little Caesars Enterprises',
    position: 'VP of Cybersecurity',
    session: {
      title: 'Workshop by Afia Phillips',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 27,
    name: 'Bandhan Kaur',
    avatar: BandhanKaur,
    bio: 'Data and AI Architect at Slalom',
    linkedIn: '',
    organization: 'Slalom',
    position: 'Data and AI Architect',
    session: {
      title: 'Workshop by Bandhan Kaur',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 28,
    name: 'Bryne Berry',
    avatar: BryneBerry,
    bio: 'MSc Mechanical Engineer, Founder and President at Black Girls Do Science®',
    linkedIn: '',
    organization: 'Black Girls Do Science®',
    position: 'MSc Mechanical Engineer, Founder and President',
    session: {
      title: 'Workshop by Bryne Berry',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 29,
    name: 'Dan Rey',
    avatar: DanRey1,
    bio: 'Technical Product Analyst at McDonald’s',
    linkedIn: '',
    organization: 'McDonald’s',
    position: 'Technical Product Analyst',
    session: {
      title: 'Workshop by Dan Rey',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 30,
    name: 'Dichondra Johnson',
    avatar: DichondraJohnson,
    bio: 'CEO/Founder | Doctoral Research Associate at DRJ & Associates | University of Michigan',
    linkedIn: '',
    organization: 'DRJ & Associates | University of Michigan',
    position: 'CEO/Founder | Doctoral Research Associate',
    session: {
      title: 'Workshop by Dichondra Johnson',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 31,
    name: 'Donna Bell',
    avatar: DonnaBell,
    bio: 'Chief Product Officer | Founder - The Executive Table at Dunamis Charge',
    linkedIn: '',
    organization: 'Dunamis Charge',
    position: 'Chief Product Officer | Founder - The Executive Table',
    session: {
      title: 'Workshop by Donna Bell',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 32,
    name: 'Dr. Emily Jacobs',
    avatar: null,
    bio: 'Founder at Empowered Moms',
    linkedIn: '',
    organization: 'Empowered Moms',
    position: 'Founder',
    session: {
      title: 'Workshop by Dr. Emily Jacobs',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 33,
    name: 'Gbemisola Esho',
    avatar: GbemisolaEsho,
    bio: 'Cloud at Google Developer Expert',
    linkedIn: '',
    organization: 'Google Developer Expert',
    position: 'Cloud',
    session: {
      title: 'Workshop by Gbemisola Esho',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 34,
    name: 'Hoda Solati',
    avatar: HodaSolati,
    bio: 'UX/UI Designer at BraunAbility',
    linkedIn: '',
    organization: 'BraunAbility',
    position: 'UX/UI Designer',
    session: {
      title: 'Workshop by Hoda Solati',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 35,
    name: 'Jahsiah Kidd',
    avatar: JahsiahKidd,
    bio: 'Digital Transformation Project Manager at General Motors',
    linkedIn: '',
    organization: 'General Motors',
    position: 'Digital Transformation Project Manager',
    session: {
      title: 'Workshop by Jahsiah Kidd',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 36,
    name: 'Julea Ferrara',
    avatar: null,
    bio: 'CEO / Founder at J. Ferrara Consulting Solutions',
    linkedIn: '',
    organization: 'J. Ferrara Consulting Solutions',
    position: 'CEO / Founder',
    session: {
      title: 'Workshop by Julea Ferrara',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 37,
    name: 'Kendall Braxton',
    avatar: KendallBraxton,
    bio: 'CEO at Braxton Management',
    linkedIn: '',
    organization: 'Braxton Management',
    position: 'CEO',
    session: {
      title: 'Workshop by Kendall Braxton',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 38,
    name: 'Lilah Kole',
    avatar: LilahKole1,
    bio: 'Power Platform Developer + Project Manager at Agree Realty',
    linkedIn: '',
    organization: 'Agree Realty',
    position: 'Power Platform Developer + Project Manager',
    session: {
      title: 'Workshop by Lilah Kole',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 39,
    name: 'Marcela Billingslea Durini',
    avatar: null,
    bio: 'Messenger Gen AI Creations Team, Software Engineering Intern at Meta Platforms Inc',
    linkedIn: '',
    organization: 'Meta Platforms Inc',
    position: 'Messenger Gen AI Creations Team, Software Engineering Intern',
    session: {
      title: 'Workshop by Marcela Billingslea Durini',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 40,
    name: 'Nagham Alsamari',
    avatar: null,
    bio: 'Resilience and Leadership Trainer at Imkan Leadership Development',
    linkedIn: '',
    organization: 'Imkan Leadership Development',
    position: 'Resilience and Leadership Trainer',
    session: {
      title: 'Workshop by Nagham Alsamari',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 41,
    name: 'Onorio Catenacci',
    avatar: OnorioCatenacci,
    bio: 'Technical Trainer II at TEKSystem',
    linkedIn: '',
    organization: 'TEKSystem',
    position: 'Technical Trainer II',
    session: {
      title: 'Workshop by Onorio Catenacci',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 42,
    name: 'Rania Hoteit',
    avatar: RaniaHoteit,
    bio: 'Multi-award-winning Entrepreneur, Impact Leader, and Executive Advisor at ID4A Technologies, Watson Institute, Electus Global Education',
    linkedIn: '',
    organization:
      'ID4A Technologies, Watson Institute, Electus Global Education',
    position:
      'Multi-award-winning Entrepreneur, Impact Leader, and Executive Advisor',
    session: {
      title: 'Workshop by Rania Hoteit',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 43,
    name: 'Rasheda Williams',
    avatar: RashedaWilliams,
    bio: 'Founder & CEO at Inspired Life Professionals',
    linkedIn: '',
    organization: 'Inspired Life Professionals',
    position: 'Founder & CEO',
    session: {
      title: 'Workshop by Rasheda Williams',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 44,
    name: 'Robin Kinnie',
    avatar: RobinKinnie,
    bio: 'President at Audio Engineers of Detroit',
    linkedIn: '',
    organization: 'Audio Engineers of Detroit',
    position: 'President',
    session: {
      title: 'Workshop by Robin Kinnie',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 45,
    name: 'Shalonda Owens',
    avatar: ShalondaOwens,
    bio: 'Principal at Livonia Public Schools',
    linkedIn: '',
    organization: 'Livonia Public Schools',
    position: 'Principal',
    session: {
      title: 'Workshop by Shalonda Owens',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 46,
    name: 'Sheneelia Logan',
    avatar: SheneeliaLogan,
    bio: 'Founder/Owner at Detroit Edge',
    linkedIn: '',
    organization: 'Detroit Edge',
    position: 'Founder/Owner',
    session: {
      title: 'Workshop by Sheneelia Logan',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 47,
    name: 'Shima Solati',
    avatar: ShimaSolati,
    bio: 'UX/UI Designer at BraunAbility',
    linkedIn: '',
    organization: 'BraunAbility',
    position: 'UX/UI Designer',
    session: {
      title: 'Workshop by Shima Solati',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 48,
    name: 'Suvaditya Mukherjee',
    avatar: SuvadityaMukherjee,
    bio: 'ML Engineer at Magnopus LLC',
    linkedIn: '',
    organization: 'Magnopus LLC',
    position: 'ML Engineer',
    session: {
      title: 'Workshop by Suvaditya Mukherjee',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 49,
    name: 'Talona Johnson, MBA, PMP, CMQ/OE',
    avatar: TalonaJohnson,
    bio: 'International Product Manager at General Motors',
    linkedIn: '',
    organization: 'General Motors',
    position: 'International Product Manager',
    session: {
      title: 'Workshop by Talona Johnson, MBA, PMP, CMQ/OE',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 50,
    name: 'Vital Anne',
    avatar: VitalAnne,
    bio: 'Program Director at Siemens Industries Software',
    linkedIn: '',
    organization: 'Siemens Industries Software',
    position: 'Program Director',
    session: {
      title: 'Workshop by Vital Anne',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 51,
    name: 'Yesha Patel',
    avatar: YeshaPatel,
    bio: 'Senior Solution Architect & eCommerce SME at IBM',
    linkedIn: '',
    organization: 'IBM',
    position: 'Senior Solution Architect & eCommerce SME',
    session: {
      title: 'Workshop by Yesha Patel',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 52,
    name: 'Yukti Goyal',
    avatar: YuktiGoyal,
    bio: 'Lead Software Engineer at Kforce',
    linkedIn: '',
    organization: 'Kforce',
    position: 'Lead Software Engineer',
    session: {
      title: 'Workshop by Yukti Goyal',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 53,
    name: 'Dan Rey (Alt)',
    avatar: DanRey2,
    bio: 'Technical Product Analyst at McDonald’s',
    linkedIn: '',
    organization: 'McDonald’s',
    position: 'Technical Product Analyst',
    session: {
      title: 'Workshop by Dan Rey (Alt)',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 54,
    name: 'Lilah Kole (Alt)',
    avatar: LilahKole2,
    bio: 'Power Platform Developer + Project Manager at Agree Realty',
    linkedIn: '',
    organization: 'Agree Realty',
    position: 'Power Platform Developer + Project Manager',
    session: {
      title: 'Workshop by Lilah Kole (Alt)',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 99,
    name: 'Eberechi Ogbuaku',
    avatar: EberechiOgbuaku,
    bio: 'Eberechi Ogbuaku is an Attorney that does work in probate, estate planning, family, and juvenile law. She’s worked in BigLaw and Public Accounting. Eberechi is also the host of the Young Professional African Collective (YPAC) podcast where she talks to people doing work on the African continent or work pertaining to the African continent. She enjoys spending time with family, traveling, and dancing.',
    linkedIn: '',
    organization: 'Broadstreet Legal',
    position: 'Attorney',
    session: {
      title: 'Workshop by Eberechi Ogbuaku',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
  {
    id: 100,
    name: 'Ramona Fellmy',
    avatar: RamonaFellmy,
    bio: 'Ramona Fellmy is a technology founder, SaaS strategist, and enterprise solutions leader at Dapp Detroit. Her work focuses on building low-code, AI-driven systems for complex, compliance-heavy industries. She operates at the intersection of InsurTech, FinTech, and ethical AI. She was recently recognized as one of the Top Women in Tech in the U.S. (2026).',
    linkedIn: '',
    organization: 'Dapp Detroit',
    position: 'Founder, CTO',
    session: {
      title: 'Workshop by Ramona Fellmy',
      abstract: 'Details coming soon.',
      description:
        'More information about this session will be available shortly.',
      tags: ['In-person', 'Innovation'],
      track: 'Innovation',
      time: 'TBA',
      room: 'TBA',
      sessionDuration: 45,
    },
    isWTM: false,
    isGDE: false,
  },
]

const TRACK_ROTATION = [
  'Level Up',
  'Build with AI',
  'AI Foundations',
  'Leadership',
  'Innovation',
  'Careers',
]

const EVENT_PAGE_SPEAKERS = [
  {
    name: 'Afia Phillips',
    organization: 'Little Caesars Enterprises',
    position: 'VP of Cybersecurity',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_400,q_auto:good,w_400/v1/gcs/platform-data-goog/events/AfiaPhillips%2520%25281%2529.jpg',
  },
  {
    name: 'Angela Richardson',
    organization: 'Specialty Equipment Marketing Association (SEMA)',
    position: 'Governance & Council Engagement Director',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/AngelaRichardson_14ofaIm.png',
  },
  {
    name: 'Anny Staten',
    organization: 'Apple Developer Academy Detroit',
    position: 'Assistant Director',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/AnnyStaten_1xgUfzu.jpeg',
  },
  {
    name: 'Bandhan Kaur',
    organization: 'Slalom',
    position: 'Data and AI Architect',
    avatar:
      'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/BandhanKaur_RqGeed5.JPG',
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

const createPlaceholderSession = (index) => ({
  title: 'Session details coming soon',
  abstract: 'Detailed session information will be published soon.',
  description:
    'This speaker is confirmed for the Detroit International Women’s Day Innovation Summit. Session details are being finalized.',
  tags: ['In-person', 'TBA'],
  track: TRACK_ROTATION[index % TRACK_ROTATION.length],
  time: 'TBA',
  room: 'TBA',
  sessionDuration: 45,
})

const enrichedExisting = rawSpeakersData
  .filter((speaker) =>
    eventSpeakerByKey.has(normalizeSpeakerName(speaker.name))
  )
  .map((speaker, index) => {
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
      session:
        speaker.session && speaker.session.title
          ? speaker.session
          : createPlaceholderSession(index),
    }
  })

const existingKeys = new Set(
  enrichedExisting.map((speaker) => normalizeSpeakerName(speaker.name))
)

const startingId = rawSpeakersData.reduce(
  (maxId, speaker) => Math.max(maxId, Number(speaker.id) || 0),
  0
)

const missingFromEventPage = EVENT_PAGE_SPEAKERS.filter(
  (speaker) => !existingKeys.has(normalizeSpeakerName(speaker.name))
).map((speaker, index) => ({
  id: startingId + index + 1,
  name: speaker.name,
  avatar: speaker.avatar,
  bio: `${speaker.name} is a confirmed speaker for the Detroit International Women’s Day Innovation Summit.`,
  linkedIn: '',
  organization: speaker.organization,
  position: speaker.position || 'Speaker',
  session: createPlaceholderSession(index),
  isWTM: false,
  isGDE: false,
}))

export const SpeakersData = [...enrichedExisting, ...missingFromEventPage]
