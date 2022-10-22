export interface INode<T> {
	value: T;
	next: INode<T> | null;
	prev: INode<T> | null;
}