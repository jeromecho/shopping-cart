# In Trading - An eCommerce Website For In People

A responsive eCommerce sit for phone, iPad, desktop.

## Comment 

*This project is inspired by my love of the Series of Unfortunate Events. Fans may understand references.*

## Tech/Skills

* React (learned refs and routing)
* TypeScript
* Responsive Web Design 
* React Testing Library
* Mocks

## Challenges 

1. Animating siblings imperatively - CSS by nature does not allow the selection of parents. I wanted my menu animation to never go on top of the header, something that could only be achieved by making menu a sibling of parent and preventing button from using CSS to directly animation menu. I found a workaround that didn't pollute my React workspace with DOM query selectors by learning React refs. 
2. Dealing with flexbox technical debt - What you write constrains your future movements, so it helps to start programming with as much extensibility enabled as possible - not just in the JS but in the HTML/CSS as well. I wanted a horizontal display for the title and image of my 'Shop' page for desktop, but ended up choosing to not do so due to the amount of refactoring that required. My workaround was to have a flexible mind and accept that the current display was till presentable and user-friendly - albeit, I think having flexbox containers set up from the get-go or going for a grid display might've been more cool. Regardless, lesson learned - extensible code makes my later movements lighter and move impactful. 
:persevere:
3. Mocking versus Rendering the whole thing - I wanted to make my tests as unit-like as possible. So, initially I tried to mock everything possible. However, I realized that I had to mock a lot of props, as the state was stored in the parent. After reflection, I realized that it made a lot of sense to mock children sometimes if the state was stored in the parent. Simply rendering the parent lowest in the tree that held the state made my tests a lot more concise and saved me tons of time in having to mock a whole bunch of props. My decision-making, however, will need to be sharpened with further projects.

