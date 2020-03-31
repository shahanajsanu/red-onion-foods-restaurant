import React, { useState, useEffect } from 'react';
import foods from '../../fakeData/foodData'
import './Food.css';
import FoodItem from './FoodItem';
import { withRouter } from 'react-router-dom';

const Food = (props) => {

    const [activeCategories, setActiveCategories] = useState(
        {
            lunchActive: true,
            dinnerActive: false,
            breakfastActive: false
        }
    )
    const [selectedItem, setSelectedItem] = useState('lunch')
    const [items, setItem] = useState([])

    useEffect(() => {
        const data = foods.filter(item => item.catagories === selectedItem)
        setItem(data)
    }, [selectedItem])

    const selectHandler = item => {
        if (item === 'breakfast'){
            let previousState = activeCategories;
            previousState.breakfastActive = true
            previousState.lunchActive = false
            previousState.dinnerActive = false
            setActiveCategories(previousState)
        } else if (item === 'lunch'){
            let previousState = activeCategories;
            previousState.breakfastActive = false
            previousState.lunchActive = true
            previousState.dinnerActive = false
            setActiveCategories(previousState)
        } else if (item === 'dinner'){
            let previousState = activeCategories;
            previousState.breakfastActive = false
            previousState.lunchActive = false
            previousState.dinnerActive = true
            setActiveCategories(previousState)
        }
        setSelectedItem(item)
    }

    const { breakfastActive, lunchActive, dinnerActive} = activeCategories;
    return (
        <section className="food-area">
            <div className="container">
                <div className="row">
                    <div className="categories m-auto py-5">
                        <ul className="d-flex">
                            <li><button className={breakfastActive ? 'active btn' : 'btn'}
                            onClick={() => selectHandler('breakfast')}
                            >Breakfast</button></li>
                            <li><button className={lunchActive ? 'active btn' : 'btn'}
                            onClick={() => selectHandler('lunch')}
                            >Lunch</button></li>
                            <li><button className={dinnerActive ? 'active btn' : 'btn'}
                            onClick={() => selectHandler('dinner')}
                            >Dinner</button></li>
                        </ul>

                    </div>
                    <div className="f-right d-flex align-items-center text-danger">
                        <p className="see-all" onClick={()=>props.history.push('/foods')}>see all</p>
                    </div>
                </div>
                <div className="row food-items">
                    {items.map(item => <FoodItem key={item.id} item={item}></FoodItem>)}
                    <div className="w-100"></div>
                    <div className="checkout-btn-area">
                        <button>Check Your Food</button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default withRouter (Food);