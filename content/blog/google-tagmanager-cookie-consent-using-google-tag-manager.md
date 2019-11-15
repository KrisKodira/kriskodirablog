---
date: 2019-11-15
title: 'Google Tagmanager: Cookie Consent using Google Tag Manager'
category: Code
description: How to let your users choose if they want to be tracked.
picture: "/charles-Ms9xBg3Gtr8-unsplash.jpg"
featured_post: true
gallery: []
published: true

---
Some annoying client asked you to add a Cookie Consent to his page because of the new GDPR rule in germany where you are only allowed to load tracking cookies if the user actively says "Yes"?

**Don't be scared I got your back!**

**Glossary:**

GTM --> Google Tag Manager

## Google Tag Manager

Head to [Google Tag Manager](https://tagmanager.google.com) and log in with the Google Account you use for your work. Once you're logged in click on "Create Account" and fill in the data accordingly and choose "Web" at the target platform. Click on create and accept the GTM Policy. Also add the two snippets GTM provides you with to the according places.

## Creating the Tag

![](/Screenshot 2019-11-15 at 21.45.38.png)

Create a new Tag by clicking on "Add a new tag" on the upper left side and then click on the tag manager to select a tag type. In the tag type you choose "Custom HTML". Here you can paste your tracker Script from Google Analytics, Matomo and so on.

At the top left corner give your tag a meaningful name like "GA Tracker". Skip the trigger selection for now and click on save and click "Add trigger" if GTM tells you that you didn't create a trigger now.

Next up go to Triggers and click on "New" to create a trigger. Click on the trigger configuration to select a trigger type and here you will select "Custom Event".

![](/Screenshot 2019-11-15 at 21.53.49.png)

Once you got that open enter a meaningful name to your event name like "cookieConsented". You will push that event later on in your JS once the client says "Yes, I want to be tracked". Also click the "Some Custom Events" radio and exclude your development environment from being tracked by checking if the hostname **does not** contain your dev environment names like staging, localhost and so on. Otherwise you would track clicks and so on in your dev environment which the client doesn't want. Give your trigger a meaningful name like "Cookie has been consented". After this save and continue with the tutorial.

## Adding the trigger to the tag

Go back to "Tags" and click on your tag you just created. After that click on "Triggering" and choose the Trigger you just created. Click on "Save" and lets move to the code.

## The Cookie Consent Code

#### HTML & SASS (CSS)

Add the HTML to your page. It could look something like this:

    <div class="cookie-dim">
      <div class="cookie-consent">
        <div class="text-wrap">
          <p>
          We use cookies to track you do you agree?
          </p>
          <div class="button" id="agreeToCookie">Yes</div>
          <div class="button" id="disagreeToCookie">No and close window</div>
        </div>
      </div>
    </div>

Some basic SASS styling you could use would look like this:

    .cookie-dim
      width: 100vw
      height: 100vh
      background-color: #00000065
      position: fixed
      top: 0
      left: 0
      
      .cookie-consent
        width: 40vw
        background-color: #fff
        padding: 4rem
        margin: 0 auto
        position: absolute
        left: 0
        right: 0
        top: 50%
        transform: translateY(-50%)
      
      .button
        padding: 1rem
        background-color: #000
        color: #fff
        display: inline-block
        text-align: center
        min-width: 6rem
        cursor: pointer
        &:first-of-type
          margin-right: 1rem
        &:hover
          background-color: #272727

Your cookie consent will now look like this:

![](/Screenshot 2019-11-15 at 22.21.05.png)

Once you think you like your cookie style add the _display: none_ styling to your _.cookie-dim_ class.

#### Javascript

Now create a .js file for your cookie consent that is saved in your js folder. It could be named something like _cookie-consent.js_.

First we need to check if the user has already decided that he wants/doesn't want us to load the cookies. You can do this by adding the following _if_ condition (Make sure to use this code after the Page has been loaded and the document is ready):

        if(document.cookie.indexOf("cookieDesicionHasBeenMade=") === 0){
     	    // code       
        }

The complete code for the cookie consent will look something like this:

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

## Testing your configuration

Go back to GTM and click on Submit in the upper right corner. This is pretty much like Version control. Add a meaningful name to your version like "Add cookie consent" and click on "Publish". Once published click on "Preview". Go to your webpage and you will see thet GTM console popping up all of a sudden.

![](/Screenshot 2019-11-15 at 23.06.37.png)

As you can see below the "Tags not fired" headline, none of the tags we created are being fired. Which is exactly what you want. Now once you click "Yes" you will see the Tracker you added jump to "Tags fired on this page". Right now your tracker is loaded inside the website and working. Now whenever you change the page your cookie should still be laoded all the time. If you want to test the deny option just open your website in a private browser, click "No" and see what happens. Your tracker stays in "Not Fired On This Page" forever. No matter what you do. **TADA!** There we have it. Now we only need to give the user the ability to revoke his choice in the privacy policy. But this one is easy peasy.

## Making the consented cookie revokeable

In your privacy policy create a link with an anchor called something like _#_revokecookieconsent. 

Now after your document has been loaded in your JS add the following snippet:

    const revokeConsentLink = document.querySelector("a[href='#revokecookieconsent']");
    
    if(revokeConsentLink != null){
      revokeConsentLink.addEventListener("click", function () { 
        document.cookie = 'allowTrackingCookies=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
        document.cookie = 'cookieDesicionHasBeenMade=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/'; 
      })
    }