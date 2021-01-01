export class Hello {
    message(...args: any[]): string {
        if (args.length > 0) {
            return 'Hello, ' + args.join(' ');
        } else {
            return 'Hello, TypeScript';
        }
    }
}
