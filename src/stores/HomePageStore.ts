import { injectable } from "inversify";
import { action, makeObservable, observable } from "mobx";

export enum TabsType {
  User,
  Users,
  Login,
  Resource,
  Resources
}

@injectable()
export default class HomePageStore {

    @observable currentTab = TabsType[TabsType.Resource];

    constructor(   
   ) {
       makeObservable(this);
   }

    @action
    public changeTab = (tab: string | null) : void => {
      this.currentTab = !!tab ? tab : TabsType[TabsType.Resource];
    }
}
