function generate() {
    let line = document.querySelector('.line');
    let API = 'https://api.quotable.io/random';

    fetch(API)
        .then((res) => {
            return res.json();
        })
        .then((result) => {
            console.log(result);

            

            // Create new elements for the quote
            let h4 = document.createElement('h4');
            let p = document.createElement('p');

            // Set text content
            h4.textContent = result.content;
            p.textContent = "-- " + result.author;

            // Clear existing content
            line.innerHTML = '';

            // Append elements to line
            line.appendChild(h4);
            line.appendChild(p);
        })
        .catch((error) => {
            console.error('Error fetching quote:', error);
        });
}
