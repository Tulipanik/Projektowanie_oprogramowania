import { PCourierOrdersList } from '../view/courier/CourierOrdersList/PCourierOrdersList';
import { IOrderAPi } from '../services/IOrder';

export class UCSShowCourierOrdersList {
  constructor(private pCourierOrdersList: PCourierOrdersList, private api: IOrderAPi) { }

  async handleShowCourierOrdersListBtnClick() {
    const orders = await this.api.getOrdersForCourier(1);
    this.pCourierOrdersList.showCourierOrdersList(orders);
  }
}