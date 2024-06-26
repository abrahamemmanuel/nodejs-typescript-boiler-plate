import PostModel from '@/resources/post/post.model';
import Post from '@/resources/post/post.interface';

class PostService {
	private post = PostModel;

	/**
	 * Create a new post
	 */
	public async create(title: string, content: string): Promise<Post> {
		try {
			const post = await this.post.create({ title, content });

			return post;
		} catch (error: any) {
			throw new Error(error.message);
		}
	}
}

export default PostService;
