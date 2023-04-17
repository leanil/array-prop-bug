import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {DemoModel, DemoModelRelations} from '../models';

export class DemoModelRepository extends DefaultCrudRepository<
  DemoModel,
  typeof DemoModel.prototype.id,
  DemoModelRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(DemoModel, dataSource);
  }
}
