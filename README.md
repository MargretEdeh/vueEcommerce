# ecommerce


# Documentation of My AltSchool 3rd semester exams

Hey, welcome to my readme file. This project was created using the Vue CLI. I used the composition API throughout the project because I felt that it was the new trending stuff. The Link to my project is in the GitHub repository. I decide to make a sort of e-commerce application when I looked at the documentation of the API we were asked to use. this is the API of the product https://dummyjson.com/products.

## Tools used

Vue J's

Vuex

Lottie files

Iconify for icons

Firebase for auth

Tailwind CSS

Vue motion

## How to use the App

When you click on the link the first page you will encounter as a first-time user is the registration Page where you will prompt to register without which you can't use the app.

The code for the authentication is located in the Vue store (vuex) the form's data is dispatched to the vuex to be committed by the actions and updated by the mutation then a new user state is established.

Using firebase for this auth was not stressful for me because I did some practice before the exams came around.

The form is a validated form where all inputs must be filled before it's submitted. You're required to use a valid email and password word with more than 6 words else your form will prompt an error. When all requirements are met. A spinner will show up to show that your request to register is the process and when it's done it takes you directly to the login page, it requires the same process and when it's done it takes you to the product page. While on the product page, the only way to access the login page is to log out. You can't navigate to the login page at will.

Same as in the login page you can't navigate to the product page unless you're signed in.

In the product pages, there are two headers the first Header holds the projects logo on the left and some social media icons on the right. This first Header is available in all the routes while the second header houses the product categories.

### Content of the product route

The product route houses the two headers the universal header and the product categories. In the second header, only the route with the accordion and the logout route works, for now, the other links will be implemented in due time. When the accordion with the text category is clicked it fetches an API of all the categories using this API  https://dummyjson.com/products/category/smartphones . While it fetches the API a spinner is been displayed.

Note if it's taking too much time refresh your page and fasten your internet. Emphasis on refreshing the page 🙂😊.

Then when the categories are fetched it's just a div with a height of 100px. The categories are much to be displayed so I gave that particular div an overflow-X-scroll, then hide the scroll bar for different browsers. The code for hiding the scrollbars is in the tailwind.css file where I gave it a class of hide-scrollbars.

Then if you click any of the categories it takes you to a route with the categories name e.g smartphone as a dynamic param. That changes anytime you click different categories. So this route with the dynamic param has the fetch cards of the smartphone product you want to purchase.

## The search

The search bar in this route search performs a query on input so whenever a letter is typed it combines the word and searches the whole API, not minding the particular category.

The cards when hovered change their color to a slightly lighter shade of the primary color of the application.

The card has two buttons the add to cart button and the view more button. The add-to-cart will be implemented in the future 😂. For now, I'm focusing on viewing more. This view of more pages is just more details of that particular product that was clicked.

On the view more params are dynamic, the param is the Id of that particular product. The page contains more details about the product. And also displays more images of that product.

Other exciting features will be implemented soon. So please stay tuned.

## Problems Encountered:

Well, the first problem I encountered was the first form I created. Initially, I created a single input where I pass the parameters as props so that I can be able to reuse it. Was also emitting the on-input and vmodel. To get the data typed.

When typed the onchange shows on the console. But I don't get the data when I dispatched to vuex for committing. It returned undefined. So I tried fixing this issues, but wasn't able to debug the issue and I was running out of time because I was given a stipulated time for this project.

So the only resolve was to create multiple inputs instead of just one reusable input component.

The second problem I encountered was the form not displaying in some browsers like edge but it displayed on my Firefox. I realized that it was because of the vue-motion. I guess it doesn't support the animation Vue motion gives.

So I'm thinking of removing it.

I also had issues with the mobile view for my project page where the menu bar height is the whole screen. I conditionally rendered that screen when its hamburger is clicked. But the height remains the same even when clicked.

I did a lot of frequent commits and pushed them to GitHub for easy understanding.

I built my project by running an npm run build. I built my project in the dist folder. Then I rushed to my vercel dashboard where I imported my repo from my GitHub repository and then deployed the project using vercel my link was created in seconds 😍✨.

Believe me, the joy when your project screen shows when deployed.

 ### How to contribute to the project.

Fork the repo and name it whatever you like then

Clone your forked repo

When cloning is complete. Open it in your code editor

Then run npm install to install all the dependencies for the project the run npm run serve to see your development server while contributing

this is the link to the project eCommerce https://vue-ecommerce-puce.vercel.app/

Much love from Margret Edeh 💜 (big name)😌😌🌝



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
