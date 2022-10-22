import { INode } from '../Node/interface';
import Node from '../Node/Node';
import { DoublyLinkedList} from "./interface";

export default class LinkedList<T> implements DoublyLinkedList<T> {
	head: DoublyLinkedList<T>['head'] = null;
	tail: DoublyLinkedList<T>['tail'] = null;
	size: DoublyLinkedList<T>['size'] = 0;

	constructor(iterable?: Iterable<T>) {
		if (iterable) {
			for (const el of iterable) {
				this.add(el);
			}
		}
	}

	public get length(): number {
		return this.size;
	}

	public get isEmpty(): boolean {
		return this.size <= 0;
	}

	public get first(): INode<T> | null {
		if (this.head != null) {
			return this.head;
		}

		return null;
	}

	public get last(): INode<T> | null {
		if (this.tail != null) {
			return this.tail;
		}

		return null;
	}

	public clear(): void {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	values(): IterableIterator<T> {
		let current = this.head;
		let pointer = 0;

		const length = this.length;

		return {
			[Symbol.iterator]() {
				return this;
			},
			next(): IteratorResult<T> {
				const done = length <= pointer++;
				const value = current;

				current = value?.next || null;

				if (done || value == null) {
					return {
						done: true,
						value: undefined
					}
				}

				return {
					done,
					value: value.value
				}
			}
		}
	}

	public add(value: T): void {
		const pointer = new Node<T>(value);

		if (this.tail == null) {
			this.head = pointer;
		} else {
			this.tail.next = pointer;
			pointer.prev = this.tail;
		}

		this.tail = pointer;
		this.size++;
	}

	public unshift(value: T): void {
		const pointer = new Node<T>(value);

		if (this.head != null) {
			this.head.prev = pointer;
		} else {
			this.tail = pointer;
		}

		pointer.next = this.head;
		this.head = pointer;
		this.size++;
	}

	public shift(): T | null {
		if (this.size === 0) {
			return null;
		}

		this.size--;

		const first = this.head;

		if (first == null) {
			return null;
		}

		this.head = first.next;

		if (this.head == null) {
			this.clear();
			return first.value;
		}

		first.next = null;

		return first.value;
	}

	public pop(): T | null {
		if (this.size === 0) {
			return null;
		}

		this.size--;

		const last = this.tail;

		if (last == null) {
			return null;
		}

		this.tail = last.prev;

		if (this.tail == null) {
			this.clear();
			return last.value;
		}

		this.tail.next = null;
		last.prev = null;

		return last.value;
	}
}
