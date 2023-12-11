fetch('https://strangerthings-quotes.vercel.app/api/quotes/50')
  .then(response => response.json())
  .then(data => {
    console.log(data);

    // Gauname nuorodą į "carousel-indicators" elementą
    const carouselIndicators = document.querySelector('.carousel-indicators');

    // Gauname nuorodą į "carousel-inner" konteinerį
    const carouselItemsContainer = document.querySelector('.carousel-inner');

    // Sukuriame HTML kodą karusele įtrauktiems pagal ciklą
    let indicatorsHTML = '';
    for (let index = 0; index < data.length; index++) {
      indicatorsHTML += `
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="${index}" 
          aria-label="Skaidrė ${index + 1}" ${index === 0 ? 'class="active" aria-current="true"' : ''}></button>
      `;
    }
    // Įtraukiame sugeneruotus indikatorius į "carousel-indicators" elementą
    carouselIndicators.innerHTML = indicatorsHTML;

    // Sukuriame HTML kodą karusele įtrauktiems pagal ciklą
    let itemsHTML = '';
    for (let index = 0; index < data.length; index++) {
      const quoteData = data[index];
      itemsHTML += `
        <div class="carousel-item ${index === 0 ? 'active' : ''}" data-bs-interval="2000">
          <div class="d-lg-flex">
            <img class="" src="img/girl.png" alt="lady">
            <p><i class="fa-solid fa-quote-left"></i> ${quoteData.quote}</p>
          </div>
          <p class="author">— ${quoteData.author}</p>
        </div>
      `;
    }
    // Įtraukiame sugeneruotus įrašus į "carousel-inner" konteinerį
    carouselItemsContainer.innerHTML = itemsHTML;
  })
  .catch(error => {
    console.error('Klaida gaunant duomenis:', error);
  });

