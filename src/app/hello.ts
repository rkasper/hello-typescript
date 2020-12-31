export class Hello {
    message(name?: string): string {
        if (name != undefined) {
            return 'Hello, ' + name;
        } else {
            return 'Hello, TypeScript';
        }
    }
}
