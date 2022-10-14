(function () {                                                                      //@COMMENT - Function name is missing/ Do not use Anonymous function. Add a function name as it can be reused later making code resuable and scalable. Or else, no need of wrapping the entire code in a function. The below codes are modular and are good as is. It is alright for a small application but not for scalable/resuable application.
  // VARIABLES
  const IMAGE_COUNT = 50;                                                           //@COMMENT - The number of images for each dog is limited. Needs to be made dynamic. What if the number of images is more than 50 return by the API?
  const PAGINATE_BY = 10;
                                                                                    //@COMMENT - For all the below constants, use getElementById as it is more than twice as fast than querySelector. Additionally, use querySelector only when used to select through CSS and not HTML Id's.
  const dogBreedsList = document.querySelector('#dogBreedsList');                   
  const thumbnailContainerElement = document.querySelector(
    '#thumbnailContainerElement'                                                    //@COMMENT - Should be typed in the line above. Keep Consistency
  );                                                                                //@COMMENT - No need to close the parenthesis on next line. Keep consistency                                                                   
  const dogBreedInput = document.querySelector('#dogBreedInput');
  const paginationElement = document.querySelector('#paginationElement');
  const imageModal = document.querySelector('#imageModal');
  const imageModalDisplay = document.querySelector('#imageModalDisplay');

  // API FUNCTIONS

  async function getDogBreeds() {
    // API call to dog.ceo
    // Returns all the possible breeds in a list                                    
    let response = await fetch('https://dog.ceo/api/breeds/list/all');              //@COMMENT - Write the code in a try-catch block. This will help in case of any errors, eg) the server api runs into an error
    let breeds = await response.json();
    return Object.keys(breeds.message);
  }

  async function getDogImages(breed, count) {     
    // API call to dog.ceo
    // Returns a maximum count images in a list of a specific breed                //@COMMENT - Write the code in a try-catch block. This will help in case of any errors, eg) the server api runs into an error
    let response = await fetch(                                                    //@COMMENT - Write fetch statement in one line. Keep the coding style consistent
      `https://dog.ceo/api/breed/${breed}/images/random/${count}`
    );
    let images = await response.json();
    return images.message;
  }

  // FUNCTIONS

  async function setupDogBreedOptions() {
    const breeds = await getDogBreeds();
    // Calls API for list of breeds
    // Populates breeds into datalist for users to select from
    for (const breed of breeds) {
      const optionElement = document.createElement('option');
      optionElement.setAttribute('value', breed);
      dogBreedsList.appendChild(optionElement);
    }
  }

  function populateThumbnails(images, start) {                                      //@COMMENT - Add Function Description, This is where the image is displayed.
    thumbnailContainerElement.innerHTML = '';

    for (const image of images.slice(start, start + PAGINATE_BY)) {
      const imageElement = document.createElement('div');
      imageElement.innerHTML = `<img src=${image}>`;
      thumbnailContainerElement.appendChild(imageElement);
      imageElement.addEventListener('click', function () {
        displayModal(image);
      });
    }
  }

  async function changeSelectedBreed(breed) {                                       //@COMMENT - Add Function Description, eg) This drives the page number generation, displays which page number is active and calls the popluateThumbnails function.
    const images = await getDogImages(breed, IMAGE_COUNT);

    paginationElement.innerHTML = '';

    for (let pageNumber = 0; pageNumber < images.length / 10; pageNumber += 1) {          
      const pageNumberElement = document.createElement('button');
      if (pageNumber === 0) {
        pageNumberElement.classList.add('active');
      }
      pageNumberElement.innerHTML = `${pageNumber + 1}`;
      pageNumberElement.addEventListener('click', function (event) {
        let oldActivePage = document.querySelector(
          '#paginationElement button.active'
        );
        if (oldActivePage) {
          oldActivePage.classList.remove('active');
        }
        event.target.classList.add('active');
        populateThumbnails(images, pageNumber * 10);
      });
      paginationElement.appendChild(pageNumberElement);
    }
    populateThumbnails(images, 0);
  }

  function displayModal(image) {
    // Sets the src to the image URL that was passed and makes it visible
    imageModalDisplay.setAttribute('src', image);
    imageModal.style.visibility = 'visible';
  }

  function hideModal() {
    // returns modal to default view
    imageModal.style.visibility = 'hidden';
  }

  // EVENT HANDLERS

  function onDogBreedSelected(event) {                                       //@COMMENT - Add function description stating this is the entry point after the init()
    const breed = event.target.value;                                        //@COMMENT - Add some parameter here or in the function changeSelectedBreed() to check if the event.target.value == breed from dogBreedsList. As incorrect value will result in 10 blank images and 5 page number .
    changeSelectedBreed(breed);
  }

  // INIT

  function init() {
    setupDogBreedOptions();

    dogBreedInput.addEventListener('change', onDogBreedSelected);
    imageModal.addEventListener('click', hideModal);
  }

  init();
})();                                                                         //@COMMENT - Avoid using anonymous functions as mentioned above. 
