import campus1Img from "../assets/images/campus-life-1.png";
import campus3Img from "../assets/images/campus-life-3.png";
import heroStudentsImg from "../assets/images/course/B.pharm-2.jpg";
import heroStudents2Img from "../assets/images/course/course-hero-1.jpg";
import heroStudents3Img from "../assets/images/course/M.pharm-1.jpg";
import heroStudents4Img from "../assets/images/course/hero-lat.jpg";
import heroStudents5Img from "../assets/images/course/course-hero-3.jpg";

import homeHeroImg from "../assets/images/home-hero.jpg";
import lab1Img from "../assets/images/course/B.pharm-1.jpg";
import lab2Img from "../assets/images/course/D.Pharm-2.jpg";
import lab3Img from "../assets/images/course/M-pharm-2.jpg";
import lab4Img from "../assets/images/course/pharm-2.jpg";

export const coursesData = {
  "b-pharm": {
    slug: "b-pharm",
    title: "Bachelor of Pharmacy",
    shortTitle: "B.Pharm",
    subtitle: "Bachelor of Pharmacy",
    duration: "Course Duration - 4 Years",
    approval: "Intake - 100",
    heroImg: heroStudentsImg,
    overviewImg: lab1Img,
    overview: "Bachelor of Pharmacy (B.Pharm) degree can lead to many career opportunities in the pharmaceutical industry. The scope of the B.Pharm degree includes work in hospitals, research labs, and pharmaceutical companies.Most institutions don't require NEET for B.Pharm admission",
    careerOpportunities: [
      "Pharmacist", 
      "Pharmaceutical researcher",
      "Pharmaceutical salesperson",
      "Pharmaceutical technician",
      "Drug safety specialist", 
      "Medical writer",
      "Clinical researcher",
      "Drug inspector",
      "Medical representative"
    ],
    eligibility:[ " Pass in +2 or equivalent with minimum 50 % of marks in aggregate in Physics, Chemistry, Biology (Botany & Zoology) or Mathematics. ",
    "For SC /ST candidates Pass in +2 or equivalent with minimum 40 % of marks in aggregate in Physics, Chemistry, Biology (Botany & Zoology) or Mathematics."]
  },
  "d-pharm": {
    slug: "d-pharm",
    title: "Diploma in Pharmacy",
    shortTitle: "D.Pharm",
    subtitle: "Diploma in Pharmacy",
    duration: " Course Duration - 2 Years",
    approval: "Intake - 60",
    heroImg: heroStudents2Img,
    overviewImg: lab2Img,
    overview: "(D. Pharm) includes working in retail, hospitals, and industries. It also includes entrepreneurship and higher education.",
    careerOpportunities: [
      "Pharmacist",
      "Clinical research",
      "Quality control",
      "Regulatory affairs",
      "Entrepreneurship",
      "Higher Studies",
    ],
    eligibility:[ "Male and Female candidates are eligible to apply. ",
      "Candidates should have passed HSC or equivalent examination with Physics, Chemistry, Biology or Botany and Zoology or Mathematics or Computer Science"]
  },
  "m-pharm": {
    slug: "m-pharm",
    title: "Master of Pharmacy",
    shortTitle: "M.Pharm",
    subtitle: "Master of Pharmacy",
    duration: " Course Duration - 2 Years",
    approval: "Intake - 15",
    heroImg: heroStudents3Img,
    overviewImg: lab3Img,
    overview: "Pharmaceutical Sciences offers systematic education on procurement, synthesis and formulation, standardization and marketing of Medicines.",
    careerOpportunities: [
      "Pharmaceutical Industry: R&D, Formulation & development, production, Quality control, Quality assurance.",
      "Regulatory Affairs: Drug approval, compliance and documentation.",
      "Academics: Professor and Researcher in pharmacy college and universities",
      "Entrepreneurship: Starting own pharmacy"
    ],
    eligibility: ["Male and Female candidates are eligible to apply. ",
    "Required to have passed the B. Pharmacy Degree of The Tamilnadu Dr. M.G.R Medical University or any other University recognized as equivalent thereto by the authority of the Medical University."]
  },
  "b-pharm-lateral": {
    slug: "b-pharm-lateral",
    title: "B.Pharm (Lateral Entry)",
    shortTitle: "B.Pharm (Lateral)",
    subtitle: "Bachelor of Pharmacy (Lateral Entry)",
    duration: "Course Duration - 3 Years",
    approval: "Intake - 10",
    heroImg: heroStudents4Img,
    overviewImg: lab4Img,
    overview: "Bachelor of Pharmacy (B.Pharm) degree can lead to many career opportunities in the pharmaceutical industry. The scope of the B.Pharm degree includes work in hospitals, research labs, and pharmaceutical companies.Most institutions don't require NEET for B.Pharm admission",
    careerOpportunities: [
      "Research and development work",

"Academics",

"Quality assurance",

"Quality control",

"Drug inspectors",

"Pharmacovigilance",

"Regulatory affairs",

"Clinical pharmacy",

"Clinical research",

"Pharmacy practice",

"Pharma distributor"
    ],
    eligibility: ["Male and female candidates are eligible to apply",
    "The candidate shall have passed Diploma in Pharmacy from an institution approved by Pharmacy Council of India under section 12 of the Pharmacy Act 1948.",
    "40% aggregate marks in the first and second year Diploma in Pharmacy examinations.",
    "35% aggregate marks in the first and second year Diploma in Pharmacy examinations for SC & ST Candidates.",
    "Vocational stream & National open school certificate is not eligible for admission.",
    "The candidate should have completed 17 years of age on the date of admission or should complete the age of 17 years on or before 31st December of the year of admission."]


  },
  "pharm-d": {
    slug: "pharm-d",
    title: "Doctor of Pharmacy",
    shortTitle: "Pharm.D",
    subtitle: "Doctor of Pharmacy",
    duration: "Course Duration - 2 Years",
    approval: "Intake - 15",
    heroImg: heroStudents5Img,
    overviewImg: lab4Img,
    overview: "(D. Pharm) includes working in retail, hospitals, and industries. It also includes entrepreneurship and higher education.",
    careerOpportunities: [
      "Clinical Pharmacist: In hospitals to optimize drug therapy and monitor patient safety.",

"Pharmacovigilance specialist: Adverse drug reaction monitoring in companies.",

"Regulatory Affairs: Ensuring compliance with national drug laws.",

"Academics and Research: Professor and Researcher in pharmacy colleges and clinical research centres.",

"Community and Hospital pharmacy Practice: Providing patient counselling and medication management.",

"Medical/ scientific writer: medical writer for healthcare and pharmaceutical organizations."
    ],
    eligibility: ["Male and female candidates are eligible to apply",

" Pass in +2 or equivalent with minimum 50 % of marks in aggregate in Physics, Chemistry, Biology (Botany & Zoology) or Mathematics. For SC /ST candidates Pass in +2 or equivalent with minimum 40 % of marks in aggregate in Physics, Chemistry, Biology (Botany & Zoology) or Mathematics."]
  }
};
