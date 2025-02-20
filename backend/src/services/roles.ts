import { AccessControl } from 'accesscontrol';

const ac = new AccessControl();

// Define roles and their permissions
ac.grant('guest').readAny('song').readAny('artist');

ac.grant('user')
  .extend('guest')
  .createAny('song')
  .updateAny('song')
  .readAny('artist');

ac.grant('admin')
  .extend('user')
  .createAny('song')
  .updateAny('song')
  .deleteAny('song')
  .createAny('artist')
  .updateAny('artist')
  .deleteAny('artist')
  .readAny('artist')
  .readAny('song');

export default ac;
