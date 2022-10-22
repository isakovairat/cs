export interface IQueue<T> {
	size: number;
	isEmpty: boolean;
	enqueue(value: T): void;
	dequeue(): T | null;
	peek(): T | null;
}