import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  addDoc,
  collection,
} from 'firebase/firestore';
import firebaseApp from './firebase';

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
export const getPostDetail = async (pid: string) => {
  const docRef = doc(db, 'posts', pid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  }

  return null;
};

// 게시물 목록 조회
export const getPostList = async () => {
  const querySnapshot = await getDocs(collection(db, 'posts'));

  querySnapshot.forEach((docu) => {
    const test = docu.data();
    console.log(test);
  });

  return querySnapshot;
};

// 게시물 추가
export const addPost = async (data: PostDataType) => {
  const docRef = await addDoc(collection(db, 'posts'), data);

  console.log(docRef);
};
