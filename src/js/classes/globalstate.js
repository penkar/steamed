import {observable} from 'mobx';

class GlobalState {
  body = document.body;
  @observable currentView = "Pipes";
  @observable heat = {
    level:10
  }
  @observable resources = {
    water:0,
    protein:0,
    pureWater:0,
    meat:0,
    heatSinks:0,
  }
}

export default new GlobalState;