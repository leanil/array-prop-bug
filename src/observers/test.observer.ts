import {
  /* inject, Application, CoreBindings, */
  lifeCycleObserver, // The decorator
  LifeCycleObserver, // The interface
} from '@loopback/core';
import {repository} from '@loopback/repository';
import {DemoModelRepository} from '../repositories';

/**
 * This class will be bound to the application as a `LifeCycleObserver` during
 * `boot`
 */
@lifeCycleObserver('')
export class TestObserver implements LifeCycleObserver {
  constructor(
    @repository(DemoModelRepository) private demoModelRepository: DemoModelRepository,
  ) {
  }

  /**
   * This method will be invoked when the application initializes. It will be
   * called at most once for a given application instance.
   */
  async init(): Promise<void> {
    // Add your logic for init
  }

  /**
   * This method will be invoked when the application starts.
   */
  async start(): Promise<void> {
    await this.demoModelRepository.deleteAll();
    await this.demoModelRepository.create({items: [{buffer: Buffer.from('data')}], items2: [Buffer.from('data2')], buffer: Buffer.from('control')});
    const demo = await this.demoModelRepository.findOne();
    console.log("demo.items[0].buffer: " + demo?.items[0].buffer.toString() + "(length: " + demo?.items[0].buffer.length + ")");
    console.log("demo.items2[0]: " + demo?.items2[0].toString() + "(length: " + demo?.items2[0].length + ")");
    console.log("demo.buffer: " + demo?.buffer);
  }

  /**
   * This method will be invoked when the application stops.
   */
  async stop(): Promise<void> {
    // Add your logic for stop
  }
}
