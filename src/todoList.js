import faker from 'faker';
import {v4} from 'uuid';

export default (amount) => (
  Array(amount).fill(0).map((item) => ({
    id: v4(),
    title: faker.name.title(),
    done: faker.random.boolean()
  })));