#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/1e8412e162dbbe69f4bb3bf8d07f0280ae67eaab15c34dcf201e67468315428d/contract';
import startContract from '../../snapshots/1e8412e162dbbe69f4bb3bf8d07f0280ae67eaab15c34dcf201e67468315428d/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/5f14cdc711f399a2e3d2c733dffd33bc0ac84efb489a548601febea249d23ebf/contract';
import endContract from '../../snapshots/5f14cdc711f399a2e3d2c733dffd33bc0ac84efb489a548601febea249d23ebf/contract.json' with { type: 'json' };
import { Migration, MigrationCLI } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [this.dropColumn({ schema: 'public', table: 'user', column: 'username' })];
  }
}

MigrationCLI.run(import.meta.url, M);
