import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

const FAQ = () => {
  return (
    <div className="flex justify-center items-center lg:m-24 ">
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>What is e-learning?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              According to a team of leading experts[1], e-learning can be
              defined as “instruction delivered on a computer by CD-ROM,
              Internet or intranet.” While this is a fairly broad definition,
              e-learning, in a business environment, does contain almost all the
              features of traditional learning: Relevant content, instructional
              methodology, presentation tools (such as PowerPoint) and
              assessments,…all with the objective of enhancing knowledge and
              skills, as well as improving performance. To this definition, we
              can often add media (recorded audio and/or video) and software
              programs dedicated to the creation of e-learning courseware;
              again, not unlike traditional instruction processes.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How does E-learning benefit your organization?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              E-Learning is reusable, cost effective training process, where
              content is prepared and paid for once but used again and again. It
              can be deployed rapidly and it is totally flexible to meet the
              needs of an organization. Once created, the material can be
              delivered anywhere and anytime with virtually no additional cost.
              Since e-learning is primarily self-directed, there is no need for
              individuals to resolve the typical conflicts between their ongoing
              work projects and required training; the courses are available to
              meet each individual’s schedule. And since the training is
              computer based, it can be scaled very effectively…delivering the
              same training to large numbers of employees at multiple locations
              at virtually the same time…or at any time at all.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What systems are used in e-Learning ?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              <li>
                A key element in any e-learning structure is a Learning
                Management System (LMS) or a Learning Content Management System
                (LCMS), a software program that stores and delivers the course
                content, and tracks student access and progress. A good example
                of a modern, up-to-date system is the eLeaP LMS that leverages
                new web technology. We’ll talk more about how an LMS works in a
                later section.
              </li>
              <li>
                Learning Content Management Systems (LCMS) provide these
                capabilities as an integrated part of their packages. Selecting
                an e-Learning and training platform such as an LCMS, offers a
                natural solution for those needing an easy to use system that
                can be implemented quickly.
              </li>
              <li>
                The final element is a delivery and receiving platform that
                presents the training to the learner. This typically resembles a
                client/server environment when used on the Internet or an
                intranet, ensuring the user access to the material. On occasion,
                e-learning is delivered through a CD-ROM or DVD that is
                physically delivered to the learner. This media can be used on a
                computer or on any CD or DVD player capable of reproducing
                video, replacing, in a way, the old-fashioned training movie.
              </li>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What is involved in implementing an e-learning system?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              The use of sound planning techniques is probably the best first
              step to implementing an e-learning system. Good planning should
              reflect a strategy that is in line with your organization’s
              resources so you won’t be caught in the middle of an
              implementation without funds or personnel to finish. The first
              step in developing a workable plan is to analyze the current
              situation by gathering factual data. If you have a system in place
              now, evaluate its effectiveness…both in terms of throughput and
              user satisfaction. Even if this is the first time your
              organization will have its own dedicated training platform, you
              can still go ahead by developing some statistics. Consider these
              elements:
            </p>
            <p>
              <li>Number of current users.</li>
              <li>Estimated number of users in three years.</li>
              <li>How many courses will you want to offer?</li>
              <li>How often will new courses be introduced?</li>
              <li>
                What is the primary nature of the courses: What percentage are
                hands-on simulations; what percentage are academic?
              </li>
              <li>Will you use multi-media formats (audio/video/animation)?</li>
              <li>What in-house resources do you need to manage the system?</li>
              <li>What budget is available?</li>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
