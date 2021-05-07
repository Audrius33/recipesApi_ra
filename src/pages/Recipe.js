import {useState as state, useEffect} from 'react';
import SinglePost from "../components/SinglePost";
import Review from "../components/Review";
import {useParams} from "react-router-dom";
import http from "../plugins/Fetch";

function Recipe() {
    const {id} = useParams()
    const [recipe, setRecipe] = state(null)

    useEffect(() => {
        http.get('/singleRecipe/' + id).then(res => {
            setRecipe(res.recipe)
        })
    }, [])

    return (
        !!recipe ? <div className="d-flex">
            <SinglePost recipe={recipe} showReviews={true}/>
            <Review id={recipe._id} updateRecipe={(rec) => setRecipe(rec)}/>
        </div> : null
    );
}

export default Recipe;