import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { OrderDto } from './dto/order.dto';

@Injectable()
export class OrderService {
  constructor(@Inject('ORDER_SERVICE') private client: ClientProxy) {}

  async handleOrderCreated(data: OrderDto) {
    this.client.emit('order_created', data);
    return `Order ${data.id} created`;
  }

  async getOrders() {
    return this.client.send({ cmd: 'get_orders' }, {});
  }
}
