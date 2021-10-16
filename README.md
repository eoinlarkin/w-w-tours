# Wicklow Walking Tours

![am-i-responsive](./docs/images/am-i-responsive.png)

## Objective 

The project aimed to achieve the following objectives:

- Build a user friendly static website with a high level of compliance with modern modern CSS and HTML design principles 
- The website would be fully responsive and work across both desktop, mobile and table devices
- The desktop would incorporate a range of design features that would deliver an engaging and delightful experience for the end user

### User Stories

- **As a potential customer**
    - I want to be able to discover what types of walking tours are offered.
    - The information on the site should be clearly presented and easy to understand.
    - I want to be able to access the website from both mobile and desktop devices.  

- **As the site owner**
    - I want to allow potential customers find out more about the different types of walking tours offered.
    - I want to provide users with the ability to book tours.
    - I want to provide users with contact information for the company.

- - - 

## User Experience


### Site Layout


### Color Scheme

![coolors-colors](./docs/images/palette.png)



The colors chosen were as follows :
- #1E566C Blue Sapphire
- #863B1D Kobe
- #2B8C67 Sea Green
- #FFFBFC Snow


### Design Elements



### Content

Routes and trails for the site were sourced from [Wikiloc](https://www.wikiloc.com/). In particular:

- [leondolman](https://www.wikiloc.com/hiking-trails/djouce-mountain-ireland-402513)

- [Route 1](https://www.wikiloc.com/hiking-trails/glendalough-spinc-walk-79193412
)

- [Paul Martin Kelly](https://www.wikiloc.com/walking-trails/powerscourt-garden-walk-67639081)
Djouce:


Spinc:





- - - 

## Testing 

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Feoinlarkin.github.io%2Fwickow-walking-tours%2F)
  - Three warnings were reported; these related to suggestions to add `h2-h6` header elements to the site sections; however these warnings are only advisory. 
- CSS
  - No errors were found when passing through the official [Jigsaw validator](http://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Feoinlarkin.github.io%2Fwickow-walking-tours%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=)
  
### General Testing

#### Performance
Performance was tested using Lighthouse in Chrome Dev Tools. The final full reports can be found here: 

- Performance issues on Desktop were highlighted with respect to the site load times. This was driven by very large image sizes and was mostly resolved by the resizing and compressing of images.
- Performance issues on Mobile were also highlighted with respect to the site load times. In this instance, this was being driven by the importing of the images from the Google Maps API. As I was unable to resize these images, give the content was dynamic I chose to accept these performance issues. Preview of the routes was a core website feature and I did not want to compromise this over performance.


### Bugs

The following bugs were encountered during the development and the following fixes were implemented:

- - -
**Bug:** GPX route overlay did not initially work when the site was published on GitHub pages. The site had been tested locally using relative paths to the underlying GPX files but these were not being read when hosted on GitHub Pages.

**Fix:** This was fixed by linking directly to the raw gpx files being hosted on GitHub as opposed to using relative paths from the javascript file. 
- - -

- - -
**Bug:** Laggy scrolling was encountered when scrolling on both desktop and mobile. 

**Fix:** This bug was being caused by very large image sizes. The original image sizes were a combined total of over 10MB. This was reduced to under 600Kb following image resizing.  
- - -

### Known Bugs

Following testing, the following known bugs were found and remain unresolved:

- **Text jump on initial load:**  
On loading the site for the first time the Hero Text element will 'jump'. I suspect this is due to the way the Hero Text element has been placed using a gird overlay on the hero image and is related to the viewport recalculating after the initial load.    
I was unable to resolve the bug prior to deployment but overall it is relatively minor and does not compromise the site integrity.

- - - 

## Development

### Languages
- HTML
- CSS
- Javascript

### Tools / Technologies

- **[VScode](https://code.visualstudio.com/)**  
All coding was completed in VS Code with a number of extensions used.

- **[Google Maps API](https://developers.google.com/maps)**  
This was used to generate the location marker for the business address as well as being used to generate the dynamic maps with the overlaid gpx files

- **[coolors.co](https://coolors.co/)**  
Potential site palettes were tested with Coolors.  

- **[gauger.io](https://gauger.io/fonticon/)**  
This website was used to generate the favicon using an icon from Font Awesome.

- **[ImageMagick](https://imagemagick.org/index.php)**  
For resizing images for the improvement of site performance

- - - 

## Credits 



Code for this was taken from the following post on WC3 Schools:

- [Link](https://www.w3schools.com/howto/howto_css_fixed_menu.asp)


Aligning images side by side 

- [Link](https://www.w3schools.com/howto/howto_css_images_side_by_side.asp)




The code for the persistent navbar was inspired by the following post on W3 Schools

- [link](https://www.w3schools.com/howto/howto_css_fixed_menu.asp)

A fix for the navbar overlapping the hero image was taken from the following Stackoverflow post:

- [link](https://stackoverflow.com/questions/49133277/why-is-this-hero-image-covering-the-fixed-nav-bar-with-the-nav-bar-reappearing)

The following code was referenced to create the color transition

- [link](https://stackoverflow.com/questions/11679567/using-css-for-a-fade-in-effect-on-page-load)

The following code was referenced for the star icons:

- [link](https://stackoverflow.com/questions/49343074/css-for-star-ratings-via-fontawesome)

The following code was referenced for the creation of the gird layout:

- [link](https://gridbyexample.com/examples/example2/)


Google Maps GPX overlay was inspired by the following post from Stackoverflow:
- [link](https://stackoverflow.com/questions/15829048/best-way-to-import-coordinates-from-gpx-file-and-display-using-google-maps-api)

In order to get more than one Google Map embed working, the following post was referenced :

- [link](https://stackoverflow.com/questions/46631141/two-google-maps-on-same-page-with-markers)



Trails were sourced from Wikiloc:




Images converted with Image Magik using following insturctions:
https://stackoverflow.com/questions/7261855/recommendation-for-compressing-jpg-files-with-imagemagick



### Credits and Acknowledgements

### Content 

- The text for the Home page was taken from Wikipedia Article A
- Instructions on how to implement form validation on the Sign Up page was taken from [Specific YouTube Tutorial](https://www.youtube.com/)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Media

- The photos used on the home and sign up page are from This Open Source site
- The images used for the gallery page were taken from this other open source site


- About Image 
[Cole Patrick](https://unsplash.com/photos/LttKJcNHzUc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)

- Hero Image:
[Margaux Bébin](https://unsplash.com/photos/6YZ2w5NRIAg?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)





### Design Elements :

**Persistent Menu Bar**
