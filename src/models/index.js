// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Leak } = initSchema(schema);

export {
  Leak
};