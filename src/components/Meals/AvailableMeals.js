import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Scoobert Sushi',
      description: "Finest fish and veggies (Homixide Meechie's favorite!)",
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Scoobert Schnitzel',
      description: "A german specialty! (Ken's favorite!)",
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Scoobert Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Scoobert Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>);
    
    return (
        <section className={classes.meals}>
            <ul>
                {mealsList}
            </ul>
        </section>
    )
};

export default AvailableMeals;