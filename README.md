# Given . When . Then

This is a small web tool built in React. It lets you describe test cases in a 'Given, When, Then' format- useful if you're running through some manual testing and want to create and track tests on the fly.

It lets you type them out quickly by using Enter to add new lines to any Given/When/Then block, and Tab to switch between blocks in any test case. Everything you write gets saved to your local browser so you can close the window and come back to it later.

When you've determined a test is passing, you can tick it off.

## Structure

Since this is such a small tool, it uses the most minimal React setup I could muster. There is no build system, transpiler, or bundler at all. Just open up index.html and it'll work right out of the box.

As for the JS, there's really only 4 components: App > Card > Group > Row. A Card represents a single 'Given/When/Then' case, a Group represents a single 'block' within a Card (e.g. the 'Given' section in one test), and a Row represents a single line of text within a Group. App handles the top-level orchestration/initialisation.

FYI, I'm writing this as a React noob, so don't take this project as a guide for how things should be done! It works, but I'm 99% sure there are better ways to do what I've done.

For more information on what I had to do to set this up without any build system, you can read one of my blog posts: https://medium.com/@clmyles/react-without-npm-babel-or-webpack-1e9a6049714