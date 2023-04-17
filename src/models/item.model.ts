import {Model, model, property} from '@loopback/repository';

@model()
export class Item extends Model {
  @property()
  buffer: Buffer;


  constructor(data?: Partial<Item>) {
    super(data);
  }
}

export interface ItemRelations {
  // describe navigational properties here
}

export type ItemWithRelations = Item & ItemRelations;
