import {useState as state, useEffect} from 'react';


import http from "../plugins/Fetch";
import SinglePost from "../components/SinglePost";

function Gallery() {
    const [recipes, setRecipes] = state([])

    useEffect(() => {
        http.get('/getrecipes').then(res => {
            setRecipes(res.recipes)
        })
    }, [])


    return (
        <div className="d-flex flex-wrap">
            {recipes.map((item, index) => <SinglePost showReviews={false} key={index} recipe={item}/>)}
        </div>
    );
}

export default Gallery;