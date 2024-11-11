import { OrderDishDTO } from "../../../../view_model/Dish";

export function ClientCartList(
	cart: OrderDishDTO[],
	pressRemoveFromCartBtn: (dishId: number) => void,
	pressOrderBtn: () => void,
	totalCartPrice = cart.reduce((sum, item) => sum + item.dish.price, 0),
	totalCalories = cart.reduce((sum, item) => sum + item.dish.calories, 0),
) {
	return (
		<div className="border border-gray-300 p-4 md:p-8 lg:p-16 m-4 md:m-8 lg:m-16 rounded-md shadow-md">
			{cart.length !== 0 ? (
				<div className="flex flex-col items-center gap-4">
					<p className="w-full text-4xl p-4 font-bold text-gray-600 mb-4 border-b-2">
						Total: <span className="text-violet-600">{totalCartPrice}/per day</span>
					</p>
					<p className="w-full text-4xl p-4 font-bold text-gray-600 mb-4 border-b-2">
						Total calories: <span className="text-violet-600">{totalCalories} kcal</span>
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-2 md:p-4">
						{cart.map((item) => (
							<div
								key={item.dish.dishId}
								className="border border-gray-300 p-4 rounded-md shadow-md flex flex-col md:flex-row">
								<img
									src={item.dish.photoLink}
									alt={item.dish.name}
									className="w-full md:w-1/3 h-48 object-cover rounded-md mb-4 md:mb-0 md:mr-4"
								/>
								<div className="flex flex-col justify-between w-full">
									<div>
										<h3 className="text-lg font-bold text-violet-600 mb-2 text-center md:text-left">
											{item.dish.name}
										</h3>
										<p className="mb-4 text-left">
											<span className="font-semibold">Ingredients</span>:{" "}
											{item.dish.ingredients.join(", ")}
										</p>
										<div className="flex gap-2 md:gap-4 lg:gap-8">
											<p className="mb-1 text-left">
												<span className="text-violet-600">Price</span>: $
												{item.dish.price.toFixed(2)}
											</p>
											<p className="mb-1 text-left">
												<span className="text-violet-600">Calories</span>:{" "}
												{item.dish.calories} kcal
											</p>
										</div>
										<p className="mb-1 text-left">
											<span className="text-violet-600">Date</span>:{" "}
											{item.date.toDateString()}
										</p>
									</div>
									<button
										onClick={() => pressRemoveFromCartBtn(item.dish.dishId)}
										className="w-full bg-violet-600 text-white py-2 rounded-md hover:bg-violet-700 flex items-center flex-row justify-center gap-2">
										<span className="material-icons">delete</span>
										Remove from Cart
									</button>
								</div>
							</div>
						))}
					</div>

					<button
						onClick={() => pressOrderBtn()}
						className="w-11/12 bg-violet-600 text-white mx-auto center py-2 rounded-md hover:bg-violet-700 flex items-center flex-row justify-center gap-2">
						Proceed to checkout
					</button>
				</div>
			) : (
				<p className="text-lg font-bold text-violet-600 mb-2 text-center">
					Your cart is empty
				</p>
			)}
		</div>
	);
}
