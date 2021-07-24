# Introduction to GraphQL
## REST API
Examples:
- `GET /products/:id` - Retrieve a product.
- `GET /accounts/:id` - Retrieve an account.

### Underfetching
Not having enough data from the response forcing you to call another endpoint.
1. Show product information given product id: `product-id-1`
    - Product name and price
    - Seller
2. Get product information
   ```json
    {
      "id": "product-id-1",
      "name": "Wireless Keyboard",
      "price": "9,375.00",
      "sellerId": "account-id-1"
    }
    ```
3. Get account information
   ```json
    {
      "id": "account-id-1",
      "firstname": "Jacob",
      "lastname": "Dean",
    }
   ```

### Overfetching
Fetching data too much. There's data in the response that you don't need.
1. Display only the firstname of the seller
    ```json
      {
        "id": "account-id-1",
        "firstname": "Jacob",
        "lastname": "Dean",
      }
    ```
## GraphQL API
1. Describe your data
2. Ask for what you want
3. Get predictable results
