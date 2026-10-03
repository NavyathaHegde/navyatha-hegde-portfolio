import { jsPDF } from 'jspdf';
import { personalInfo } from '../data/portfolioData';

export async function downloadResumeAsPDF(): Promise<void> {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 38; // 0.53 inch margin (matches standard ATS 1-page format)
  const contentWidth = pageWidth - margin * 2;
  let y = 36;

  const blackColor = [0, 0, 0];
  const darkGray = [25, 25, 25];

  // Helper for adding new page if overflow (should fit 1 page nicely)
  const checkPageOverflow = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      y = margin;
      return true;
    }
    return false;
  };

  // 1. Header Section (Centered)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(blackColor[0], blackColor[1], blackColor[2]);
  doc.text("NAVYATHA R HEGDE", pageWidth / 2, y, { align: 'center' });
  y += 15;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
  doc.text("Bannerghatta, Bengaluru", pageWidth / 2, y, { align: 'center' });
  y += 14;

  // Contact line with links
  doc.setFontSize(9);
  const contactText = "+91-9741045934   |   navyathahegde0605@gmail.com   |   LinkedIn   |   GitHub";
  doc.text(contactText, pageWidth / 2, y, { align: 'center' });
  y += 15;

  // Section Heading Helper
  const drawSectionHeading = (title: string) => {
    checkPageOverflow(22);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(blackColor[0], blackColor[1], blackColor[2]);
    doc.text(title.toUpperCase(), margin, y);
    y += 3;
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.75);
    doc.line(margin, y, pageWidth - margin, y);
    y += 9;
  };

  // 2. Summary
  drawSectionHeading('SUMMARY');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
  const summaryText = "Java Full-Stack Developer (Java 8+) with hands-on experience building full-stack applications using Spring Boot microservices, Kafka, Spring MVC RESTful APIs, Hibernate/JPA, MySQL, and ReactJS, Docker, and Kubernetes with 12+ REST endpoints across projects. Strong in Core/Advanced Java, OOP, and DSA (100+ problems solved). Seeking an entry-level Java Developer / Java Full-Stack Developer role.";
  const summaryLines = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 11 + 6;

  // 3. Education
  drawSectionHeading('EDUCATION');
  
  // AMC Engineering College
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(blackColor[0], blackColor[1], blackColor[2]);
  doc.text("AMC Engineering College", margin, y);
  doc.text("2022 - 2026", pageWidth - margin, y, { align: 'right' });
  y += 11;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(9);
  doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
  doc.text("Bachelor of Engineering in Computer Science and Engineering - CGPA - 8.4", margin, y);
  doc.setFont('helvetica', 'normal');
  doc.text("Bengaluru, Karnataka", pageWidth - margin, y, { align: 'right' });
  y += 14;

  // Holy Spirit PU College
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(blackColor[0], blackColor[1], blackColor[2]);
  doc.text("Holy Spirit PU College", margin, y);
  doc.text("2020 - 2022", pageWidth - margin, y, { align: 'right' });
  y += 11;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(9);
  doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
  doc.text("Physics, Chemistry, Mathematics and Computer Science - Percentage - 93.7%", margin, y);
  doc.setFont('helvetica', 'normal');
  doc.text("Bengaluru, Karnataka", pageWidth - margin, y, { align: 'right' });
  y += 16;

  // 4. Experience
  drawSectionHeading('EXPERIENCE');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(blackColor[0], blackColor[1], blackColor[2]);
  doc.text("Java Full-Stack Development Trainee", margin, y);
  doc.text("Jan 2026 - Aug 2026", pageWidth - margin, y, { align: 'right' });
  y += 11;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(9);
  doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
  doc.text("JSpiders", margin, y);
  y += 11;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.8);
  const expBullets = [
    "Built REST APIs and full-stack applications using Core Java, Java 8+ (Streams, Lambda Expressions, Functional Interfaces), JDBC, Spring Boot, Hibernate, MySQL, and ReactJS through structured, project-based training.",
    "Solved 100+ Data Structures and Algorithms problems in Java, covering Arrays, Strings, Linked Lists, Trees, Graphs, and Collections."
  ];

  expBullets.forEach(bullet => {
    const lines = doc.splitTextToSize(`•  ${bullet}`, contentWidth - 4);
    doc.text(lines, margin + 4, y);
    y += lines.length * 10.5 + 2;
  });
  y += 5;

  // 5. Projects
  drawSectionHeading('PROJECTS');

  // Project 1: SkillSwap Platform
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(blackColor[0], blackColor[1], blackColor[2]);
  doc.text("SkillSwap Platform: ", margin, y);
  const title1Width = doc.getTextWidth("SkillSwap Platform: ");
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text("React, Spring Boot, Spring Security, MySQL, REST API", margin + title1Width, y);
  y += 11;

  const proj1Bullets = [
    "Built a peer-to-peer skill-sharing platform with 9 REST APIs across 4 controllers, enabling profile management, skill-based user discovery, and an end-to-end swap request lifecycle (send -> pending -> accept/reject).",
    "Designed and implemented a layered backend architecture using Controller-Service-Repository, with MySQL persistence and BCrypt password hashing for secure credential storage.",
    "Developed and integrated a React frontend with the Spring Boot backend through REST APIs, delivering a complete end-to-end user journey from registration and profile creation to skill discovery and swap request management."
  ];

  proj1Bullets.forEach(bullet => {
    const lines = doc.splitTextToSize(`•  ${bullet}`, contentWidth - 4);
    doc.text(lines, margin + 4, y);
    y += lines.length * 10.5 + 2;
  });
  y += 4;

  // Project 2: BankOps
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(blackColor[0], blackColor[1], blackColor[2]);
  doc.text("BankOps - Core Banking Management System: ", margin, y);
  const title2Width = doc.getTextWidth("BankOps - Core Banking Management System: ");
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text("Java, Spring Boot, Spring Data JPA, Hibernate, MySQL, REST API", margin + title2Width, y);
  y += 11;

  const proj2Bullets = [
    "Built 27 REST endpoints across 3 entities (Account, Bank, Address) covering account management, deposits, withdrawals, fund transfers, and transaction history.",
    "Designed relational entity mappings with Spring Data JPA and Hibernate, adding pagination, sorting, and field-level validation across list and search endpoints.",
    "Handled failure cases through 6 custom exception classes and a global exception handler, keeping fund-transfer operations transactionally consistent under concurrent requests."
  ];

  proj2Bullets.forEach(bullet => {
    const lines = doc.splitTextToSize(`•  ${bullet}`, contentWidth - 4);
    doc.text(lines, margin + 4, y);
    y += lines.length * 10.5 + 2;
  });
  y += 5;

  // 6. Technical Skills
  drawSectionHeading('TECHNICAL SKILLS');
  doc.setFontSize(8.8);

  const skills = [
    { label: "Programming Languages:", desc: "Java (Java 8+ features), SQL, JavaScript, Python, Basics of C, C++" },
    { label: "Backend & Frameworks:", desc: "Spring Core, Spring MVC, Spring Boot, Spring Security, Spring Data JPA, Hibernate" },
    { label: "Frontend:", desc: "HTML5, CSS3, Bootstrap, ReactJS" },
    { label: "Databases:", desc: "MySQL, Oracle SQL." },
    { label: "Tools:", desc: "Git, GitHub, Maven, Eclipse, VS Code, Postman, PostgreSQL admin(pgAdmin 4)" },
    { label: "Concepts:", desc: "Object-Oriented Programming (OOP), Data Structures and Algorithms, Collections Framework, Multithreading, Exception Handling, RESTful Web Services, MVC Architecture, Database Management Systems (DBMS)" }
  ];

  skills.forEach(skill => {
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(blackColor[0], blackColor[1], blackColor[2]);
    const bulletLabel = `•  ${skill.label} `;
    doc.text(bulletLabel, margin, y);
    const labelWidth = doc.getTextWidth(bulletLabel);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    const lines = doc.splitTextToSize(skill.desc, contentWidth - labelWidth);
    doc.text(lines, margin + labelWidth, y);
    y += Math.max(11, lines.length * 10.5);
  });
  y += 5;

  // 7. Achievements
  drawSectionHeading('ACHIEVEMENTS');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.8);
  doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);

  const achievementsList = [
    "Led a 4-member team in developing CampusConnect - Where Questions Meet Instant Solutions; co-authored and presented the project research at the iThink Conference, with the paper accepted and published in 2025 (Paper ID: 2508091).",
    "Participated in Smart India Hackathon 2025, developing a prototype for a Gamified Learning Platform for Rural Education under the Game Development theme."
  ];

  achievementsList.forEach(ach => {
    const lines = doc.splitTextToSize(`•  ${ach}`, contentWidth - 4);
    doc.text(lines, margin + 4, y);
    y += lines.length * 10.5 + 2;
  });
  y += 5;

  // 8. Certifications
  drawSectionHeading('CERTIFICATIONS');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.8);
  doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);

  const certsList = [
    "Java Full Stack Development Certificate - JSpiders",
    "Oracle Data Platform 2025 Certified Foundations Associate - Oracle",
    "Software Engineering and Agile Software Development - Infosys Springboard",
    "AWS Cloud Virtual Internship - AICTE & AWS Academy",
    "Automation Developer Associate-UiPath"
  ];

  certsList.forEach(cert => {
    const lines = doc.splitTextToSize(`•  ${cert}`, contentWidth - 4);
    doc.text(lines, margin + 4, y);
    y += lines.length * 10.5 + 1;
  });

  // Save the exact PDF file
  doc.save('Navyatha_R_Hegde_Resume.pdf');
}
