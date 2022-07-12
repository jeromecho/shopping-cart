# In Trading - A Shopping Website 

## Tech/Skills

TypeScript, Responsive Web Design, Snapshot Testing, React Testing Library, Routing, React Refs

## Challenges 

1. Animating siblings imperatively - CSS by nature does not allow the selection of parents. I wanted my menu animation to never go on top of the header, something that could only be achieved by making menu a sibling of parent and preventing button from using CSS to directly animation menu. I found a workaround that didn't pollute my React workspace with DOM query selectors by learning React refs. 
