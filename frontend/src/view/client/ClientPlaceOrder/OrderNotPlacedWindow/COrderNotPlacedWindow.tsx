import { UCSShowClientDishList } from "../../../../use_cases/UCSShowClientDishList";

export function COrdeNotPlacedWindow(
  ucsShowClientDishList: UCSShowClientDishList
) {
  function pressShowDishListBtn() {
    ucsShowClientDishList.handleShowClientDishesBtnClick();
  }

  return {
    pressShowDishListBtn,
  };
}
