onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  document.addEventListener('DOMContentLoaded', function() {
    // Add click event listener to the body
    document.body.addEventListener('click', function() {
        // Remove the blurred effect by adding a class
        document.body.classList.add('clear-blur');

        // After removing blur, allow access by enabling links
        var links = document.getElementsByTagName('a');
        for (var i = 0; i < links.length; i++) {
            links[i].classList.add('enable-access');
        }

        // Remove click event listener from body after allowing access
        document.body.removeEventListener('click', handleClick);
    });

    // Function to handle click event
    function handleClick(event) {
        event.stopPropagation(); // Prevent bubbling up to body
    }

    // Prevent initial click from propagating to body
    document.body.addEventListener('click', handleClick);
});