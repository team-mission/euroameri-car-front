// Return Type
interface BasicType {
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface PostType extends BasicType {
  title: string;
  name: string;
  secret: boolean;
}

export interface PostListType {
  count: number;
  data: PostType[];
}

export interface PostDetailType extends PostType {
  content: string;
  images: string[];
  phone?: string;
  email?: string;
}

export interface AddPostType {
  id: number;
}

export interface CommentType extends BasicType {
  content: string;
}

// Input Type
export interface LoginInputType {
  uid: string;
  password: string;
}

export interface AddPostInputType {
  title: string;
  content: string;
  name: string;
  email: string;
  phone: string;
  images: string[];
  secret: boolean;
  password: string;
  token: string;
}

export interface PasswordInputType {
  password?: string;
}

export interface AddCommentInputType {
  content: string;
}
