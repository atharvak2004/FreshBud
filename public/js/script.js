const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

const searchInput = document.getElementById('searchInput');
  const placeholders = [
    "Search for Fruits... ",
    "Search for Vegetables...",
    "Search for Organic Fruits...",
    "Search for Exotic Vegetables...",
    "Search for Exotic Fruits..."
  ];
  let currentPlaceholderIndex = 0;

  function cyclePlaceholders() {
    searchInput.placeholder = placeholders[currentPlaceholderIndex];
    currentPlaceholderIndex = (currentPlaceholderIndex + 1) % placeholders.length; 
    setTimeout(cyclePlaceholders, 3000); // Change placeholder every 3 seconds
  }

  cyclePlaceholders();