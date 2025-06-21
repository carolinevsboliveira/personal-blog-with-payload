import * as migration_20250620_210340 from './20250620_210340';

export const migrations = [
  {
    up: migration_20250620_210340.up,
    down: migration_20250620_210340.down,
    name: '20250620_210340'
  },
];
