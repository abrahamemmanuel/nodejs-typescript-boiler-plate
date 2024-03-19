import { Schema, model } from 'mongoose';
import Post from '@/resources/post/post.interface';

const postSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
);
