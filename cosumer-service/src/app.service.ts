import { Injectable } from '@nestjs/common';
import { OrderDto } from './dto/order.dto';

@Injectable()
export class AppService {
  private readonly orders: OrderDto[] = [];
  handleOrderPlaced(order: OrderDto) {
    this.orders.push(order);
    console.log(`Receive a new order: ${order.name}`);
  }

  getOrders() {
    return this.orders;
  }
}
