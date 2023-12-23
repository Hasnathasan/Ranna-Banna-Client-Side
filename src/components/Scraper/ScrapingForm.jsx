import { useState } from 'react';
// import fetchWithBaseUrl from './fetchWithBaseUrl'; // Import your fetch utility




function ScrapingForm() {
  const BASE_URL = 'https://api.scrapingrobot.com/';
  const API_TOKEN = 'cef982ef-17b5-4210-a96c-c39c18a3e9ac';
  const endpoint = '/status';
  const url = `${BASE_URL}${endpoint}?token=${API_TOKEN}`;
  const [data, setData] = useState("")

  const [domain, setDomain] = useState('');
  const [country, setCountry] = useState('');
  const [keyword, setKeyword] = useState('');


  const getDataUrl = `https://api.scrapingrobot.com/status?token=${API_TOKEN}&domain=${domain}&countryCode=${country}&term=${keyword}`;

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const requestData = {
    //   "url": "https://www.scrapingrobot.com/",
    // "module": "HtmlRequestScraper",
    // domain: domain,
    //   countryCode: country,
    //   term: keyword // Include the keyword in the requestData
    // };

    // const options = {
    //   method: 'POST',
    //   headers: {accept: 'application/json', 'content-type': 'application/json'},
    //   body: JSON.stringify({module: 'HtmlRequestScraper'})
    // };
    


    try {
  //     const options = {
  //       method: 'POST',
  //       headers: {accept: 'application/json'},
  //       body: JSON.stringify({url: 'https://www.daraz.com', module: 'GoogleScraper', params: {query: 'Daraz'}})
  //     };
      
  //     fetch('https://api.scrapingrobot.com/?token=cef982ef-17b5-4210-a96c-c39c18a3e9ac', options)
  //       .then(response => response.json())
  //       .then(response => {
  //   console.log(response);
  // })
  // .catch(err => console.error(err));
  
  const options = {
    method: 'POST',
    headers: {accept: 'application/json', 'content-type': 'application/json'},
    body: JSON.stringify({
      url: 'https://www.daraz.com',
      module: 'GoogleScraper',
      params: {query: 'Daraz', countryCode: 'ar', num: 50}
    })
  };
  
  fetch('https://api.scrapingrobot.com/?token=cef982ef-17b5-4210-a96c-c39c18a3e9ac', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  // const options = {
  //   method: 'POST',
  //   headers: {accept: 'application/json'},
  //   body: JSON.stringify({module: 'HtmlRequestScraper', params: {query: 'Pizza'}, url: 'daraz.com'})
  // };
  
  // fetch('https://api.scrapingrobot.com/?token=cef982ef-17b5-4210-a96c-c39c18a3e9ac', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));
      
  // if (response.ok) {
  //   const options = {method: 'GET', headers: {accept: 'application/json'}};

  //   fetch("https://api.scrapingrobot.com/?url=https://scrapingrobot.com/about-us/", options)
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //     .catch(err => console.error(err));
  // } else {
  //   console.error('Request failed with status:', response);
  // }



      // Rest of your code remains the same
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
   <div>
     <form onSubmit={handleSubmit}>
      <label>
        Domain:
        <input
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        />
      </label>
      <br />
      <label>
        Country:
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </label>
      <br />
      <label>
        Keyword:
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    
   </div>
  );
}

export default ScrapingForm;


// const options = {method: 'GET', headers: {accept: 'application/json'}};

// fetch('https://api.scrapingrobot.com/?url=https://scrapingrobot.com/about-us/&token=2d9ee0d2-e1cd-4421-8150-38160d9d1a3a', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));