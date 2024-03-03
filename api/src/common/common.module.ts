import { Module } from '@nestjs/common';
import { SupabaseClient } from './supabaseClient';

@Module({
  providers: [SupabaseClient],
  exports: [SupabaseClient],
})
export class CommonModule {}
