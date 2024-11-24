Bill Routes:
Create a Bill
Endpoint: /bill/createBill
Method: POST
Description: Creates a new bill by specifying the customer name, items sold, and their quantities.
requestBody:
   {
  "customerName": "Ajay Kumar Gupta",
  "items": [
    { "inventoryId": 1, "quantity": 2 },
    { "inventoryId": 2, "quantity": 1 }
  ]
} 
Response:
  {
  "message": "bill created successfully",
  "bill": {
    "id": 2,
    "customerName": "Ajay Kumar Gupta",
    "totalAmount": 19200,
    "createdAt": "2024-11-24T02:49:17.680Z",
    "items": [
      {
        "id": 3,
        "quantity": 1,
        "totalPrice": 9600,
        "inventoryId": 3,
        "billId": 2
      },
      {
        "id": 4,
        "quantity": 1,
        "totalPrice": 9600,
        "inventoryId": 2,
        "billId": 2
      }
    ]
  }
}




2.  Fetch All Bills
Endpoint: /bill/getAllBill
Method: GET
Description: Retrieves a list of all bills created.
Response:
[
  {
    "id": 1,
    "customerName": "Ajay Gupta",
    "totalAmount": 48000,
    "createdAt": "2024-11-24T02:42:47.904Z",
    "items": [
      {
        "id": 1,
        "quantity": 2,
        "totalPrice": 19200,
        "inventoryId": 4,
        "billId": 1,
        "inventory": {
          "id": 4,
          "name": "laptop",
          "price": 9600,
          "quantity": 18
        }
      },
      {
        "id": 2,
        "quantity": 3,
        "totalPrice": 28800,
        "inventoryId": 2,
        "billId": 1,
        "inventory": {
          "id": 2,
          "name": "mobile",
          "price": 9600,
          "quantity": 4
        }
      }
    ]
  },
  {
    "id": 2,
    "customerName": "Ajay Kumar Gupta",
    "totalAmount": 19200,
    "createdAt": "2024-11-24T02:49:17.680Z",
    "items": [
      {
        "id": 3,
        "quantity": 1,
        "totalPrice": 9600,
        "inventoryId": 3,
        "billId": 2,
        "inventory": {
          "id": 3,
          "name": "desktop",
          "price": 9600,
          "quantity": 9
        }
      },
      {
        "id": 4,
        "quantity": 1,
        "totalPrice": 9600,
        "inventoryId": 2,
        "billId": 2,
        "inventory": {
          "id": 2,
          "name": "mobile",
          "price": 9600,
          "quantity": 4
        }
      }
    ]
  }
]


3> Fetch Bill Details
Endpoint: /bill/getBillDetail/:id
Method: GET
Description: Retrieves detailed information about a specific bill, including the items sold and their quantities.
Path Parameter:
:id - The unique ID of the bill.
Response:{
  "id": 1,
  "customerName": "Ajay Gupta",
  "totalAmount": 48000,
  "createdAt": "2024-11-24T02:42:47.904Z",
  "items": [
    {
      "id": 1,
      "quantity": 2,
      "totalPrice": 19200,
      "inventoryId": 4,
      "billId": 1,
      "inventory": {
        "id": 4,
        "name": "laptop",
        "price": 9600,
        "quantity": 18
      }
    },
    {
      "id": 2,
      "quantity": 3,
      "totalPrice": 28800,
      "inventoryId": 2,
      "billId": 1,
      "inventory": {
        "id": 2,
        "name": "mobile",
        "price": 9600,
        "quantity": 4
      }
    }
  ]
}
// 
1 > Get All Items
Endpoint: /item/getAllItem
Method: GET
Description: Fetches a list of all items available in the inventory.
Response:
[
  {
    "id": 4,
    "name": "laptop",
    "price": 9600,
    "quantity": 18
  },
  {
    "id": 3,
    "name": "desktop",
    "price": 9600,
    "quantity": 9
  },
  {
    "id": 2,
    "name": "mobile",
    "price": 9600,
    "quantity": 4
  }
]
2 Update an Item
Endpoint: /item/updateItem/:id
Method: PUT
Description: Updates the details (e.g., name, price, or quantity) of an item in the inventory.
Path Parameter:
:id - The unique ID of the item to be updated.
Request: 
{
"name": "mobile",
"price": 9600,
"quantity": 4
}
Response:
{
  "message": "itme updated successfully"
}

3>Delete an Item
Endpoint: /item/deletItem/:id
Method: DELETE
Description: Deletes an item from the inventory.
Path Parameter:
:id - The unique ID of the item to be deleted.
Response:
{
message":"item deleted successfully from database"
}
4> Add a New Item
Endpoint: /item/addItem
Method: POST
Description: Adds a new item to the inventory
Request:
{
  "name": "keyboard",
  "price": 75.00,
  "quantity": 20
}
Response:
{
  "id": 5,
  "name": "keyboard",
  "price": 75,
  "quantity": 20
}



