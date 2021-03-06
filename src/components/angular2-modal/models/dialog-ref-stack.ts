import { DialogRef } from './dialog-ref';

/**
 * A dumb stack implementation over an array.
 */
export class DialogRefStack<T> {
    private _stack: DialogRef<T>[] = [];


    push(dialogRef: DialogRef<T>): void {
        let idx = this._stack.indexOf(dialogRef);
        if (idx === -1) this._stack.push(dialogRef);
    }

    /**
     * Push a DialogRef into the stack and manage it so when it's done
     * it will automatically kick itself out of the stack.
     * @param dialogRef
     */
    pushManaged(dialogRef: DialogRef<T>): void {
        this.push(dialogRef);
    }

    pop(): void {
        this._stack.pop();
    }

    /**
     * Remove a DialogRef from the stack.
     * @param dialogRef
     */
    remove(dialogRef: DialogRef<T>): void {
        let idx = this._stack.indexOf(dialogRef);
        if (idx > -1) this._stack.splice(idx, 1);
    }


    index(index: number): DialogRef<T> {
        return this._stack[index];
    }

    indexOf(dialogRef: DialogRef<T>): number {
        return this._stack.indexOf(dialogRef);
    }

    get length(): number {
        return this._stack.length;
    }
}
