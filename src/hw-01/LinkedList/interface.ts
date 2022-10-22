import { INode } from '../Node/interface';

export interface DoublyLinkedList<T> {
	head: INode<T> | null;
	tail: INode<T> | null;
	size: number;

	add(value: T): void;
	unshift(value: T): void;
	shift(): T | null;
	pop(): T | null;
}