Heya Team

Node_Modules is on the git ignore list as the file is quite large.

I set up the Gulpfile.js however so when you first clone the project onto your machine
you need to run the following commands in the terminal in order to set up the NPM modules

If you're at school make sure that the npm install path is set correctly.
npm config get prefix

if not set it with
npm config set prefix=~/node


First install gulp globally on your machine
npm install --global gulp-cli


Then in the terminal type CD then drop this folder in. Then hit enter and run the following commands in this order:


npm init

npm install --save-dev gulp

npm install gulp-sass --save-dev


In order to use the Gulp to compile sass run in the terminal the following command
 ~/node/bin/gulp sass

to set it up to compile automatically run
 ~/node/bin/gulp sass:watch
