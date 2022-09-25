# Search Modal

This is a simple search modal that can be used in any project. It is built with vanilla JavaScript and CSS.

## Installation 

`yarn add search-modal` or `npm install search-modal`

## Configuration 
```js
const button = document.querySelector('button.open-search-modal');
    const instance = window.SearchModal({
        // initialize the search modal 
        autoInit: true,
        searchUrl: "", // to search from server 
        queryParam: "query",
        // only applicable when the `searchUrl` is not provided, to search from static data or preloaded data 
        data:[
            {
                title: "Example",
                url: "/example"
            },
            {
                title: "Example 2",
                url: "/example-2"
            }
        ],
        // transform the data 
        transform: (data) => data.map(item=>({
            title: item.title, 
            category: item.category.name, 
            excerpt: item.summary, 
            url: item.link,
        })),
        callback: (event, data) => {
            console.log({ event, data });
        }
    });
    button.addEventListener('click', () => {
        instance.open();
    });
```

## To Do 

- Add documentation
- Proper example 

## History 
This project was inspired from by algolia DocSearch modal which is tightly binded with algolia, that's why we write this package to provide smooth search experience.
The design provided by @atiq-ur and developed by @4msar

