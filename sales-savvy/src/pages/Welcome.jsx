import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Public landing page
 * Brand logo + elevator pitch + 2 large CTA cards
 */
export default function Welcome() {
  return (
    <section className="hero">
      {/* simple text-logo */}
      <h1 className="brand">
        Sales <span>Savvy</span>
      </h1>

      {/* one-liner + elevator pitch */}
      <p className="tagline">
        Shop smarter, not harder. Sales&nbsp;Savvy brings hand-picked deals,
        lightning-fast delivery and a personalised cart—all in one place.
        Sign up free and start exploring today!
      </p>

      {/* big call-to-action blocks */}
      <div className="cta-blocks">
        <NavLink to="/sign_up" className="cta-card">
          <span className="cta-text">Create account</span>
        </NavLink>

        <NavLink to="/sign_in" className="cta-card">
          <span className="cta-text">Sign&nbsp;in</span>
        </NavLink>
      </div>
    </section>
  );
}

/** We import useNavigate — a React Router hook.
 *              why:   If a user clicks a button → we want to move to another page
 *                     → this hook lets us do that without reloading.
 * Welcome (functional React component)
 *                     landing page-  returns a simple UI(welcome message and two buttons.)
 * 
 * return ( <></> ) 
 *                 -  returns JSX syntax to define the UI structure.
 *                 -  <> </> is a React Fragment-used to group elements without extra divs.
 * <div style={styles.container}>
                  - A div block styled inline using the styles.container object.

 * onClick={() => navigate('/signup')}
                  - This is an arrow function triggered on button click.
                  - It navigates to the signup page.


 * 
 * 
 

*/