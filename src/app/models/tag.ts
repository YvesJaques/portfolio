export class Tag {
    static readonly ANGULAR = new Tag("Angular", "darkred");
    static readonly NODEJS = new Tag("NodeJS", "green");
    static readonly TYPESCRIPT = new Tag("Typescript", "blue");
    static readonly JAVASCRIPT = new Tag("Javascript", "yellow", "black");
    static readonly JAVA = new Tag("Java", "darkorange");
    static readonly C = new Tag("C", "dodgerblue");
    static readonly CSHARP = new Tag("C#", "purple");
    static readonly GO = new Tag("Go", "lightblue", "black");

    private constructor(private readonly key: string,
        public readonly color: string,
        public readonly textColor: string = "white") {}

    toString() {
        return this.key
    }
}

export const Languages = [
    Tag.TYPESCRIPT,
    Tag.JAVASCRIPT,
    Tag.JAVA,
    Tag.C,
    Tag.CSHARP,
    Tag.GO,
]

export const Frameworks = [
    Tag.ANGULAR,
    Tag.NODEJS,
]