import React from 'react'

function Total(props) {
    
    const {checkoutData} = props

    const total = checkoutData.reduce((sum, elem) => {
        return sum + (elem.quantity*elem.calories)
    }, 0)
    
    return (
        <div>
            <h1>Today's foods</h1>

            {
                checkoutData.map((elem) => {
                    const {name, quantity, calories} = elem
                    return (
                        <div class="list-item">
                            <li>
                               {quantity} {name} = {quantity*calories} cal
                            </li>
                           
                        </div>
                    )
                })
            }
            <h1>Total Calories: {total} cal  </h1>
        </div>
    )
}

export default Total