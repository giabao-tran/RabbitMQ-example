import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { OrderDto } from './dto/order.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('order_created')
  handleOrderCreated(@Payload() data: OrderDto) {
    return this.appService.handleOrderPlaced(data);
  }

  @MessagePattern({ cmd: 'get_orders' })
  getOrders() {
    return this.appService.getOrders();
  }
}
