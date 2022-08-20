import { getFirestore, getDocs, addDoc, collection } from 'firebase/firestore';
import firebaseApp, { firebaseConfig } from './firebase';

const db = getFirestore(firebaseApp);

interface PostDataType {
  id?: string;
  date?: string;
  name: string;
  title: string;
  content: string;
  phonenumber: string;
  email: string;
  images: string[];
  password: string;
}

// 게시물 조회
export const readDB = async () => {
  const querySnapshot = await getDocs(collection(db, 'posts'));

  querySnapshot.forEach((doc) => {
    const test = doc.data();
    console.log(test);
  });

  return querySnapshot;
};

// 게시물 추가
export const createDB = async (data: PostDataType) => {
  const docRef = await addDoc(collection(db, 'posts'), data);

  console.log(docRef);
};
