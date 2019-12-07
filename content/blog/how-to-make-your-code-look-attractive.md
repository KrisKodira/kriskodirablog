---
date: 2019-12-07
title: How to make your code look attractive
category: Art of coding
description: Everyone has heard of it and fears it. SPAGHETTI CODE. Bohoooo. Here
  is my take on clean code.
picture: "/jakub-kapusnak-tEVisOXz26Y-unsplash.jpg"
featured_post: true
gallery: []
published: false

---
## Set some formatting rules

You need to nest your code and choose if you want to indent it by 2 spaces or 4 spaces. It doesn't really matter which one you choose just stick to it throughout your code.

Be consistent with the quotes you use. Either stick to single quotes or double quotes.

Don't use spaces in your file names. Spaces can cause a lot of trouble on servers and they look out of place in files. Use an underscore or a minus symbol if you planned on using a space for example `This is a Filename.jpg` should actually be `this-is-a-filename.jpg`. Also on Mac for example (if you didn't fix it) Git has a problem if you change Uppercase files to lowercase files since Mac doesn't really recognize that as a change.

Use meaningful names for your variables. If you want to set a range for a date in a variable don't name it `a` you should name it `dateRange` so it makes sense when you need that variable. 

Modularize your code and DRY (Don't Repeat Yourself) if you have footer on your website you shouldn't just copy and paste it to all your pages you should make a seperate file just for your footer and then include that file on each page. Because now if you have to change a link in your footer you only have to do it in one place instead of twenty.

Make your functions only do one thing. Let's say you want to convert a String to lowercase and add a substring to it. Instead of making one function that does both these things you should make two seperate functions that do what you want combined. This makes your lowercase function be reusable for other code parts where you don't want to add a substring.