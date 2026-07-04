declare var process: any;
import { seedDatabase } from '../utils/seedData';

console.log('Starting database seed process...');

seedDatabase()
  .then(() => {
    console.log('Seeding completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Seeding failed:', error);
    process.exit(1);
  });
