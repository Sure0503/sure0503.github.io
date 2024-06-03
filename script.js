const animateElements = document.querySelectorAll('.animate');

function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

animateElements.forEach(element => {
    observer.observe(element);
});
/*end*/
/*document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM fully loaded and parsed'); // Debugging line

  const aboutSection = document.querySelector('.about');

  if (aboutSection) {
      console.log('About section found:', aboutSection); // Debugging line

      const observerOptions = {
          root: null, // viewport
          rootMargin: '0px',
          threshold: 0.1 // trigger when at least 10% of the target is visible
      };

      const observerCallback = (entries, observer) => {
          entries.forEach(entry => {
              console.log('Entry:', entry); // Debugging line
              if (entry.isIntersecting) {
                  console.log('About section is intersecting'); // Debugging line
                  entry.target.classList.add('visible');
                  // No need to stop observing, so it will repeat the animation
              }
          });
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);
      observer.observe(aboutSection);
  } else {
      console.error('The about section was not found.');
  }
});
*/
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM fully loaded and parsed'); // Debugging line

  const targetSections = document.querySelectorAll('#p1, #p2, #p3');

  if (targetSections.length > 0) {
      console.log('Target sections found:', targetSections); // Debugging line

      const observerOptions = {
          root: null, // viewport
          rootMargin: '0px',
          threshold: 0.1 // trigger when at least 10% of the target is visible
      };

      const observerCallback = (entries, observer) => {
          entries.forEach(entry => {
              console.log('Entry:', entry); // Debugging line
              if (entry.isIntersecting) {
                  console.log('Target section is intersecting'); // Debugging line
                  entry.target.style.animation = 'none'; // Reset animation
                  setTimeout(() => {
                      entry.target.style.animation = 'slideInFromRight 1.5s ease-in-out forwards'; // Restart animation
                  }, 50); // Delay to ensure proper resetting of animation
              }
          });
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);
      targetSections.forEach(section => observer.observe(section));
  } else {
      console.error('No target sections found.');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM fully loaded and parsed'); // Debugging line

  const profilePicture = document.querySelector('.profile-picture');

  if (profilePicture) {
      console.log('Profile picture found:', profilePicture); // Debugging line

      const observerOptions = {
          root: null, // viewport
          rootMargin: '0px',
          threshold: 0.1 // trigger when at least 10% of the target is visible
      };

      const observerCallback = (entries, observer) => {
          entries.forEach(entry => {
              console.log('Entry:', entry); // Debugging line
              if (entry.isIntersecting) {
                  console.log('Profile picture section is intersecting'); // Debugging line
                  entry.target.style.animationPlayState = 'running'; // Start the animation
              } else {
                  entry.target.style.animationPlayState = 'paused'; // Pause the animation if not intersecting
              }
          });
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);
      observer.observe(profilePicture);
  } else {
      console.error('The profile picture section was not found.');
  }
});



