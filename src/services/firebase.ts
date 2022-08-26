import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { TloginForm, TsignUpForm } from 'types';

const firebaseConfig = {
  apiKey: 'AIzaSyCiT0kNfiMR8-7Jx42g9UEQNO68Has-EQ4',
  authDomain: 'alfred-test-4082b.firebaseapp.com',
  projectId: 'alfred-test-4082b',
  storageBucket: 'alfred-test-4082b.appspot.com',
  messagingSenderId: '576696861946',
  appId: '1:576696861946:web:eca0ae9becb2a818643543',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const signUpAndUpdateUserInfo = async (data: TsignUpForm) => {
  const { email, password, firstName, lastName } = data;
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(user, { displayName: `${lastName} ${firstName}` });
  return user;
};

export const login = async (data: TloginForm) => {
  const { email, password } = data;
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

export const signOutFromFirebase = async () => {
  const res = await signOut(auth);
  return res;
};
