import { Controller } from '@nestjs/common';
import { EmailService } from './email.service';
import { EventPattern } from '@nestjs/microservices';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @EventPattern('user_created')
  async emailSender(email: string) {
    console.log(`Email has been sent to ${email}`);
  }
}
