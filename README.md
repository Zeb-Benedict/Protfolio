List Of Interactive Functions
1. navigate(sectionId)
   Triggered by:
Clicking any navigation button (e.g., “Profile”, “Education”, etc.)

2.toggleDarkMode()
Triggered by:
Clicking the "Toggle Dark Mode" button

What it does:

#Toggles the dark-mode class on <body>

#Changes the page theme between light and dark

3.Contact Form Submission Handler 
Triggered by:
Clicking “Send Message” button in the contact form

What it does:

#Prevents the page from reloading

#Shows a thank-you alert()

#Resets the form fields

 4.showSection(sectionId)
Called by: navigate()

What it does:

#Hides all <section> elements

#Displays the one matching the clicked button

5.highlightNav(sectionId)
Called by: navigate()

What it does:

#Removes the .active class from all nav buttons

#Adds .active to the button corresponding to the section



