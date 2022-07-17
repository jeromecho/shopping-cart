# In Trading - An eCommerce Website For In People

A responsive eCommerce sit for phone, iPad, desktop.

## Comment 

*This project is inspired by my love of the Series of Unfortunate Events. Fans may understand references.*

## Pics

<img width="300" alt="image" src="https://user-images.githubusercontent.com/71617542/179380847-21d726ba-942d-4ba1-b1a9-25e436051b73.png"> <img width="300" alt="image" src="https://user-images.githubusercontent.com/71617542/179380852-c7c5702f-0b4c-4522-8cf9-0a57e4c4cc77.png"> <img width="300" alt="image" src="https://user-images.githubusercontent.com/71617542/179380870-6d4da506-319a-4f82-9d4b-ad4b33e4f5ab.png">

<img width="900" alt="image" src="https://user-images.githubusercontent.com/71617542/179380964-46126800-d891-44f8-9e2a-ddbbf4d4d252.png">


## Tech/Skills

* React (learned refs and routing)
* TypeScript
* Responsive Web Design 
* React Testing Library
* Mocks

## Challenges 

1. Animating siblings imperatively - CSS by nature does not allow the selection of parents. I found a workaround solution that let me animate parents based on handlers on children that didn't pollute my React workspace with DOM query selectors by learning React refs. 

2. Mocking versus rendering the whole component - I wanted to make my tests as unit-like as possible. Initially I tried to mock everything possible, but I had to mock a lot of props, as the state was stored in the parent. I realized that it made a lot of sense to mock children sometimes if the state was stored in the parent. Simply rendering the parent lowest in the tree that held the state made my tests a more concise and saved me time in having to mock a bunch of props. My decision-making, however, will need to be sharpened with further projects.

