/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import { rhythm } from "../utils/typography"

const Newsletter = () => {
  
  return (
    <form action="https://tinyletter.com/kriskodira" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/kriskodira', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
      <p><label for="tlemail">Get new posts in your inbox</label></p>
      <p><input type="text" name="email" id="tlemail" placeholder="E-Mail" /></p>
      <input type="hidden" value="1" name="embed"/>
      <input className="submitBtn" type="submit" value="Subscribe" />
    </form>
  )
}

export default Newsletter
