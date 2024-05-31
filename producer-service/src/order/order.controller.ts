import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDto } from './dto/order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async handleOrderCreated(@Body() data: OrderDto) {
    return this.orderService.handleOrderCreated(data);
  }

  @Get()
  async getOrders() {
    return this.orderService.getOrders();
  }
}
