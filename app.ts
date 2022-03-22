import Homey from 'homey';

class MyApp extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('MyApp has been initialized');

    const card = this.homey.flow.getActionCard('wyologuj-test-w-konsoli');
        card.registerRunListener(async () => {
            this.log('test');
        })
  }

}

module.exports = MyApp;
