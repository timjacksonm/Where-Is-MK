<h1 align="center">
   <image src="/src/assets/readmelogo.png" width="50%"> 
</h1>

<h4 align="center">Where-Is-Mortal-Kombat. I used React, Styled Components, Firebase Firestore and Javascript for this project.</h4>
<p align="center">
  <a href="#screenshots">Screenshots</a> •
  <a href="#goals">Goals</a> •
  <a href="#summary">Summary</a> •
  <a href="#author">Author</a> •
  <a href="#credits">Credits</a> •
  <a href="#attribution">Attribution</a>
</p>

### ✨ [Live Preview](http://timjacksonm.github.io/Where-Is-MK)

## Screenshots

<details>
  <summary>Show Images</summary>

<image src="/src/assets/demogif1.gif">

---

The gif and next couple images show responsiveness of my web application.

<image src="/src/assets/demogif2.gif">

---

Home Menu Screen IphoneX

<image src="/src/assets/IphoneX1.png">

---

Attributions Page IphoneX

<image src="/src/assets/IphoneX2.png">

---

Seek and Find with target selected IphoneX

<image src="/src/assets/IphoneX3.png">

---

Seek and Find with target selected Iphone 5/SE

<image src="/src/assets/Iphone51.png">

---

Seek and Find with target selected Ipad Pro

<image src="/src/assets/IpadPro1.png">

---

Submit Score Modal Samsung Galaxy S5

<image src="/src/assets/GalaxyS51.png">

---

Leaderboard Page Samsung Galaxy S5

<image src="/src/assets/GalaxyS52.png">

---

Leaderboard Page Ipad

<image src="/src/assets/Ipad1.png">

---

</details>

## Goals:

- [✔️] Plan out folder and file structure in depth before starting. (Whiteboard)
- [✔️] Use Firebase Firestore with project - learn and getting familiar with using a BaaS
- [✔️] Re-use components when possible in project
- [✔️] Get more familiar with styled components and passing props down to be used in css
- [✔️] Have many different options to play the game and lots of data!

**View Commits on project to see changes**

## Summary

   <p>
I found myself wanting to work on this project at any chance I could get. I didn't want my game to be your traditional where is waldo, I gave this game my own flare. When I found this artwork from the attributed artist below, nostalgia hit and I had to do Mortal Kombat. I could have stopped at a handful of characters. However, I was determined to add all 79 characters and create multiple ways to play which resulted in 9 different leader boards!
   </p>
   <p>
Most challenging was figuring out how to use the firestore api. I learned a lot. I remember being stuck for hours trying to figure out how to query a sub-collection of data from a collection. Setting up rules to coincide with my data structure also proved problematic. After trial and error, I ended up creating separate collections for my leader board data vs my character position data. I created rules that allow you to read everything and only update the leader boards document with new data - no option to delete or add in new collections.
   </p>
   <p>
I ended up dropping material-ui (what I started with) and refactoring with styled components. With my grasp of CSS styled components was fantastic to use and I really liked how well it worked with React.
   </p>
   <p>
I dreaded planning out how I was going to add mobile responsiveness to the project. So I ended up doing that last and very glad I did! Instead of having the modal of choices pop up at your cursor, my work around was adding the cards to the bottom of the image. It feels right on mobile and very happy with how it turned out.
   </p>

   <p>
I hope you enjoy. Please leave a name to your score if you complete a challenge!
   </p>

## Author

👤 **Tim Jackson**

- Github: [@timjacksonm](https://github.com/timjacksonm)
- Twitter [@timjacksonm](https://twitter.com/timjacksonm)
- LinkedIn [@timjacksonm](https://linkedin.com/in/timjacksonm)

## Credits

This project idea was a part of my studies at The Odin Project's curriculum. You can see the lesson <a href="https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/where-s-waldo-a-photo-tagging-app" target="_blank">here</a>!

## Attribution

   <p>
      <a href="https://www.behance.net/gallery/99271971/Mortal-Kombat-Wheres-Scorpion-illustration">
      Mortal Kombat Poster used as background and individual characters. Created by Gus Morais
      </a>
   </p>
   <p>
      <a href="https://1000logos.net/mortal-kombat-logo/">
      The Mortal Kombat emblem made by 1000logos.net
      </a>
   </p>
   <p>
      <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">
      Target Icon made by Vectors Market from www.flaticon.com
      </a>
   </p>
   <p>
      <a href="https://codepen.io/nikhil8krishnan">
      Loader Icon made by Nikhil Krishnan
      </a>
   </p>
