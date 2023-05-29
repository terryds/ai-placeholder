# AI Placeholder

Free AI-Powered Fake or Dummy Data API for testing and prototyping
AI Placeholder is a free AI-Powered Fake or Dummy Data API for testing and prototyping.
We use OpenAI API to generate dummy content.
You can directly use the hosted version, or self-host it yourself.

For complete docs, please visit https://aiplaceholder.terrydjony.com

## Features
- No registration
- Zero-config
- Basic API

## Generate any data you want

<details>
<summary>Examples</summary>

### List of forum users
#### Request
```js
fetch('https://aiplaceholder.terrydjony.com/forum/users')
    .then(response => response.json())
    .then(json => console.log(json))
```
#### Response
```json
{
"users": [
    {
        "id": 1,
        "username": "johndoe",
        "name": "John Doe",
        "email": "johndoe@example.com",
        "avatar": "https://picsum.photos/200"
    },
    {
        "id": 2,
        "username": "janedoe",
        "name": "Jane Doe",
        "email": "janedoe@example.com",
        "avatar": "https://picsum.photos/200"
    },
    {
        "id": 3,
        "username": "bobsmith",
        "name": "Bob Smith",
        "email": "bobsmith@example.com",
        "avatar": "https://picsum.photos/200"
    }
]
}
```
### List of CRM sales deals with deal size more than 10K
#### Request
```js
fetch('https://aiplaceholder.terrydjony.com/crm/deals?amount_greater_than=10000&limit=3&project=marketing')
    .then(response => response.json())
    .then(json => console.log(json))
```
#### Response
```json
{
    "deals": [
        {
            "id": 1,
            "project": "marketing",
            "deal_owner": "Alice",
            "amount": 15000,
            "closed_date": "2020-07-01"
        },
        {
            "id": 2,
            "project": "marketing",
            "deal_owner": "Bob",
            "amount": 20000,
            "closed_date": "2020-06-28"
        },
        {
            "id": 3,
            "project": "marketing",
            "deal_owner": "Charlie",
            "amount": 12000,
            "closed_date": "2020-07-02"
        }
    ]
}
```
### List of products from marketplace sorted by price
#### Request
```js
fetch('https://aiplaceholder.terrydjony.com/products?marketplace=amazon&price_greater_than=20&views_greater_than=1000&sort_by=price&sort_order=desc')
      .then(response => response.json())
      .then(json => console.log(json))
```
#### Response
```json
{
    "products": [
        {
            "id": 456,
            "name": "Wireless Earbuds",
            "description": "Listen to your music on the go with these high-quality wireless earbuds.",
            "price": 35.99,
            "views": 1500,
            "image": "https://picsum.photos/200"
        },
        {
            "id": 123,
            "name": "Smartwatch",
            "description": "Stay connected with this sleek and stylish smartwatch.",
            "price": 25.99,
            "views": 2000,
            "image": "https://picsum.photos/200"
        },
        {
            "id": 789,
            "name": "Bluetooth Speaker",
            "description": "Get the party started with this powerful Bluetooth speaker.",
            "price": 22.49,
            "views": 1200,
            "image": "https://picsum.photos/200"
        }
    ]
}
```

</details>


## Generate data with rules specified

If you want to get some specific data, you can use this route  
`/fake/:content_type/:number_of_records?/:fields_separated_by_commas?`

So, you can specify directly in your content:
1. `:content_type`
  
Fill this content type that you want, it can be `tweet`, `posts`, `instagram-posts`, `linkedin-posts` or anything you can think of

2. `:number_of_records` (optional)
  
Fill this if you want to set the number of records you want to retrieve. For example, fill `5` if you want to get 5 records.

3. `:fields_separated_by_commas` (optional)
  
Fill this if you want to specify what fields each record object has.

<details>
<summary>Example</summary>

### Without query strings
#### Request
```js
fetch('https://aiplaceholder.terrydjony.com/fake/tweets/3/id,datetime,username,full_name,tweet,num_likes')
      .then(response => response.json())
      .then(json => console.log(json))
```

#### Response

```json
{
    "tweets": [
        {
            "id": 1,
            "datetime": "2020-07-01T10:30:00Z",
            "username": "johndoe",
            "full_name": "John Doe",
            "tweet": "Just had the best cup of coffee ever! ☕️",
            "num_likes": 10
        },
        {
            "id": 2,
            "datetime": "2020-07-02T15:45:00Z",
            "username": "johndoe",
            "full_name": "John Doe",
            "tweet": "Excited to be starting a new project today! 🚀",
            "num_likes": 12
        },
        {
            "id": 3,
            "datetime": "2020-07-03T20:00:00Z",
            "username": "johndoe",
            "full_name": "John Doe",
            "tweet": "Had a great workout at the gym today! Feeling pumped! 💪",
            "num_likes": 15
        }
    ]
}
```

### With imaginary query strings

#### Request
fetch('https://aiplaceholder.terrydjony.com/fake/users/3/id,username,full_name?sort_by=username&sort_order=asc')
      .then(response => response.json())
      .then(json => console.log(json))

#### Response
```json
{
    "users": [
        {
            "id": 1,
            "username": "jdoe",
            "full_name": "John Doe"
        },
        {
            "id": 3,
            "username": "msmith",
            "full_name": "Mary Smith"
        },
        {
            "id": 2,
            "username": "rjohnson",
            "full_name": "Robert Johnson"
        }
    ]
}
```


</details>


## Installation


```bash
# clone the repo
git clone https://github.com/terryds/ai-placeholder

# create the .env
cp .env.example .env

# open your .env and enter your credentials
# code .env

# start the server
deno task dev
```

## Deployment

We can use Deno Deploy for [deployment](https://deno.com/deploy/docs/how-to-deploy).
Make sure you specify the correct environment variables.
By the time of this writing (28/05/23), Deno Deploy doesn't support import maps from deno.jsonc directly, so you should build a [Github Action Workflow for this](https://github.com/denoland/deployctl/blob/main/action/README.md)

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Support by donation

This project is only maintained by one person. If you'd like to donate, go to https://www.buymeacoffee.com/terrydjony

## License

[MIT](https://choosealicense.com/licenses/mit/)