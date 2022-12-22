let porta = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiTWF1cmljaW8iLCJpYXQiOjE2NzE3NDQxODksImV4cCI6MTY3MTc0NDQ4OX0.SjgyFWXLtY-LGf22PzQ7Fc3mg9pd5LFWTBxvT6Zc-_g'
let token = porta.slice(37)

console.log(token);

// let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZXh0ZSI6IkbDoWJpbyIsImlhdCI6MTY3MTc0MjA5MiwiZXhwIjoxNjcxNzQyMzkyfQ._zqUmPNwEtclfbvZw_RXHXjXxTvdZyooq1lnSGyBYYs'
let result
parseJwt(porta)
function parseJwt (token) {
      result = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
      return result

}
console.log(result.nome)