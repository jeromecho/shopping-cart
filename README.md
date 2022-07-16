# In Trading - A Shopping Website 

## Comment 

\* Note to self - always write tests beforehand. Writing tests after everything seems to be running fine seems to drain psychological motivation to actually write good tests. 

## Tech/Skills

TypeScript, Responsive Web Design, Snapshot Testing, React Testing Library, Routing, React Refs

## Challenges 

1. Animating siblings imperatively - CSS by nature does not allow the selection of parents. I wanted my menu animation to never go on top of the header, something that could only be achieved by making menu a sibling of parent and preventing button from using CSS to directly animation menu. I found a workaround that didn't pollute my React workspace with DOM query selectors by learning React refs. 
2. Dealing with flexbox technical debt - What you write constrains your future movements, so it helps to start programming with as much extensibility enabled as possible - not just in the JS but in the HTML/CSS as well. I wanted a horizontal display for the title and image of my 'Shop' page for desktop, but ended up choosing to not do so due to the amount of refactoring that required. My workaround was to have a flexible mind and accept that the current display was till presentable and user-friendly - albeit, I think having flexbox containers set up from the get-go or going for a grid display might've been more cool. Regardless, lesson learned - extensible code makes my later movements lighter and move impactful. 
:persevere:
