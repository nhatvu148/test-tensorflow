import faker from "faker";

const dataSource = [
  {
    id: "0",
    name: faker.name.findName(),
    job: faker.name.jobTitle(),
    avatar: faker.image.avatar()
  },
  {
    id: "1",
    name: faker.name.findName(),
    job: faker.name.jobTitle(),
    avatar: faker.image.avatar()
  },
  {
    id: "2",
    name: faker.name.findName(),
    job: faker.name.jobTitle(),
    avatar: faker.image.avatar()
  },
  {
    id: "3",
    name: faker.name.findName(),
    job: faker.name.jobTitle(),
    avatar: faker.image.avatar()
  },
  {
    id: "4",
    name: faker.name.findName(),
    job: faker.name.jobTitle(),
    avatar: faker.image.avatar()
  },
  {
    id: "5",
    name: faker.name.findName(),
    job: faker.name.jobTitle(),
    avatar: faker.image.avatar()
  }
];

export default dataSource;
