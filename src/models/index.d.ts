import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type LeakMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Leak {
  readonly id: string;
  readonly lon?: string;
  readonly lat?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Leak, LeakMetaData>);
  static copyOf(source: Leak, mutator: (draft: MutableModel<Leak, LeakMetaData>) => MutableModel<Leak, LeakMetaData> | void): Leak;
}