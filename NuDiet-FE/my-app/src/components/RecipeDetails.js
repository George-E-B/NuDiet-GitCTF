import React, { useEffect, useState } from 'react'
import { RecipeFoodStuffCard } from './RecipeFoodStuffCard'
import { Button } from 'react-bootstrap'
import { Formik } from 'formik'

const RECIPEDETAIL = {
    "id": 0,
    "group": "Dinner",
    "name": "Fufu",
    "instructions": "Here are the instructions",
    "ingredients": [
        {
            "foodstuff-id": 2,
            "amount": 0
        }
    ]
}

const RecipeDetails = ({ id, backFunc }) => {
    const handleBack = () => { backFunc(null) }
    const [recipe, setRecipe] = useState(null);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setRecipe(RECIPEDETAIL)
    }, [])



    return (
        <div className='container'>
            <Button onClick={handleBack} className="btn btn-dark">Go back</Button>

            {
                editMode && <Formik
                    initialValues={recipe}
                    validate={values => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = 'Required';
                        } else if (!values.instructions) {
                            errors.instructions = 'Required';
                        } else if (!values.group) {
                            errors.group = 'Required';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                          /* and other goodies */
                      }) => (
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name" className='form-label fw-bolder fs-4'>Name</label>
                            <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                className='form-control'
                            />
                            {errors.name && touched.name && errors.name}
                            <label htmlFor="instructions" className='form-label fw-bolder fs-4'>Instructions</label>
                            <input
                                type="text"
                                name="instructions"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.instructions}
                                className='form-control'
                            />
                            {errors.instructions && touched.instructions && errors.instructions}
                            <label htmlFor="group" className='form-label fw-bolder fs-4'>Group</label>
                            <input
                                type="text"
                                name="group"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.group}
                                className='form-control'
                            />
                            {errors.group && touched.group && errors.group}
                            <div className='row mt-3'>
                                <Button type="submit" disabled={isSubmitting}>
                                    Submit
                                </Button>
                            </div>

                        </form>
                    )}

                </Formik>
            }

            {!editMode && recipe && (<div>
                {/* <h1>You selected the recipe with Id {id}</h1> */}
                <p className='fw-bolder fs-4'>Recipe name</p>
                <p>{recipe.name}</p>
                <p className='fw-bolder fs-4'>Food Instructions</p>
                <p>{recipe.instructions}</p>
                <p className='fw-bolder fs-4'>Ingredients</p>
                <ul class="list-group list-group-flush">
                    {recipe.ingredients && recipe.ingredients.map((item) => {
                        return <li key={item['foodstuff-Id']} className="list-group-item"><RecipeFoodStuffCard foodstuffId={item['foodstuff-id']} amount={item['amount']} /></li>
                    })}
                </ul>
            </div >)
            }
            <div className='mt-3 row'>
                <Button className={`${editMode && "btn btn-danger"}`} onClick={() => setEditMode(!editMode)}>{editMode ? 'Cancel' : 'Edit'}</Button>
            </div>
        </div>
    )
}

export default RecipeDetails



{/* //  {recipe && (<div>
  //         {/* <h1>You selected the recipe with Id {id}</h1> */}
//         <h2>Recipe name</h2>
//         <p>{recipe.name}</p>
//         <h2>Food Instructions</h2>
//         <p>{recipe.instructions}</p>
//         <h2>Ingredients</h2>
//         <ul>
//           {recipe.ingredients ? recipe.ingredients.map(({ "foodstuff-Id": foodStuffId, amount }) => <li key={foodStuffId}><RecipeFoodStuffCard foodstuffId={foodStuffId} amount={amount} /></li>) : <li>There are no ingredients</li>}
//         </ul>
//       </div >)  */}