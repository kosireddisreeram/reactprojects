
const getData = async(url) =>{
try{

    let res = await fetch(url)

    let data = await res.json()
    return data;
}
catch(error){
    return error;
    console.log("error:", error)
}
}
const append1 = (data, parent) =>{

    parent.innerHTML=null

    data.forEach(({strMeal, strMealThumb}) =>{

    let div1 = document.createElement("div");
    div1.setAttribute("id", "div1")

    let name = document.createElement("p");
    name.innerText=strMeal;

    let img = document.createElement("img");
    img.src = strMealThumb;

    div1.append(img, name)

    parent.append(div1)

})

}


const append2 =(data, parent) =>{

    parent.innerHTMl =null;

    data.forEach(({strMeal,strCategory,strArea,strInstructions,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5}) => {

        let div2 = document.createElement("div");

        let name = document.createElement("h4");
        name.innerText= strMeal

        let category = document.createElement("p");
        category.innerText= "Category: "+strCategory

        let area = document.createElement("p");
        area.innerText= "Area: "+strArea

        let inst = document.createElement("p");
        inst.innerText= "Instructions: "+strInstructions

        let ingre = document.createElement("h4");
        ingre.innerText="Ingredients";

        let ingre1 = document.createElement("p");
        ingre1.innerText=strIngredient1;

        let ingre2 = document.createElement("p");
        ingre2.innerText=strIngredient2;

        let ingre3 = document.createElement("p");
        ingre3.innerText=strIngredient3;

        let ingre4 = document.createElement("p");
        ingre4.innerText=strIngredient4;

        let ingre5 = document.createElement("p");
        ingre5.innerText=strIngredient5;


        div2.append(name,category,area,inst,ingre,ingre1,ingre2,ingre3,ingre4,ingre5);

        parent.append(div2);
    })
}


export {getData,append1, append2};


