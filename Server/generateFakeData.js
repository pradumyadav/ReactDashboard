import { faker } from '@faker-js/faker';

const generateFakeData = (num) => {
  const data = [];
  for (let i = 0; i < num; i++) {
    data.push({
      id: i + 1,
      name: faker.person.fullName(), // Updated
      username: `@${faker.internet.userName().toLowerCase()}`,
      status: faker.helpers.arrayElement(['Active', 'Inactive']), // Updated
      role: faker.person.jobTitle(), // Updated
      email: faker.internet.email(),
      teams: faker.helpers.shuffle(['Design', 'Product', 'Marketing', 'Engineering', 'Sales']).slice(0, 3),
      dateOfBirth: faker.date.past(30, '2000-01-01').toISOString().split('T')[0],
      gender: faker.person.gender(), // Updated
      nationality: faker.address.country(),
      contactNo: faker.phone.number(), // Updated
      personalEmail: faker.internet.email(),
      workEmail: faker.internet.email(),
      publications: [
        {
          title: faker.lorem.sentence(),
          journal: faker.company.bs(),
          year: faker.date.past(10).getFullYear().toString(),
          details: faker.lorem.paragraph(),
        },
        {
          title: faker.lorem.sentence(),
          journal: faker.company.bs(),
          year: faker.date.past(10).getFullYear().toString(),
          details: faker.lorem.paragraph(),
        },
      ],
    });
  }
  return data;
};

// Generate 12 fake users
const fakeData = generateFakeData(100);

// Output the fake data (for testing purposes)
console.log(JSON.stringify(fakeData, null, 2));

export default fakeData;