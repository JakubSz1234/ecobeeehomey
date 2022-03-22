import Homey from 'homey';

class MyDriver extends Homey.Driver {

  async onInit() {
    this.log('MyDriver has been initialized');
  }

  async onPairListDevices() {
    return [
      {
        name: 'conference room termostat',
        data: {
           id: '52.26.63.31.79.66',
        },
      },
      {
        name: 'customer serive termostat',
        data: {
          id: '51.18.73.12.33.48'
        },
      },
      {
        name: 'Managment office termostat',
        data: {
          id:'51.18.76.19.04.40'
        },
      },
      {
        name: 'Warehouse 1 termostat',
        data: {
          id: '51.18.07.60.87.12'
        },
      },
      {
        name: 'Warehouse 2 termostat',
        data: {
          id: '51.18.60.70.81.36'
        },
      },
      {
        name: 'warehouse office termostat',
        data: {
          id: '51.18.75.29.08.64'
        },
      },

    ];
  }

}

module.exports = MyDriver;
