import { environment } from '../../environments/environment';

export class ManagerEnvironment {
  static getBackendUrl(): string {
    if (environment.backend !== '') {
      return environment.backend;
    } else {
      let backend = localStorage.getItem('backend');
      if (backend == null) backend = '';
      return backend;
    }
  }
}
