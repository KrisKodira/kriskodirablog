import React, { useState, useEffect } from "react"

import { rhythm } from "../utils/typography"
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-TM9VXRW',
  dataLayer: {
    event: "cookieConsented"
  },
}

const Cookieconsent = () => {
  useEffect(() => {
    var loadCookies = function(){
      TagManager.dataLayer(tagManagerArgs);
    }

    if(document.cookie.indexOf("cookieDesicionHasBeenMade=") === -1){
      const cookieDim = document.querySelector(".cookie-dim");
      const today = new Date();
      const twoWeeks = today.setDate(today.getDate() + 14).toString();
      const cookieVars = "cookieDesicionHasBeenMade=true; expires="+twoWeeks+"; path=/";
      
      cookieDim.style.display = "block";

      document.getElementById("agreeToCookie").addEventListener("click", function () {  
        cookieDim.style.display = "none";

        loadCookies();
        document.cookie = cookieVars;
        document.cookie = "allowTrackingCookies=true; expires="+twoWeeks+"; path=/";;
      })

      document.getElementById("disagreeToCookie").addEventListener("click", function () {  
        cookieDim.style.display = "none";
        document.cookie = cookieVars;
      })
    }

    if(document.cookie.indexOf("allowTrackingCookies=") !== -1){
      loadCookies();
    }

    const revokeConsentLink = document.querySelector("a[href='#revokecookieconsent']");

    if(revokeConsentLink != null){
      console.log("notr null")
      revokeConsentLink.addEventListener("click", function () { 
        console.log("click")
        document.cookie = 'allowTrackingCookies=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
        document.cookie = 'cookieDesicionHasBeenMade=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/'; 
      })
    }
  
  });
  
  return (
    <div className="cookie-dim">
      <div className="cookie-consent">
        <div className="text-wrap">
          <p>
            We use cookies to track you do you agree?
          </p>
          <div className="button" id="agreeToCookie">Yes</div>
          <div className="button" id="disagreeToCookie">No and close window</div>
        </div>
      </div>
    </div>
  )
}

export default Cookieconsent
