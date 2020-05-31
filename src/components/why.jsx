import React from "react"
import Style from "./why.module.scss"

const Why = () => (
  <section className={Style.main}>
    <div className={Style.maintitle}>
      <h2
        data-sal="slide-left"
        data-sal-delay="300"
        data-sal-easing="ease"
        data-sal-duration="700"
      >
        <span className={Style.under}>The Technology</span>
      </h2>
      <p>We use new technology when it is better, not because it is new.</p>
    </div>
    <div className={Style.mainflex}>
      <div
        className={Style.flexitem}
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
        data-sal-duration="500"
      >
        <h3>
          <span>JAMstack</span>
        </h3>
        <p>
          JAM stands for Javascript, APIs & Markup. The JAM "stack" is not about
          a specific technology, but rather a new philosophy for building
          websites. We are big proponents of this method for most cases. Instead
          of server-rendered websites, the JAMstack method delivers prebuilt
          static pages directly to the user user. It offers much faster load
          times, easy scalability, and more security. Check out{" "}
          <a src="https://snipcart.com/blog/jamstack">this article</a> for more
          info on why JAMstack is the way of the future!
        </p>
      </div>
      <div
        className={Style.flexitem}
        data-sal="slide-up"
        data-sal-delay="800"
        data-sal-easing="ease"
        data-sal-duration="500"
      >
        <h3>
          <span>Gatsby</span>
        </h3>
        <p>
          Gatsby is our JAMstack static site generator of choice. There are
          other options such as Hugo and Jekyll, but we prefer to use Gatsby.
          Unlike WordPress, Gatsby allows us to use almost any CMS (even the
          WordPress CMS!) so you have many more options for managing your
          content. Gatsby has a ton of cool tricks, such as preloading links in
          the background to other parts of your site, giving the impression of
          instant loading site navigation. Gatsby is totally behind the scenes,
          you won't notice any difference aside from the greatly improved
          speeds!.{" "}
        </p>
      </div>
    </div>
    <div className={Style.mainflex}>
      <div
        className={Style.flexitem}
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
        data-sal-duration="500"
      >
        <h3>
          <span>React</span>
        </h3>
        <p>
          React is simply a Javascript framework. It's what we program
          functionality into the website with. React offers some significant
          speed advantages over regular Javascript/, and we are all about more
          speed! React and Gatsby go together, making the choice even easier.
        </p>
      </div>

      <div
        className={Style.flexitem}
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
        data-sal-duration="500"
      >
        <h3>
          <span>Scale</span>
        </h3>
        <p>
          Because JAMstack sites require no database server to render the site,
          it is incredibly easy to deliver content through a CDN and easily
          scale up or down to meet the current load. Let's say your website was
          mentioned on a popular podcast and your traffic suddenly skyrocketed,
          overloading and crashing your website server. With JAMstack and CDNs
          this is not a problem, and the demand will easily be met without
          lifting a finger.
        </p>
      </div>
    </div>
  </section>
)

export default Why
