import { INode } from './interface';

export default class Node<T> implements INode<T> {
	value: T;
	next: INode<T> | null = null;
	prev: INode<T> | null = null

	constructor(value: T) {
		this.value = value;
	}
}