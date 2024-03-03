import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseClient {
  private readonly supabaseClient;

  constructor(configService: ConfigService) {
    this.supabaseClient = createClient(
      configService.get<string>('SUPABASE_URL'),
      configService.get<string>('SUPABASE_KEY'),
    );
  }

  getInstance() {
    return this.supabaseClient;
  }
}
