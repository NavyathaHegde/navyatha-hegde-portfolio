export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full Stack' | 'Java Backend' | 'Frontend' | 'Cloud & System' | 'Game Dev & EdTech';
  description: string;
  longDescription: string;
  keyFeatures: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  status?: 'Live' | 'Coming Soon' | 'In Development' | 'Completed' | 'Published Research' | 'Hackathon Prototype';
  githubStatus?: 'Public' | 'Coming Soon';
  featured: boolean;
  metrics?: string;
  architectureHighlights?: string[];
  imagePlaceholderColor?: string;
  entityModel?: {
    entities: { name: string; fields: string; desc: string }[];
    relationships: { from: string; to: string; type: string; meaning: string }[];
    cascades?: string;
    businessLogic?: string;
  };
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  level: number; // 1-100
  experience: string;
  iconName?: string;
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  techStack: string[];
  achievements: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  coursework: string[];
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  credentialUrl: string;
  skillsCovered: string[];
  badgeColor: string;
  pdfUrl?: string;
  imageUrl?: string;
  certType?: 'oracle' | 'aicte-google-android' | 'aicte-google-aiml' | 'aicte-aws-cloud' | 'infosys' | 'innomatics' | 'internz-learn' | 'jspiders' | 'genai-hackathon' | 'uipath';
  studentId?: string;
  grade?: string;
  validUntil?: string;
  signatoryName?: string;
  signatoryTitle?: string;
  cin?: string;
  period?: string;
  usn?: string;
  college?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
  label: string;
  username: string;
}
