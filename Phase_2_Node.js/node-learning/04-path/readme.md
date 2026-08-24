1. Node.js path module

path is a built-in Node.js module used to safely work with file and directory paths.

You don't install it.

import path from "node:path";

Why do we need it?

Instead of manually doing:

const file = "03-fs/" + "message.txt";

we can use:

path.join("03-fs", "message.txt");

Node handles the correct path separators for the operating system.

Step 1 — Create practice folder

Create:

node-learning/
└── 04-path/
    └── app.js

Because you're using ES Modules, make sure this project has:

"type": "module"

in its package.json.

Step 2 — path.join()

Put this in app.js:

import path from "node:path";

const filePath = path.join("03-fs", "message.txt");

console.log(filePath);

Run:

node app.js

On Windows you'll see something similar to:

03-fs\message.txt
Why path.join()?

It joins path pieces correctly for the operating system.

"03-fs" + "message.txt"
        ↓
path.join()
        ↓
03-fs\message.txt
Step 3 — path.basename()

Add:

console.log("File name:", path.basename(filePath));

Output:

File name: message.txt

basename() gives you the final part of a path.

Step 4 — path.dirname()

Add:

console.log("Directory:", path.dirname(filePath));

Output:

Directory: 03-fs
Step 5 — path.extname()

Add:

console.log("Extension:", path.extname(filePath));

Output:

Extension: .txt
Your complete app.js
import path from "node:path";

const filePath = path.join("03-fs", "message.txt");

console.log("Full path:", filePath);
console.log("File name:", path.basename(filePath));
console.log("Directory:", path.dirname(filePath));
console.log("Extension:", path.extname(filePath));

Expected:

Full path: 03-fs\message.txt
File name: message.txt
Directory: 03-fs
Extension: .txt
🧠 Interview questions
What is the path module?

path is a built-in Node.js module that provides utilities for working with file and directory paths.

Why use path.join() instead of string concatenation?

Because path separators differ between operating systems.

For example:

Windows → \
Linux   → /

path.join() handles this appropriately.

What does basename() do?

Returns the final portion of a path.

path.basename("folder/file.txt")

→

file.txt
What does extname() do?

Returns the extension:

path.extname("photo.jpg")

→

.jpg