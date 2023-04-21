import { Comment } from "@blog/common/src/interfaces";

export class EventType<D extends object> {
  type: string;
  data: D;

  constructor(type: string, data: D) {
    this.type = type;
    this.data = data;
  }
}

export class Post {
  id: string;
  title: string;
  comments: Comment[] = [];

  constructor(id: string, title: string, comments?: Comment[]) {
    this.id = id;
    this.title = title;
    this.comments = comments || [];
  }
}

export class EventCommentCreated extends EventType<Comment> {}
export class EventPostCreated extends EventType<Post> {}
