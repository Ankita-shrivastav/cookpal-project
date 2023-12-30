var likeButton = document.getElementById("like-button");
var recipe = {
    // Some properties of the recipe
    isLiked: false // Initially not liked
  };

  // Add a click event listener to the icon element
  likeButton.addEventListener("click", function() {
    // Toggle the isLiked property of the recipe object
    recipe.isLiked = !recipe.isLiked;

    // Update the icon color and fill based on the isLiked property
    if (recipe.isLiked) {
      // Change the icon to red filled heart
      likeButton.style.color = "red";
      likeButton.classList.remove("fa-heart-o");
      likeButton.classList.add("fa-heart");
    } else {
      // Change the icon to black empty heart
      likeButton.style.color = "red";
      likeButton.classList.remove("fa-heart");
      likeButton.classList.add("fa-heart-o");
    }
  });