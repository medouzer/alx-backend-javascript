import { createUser, uploadPhoto } from './utils';

const asyncUploadUser = async () => {
  try {
    return {
      photo:  uploadPhoto(),
      user:  createUser(),
    }
  } catch (e) {
    return {
      photo: null,
      user: null
    }
  }
}

export default asyncUploadUser
