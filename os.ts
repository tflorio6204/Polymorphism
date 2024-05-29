/*
# 2) Operating Systems

The `OperatingSystem` class below is used to manage files on a computer. 
It has methods for opening files of different types. However, the current
implementation uses separate methods for opening each type of file. This
makes the code difficult to maintain and extend.

2.1. Refactor the `OperatingSystem` class to have:
    -  a single private `files` field,
    - an `openFile` method that takes a string and returns a `BasicFile` object.
        If the file is not found, then return a new `BasicFile` object with the given
        name and an empty string as the contents.
    - a single `createFile` methods that consumes a `BasicFile` object and adds it to 
        the `files` field.
2.2. Create a new function called `makeTestOS` that consumes nothing and returns
    a new OperatingSystem object with several files. The OS should contain (in order):
    - one `BasicFile` with the name "first.txt" and the contents "Hello, world!"
    - one `EditableFile` with the name "second.txt" and the contents "Hola, mundo!"
    - one `ColorfulFile` with the name "third.txt" and the contents "[blue]Wow![reset]"
*/

import { BasicFile, ColorfulFile, EditableFile } from "./utilities/files";

export class OperatingSystem {
    private files: BasicFile[] = [];
    openFile(fileName: string): BasicFile {
        for (let i = 0; i < this.files.length; i++) {
            if (this.files[i].getName() == fileName) {
                return new BasicFile(fileName, this.files[i].getContents());
            }
        }
        return new BasicFile(fileName, "");
    }
    createFile(newFile: BasicFile): void {
        this.files.push(newFile);
    }
    addReadOnlyFile(newFile: BasicFile): void {
        this.files.push(newFile);
    }
    addEditableFile(newFile: EditableFile): void {
        this.files.push(newFile);
    }
    addColorfulFile(newFile: ColorfulFile): void {
        this.files.push(newFile);
    }
    openReadOnlyFile(name: string): BasicFile {
        for (let file of this.files) {
            if (file.getName() === name) {
                return file;
            }
        }
        return new BasicFile(name, "");
    }
    openEditableFile(name: string): EditableFile {
        for (let file of this.files) {
            if (file.getName() === name) {
                return new EditableFile(name, file.getContents());
            }
        }
        return new EditableFile(name, "");
    }
    openColorfulFile(name: string): ColorfulFile {
        for (let file of this.files) {
            if (file.getName() === name) {
                return new ColorfulFile(name, file.getContents());
            }
        }
        return new ColorfulFile(name, "");
    }
}

export function makeTestOS(): OperatingSystem {
    let testOs: OperatingSystem = new OperatingSystem();
    testOs.createFile(new BasicFile("first.txt", "Hello, world!"));
    testOs.createFile(new EditableFile("second.txt", "Hola, mundo!"));
    testOs.createFile(new ColorfulFile("third.txt", "[blue]Wow![reset]"));
    return testOs;
}
