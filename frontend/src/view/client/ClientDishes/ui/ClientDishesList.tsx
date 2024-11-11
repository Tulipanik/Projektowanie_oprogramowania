import { FindDishDTO } from "../../../../view_model/Dish";


export function ClientDishesList(
  dishes: FindDishDTO[],
  pressAddToCartBtn: (dishId: number) => void
) {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {dishes.map((dish) => (
        <div key={dish.dishId} className="border border-gray-300 p-4 rounded-md shadow-md flex flex-col md:flex-row">
          <img src={dish.photoLink} alt={dish.name} className="w-full md:w-1/3 h-48 object-cover rounded-md mb-4 md:mb-0 md:mr-4" />
          <div className="flex flex-col justify-between w-full">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-center md:text-left">{dish.name}</h3>
              <p className="text-gray-600 mb-1 text-left">Company: {dish.companyName}</p>
              <p className="text-gray-600 mb-1 text-left">Kitchen Type: {dish.kitchenType}</p>
              <p className="text-gray-600 mb-1 text-left">Meal Type: {dish.mealType}</p>
              <p className="text-gray-600 mb-1 text-left">Price: ${dish.price.toFixed(2)}</p>
              <p className="text-gray-600 mb-1 text-left">Calories: {dish.calories}</p>
              <p className="text-gray-600 mb-4 text-left">Ingredients: {dish.ingredients.join(", ")}</p>
            </div>
            <button
              onClick={() => pressAddToCartBtn(dish.dishId)}
              className="w-full bg-violet-600 text-white py-2 rounded-md hover:bg-violet-700 flex items-center flex-row justify-center gap-2"
            >
              <span className="material-icons">
                shopping_cart
              </span>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )

}