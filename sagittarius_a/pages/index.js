
import { Element } from 'react-scroll'

import HeadSection from "../components/sections/HeadSection"
import IntroSection from "../components/sections/IntroSection"
import ExperienceSection from "../components/sections/ExperienceSection"
import ProjectsSection from "../components/sections/ProjectsSection"
import TimelineSection from "../components/sections/TimelineSection"
import ContactSection from "../components/sections/ContactSection"
import configs from '../content/mainPage'



function HeadContainer() {
  
  return (
    <>
      <Element name="HeadSection" className="pb-32 HeadSection">
        <HeadSection headSectionConfig={configs.headSectionConfig}  />
      </Element>
      <Element name="IntroSection" className="py-32 IntroSection">
        <IntroSection introConfig={configs.introSectionConfig} />
      </Element>
      <Element name="ExperienceSection" className="py-32 ExperienceSection">
        <ExperienceSection experienceConfig={configs.experienceSectionConfig}  />
      </Element>
      <Element name="ProjectsSection" className="py-32 ProjectsSection">
        <ProjectsSection projectsConfig={configs.projectsConfig}  />
      </Element>
      <Element name="TimelineSection" className="py-32 TimelineSection">
        <TimelineSection timelineConfig={configs.timelineConfig}  />
      </Element>
      <Element name="ContactSection" className="py-64 pb-64 ContactSection">
        <ContactSection contactConfig={configs.contactConfig} />
      </Element>
      <div className="pb-64" />
    </>
  )
}


export default HeadContainer
