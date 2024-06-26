import { Router, Request, Response, NextFunction } from 'express';
import Controller from '@/utils/interfaces/controller.interface';
import HttpException from '@/utils/exceptions/http.exception';
import validationMiddleware from '@/middleware/validation.middleware';
import validate from '@/resources/post/post.validation';
import PostService from '@/resources/post/post.service';

class PostController implements Controller {
	public path = '/posts';
	public router = Router();
	private PostService = new PostService();

	constructor() {
		this.initialiseRoutes();
	}

	private initialiseRoutes(): void {
		this.router.post(
			`${this.path}`,
			validationMiddleware(validate.create),
			this.create,
		);
	}

	private create = async (
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<Response | void> => {
		try {
			const { title, content } = req.body;

			const post = await this.PostService.create(title, content);

			res.status(201).json({ post });
		} catch (error: any) {
			next(new HttpException(400, error.message));
		}
	};
}

export default PostController;
