<template>
    <div class="page-404">
      <video autoplay controls>
        <source src="/docs/videos/404.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p>Sorry, we couldn't find the page you were looking for.</p>
      <router-link to="/">Go back to the homepage</router-link>
    </div>
  </template>
  
  <style>
  .page-404 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 4rem);
    text-align: center;
  }
  .page-404 video {
    width: auto;
    max-height: 50vh;
    margin-bottom: 2rem;
  }
  </style>
  