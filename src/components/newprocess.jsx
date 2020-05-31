import React from "react"
import Styles from "./process.module.scss"

const Process = () => (
  <section id="process" className={Styles.process2}>
    <div className={Styles.process2top}>
      <h2
        data-sal="zoom-in"
        data-sal-delay="300"
        data-sal-easing="ease"
        data-sal-duration="400"
      >
        <span className={Styles.under}>The Process</span>
      </h2>
      <p
        data-sal="fade"
        data-sal-delay="400"
        data-sal-easing="ease-in"
        data-sal-duration="1000"
      >
        This is totally flexible! Because we only take on one major project at a
        time the entire team is focused on your project and midstream changes
        are much easier.
      </p>
    </div>
    <div className={Styles.schemapart4}>
      <h3>Start</h3>
      <div className={Styles.schemparent2}>
        <div className={Styles.schemgroup}>
          <div className={Styles.schemitem}>
            <h4>Let's Talk</h4>
            <p>
              Give us a call and tell us about your plans! It's totally free and
              we are happy to answer any questions you have. If we don't think
              our services would benefit you, or your project is outside of our
              scope, we will do our best to point you in the correct direction.
              Never any pressure. 100% honesty.
            </p>
          </div>
        </div>

        <svg className={Styles.lines} width="100%" height="100%">
          <line
            className={Styles.line}
            x1="50%"
            y1="0"
            x2="0"
            y2="0"
            stroke="#000"
          ></line>
          <line
            className={Styles.line}
            x1="50%"
            y1="0"
            x2="100%"
            y2="0"
            stroke="#000"
          ></line>
          <line
            className={Styles.line}
            x1="0"
            y1="0"
            x2="0"
            y2="100%"
            stroke="#000"
          ></line>
          <line
            className={Styles.line}
            x1="100%"
            y1="0"
            x2="100%"
            y2="100%"
            stroke="#000"
          ></line>
          {/* <line
            className={Styles.line}
            x1="0%"
            y1="100%"
            x2="50%"
            y2="100%"
            stroke="#000"
          ></line>
          <line
            className={Styles.line}
            x1="100%"
            y1="100%"
            x2="50%"
            y2="100%"
            stroke="#000"
          ></line> */}
        </svg>
      </div>
    </div>
    {/* <div className={Styles.process2flex}>
      <div className={Styles.flex1}>
        <h3>Start</h3>
        <div className={Styles.process2inner}>
          <h4>Let's talk</h4>
          <p>
            Give us a call and tell us about your plans! It's totally free and
            we are happy to answer any questions you have. If we don't think our
            services would benefit you, or your project is outside of our scope,
            we will do our best to point you in the correct direction. Never any
            pressure. 100% honesty.
          </p>
          <svg className={Styles.lines} width="100%" height="100%">
            <line
              className={Styles.line}
              x1="50%"
              y1="0"
              x2="0"
              y2="0"
              stroke="#000"
            ></line>
            <line
              className={Styles.line}
              x1="50%"
              y1="0"
              x2="100%"
              y2="0"
              stroke="#000"
            ></line>
            <line
              className={Styles.line}
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              stroke="#000"
            ></line>
            <line
              className={Styles.line}
              x1="100%"
              y1="0"
              x2="100%"
              y2="100%"
              stroke="#000"
            ></line>
            <line
              className={Styles.line}
              x1="0%"
              y1="100%"
              x2="0"
              y2="100%"
              stroke="#000"
            ></line>
            <line
              className={Styles.line}
              x1="0"
              y1="100%"
              x2="0"
              y2="100%"
              stroke="#000"
            ></line>
          </svg>
        </div>
      </div>
    </div> */}

    <div className={Styles.schemapart}>
      <h3>Planning</h3>
      <div className={Styles.schemparent}>
        <div className={Styles.schemgroup}>
          <div className={Styles.schemitem}>
            <h4>Project Proposal</h4>
            <p>
              We send you a basic outline of the project based on our
              conversation. This includes needed website features, number of
              pages, an estimated timeline, recommendations, and of course an
              estimated cost.
            </p>
          </div>
        </div>

        <div className={Styles.schemgroup}>
          <div className={Styles.schemitem}>
            <h4>Design</h4>
            <p>
              Sometimes the hardest part! We use Adobe XD to draw up a general
              website outline, and you decide if you want custom graphics and/or
              animations.
            </p>
          </div>
        </div>
        <div className={Styles.schemgroup}>
          <div className={Styles.schemitem}>
            <h4>Agreement</h4>
            <p>
              If both parties are happy with we finalize a contract and move
              onto the development stage.
            </p>
          </div>
        </div>
      </div>

      <svg className={Styles.lines} width="100%" height="100%">
        <line
          className={Styles.line}
          x1="50%"
          y1="0"
          x2="0"
          y2="0"
          stroke="#000"
        ></line>
        <line
          className={Styles.line}
          x1="50%"
          y1="0"
          x2="100%"
          y2="0"
          stroke="#000"
        ></line>
        <line
          className={Styles.line}
          x1="0"
          y1="0"
          x2="0"
          y2="100%"
          stroke="#000"
        ></line>
        <line
          className={Styles.line}
          x1="100%"
          y1="0"
          x2="100%"
          y2="100%"
          stroke="#000"
        ></line>
        <line
          className={Styles.line}
          x1="0%"
          y1="100%"
          x2="50%"
          y2="100%"
          stroke="#000"
        ></line>
        <line
          className={Styles.line}
          x1="100%"
          y1="100%"
          x2="50%"
          y2="100%"
          stroke="#000"
        ></line>
      </svg>
    </div>

    <div className={Styles.schemapart}>
      <h3>Development</h3>
      <div className={Styles.schemparent}>
        <div className={Styles.schemgroup}>
          <div className={Styles.schemitem}>
            <h4>Agile</h4>
            <p>
              We usually use the Agile development flow, building a basic
              working framework (skelton) and adding features to it as we go.
              You are welcome to check in at anytime and view the current
              progress!
            </p>
          </div>
        </div>

        <div className={Styles.schemgroup}>
          <div className={Styles.schemitem}>
            <h4>Revisions</h4>
            <p>
              Decided you want additional pages? Custom graphics? A different
              CMS? Let us know! Minor changes are free, larger ones can be
              discussed.
            </p>
          </div>
        </div>

        <svg className={Styles.lines} width="100%" height="100%">
          {/* <line
              className={Styles.line}
              x1="50%"
              y1="0"
              x2="0"
              y2="0"
              stroke="#000"
            ></line> */}
          {/* <line
              className={Styles.line}
              x1="50%"
              y1="0"
              x2="100%"
              y2="0"
              stroke="#000"
            ></line> */}
          <line
            className={Styles.line}
            x1="0"
            y1="0"
            x2="0"
            y2="100%"
            stroke="#000"
          ></line>
          <line
            className={Styles.line}
            x1="100%"
            y1="0"
            x2="100%"
            y2="100%"
            stroke="#000"
          ></line>
          <line
            className={Styles.line}
            x1="0%"
            y1="100%"
            x2="50%"
            y2="100%"
            stroke="#000"
          ></line>
          <line
            className={Styles.line}
            x1="100%"
            y1="100%"
            x2="50%"
            y2="100%"
            stroke="#000"
          ></line>
        </svg>
      </div>
    </div>

    <div className={Styles.schemapart3}>
      <h3>Testing/Deployment</h3>
      <div className={Styles.schemparent2}>
        <div className={Styles.schemgroup}>
          <div className={Styles.schemitem}>
            <h4>Pure Chaos</h4>
            <p>
              If things don't go sideways with no warning is the project really
              even a real project?
            </p>
          </div>
        </div>

        <svg className={Styles.lines} width="100%" height="100%">
          {/* <line
              className={Styles.line}
              x1="50%"
              y1="0"
              x2="0"
              y2="0"
              stroke="#000"
            ></line> */}
          {/* <line
              className={Styles.line}
              x1="50%"
              y1="0"
              x2="100%"
              y2="0"
              stroke="#000"
            ></line> */}
          <line
            className={Styles.line}
            x1="0"
            y1="0"
            x2="0"
            y2="100%"
            stroke="#000"
          ></line>
          <line
            className={Styles.line}
            x1="100%"
            y1="0"
            x2="100%"
            y2="100%"
            stroke="#000"
          ></line>
          <line
            className={Styles.line}
            x1="0%"
            y1="100%"
            x2="50%"
            y2="100%"
            stroke="#000"
          ></line>
          <line
            className={Styles.line}
            x1="100%"
            y1="100%"
            x2="50%"
            y2="100%"
            stroke="#000"
          ></line>
        </svg>
      </div>
    </div>

    <div className={Styles.schemapart2}>
      <h3>Success!</h3>
      <div className={Styles.schemparent2}>
        <div className={Styles.schemgroup}>
          <div className={Styles.schemitem}>
            <h4>Live</h4>
            <p>
              We turn the live website over to you and move onto our next
              project! We offer ongoing monthly support/update/revision
              packages, emergency support, or you can just sit back and never
              speak to us again!
            </p>
          </div>
        </div>

        <svg className={Styles.lines} width="100%" height="100%">
          {/* <line
              className={Styles.line}
              x1="50%"
              y1="0"
              x2="0"
              y2="0"
              stroke="#000"
            ></line> */}
          {/* <line
              className={Styles.line}
              x1="50%"
              y1="0"
              x2="100%"
              y2="0"
              stroke="#000"
            ></line> */}
          <line
            className={Styles.line}
            x1="0"
            y1="0"
            x2="0"
            y2="100%"
            stroke="#000"
          ></line>
          <line
            className={Styles.line}
            x1="100%"
            y1="0"
            x2="100%"
            y2="100%"
            stroke="#000"
          ></line>
          <line
            className={Styles.line}
            x1="0%"
            y1="100%"
            x2="50%"
            y2="100%"
            stroke="#000"
          ></line>
          <line
            className={Styles.line}
            x1="100%"
            y1="100%"
            x2="50%"
            y2="100%"
            stroke="#000"
          ></line>
        </svg>
      </div>
    </div>
  </section>
)

export default Process

/////////////////////////
{
  /* <section className={Styles.process}>
      <div className={Styles.processcon}>
        <h2 data-sal="zoom-in" data-sal-delay="400" data-sal-easing="ease">
          <span className={Styles.under}>The Process</span>
        </h2>
        <p
          data-sal="fade"
          data-sal-delay="400"
          data-sal-easing="ease-in"
          data-sal-duration="1000"
        >
          This is totally flexible! Because I only have one major project at a
          time, it is extremely easy to implement new requests during the
          development process.
        </p>

        <div className={Styles.processflex}>
          <div className={Styles.processimg}>
            <img src={Talk} alt="Two people talking at a table"></img>
          </div>
          <div className={Styles.processinfo}>
            <h3
              data-sal="slide-right"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              Initial Consultation
            </h3>
            <p
              data-sal="fade"
              data-sal-delay="400"
              data-sal-easing="ease-in"
              data-sal-duration="1000"
            >
              In person (if we are close), phone or video calls. We discuss your
              goals for the website, I answer any questions about web
              development. It's always free, and there is zero pressure. Web
              development is my passion, and I am happy to give advice! If I
              don't think I can deliver exactly what you are looking for, I will
              do my best to point you in the correct direction.
            </p>
          </div>
        </div>

        <div className={Styles.processflex}>
          <div className={Styles.processimg}>
            <img
              src={Plan}
              alt="Whiteboard with a person pointing at a plan on it"
            ></img>
          </div>
          <div className={Styles.processinfo}>
            <h3
              data-sal="slide-right"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              Project Proposal
            </h3>
            <p
              data-sal="fade"
              data-sal-delay="400"
              data-sal-easing="ease-in"
              data-sal-duration="1000"
            >
              Based on our conversation, I send you a proposal with a fixed
              price and estimated timeline. I won't ever run over budget, even
              if I have to eat the costs. During the development process minor
              changes are free, major ones which lengthen the project time can
              be discussed.
            </p>
          </div>
        </div>

        <div className={Styles.processflex}>
          <div className={Styles.processimg}>
            <img src={Comm} alt="Texts between two people"></img>
          </div>

          {/* <div className={Styles.processflex}>
            <div className={Styles.processimg}>
              <div className={Styles.processinner}></div>
            </div>
    //       </div> */
}
//       <div className={Styles.processinfo}>
//         <h3
//           data-sal="slide-right"
//           data-sal-delay="300"
//           data-sal-easing="ease"
//         >
//           Communication
//         </h3>
//         <p
//           data-sal="fade"
//           data-sal-delay="400"
//           data-sal-easing="ease-in"
//           data-sal-duration="1000"
//         >
//           During the development you are welcome to be involved as little or
//           as much as you would like. Great communication is key, so you will
//           be kept updated during the entire process. Because Electric Eel is
//           a small studio, your single point of contact is me. Instead of the
//           sales department, or a manager, you will be talking directly to
//           the person working on your websites. In my opinion this provides
//           much better feedback and less chances for miss-communications.
//         </p>
//       </div>
//     </div>
//     <div className={Styles.processflex}>
//       <div className={Styles.processimg}>
//         <img
//           src={Content}
//           alt="Writing on a wall with a person standing by it"
//         ></img>
//       </div>
//       <div className={Styles.processinfo}>
//         <h3
//           data-sal="slide-right"
//           data-sal-delay="300"
//           data-sal-easing="ease"
//         >
//           Quality Content
//         </h3>
//         <p
//           data-sal="fade"
//           data-sal-delay="400"
//           data-sal-easing="ease-in"
//           data-sal-duration="1000"
//         >
//           Nothing helps your website rank higher than having high quality
//           content. The days of fooling search engines with keyword stuffing
//           are long gone. I handle the behind the scenes SEO, such as
//           optomized images and fast load times, but it is important to
//           remember that delivering what the user searched for is the best
//           way to improve your rankings.
//         </p>
//       </div>
//     </div>
//   </div>
// </section> */}
