import DoublyLinkedList from "../LinkedList/DoublyLinkedList";
import {IQueue} from "./interface";

export default class Queue<T> implements IQueue<T> {
	public get size(): number {
		return this.list.length;
	}

	public get isEmpty(): boolean {
		return this.size === 0;
	}

	private list = new DoublyLinkedList<T>();

	public enqueue(data: T): void {
		this.list.add(data);
	}

	public dequeue(): T | null {
		if (this.size <= 0) throw new Error('Queue is empty.');

		return this.list.shift();
	}

	public peek(): T | null {
		if (this.size <= 0) throw new Error('Queue is empty.');

		return this.list.head ? this.list.head.value : null;
	}
}