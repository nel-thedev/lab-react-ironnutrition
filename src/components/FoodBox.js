import foods from '../foods.json';
import { Card, Col, Button } from 'antd';

function FoodBox({
  food,
  setTheseFoods,
  theseFoods,
  thoseFoods,
  setThoseFoods,
}) {
  const deleteFood = (name) => {
    setTheseFoods([...theseFoods].filter((food) => food.name !== name));
    setThoseFoods([...thoseFoods].filter((food) => food.name !== name));
  };

  let totalCalories = food.calories * food.servings;
  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {totalCalories} </b> kcal
        </p>
        <Button type="primary" onClick={() => deleteFood(food.name)}>
          Delete
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
