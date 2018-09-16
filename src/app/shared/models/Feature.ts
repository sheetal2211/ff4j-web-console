import {Property} from './Property';
import {FlippingStrategy} from './FlippingStrategy';

export class Feature {
  uid: string;
  description: string;
  group?: string;
  permissions?: string[];
  enable: boolean;
  customProperties?: Map<string, Property>;
  flippingStrategy?: FlippingStrategy;
}
