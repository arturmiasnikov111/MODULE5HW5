import { Container } from 'inversify';
import type { AuthenticationService} from '../services/AuthenticationService';
import DefaultAuthenticationService from '../services/AuthenticationService';
import type { HttpService} from '../services/HttpService';
import DefaultHttpService from '../services/HttpService';
import type { UserService} from '../services/UserService';
import DefaultUserService from '../services/UserService';
import HomePageStore from '../stores/HomePageStore'
import UserStore from '../stores/UserStore'
import UsersStore from '../stores/UsersStore'
import LoginStore from '../stores/LoginStore'
import ownTypes from './ownTypes';
import ResourceStore from '../stores/ResourceStore'
import ResourcesStore from '../stores/ResourcesStore'
import DefaultResourceService, { ResourceService } from '../services/ResourceService';

export const container = new Container();
container.bind<HttpService>(ownTypes.httpService).to(DefaultHttpService).inSingletonScope();
container.bind<UserService>(ownTypes.userService).to(DefaultUserService).inSingletonScope();
container.bind<ResourceService>(ownTypes.resourceService).to(DefaultResourceService).inSingletonScope();
container.bind<AuthenticationService>(ownTypes.authenticationService).to(DefaultAuthenticationService).inSingletonScope();
container.bind<HomePageStore>(ownTypes.homePageStore).to(HomePageStore).inTransientScope();
container.bind<UserStore>(ownTypes.userStore).to(UserStore).inTransientScope();
container.bind<UsersStore>(ownTypes.usersStore).to(UsersStore).inTransientScope();
container.bind<LoginStore>(ownTypes.loginStore).to(LoginStore).inTransientScope(); 
container.bind<ResourceStore>(ownTypes.resourceStore).to(ResourceStore).inTransientScope(); 
container.bind<ResourcesStore>(ownTypes.resourcesStore).to(ResourcesStore).inTransientScope(); 
