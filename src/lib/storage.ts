export class StorageClass {
    private readonly prefix: string;
    private storage: Storage;

    constructor(storage: Storage, prefix: string) {
        this.storage = storage;
        this.prefix = prefix;
    }

    get<T>(key: string): T | null {
        const value = this.storage.getItem(this.getPrefixedKey(key));
        if (value === null) {
            return null;
        }
        try {
            return JSON.parse(value as string) as T;
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            // json 解析失败当作字符串处理
            return value as unknown as T;
        }
    }

    set<T>(key: string, value: T): void {
        this.storage.setItem(this.getPrefixedKey(key), JSON.stringify(value));
    }
    remove(key: string): void {
        this.storage.removeItem(this.getPrefixedKey(key));
    }

    clear(): void {
        this.storage.clear();
    }

    private getPrefixedKey(key: string): string {
        return `${this.prefix}${key}`;
    }
}

const prefixKey = 'vite_';

export const qssLocalStorage = new StorageClass(localStorage, prefixKey);

export const qssSessionStorage = new StorageClass(sessionStorage, prefixKey);
