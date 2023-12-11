fetch('https://strangerthings-quotes.vercel.app/api/quotes/50')
  .then(response => response.json())
  .then(data => {
    console.log(data);

    const carouselIndicators = document.querySelector('.carousel-indicators');
    const carouselItemsContainer = document.querySelector('.carousel-inner');

    // Sukuriamas tarpinis dokumento fragmentas, kad nekeltų papildomo našumo DOM'ui manipuliuojant
    const fragment = document.createDocumentFragment();

    // Sukuriamas ir pridedamas kiekvienas indikatorius į fragmentą
    data.forEach((_, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.bsTarget = '#carouselExampleDark';
      button.dataset.bsSlideTo = index.toString();
      button.setAttribute('aria-label', `Skaidrė ${index + 1}`);
      if (index === 0) {
        button.classList.add('active');
        button.setAttribute('aria-current', 'true');
      }
      fragment.appendChild(button);
    });

    // Įtraukiame visus indikatorius į DOM
    carouselIndicators.appendChild(fragment);

    // Sukuriamas ir pridedamas kiekvienas įrašas į fragmentą
    data.forEach((quoteData, index) => {
      const carouselItem = document.createElement('div');
      carouselItem.classList.add('carousel-item');
      if (index === 0) {
        carouselItem.classList.add('active');
      }
      carouselItem.dataset.bsInterval = '2000';

      const contentContainer = document.createElement('div');
      contentContainer.classList.add('d-flex');

      const imgElement = document.createElement('img');
      imgElement.src = 'img/girl.png';
      imgElement.alt = 'lady';

      const quoteElement = document.createElement('p');
      quoteElement.innerHTML = `<i class="fa-solid fa-quote-left"></i> ${quoteData.quote}`;

      contentContainer.appendChild(imgElement);
      contentContainer.appendChild(quoteElement);

      carouselItem.appendChild(contentContainer);

      const authorElement = document.createElement('p');
      authorElement.classList.add('author');
      authorElement.textContent = `— ${quoteData.author}`;

      carouselItem.appendChild(authorElement);

      fragment.appendChild(carouselItem);
    });

    // Įtraukiame visus įrašus į DOM
    carouselItemsContainer.appendChild(fragment);
  })
  .catch(error => {
    console.error('Klaida gaunant duomenis:', error);
  });
