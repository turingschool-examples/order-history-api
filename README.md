# Order History API

This app is the back-end server for the Mod 3 FE mid-mod.

## Getting started

### Installation

1. Clone down this repository.
    - `git clone https://github.com/turingschool-examples/turing-cafe-api.git`
2. Change into the new directory.
    - `cd order-history-api`
3. Install the dependencies.
    - `npm install`

### Usage

1. To fire up the server, run `npm start`.

### Endpoints

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3001/api/v1/purchases` | GET | not needed | Array of all existing purchases: `[{ id: 1, img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xs-max-gold-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795409154', name: 'iPhone Xs', description: 'The latest phone to come out by Apple.  It has a faster processor and improved camera to take HDR images.', price: 900 }]` |
| `http://localhost:3001/api/v1/purchases` | POST | `{ id: <Number>, img: <String>, name: <String>, description: <String>, price: <Number> }` | New reservation: `{ id: 1, img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xs-max-gold-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795409154', name: 'iPhone Xs', description: 'The latest phone to come out by Apple.  It has a faster processor and improved camera to take HDR images.', price: 900 }` |
| `http://localhost:3001/api/v1/purchases/:id` | DELETE | not needed | Array of all remaining purchases: `[{ id: 1, img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xs-max-gold-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795409154', name: 'iPhone Xs', description: 'The latest phone to come out by Apple.  It has a faster processor and improved camera to take HDR images.', price: 900 }]` |

Note: All of these endpoints will return semantic errors if something is wrong with the request.
