const url = require('url');
const address = 'https://meu-site.com.br/catalog?produtos=Notebook';
const parsedURL = new url.URL(address);

console.log(parsedURL.host);
console.log(parsedURL.pathname);
console.log(parsedURL.search);
console.log(parsedURL.searchParams);
console.log(parsedURL.searchParams.get('produtos'));
