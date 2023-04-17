import {Entity, model, property} from '@loopback/repository';
import {Item} from './item.model';

@model()
export class DemoModel extends Entity {
  @property({ id: true })
  id: string;

  @property.array(Item)
  items: Item[];

  @property.array(Buffer)
  items2: Buffer[];

  @property()
  buffer: Buffer;

  constructor(data?: Partial<DemoModel>) {
    super(data);
  }
}

export interface DemoModelRelations {
  // describe navigational properties here
}

export type DemoModelWithRelations = DemoModel & DemoModelRelations;
