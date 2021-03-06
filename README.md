# In Trading - An eCommerce Website For In People

A responsive eCommerce sit for phone, iPad, MBP.

## Comment 

*This project is inspired by my love of the Series of Unfortunate Events. Fans may understand references.*

## Pics

<img width="300" alt="image" src="https://user-images.githubusercontent.com/71617542/179380847-21d726ba-942d-4ba1-b1a9-25e436051b73.png"> <img width="300" alt="image" src="https://user-images.githubusercontent.com/71617542/179380852-c7c5702f-0b4c-4522-8cf9-0a57e4c4cc77.png"> <img width="300" alt="image" src="https://user-images.githubusercontent.com/71617542/179381102-ff36816b-3f22-4f92-ac57-eb5bb2a742a1.png">

<img width="900" alt="image" src="https://user-images.githubusercontent.com/71617542/179380964-46126800-d891-44f8-9e2a-ddbbf4d4d252.png">

## Live 

https://jeromecho.github.io/shopping-cart/#/

## Tech/Skills

* React (learned refs and routing)
* TypeScript
* Responsive Web Design 
* React Testing Library
* Mocks

## Challenges 

1. Animating siblings imperatively - CSS by nature does not allow the selection of parents. I found a workaround solution that let me animate parents based on handlers on children that didn't pollute my React workspace with DOM query selectors by learning React refs. 

2. Mocking versus rendering the whole component - I wanted to make my tests as unit-like as possible. Initially I tried to mock everything possible, but I had to mock a lot of props, as the state was stored in the parent. I realized that it made a lot of sense to mock children sometimes if the state was stored in the parent. Simply rendering the parent lowest in the tree that held the state made my tests a more concise and saved me time in having to mock a bunch of props. My decision-making, however, will need to be sharpened with further projects.

3. Getting refs to update on time - forwarded refs are assigned *after* the first render - a no-go for my client, since i needed the ref to be assigned before the first render for the toggling of my shopping cart to work. I found a hack by forcing a re-render using a hook on the mounting of the component, which gave the effect that my UI worked as needed. 

