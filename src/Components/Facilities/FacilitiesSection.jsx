import React, { useState } from "react";
import styles from "../../Styles/Facilities/FacilitiesSection.module.css";

import facility1Img from "../../assets/images/facility/facility-1.jpg";
import facility2Img from "../../assets/images/facility/facility-2.jpg";
import facility3Img from "../../assets/images/facility/facility-3.jpg";
import facility4Img from "../../assets/images/facility/facility-4.jpg";
import facility5Img from "../../assets/images/facility/facility-5.jpg";

const facilitiesData = [
  {
    title: "Pharmaceutical Chemistry Lab",
    heading: "",
    desc: "Pharmaceutical Chemistry Lab is a specialized facility where students and researchers conduct investigations related to the chemical aspects of pharmaceuticals. This lab plays a critical role in drug discovery, development, analysis, and quality control.",
    image: facility1Img,
  },
  {
    title: "Pharmaceutical Analysis Lab",
    heading: "",
    desc: "This lab will be concerned with the theory and practice of instrumental methods for the separation, identification and quantitative analysis of chemical substances. The various modern analytical techniques like UV-Visible, IR Spectroscopy, and different chromatographic methods like GC, HPLC and other important topics are taught to enable the students to understand and apply the principle involved in the analysis of different bulk drugs and their formulation.",
    image: facility2Img,
  },
  {
    title: "Pharmacognosy Lab",
    heading: "",
    desc: "This lab will be concerned with the theory and practice of instrumental methods for the separation, identification and quantitative analysis of chemical substances. The various modern analytical techniques like UV-Visible, IR Spectroscopy, and different chromatographic methods like GC, HPLC and other important topics are taught to enable the students to understand and apply the principle involved in the analysis of different bulk drugs and their formulation.",
    image: facility3Img,
  },
  {
    title: "Pharmaceutics Lab",
    heading: "",
    desc: "The Pharmaceutics Lab serves as innovation and scientific exploration within the pharmaceutical field. Here, dedicated researchers and scientists labor tirelessly to advance our understanding of drug formulation, delivery systems, and pharmacokinetics. Through meticulous experimentation and cutting-edge technologies, the lab endeavors to develop novel drug formulations that enhance drug efficacy, reduce side effects, and improve patient compliance.",
    image: facility4Img,
  },
  {
    title: "Pharmacology Lab",
    heading: "",
    desc: " Pharmacology Lab is a specialized facility where students and researchers conduct investigations related to the effects and mechanisms of drugs and other substances on biological systems.This lab plays a crucial role in drug development, toxicology studies, and understanding how drugs interact with the body.",
    image: facility5Img,
  },

  {
    title: "Industry-Institute Interaction Cell (IIIC)",
    heading: "",
    desc: "Better interaction between Technical institutions and industry is the need of the hour. This will have great bearing on the Pharma Curriculum, exposure of industrial atmosphere to Pharmacy students and subsequent placement of young graduating Pharmacists in industries across the country. With the advent of globalization and opening of Indian economy to outside world, competition among industries has become stiff. To solve their manufacturing problems, they look up now to Pharma Institutions. Similarly, there is an urgent need to prepare Pharmacy students for jobs in multinational companies, by exposing them to newer technologies, formulating, analytical and research methodologies. These objectives can only be achieved well by bridging the gap between industry and the academic institute.",
    subheading: "Functions",
    functions: [
      "Establishment of Industry-Institute Partnership /interaction Cell.",
      "MoU with Pharmaceutical Industries and Research Institutions.",
      "Organizing Workshops, conferences and symposia with joint participation of the faculty and the industries.",
      "Encouraging resource persons from industry to visit our Institution to deliver lectures.",
      "Arranging visits of staff members to various industry",
      "Professional consultancy by the faculty to industries.",
      "Industrial testing by faculty & technicians at site or in laboratory.",
      "Joint research programmes and field studies by faculty and people from industries.",
      "Visits of faculty to industry for study and discussions or delivering lectures on subjects of mutual interest.",
      "Visiting faculty/professors from industries.",
      "Professorial Chairs sponsored by industries at the Institute.",
      "R&D Laboratories sponsored by industries at the Institute.",
      "Scholarships/fellowships instituted by industries at the Institute for students.",
    ],
    footerText: "Memoranda of Understanding between the Institute and industries to bring the two sides emotionally and strategically closer.",
  },
  {
    title: "Governing Council & Academic Advisory Board",
    heading: "",
    desc: "This is the highest-level body that overviews the proceedings of the quality circles. The Chairman heads this high-level quality body of the Institution. The other members are the Principal and Management Board. Periodic meetings are convened according to the requirements from time to time and at the convenience of the apex council members. The council reviews the functioning of the quality movements in the organization.Eminent Professors, Scientists and Experts in Pharma Industries, University nominee, Members of AICTE and PCI have been the advisory committee members of the Institution. The academic developments are periodically reviewed, and suggestions made by the committee are amended for continual improvement.",
  },
  {
    title: "Training and Placement Cell",
    heading: "",
    desc: "The cell shall organize activities to meet the Training and Placement requirements as part of knowledge development for students and for their career development. This Q – T&P Circle is the forum in which the industry – related matters, students/faculty training and counseling shall be taken up for discussion.",
    sections: [
      {
        subheading: "Mainly, the activities cover the following requirements:",
        list: [
          "In-plant training",
          "Mini/ Main project work",
          "Campus Interviews",
          "Con-current career development (CCDP) Courses",
          "Career Guidance & Counseling",
        ],
      },
      {
        subheading: "This cell also covers the requirement of the faculty members and other staff through:",
        list: [
          "Faculty training",
          "Arrangements for participation in seminars and conferences",
          "Publications and Presentation of papers in seminar and workshops.",
        ],
      },
    ],
    footerText: "The Training and placement Cell is committed to provide all possible assistance to its students in their efforts to find employment. The benefits of this assistance are reflected in the preparation of students who were able to secure lucrative and esteemed positions in recent years. The Training & Placement service operates year-round to facilitate contacts between companies and graduates. Staff are available to respond to student's question and concern of all kinds. The aim is to ensure that students get the right information for their job recruitment.",
  },
  {
    title: "Personalized Counseling System",
    heading: "",
    desc: "Counseling is aimed at bringing about desired changes in the individual for self-realization, aiding assistance to solve problems by establishing a personal relationship.",
    subheading: "The counseling process is",
    functions: [
      "Aimed at assisting students to draw up their own plans for academic and non-academic pursuits.",
      "Intended to help the students to realise their potentials and help solve their problems by themselves.",
      "Intended to enable the faculty members understand their students better.",
      "Aimed at promoting self-direction and self- realisation.",
      "Expected to develop qualities of perseverance, dedication, sincerity, devotion, positive outlook for studies and respect for the views of others.",
    ],
  },
  {
    title: "Research & Development Cell (R&D)",
    heading: "",
    desc: "Research and development activities are considered as an essential component of higher education because of their role in creating new knowledge and insight, imparting excitement and dynamism to the educational process.",
    subheading: "The objective of this cell is",
    functions: [
      "To create and update the general research capabilities of the faculty members and students.",
      "To provide state-of-the-art R&D facilities in specific areas of Pharmacy and technology for advanced research and development, education and training.",
      "To provide sophisticated drug testing, instrumentation and design facilities.",
      "To provide necessary expertise, facilities and know-how for undertaking R&D projects on a turnkey basis, in emerging inter-disciplinary areas of relevance to industry.",
      "To aim and achieve break-through in relevant specific technology areas.",
      "R&D Projects involving planned research or critical investigation on product/process development leading to the discovery of new knowledge at a commercial scale and benefit the needy.",
    ],
  },
  {
    title: "MTCOPS Pharma Consultancy Services",
    heading: "",
    functions: [
      "Enable pharmacy graduate to establish small scale entrepreneurship to manufacture crude drugs, oral liquid formulations, cosmetics and topical formulations both herbal and conventional drugs.",
      "To conduct specialized courses on Good Manufacturing Practice (GMP).",
      "To establish a quality control laboratory for effective training in Good Laboratory Practice (GLP).",
      "To conduct Continuing Medical Education (CME) programmes on the most recent developments and WHO specifications and policies on manufacture and formulations.",
      "To aid personality development and communication skill of the small entrepreneur.",
      "To equip him with enough knowledge of marketing strategies and policies.",
      "To encourage Industry-Institute related programmes leading to appropriate consultancies.",
      "To organize periodical workshops and seminars engaging resource persons from the industry, marketing and Bank officials.",
      "To encourage the small entrepreneur for export of his products, procedures related to licensing, manufacturing and exporting regulations.",
    ],
  },
  {
    title: "Science / Journal Club",
    heading: "",
    desc: `The Science/Journal club is a forum which aims at producing technical manpower, which is both creative and innovative. The forum trains the candidates to apply the newly acquired knowledge and skills and take up challenges in face of the current technological developments and information explosion.

Journal clubs are usually organized in our college around a defined subject in basic or applied research. For example, the application of evidence-based medicine to some area of medical practice can be facilitated by a journal club. Typically, each participant can voice their view relating to several questions such as the appropriateness of the research design, the statistics employed, the appropriateness of the controls that were used, etc. There might be an attempt to synthesize together the results of several papers, even if some of these results might first appear to contradict each other. Even if the results of the study are seen as valid, there might be a discussion of how useful the results are and if these results might lead to new research or to new applications.

We use science and Journal club sometimes in the education of or professional students. These helps and make the students become more familiar with the advanced literature in their new field of study. In addition, these journal clubs help improve the students' skills of understanding and debating current topics of active interest in their field.

Research laboratories may also organize journal clubs for all researchers in the lab to help them keep up with the literature produced by others who work in their field.`,
  },
  {
    title: "National Social Service",
    heading: "",
    desc: "The circle shall participate in the National Social Service movement. A unit will consist of 50 members. The total strength shall be divided into 03 project groups.",
    subheading: "The activities taken up are stated below:",
    functions: [
      "Campus maintenance",
      "Health care camps and awareness programs in village",
      "Donating plants to villagers.",
      "Arranging special lectures in adopted villages.",
      "Collecting old garments and distributing them to the poor and needy.",
      "Planting trees and taking care of their growth.",
      "Creating educational awareness in villages.",
      "A part from these, NSS renders its service to organize all the functions organized by the college",
    ],
  },
  {
    title: "Library",
    heading: "",
    desc: "Library remains a place of workshop for a scholar. A spacious library well stocked with all necessary books of pharmaceutical and allied sciences is available in our campus.",
    subheading: "Library facilities has been considerably enhanced with provisions of:",
    functions: [
      "A separate reading room for students and faculty.",
      "Digitalized library accompanied with DELNET.",
      "Total no of volumes – 5070.",
      "Total no of titles – 2049.",
      "National and international journals -50.",
      "Magazines and dailies.",
      "Rich collection of audio-video/DVD.",
      "Communication skills, business Management and many more based on the curriculum.",
    ],
  },
  {
    title: "Transport",
    heading: "",
    desc: "All nearby cities & rural places are well connected by our transport facility. Buses to & from Pudukkottai, Viralimalai, Manaparai, Thuvarankurichi, Ponnamaravathi, Gantharavakkottai, Trichy etc., are operated for ease of mobility to students.",
  },
  {
    title: "Herbal Medical Garden",
    heading: "",
    desc: `Herbal Medicinal Garden is being maintained by the Department of Pharmacognosy of the college. In the garden around many medicinal plants mainly Henna, Lemon grass, Vasaka, Bael, Vinca, Arjuna, Mango, Tulasi, Aswagandha etc. were maintained by us.

Each plant has its own physiological and pharmacological actions. The cultivation of medicinal and aromatic plants also leads to industrialization to a greater extent. Herbs for leaf harvest include mints, basil, lemon balm, lemon grass oil etc. these herbs are easy to grow, look good, taste and smell amazing and many of them are magnets for bees and butterflies.

All the medicinal and aromatic plants introduced in Herbal Medicinal Garden were properly maintained for their further growth. Due to presence of varied chemical compounds in different plant species makes it a major source of treatment of varied disorders.`,
  },
  {
    title: "Cultural and Sports Club",
    heading: "",
    desc: `Sports play is vital for shaping up the personality and fitness of a person and to give a global experience to all the students. An on-campus sports environment is provided to all the students. Since its establishment, the Sports department has played a vital role in student's life to reshape their personality and add values like Teamwork and Positive attitude.

It is the constant endeavour of the college to see that the students grow intellectually as well as physically. The College regularly organizes Inter College competitions in various Cultural and Sports events and motivate students to participate in Inter Collegiate Tournaments. Besides providing physical and mental discipline, they inculcate in students the noble qualities of team spirit, discipline, sportsmanship and self-confidence. A large playground in the campus is well equipped for Cricket, Volleyball, Kabaddi, Shuttle, Tennikoit, Throw-ball, Caroms, Chess and other games. Our motive is to maximize access, development and excellence at all levels of participation in cultural and sport activities in order to improve social cohesion, nation building and the quality of life.

Our students bagged many prizes in the tournaments organized by many prestigious organizations. Students won the competitions in Cricket, Kabaddi, Carroms, Tennikoit, Chess and Volleyball at various Intercollegiate levels.`,
  },
];

export default function FacilitiesSection() {
  const [openIndices, setOpenIndices] = useState([]);

  const toggleAccordion = (idx) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className={styles.facCardSection} id="facilities-accordion">
      <div className={styles.facContainerCard}>
        {/* TOP BLUE HEADER BAR */}
        <div className={styles.facCardHeader}>
          <h2>Modern Facilities at <span>Mother Terasa College of Pharmacy</span></h2>
        </div>

        {/* ACCORDION ITEMS LIST */}
        <div className={styles.facAccordionList}>
          {facilitiesData.map((item, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={item.title}
                className={`${styles.facItem} ${isOpen ? styles.facItemOpen : ""}`}
              >
                <button
                  className={`${styles.facBtn} ${isOpen ? styles.facBtnOpen : ""}`}
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{item.title}</span>
                  <span
                    className={`${styles.facChevron} ${isOpen ? styles.facChevronRotate : ""}`}
                    aria-hidden="true"
                  />
                </button>

                <div className={`${styles.facAnswerWrapper} ${isOpen ? styles.facAnswerWrapperOpen : ""}`}>
                  <div className={styles.facAnswerInner}>
                    <div className={styles.facAnswerGrid}>
                      {item.image && (
                        <div className={styles.facAnswerImgWrap}>
                          <img
                            src={item.image}
                            alt={item.title}
                            className={styles.facAnswerImg}
                          />
                        </div>
                      )}
                      <div className={styles.facAnswerContent}>
                        {item.heading && <h3 className={styles.facAnswerTitle}>{item.heading}</h3>}
                        {item.desc && (
                          typeof item.desc === "string" ? (
                            item.desc.split("\n\n").map((para, pIdx) => (
                              <p key={pIdx} className={styles.facAnswerDesc}>{para.trim()}</p>
                            ))
                          ) : (
                            <p className={styles.facAnswerDesc}>{item.desc}</p>
                          )
                        )}
                        
                        {item.sections ? (
                          item.sections.map((sec, sIdx) => (
                            <div key={sIdx} className={styles.facSectionBlock}>
                              {sec.subheading && <h4 className={styles.facSubheading}>{sec.subheading}</h4>}
                              {sec.text && <p className={styles.facAnswerDesc}>{sec.text}</p>}
                              {sec.list && (
                                <ul className={styles.facList}>
                                  {sec.list.map((li, lIdx) => (
                                    <li key={lIdx}>{li}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))
                        ) : (
                          <>
                            {item.subheading && <h4 className={styles.facSubheading}>{item.subheading}</h4>}
                            {item.functions && (
                              <ul className={styles.facList}>
                                {item.functions.map((func, fIdx) => (
                                  <li key={fIdx}>{func}</li>
                                ))}
                              </ul>
                            )}
                          </>
                        )}

                        {item.footerText && <p className={styles.facFooterText}>{item.footerText}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
