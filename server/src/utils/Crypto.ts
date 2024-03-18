import {createHash as create} from 'crypto';

export function createHash(data: string): string {
    const hash = create('sha256'); 
    hash.update(data);
    return hash.digest('hex');
}

export function compareHash(data: string, originalHash: string): boolean {
    const calculatedHash = createHash(data);
    return calculatedHash === originalHash;
}
