<!-- Project Needs-->
=> Will create a card where all the information related 
to that restaurant will be stored
=> With help of, event listener, loop will create number of same card same as we are using in our quiz form where we have created only one div and other were created automatically with help of for each loop.

<!-- Data need for restarant card -->
1. Resturant Image
2. Resturant Name
3. Rating
4. Food_type
5. Price_for_two or combo
6. Location
7. Distance_from_Customer_house
8. Offers
9. Alchol_serves
10. Resturant_open_time
11. Resturant_close_time

<!-- Will store all above information in an obj-->

obj1 = {
    image:"link",
    name:...,
    rating:....,
    location:...,
    ...
    ...
}

<!-- How can we get data -->
=> Zomato k pass bhi bhi information aarhi hogi apne server se backend m pde database se in an obj form jo wo display krwa rha h bas apne website pr
1. Open swiggy website
2. Right click --> go to inspect mode
3. Go to network tab, you will get network tab nearc source code arrow symbol.
4. Click on fetch/XHR option and refresh the browser, will get so many operations from that fetch, iss fetch se hi data aarha h backend se.
5. Click on home, there will you see a home section. all the information were there.
6. go to repsone section in that home section.
7. Just copy and paste that data in your js file
<!--- Done we have got the data -->

=> Will remove uncessary data for this project, only restaurant details will kept. Now it's looks clear.
=> For now will not use this data as it will be complaex for us, for now we have only understood that how can get real data from these types of websites.
=> We can take data from API also but for these websites API's are in encrypted form so that no one can request data agaian and again for testing purpose.

=> Now we can use chatgpt also to get data, but here we are suing js to create.

<!-- Filter-->
=> It apply on array
=> It takes callback fn
=> It return only true value
=> Syntax:  const result  = array.filter(value => value.isAlcohol);

<!-- Steps -->
=> Firstly will get access of buttons
=> Then apply addEventListener on button, where event is "click", and a callback fn
   which will give us result.
=> In fn logic will use "Filter", which will apply here on restaurant array, and as we know filter will only return or check form true value, so will write:

<!--Code with logic-->
=> // Serves Alcohol Button
const Alchol_serves_Btn = document.getElementById('Alcohol');
Alchol_serves_Btn.addEventListener('click',()=>{

  // Filter logic
  const result = restaurants.filter((obj)=>{
  return obj.Alchol_serves
  })

  // Above filter logic in one line;
    const result = restaurants.filter( obj=> obj.Alchol_serves);

    // Remove old result
    document.getElementById('root').replaceChildren(); // OR .innertesxt = ""

    // Just call fn and pass result which is our true condition
    getrestaurants(result);
})

// Rating Button (Same above button logic)
const Rating_Btn = document.getElementById('Rating');
Rating_Btn.addEventListener('click',()=>{

    const result = restaurants.filter( obj=> obj.rating>4.5);
    document.getElementById('root').replaceChildren();

    getrestaurants(result);
}) 

# Same filter logic will apply for our diferent button like: alochol_servers, rating (eg. >4.5,>3), open, offer ...etc

<!-- .replaceChildern()-->
=> document.getElementById('root').replaceChildren()
=> Here best way to remove content is to use ".replaceChilderen()",
   this will remove all childern inside that parent root div.
=> Rather than using .innerText = " " or .innerHTML = " ", we have to use
  this ".replaceXhildern()" method.   