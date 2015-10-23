Last login: Thu Oct 22 22:53:51 on ttys000
Adams-MacBook-Pro-4:~ adamgreenspan$ ld
ld: warning: -arch not specified
ld: warning: -macosx_version_min not specified, assuming 10.10
ld: no object files specified for inferred architecture x86_64
Adams-MacBook-Pro-4:~ adamgreenspan$ ls
Applications		Library			Public
Desktop			Movies			comp20
Documents		Music			limitlist_homepage.jpg
Downloads		Pictures		playpen
Adams-MacBook-Pro-4:~ adamgreenspan$ cd comp20/
Adams-MacBook-Pro-4:comp20 adamgreenspan$ ls
assn1			comp20-f2015-team19
comp20-agreenspan	hello-world
Adams-MacBook-Pro-4:comp20 adamgreenspan$ cd assn1/
Adams-MacBook-Pro-4:assn1 adamgreenspan$ ls
Headshot2.jpg	bio.html	resume.html
README.md	index.html	style1.css
Adams-MacBook-Pro-4:assn1 adamgreenspan$ cd ../
Adams-MacBook-Pro-4:comp20 adamgreenspan$ ls
assn1			comp20-f2015-team19
comp20-agreenspan	hello-world
Adams-MacBook-Pro-4:comp20 adamgreenspan$ com
comm      command   compgen   complete  compress  
Adams-MacBook-Pro-4:comp20 adamgreenspan$ cd comp20-agreenspan/
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls
duckhunt	messages	responsive
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)
  (commit or discard the untracked or modified content in submodules)

	modified:   .DS_Store
	modified:   messages (new commits, modified content)

no changes added to commit (use "git add" and/or "git commit -a")
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git add .
fatal: Unable to create '/Users/adamgreenspan/comp20/comp20-agreenspan/.git/index.lock': File exists.

If no other git process is currently running, this probably means a
git process crashed in this repository earlier. Make sure no other git
process is running and remove the file manually to continue.
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls -a
.		.DS_Store	duckhunt	responsive
..		.git		messages
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ cd .git
Adams-MacBook-Pro-4:.git adamgreenspan$ ls
COMMIT_EDITMSG	ORIG_HEAD	description	index.lock	objects
FETCH_HEAD	branches	hooks		info		refs
HEAD		config		index		logs
Adams-MacBook-Pro-4:.git adamgreenspan$ rm index.lock 
Adams-MacBook-Pro-4:.git adamgreenspan$ ls
COMMIT_EDITMSG	ORIG_HEAD	description	info		refs
FETCH_HEAD	branches	hooks		logs
HEAD		config		index		objects
Adams-MacBook-Pro-4:.git adamgreenspan$ cd ..
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls
duckhunt	messages	responsive
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git add .
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   .DS_Store
	modified:   messages

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)
  (commit or discard the untracked or modified content in submodules)

	modified:   messages (modified content)

Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git add messages
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   .DS_Store
	modified:   messages

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)
  (commit or discard the untracked or modified content in submodules)

	modified:   messages (modified content)

Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ cd messages/
Adams-MacBook-Pro-4:messages adamgreenspan$ ls
data.json	index.html	lab.js		style.css
Adams-MacBook-Pro-4:messages adamgreenspan$ git status
On branch master
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   .DS_Store
	deleted:    duckhunt/.DS_Store
	deleted:    duckhunt/README.md
	deleted:    duckhunt/duckhunt-background.gif
	deleted:    duckhunt/duckhunt_various_sheet.png
	deleted:    duckhunt/game.js
	deleted:    duckhunt/index.html
	deleted:    duckhunt/style.css
	deleted:    messages
	deleted:    responsive/.DS_Store
	deleted:    responsive/README.md
	deleted:    responsive/homer.jpg
	deleted:    responsive/index.html
	deleted:    responsive/responsive.css

no changes added to commit (use "git add" and/or "git commit -a")
Adams-MacBook-Pro-4:messages adamgreenspan$ git add -A
Adams-MacBook-Pro-4:messages adamgreenspan$ ls
data.json	index.html	lab.js		style.css
Adams-MacBook-Pro-4:messages adamgreenspan$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   .DS_Store
	deleted:    duckhunt/.DS_Store
	deleted:    duckhunt/README.md
	deleted:    duckhunt/duckhunt-background.gif
	deleted:    duckhunt/duckhunt_various_sheet.png
	deleted:    duckhunt/game.js
	deleted:    duckhunt/index.html
	deleted:    duckhunt/style.css
	deleted:    messages
	deleted:    responsive/.DS_Store
	deleted:    responsive/README.md
	deleted:    responsive/homer.jpg
	deleted:    responsive/index.html
	deleted:    responsive/responsive.css

Adams-MacBook-Pro-4:messages adamgreenspan$ cd ..
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls
duckhunt	messages	responsive
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   .DS_Store
	modified:   messages

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)
  (commit or discard the untracked or modified content in submodules)

	modified:   messages (modified content)

Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git commit -m "Starting Lab 6"
[master 36cd452] Starting Lab 6
 2 files changed, 1 insertion(+), 1 deletion(-)
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git push
warning: push.default is unset; its implicit value is changing in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the current behavior after the default changes, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

In Git 2.0, Git will default to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Counting objects: 5, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 744 bytes | 0 bytes/s, done.
Total 3 (delta 1), reused 0 (delta 0)
To https://github.com/tuftsdev/comp20-agreenspan.git
   4938105..36cd452  master -> master
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ks
-bash: ks: command not found
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls
duckhunt	messages	responsive
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ cd messages/
Adams-MacBook-Pro-4:messages adamgreenspan$ ls
data.json	index.html	lab.js		style.css
Adams-MacBook-Pro-4:messages adamgreenspan$ ls -a
.		.DS_Store	data.json	lab.js
..		.git		index.html	style.css
Adams-MacBook-Pro-4:messages adamgreenspan$ ls
data.json	index.html	lab.js		style.css
Adams-MacBook-Pro-4:messages adamgreenspan$ rm .git
rm: .git: is a directory
Adams-MacBook-Pro-4:messages adamgreenspan$ ls
data.json	index.html	lab.js		style.css
Adams-MacBook-Pro-4:messages adamgreenspan$ ls -a
.		.DS_Store	data.json	lab.js
..		.git		index.html	style.css
Adams-MacBook-Pro-4:messages adamgreenspan$ ls
data.json	index.html	lab.js		style.css
Adams-MacBook-Pro-4:messages adamgreenspan$ cd ..
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)
  (commit or discard the untracked or modified content in submodules)

	modified:   messages (modified content)

no changes added to commit (use "git add" and/or "git commit -a")
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git add -A
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls
duckhunt	messages	responsive
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)
  (commit or discard the untracked or modified content in submodules)

	modified:   messages (modified content)

no changes added to commit (use "git add" and/or "git commit -a")
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git add -a
error: unknown switch `a'
usage: git add [options] [--] <pathspec>...

    -n, --dry-run         dry run
    -v, --verbose         be verbose

    -i, --interactive     interactive picking
    -p, --patch           select hunks interactively
    -e, --edit            edit current diff and apply
    -f, --force           allow adding otherwise ignored files
    -u, --update          update tracked files
    -N, --intent-to-add   record only the fact that the path will be added later
    -A, --all             add changes from all tracked and untracked files
    --ignore-removal      ignore paths removed in the working tree (same as --no-all)
    --refresh             don't add, only refresh the index
    --ignore-errors       just skip files which cannot be added because of errors
    --ignore-missing      check if - even missing - files are ignored in dry run

Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git add -a
error: unknown switch `a'
usage: git add [options] [--] <pathspec>...

    -n, --dry-run         dry run
    -v, --verbose         be verbose

    -i, --interactive     interactive picking
    -p, --patch           select hunks interactively
    -e, --edit            edit current diff and apply
    -f, --force           allow adding otherwise ignored files
    -u, --update          update tracked files
    -N, --intent-to-add   record only the fact that the path will be added later
    -A, --all             add changes from all tracked and untracked files
    --ignore-removal      ignore paths removed in the working tree (same as --no-all)
    --refresh             don't add, only refresh the index
    --ignore-errors       just skip files which cannot be added because of errors
    --ignore-missing      check if - even missing - files are ignored in dry run

Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git add .
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)
  (commit or discard the untracked or modified content in submodules)

	modified:   messages (modified content)

no changes added to commit (use "git add" and/or "git commit -a")
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ cd .git
Adams-MacBook-Pro-4:.git adamgreenspan$ ls
COMMIT_EDITMSG	ORIG_HEAD	description	info		refs
FETCH_HEAD	branches	hooks		logs
HEAD		config		index		objects
Adams-MacBook-Pro-4:.git adamgreenspan$ ls
COMMIT_EDITMSG	ORIG_HEAD	description	info		refs
FETCH_HEAD	branches	hooks		logs
HEAD		config		index		objects
Adams-MacBook-Pro-4:.git adamgreenspan$ cd ..
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls
duckhunt	messages	responsive
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls
duckhunt	messages	responsive
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls -a
.		.DS_Store	duckhunt	responsive
..		.git		messages
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ cd .git/
Adams-MacBook-Pro-4:.git adamgreenspan$ ls
COMMIT_EDITMSG	ORIG_HEAD	description	info		refs
FETCH_HEAD	branches	hooks		logs
HEAD		config		index		objects
Adams-MacBook-Pro-4:.git adamgreenspan$ less description 
Adams-MacBook-Pro-4:.git adamgreenspan$ less hooks/
hooks/ is a directory
Adams-MacBook-Pro-4:.git adamgreenspan$ less hooks
hooks is a directory
Adams-MacBook-Pro-4:.git adamgreenspan$ vim hooks
Adams-MacBook-Pro-4:.git adamgreenspan$ cd ..
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls
duckhunt	messages	responsive
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)
  (commit or discard the untracked or modified content in submodules)

	modified:   messages (modified content)

no changes added to commit (use "git add" and/or "git commit -a")
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git add messages
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)
  (commit or discard the untracked or modified content in submodules)

	modified:   messages (modified content)

no changes added to commit (use "git add" and/or "git commit -a")
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git add --force
Nothing specified, nothing added.
Maybe you wanted to say 'git add .'?
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git add --force .
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)
  (commit or discard the untracked or modified content in submodules)

	modified:   messages (modified content)

no changes added to commit (use "git add" and/or "git commit -a")
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ cd messages/
Adams-MacBook-Pro-4:messages adamgreenspan$ ls
data.json	index.html	lab.js		style.css
Adams-MacBook-Pro-4:messages adamgreenspan$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   .DS_Store
	deleted:    duckhunt/.DS_Store
	deleted:    duckhunt/README.md
	deleted:    duckhunt/duckhunt-background.gif
	deleted:    duckhunt/duckhunt_various_sheet.png
	deleted:    duckhunt/game.js
	deleted:    duckhunt/index.html
	deleted:    duckhunt/style.css
	deleted:    messages
	deleted:    responsive/.DS_Store
	deleted:    responsive/README.md
	deleted:    responsive/homer.jpg
	deleted:    responsive/index.html
	deleted:    responsive/responsive.css

Adams-MacBook-Pro-4:messages adamgreenspan$ git remote
Messages
messages
Adams-MacBook-Pro-4:messages adamgreenspan$ cd ..
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git remote
origin
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git remote -v
origin	https://github.com/tuftsdev/comp20-agreenspan.git (fetch)
origin	https://github.com/tuftsdev/comp20-agreenspan.git (push)
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ cd messages/
Adams-MacBook-Pro-4:messages adamgreenspan$ git remote -v
Messages	git@github.com:tuftsdev/comp20-agreenspan.git (fetch)
Messages	git@github.com:tuftsdev/comp20-agreenspan.git (push)
messages	git@github.com:tuftsdev/comp20-agreenspan.git (fetch)
messages	git@github.com:tuftsdev/comp20-agreenspan.git (push)
Adams-MacBook-Pro-4:messages adamgreenspan$ cd ..
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls
duckhunt	messages	responsive
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git remote -v
origin	https://github.com/tuftsdev/comp20-agreenspan.git (fetch)
origin	https://github.com/tuftsdev/comp20-agreenspan.git (push)
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ cd ..
Adams-MacBook-Pro-4:comp20 adamgreenspan$ ls
assn1			comp20-f2015-team19
comp20-agreenspan	hello-world
Adams-MacBook-Pro-4:comp20 adamgreenspan$ ls
assn1			comp20-f2015-team19
comp20-agreenspan	hello-world
Adams-MacBook-Pro-4:comp20 adamgreenspan$ cd ..
Adams-MacBook-Pro-4:~ adamgreenspan$ ls
Applications		Library			Public
Desktop			Movies			comp20
Documents		Music			limitlist_homepage.jpg
Downloads		Pictures		playpen
Adams-MacBook-Pro-4:~ adamgreenspan$ cd comp20/
Adams-MacBook-Pro-4:comp20 adamgreenspan$ ls
assn1			comp20-f2015-team19
comp20-agreenspan	hello-world
Adams-MacBook-Pro-4:comp20 adamgreenspan$ cd comp20-agreenspan/
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls
duckhunt	messages	responsive
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ cd mee
-bash: cd: mee: No such file or directory
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ cd messages/
Adams-MacBook-Pro-4:messages adamgreenspan$ ls
data.json	index.html	lab.js		style.css
Adams-MacBook-Pro-4:messages adamgreenspan$ ls -a
.		.DS_Store	data.json	lab.js
..		.git		index.html	style.css
Adams-MacBook-Pro-4:messages adamgreenspan$ rm -rf .git/
Adams-MacBook-Pro-4:messages adamgreenspan$ ls
data.json	index.html	lab.js		style.css
Adams-MacBook-Pro-4:messages adamgreenspan$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

nothing to commit, working directory clean
Adams-MacBook-Pro-4:messages adamgreenspan$ cd ..
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ sl
-bash: sl: command not found
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls
duckhunt	messages	responsive
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

nothing to commit, working directory clean
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

nothing to commit, working directory clean
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git push origin master
Everything up-to-date
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls
duckhunt	messages	responsive
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ cd messages/
Adams-MacBook-Pro-4:messages adamgreenspan$ ls
data.json	index.html	lab.js		style.css
Adams-MacBook-Pro-4:messages adamgreenspan$ vim index.html 
Adams-MacBook-Pro-4:messages adamgreenspan$ ls
data.json	index.html	lab.js		style.css
Adams-MacBook-Pro-4:messages adamgreenspan$ vim lab.js 
Adams-MacBook-Pro-4:messages adamgreenspan$ ls
data.json	index.html	lab.js		style.css
Adams-MacBook-Pro-4:messages adamgreenspan$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

nothing to commit, working directory clean
Adams-MacBook-Pro-4:messages adamgreenspan$ cd ..
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

nothing to commit, working directory clean
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls
duckhunt	messages	responsive
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git status --ignored
On branch master
Your branch is up-to-date with 'origin/master'.

nothing to commit, working directory clean
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls
duckhunt	messages	responsive
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git remote -v
origin	https://github.com/tuftsdev/comp20-agreenspan.git (fetch)
origin	https://github.com/tuftsdev/comp20-agreenspan.git (push)
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ cd messages/
Adams-MacBook-Pro-4:messages adamgreenspan$ ls
data.json	index.html	lab.js		style.css
Adams-MacBook-Pro-4:messages adamgreenspan$ git remote -v
origin	https://github.com/tuftsdev/comp20-agreenspan.git (fetch)
origin	https://github.com/tuftsdev/comp20-agreenspan.git (push)
Adams-MacBook-Pro-4:messages adamgreenspan$ cd ..
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git pull orign master
fatal: 'orign' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git pull origin master
From https://github.com/tuftsdev/comp20-agreenspan
 * branch            master     -> FETCH_HEAD
Already up-to-date.
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

nothing to commit, working directory clean
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls
duckhunt	messages	responsive
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ cd messages/
Adams-MacBook-Pro-4:messages adamgreenspan$ sl
-bash: sl: command not found
Adams-MacBook-Pro-4:messages adamgreenspan$ ls
data.json	index.html	lab.js		style.css
Adams-MacBook-Pro-4:messages adamgreenspan$ touch plz
Adams-MacBook-Pro-4:messages adamgreenspan$ cd ..
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

nothing to commit, working directory clean
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls
duckhunt	messages	responsive
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ cd messages/
Adams-MacBook-Pro-4:messages adamgreenspan$ ls
data.json	index.html	lab.js		plz		style.css
Adams-MacBook-Pro-4:messages adamgreenspan$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

nothing to commit, working directory clean
Adams-MacBook-Pro-4:messages adamgreenspan$ cd ..
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls
duckhunt	messages	responsive
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git -a 
Unknown option: -a
usage: git [--version] [--help] [-C <path>] [-c name=value]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p|--paginate|--no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git add .
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

nothing to commit, working directory clean
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

nothing to commit, working directory clean
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls
duckhunt	messages	responsive
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls
duckhunt	messages	responsive
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ cd ..
Adams-MacBook-Pro-4:comp20 adamgreenspan$ ls
assn1			comp20-f2015-team19
comp20-agreenspan	hello-world
Adams-MacBook-Pro-4:comp20 adamgreenspan$ cd comp20-agreenspan/
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls
duckhunt	messages	responsive
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git init
Reinitialized existing Git repository in /Users/adamgreenspan/comp20/comp20-agreenspan/.git/
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

nothing to commit, working directory clean
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ cd ..
Adams-MacBook-Pro-4:comp20 adamgreenspan$ ls
assn1			comp20-f2015-team19
comp20-agreenspan	hello-world
Adams-MacBook-Pro-4:comp20 adamgreenspan$ git clone git@github.com:tuftsdev/comp20-agreenspan.git comp20-agreenspan_1
Cloning into 'comp20-agreenspan_1'...
remote: Counting objects: 36, done.
remote: Compressing objects: 100% (9/9), done.
remote: Total 36 (delta 2), reused 0 (delta 0), pack-reused 27
Receiving objects: 100% (36/36), 68.22 KiB | 0 bytes/s, done.
Resolving deltas: 100% (6/6), done.
Checking connectivity... done.
Adams-MacBook-Pro-4:comp20 adamgreenspan$ ls
assn1			comp20-agreenspan_1	hello-world
comp20-agreenspan	comp20-f2015-team19
Adams-MacBook-Pro-4:comp20 adamgreenspan$ cd comp20-agreenspan_1/
Adams-MacBook-Pro-4:comp20-agreenspan_1 adamgreenspan$ ls
duckhunt	messages	responsive
Adams-MacBook-Pro-4:comp20-agreenspan_1 adamgreenspan$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

nothing to commit, working directory clean
Adams-MacBook-Pro-4:comp20-agreenspan_1 adamgreenspan$ touch plz
Adams-MacBook-Pro-4:comp20-agreenspan_1 adamgreenspan$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	plz

nothing added to commit but untracked files present (use "git add" to track)
Adams-MacBook-Pro-4:comp20-agreenspan_1 adamgreenspan$ rm plz 
Adams-MacBook-Pro-4:comp20-agreenspan_1 adamgreenspan$ ls
duckhunt	messages	responsive
Adams-MacBook-Pro-4:comp20-agreenspan_1 adamgreenspan$ open .
Adams-MacBook-Pro-4:comp20-agreenspan_1 adamgreenspan$ git add .
Adams-MacBook-Pro-4:comp20-agreenspan_1 adamgreenspan$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

nothing to commit, working directory clean
Adams-MacBook-Pro-4:comp20-agreenspan_1 adamgreenspan$ cd messages/
Adams-MacBook-Pro-4:messages adamgreenspan$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

nothing to commit, working directory clean
Adams-MacBook-Pro-4:messages adamgreenspan$ ls
data.json	index.html	lab.js		style.css
Adams-MacBook-Pro-4:messages adamgreenspan$ ls -a
.		.DS_Store	index.html	style.css
..		data.json	lab.js
Adams-MacBook-Pro-4:messages adamgreenspan$ git add .
Assertion failed: (item->nowildcard_len <= item->len && item->prefix <= item->len), function prefix_pathspec, file pathspec.c, line 317.
lAbort trap: 6
Adams-MacBook-Pro-4:messages adamgreenspan$ git add .
fatal: Unable to create '/Users/adamgreenspan/comp20/comp20-agreenspan_1/.git/index.lock': File exists.

If no other git process is currently running, this probably means a
git process crashed in this repository earlier. Make sure no other git
process is running and remove the file manually to continue.
Adams-MacBook-Pro-4:messages adamgreenspan$ cd ..
Adams-MacBook-Pro-4:comp20-agreenspan_1 adamgreenspan$ ls
duckhunt	messages	responsive
Adams-MacBook-Pro-4:comp20-agreenspan_1 adamgreenspan$ ls -a
.		.DS_Store	duckhunt	responsive
..		.git		messages
Adams-MacBook-Pro-4:comp20-agreenspan_1 adamgreenspan$ cd .git/
Adams-MacBook-Pro-4:.git adamgreenspan$ ls
HEAD		description	index.lock	objects
branches	hooks		info		packed-refs
config		index		logs		refs
Adams-MacBook-Pro-4:.git adamgreenspan$ vim in
index       index.lock  info/       
Adams-MacBook-Pro-4:.git adamgreenspan$ vim in
index       index.lock  info/       
Adams-MacBook-Pro-4:.git adamgreenspan$ vim in
index       index.lock  info/       
Adams-MacBook-Pro-4:.git adamgreenspan$ vim in
index       index.lock  info/       
Adams-MacBook-Pro-4:.git adamgreenspan$ vim index.lock 
Adams-MacBook-Pro-4:.git adamgreenspan$ rm index.lock 
Adams-MacBook-Pro-4:.git adamgreenspan$ ls
HEAD		description	info		packed-refs
branches	hooks		logs		refs
config		index		objects
Adams-MacBook-Pro-4:.git adamgreenspan$ cd ..
Adams-MacBook-Pro-4:comp20-agreenspan_1 adamgreenspan$ ls
duckhunt	messages	responsive
Adams-MacBook-Pro-4:comp20-agreenspan_1 adamgreenspan$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

nothing to commit, working directory clean
Adams-MacBook-Pro-4:comp20-agreenspan_1 adamgreenspan$ cd ..
Adams-MacBook-Pro-4:comp20 adamgreenspan$ cd comp20-agreenspan_1/
Adams-MacBook-Pro-4:comp20-agreenspan_1 adamgreenspan$ sl
-bash: sl: command not found
Adams-MacBook-Pro-4:comp20-agreenspan_1 adamgreenspan$ cd messages/
Adams-MacBook-Pro-4:messages adamgreenspan$ ls
data.json	index.html	lab.js		style.css
Adams-MacBook-Pro-4:messages adamgreenspan$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

nothing to commit, working directory clean
Adams-MacBook-Pro-4:messages adamgreenspan$ git add .
Assertion failed: (item->nowildcard_len <= item->len && item->prefix <= item->len), function prefix_pathspec, file pathspec.c, line 317.
Abort trap: 6
Adams-MacBook-Pro-4:messages adamgreenspan$ cd ..
Adams-MacBook-Pro-4:comp20-agreenspan_1 adamgreenspan$ cd ..
Adams-MacBook-Pro-4:comp20 adamgreenspan$ ls
assn1			comp20-agreenspan_1	hello-world
comp20-agreenspan	comp20-f2015-team19
Adams-MacBook-Pro-4:comp20 adamgreenspan$ cd comp20-agreenspan
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls
duckhunt	messages	responsive
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ mv messages old
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls
duckhunt	old		responsive
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git rm -rf messages
rm 'messages'
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	deleted:    messages

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	old/

Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls
duckhunt	old		responsive
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ mkdir messages
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls
duckhunt	messages	old		responsive
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls
duckhunt	messages	old		responsive
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ cd old
Adams-MacBook-Pro-4:old adamgreenspan$ ls
index.html	style.css
Adams-MacBook-Pro-4:old adamgreenspan$ cd ..
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ cd messages/
Adams-MacBook-Pro-4:messages adamgreenspan$ ls
data.json
Adams-MacBook-Pro-4:messages adamgreenspan$ ls
data.json	index.html	lab.js		style.css
Adams-MacBook-Pro-4:messages adamgreenspan$ cd ..
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ cd old
Adams-MacBook-Pro-4:old adamgreenspan$ ls
Adams-MacBook-Pro-4:old adamgreenspan$ cd ..
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ rmdir old
rmdir: old: Directory not empty
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls
duckhunt	messages	old		responsive
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ cd old
Adams-MacBook-Pro-4:old adamgreenspan$ ls
Adams-MacBook-Pro-4:old adamgreenspan$ rmdir old
rmdir: old: No such file or directory
Adams-MacBook-Pro-4:old adamgreenspan$ cd ..
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ rmdir old
rmdir: old: Directory not empty
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ rm old
rm: old: is a directory
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls
duckhunt	messages	old		responsive
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls
duckhunt	messages	responsive
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ cd messages/
Adams-MacBook-Pro-4:messages adamgreenspan$ ls
data.json	index.html	lab.js		style.css
Adams-MacBook-Pro-4:messages adamgreenspan$ git add .
Adams-MacBook-Pro-4:messages adamgreenspan$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	deleted:    ./
	new file:   .DS_Store
	new file:   data.json
	new file:   index.html
	new file:   lab.js
	new file:   style.css

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   ../.DS_Store

Adams-MacBook-Pro-4:messages adamgreenspan$ git commit -m "Starting Lab 6"
[master 54a112b] Starting Lab 6
 6 files changed, 42 insertions(+), 1 deletion(-)
 delete mode 160000 messages
 create mode 100644 messages/.DS_Store
 create mode 100644 messages/data.json
 create mode 100644 messages/index.html
 create mode 100644 messages/lab.js
 create mode 100644 messages/style.css
Adams-MacBook-Pro-4:messages adamgreenspan$ git push
warning: push.default is unset; its implicit value is changing in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the current behavior after the default changes, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

In Git 2.0, Git will default to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Counting objects: 8, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (7/7), done.
Writing objects: 100% (7/7), 1.17 KiB | 0 bytes/s, done.
Total 7 (delta 0), reused 0 (delta 0)
To https://github.com/tuftsdev/comp20-agreenspan.git
   36cd452..54a112b  master -> master
Adams-MacBook-Pro-4:messages adamgreenspan$ cd ..
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git branch gh-pages
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   .DS_Store

no changes added to commit (use "git add" and/or "git commit -a")
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls
duckhunt	messages	responsive
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ git push origin gh-pages
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/tuftsdev/comp20-agreenspan.git
 * [new branch]      gh-pages -> gh-pages
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ ls
duckhunt	messages	responsive
Adams-MacBook-Pro-4:comp20-agreenspan adamgreenspan$ cd messages/
Adams-MacBook-Pro-4:messages adamgreenspan$ git add .
Adams-MacBook-Pro-4:messages adamgreenspan$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   lab.js

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   ../.DS_Store

Adams-MacBook-Pro-4:messages adamgreenspan$ git commit -m "Fixing innerHTML"
[master 3c4bf01] Fixing innerHTML
 1 file changed, 1 insertion(+), 1 deletion(-)
Adams-MacBook-Pro-4:messages adamgreenspan$ git push
warning: push.default is unset; its implicit value is changing in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the current behavior after the default changes, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

In Git 2.0, Git will default to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Counting objects: 7, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 370 bytes | 0 bytes/s, done.
Total 4 (delta 3), reused 0 (delta 0)
To https://github.com/tuftsdev/comp20-agreenspan.git
   54a112b..3c4bf01  master -> master
Adams-MacBook-Pro-4:messages adamgreenspan$ git checkout gh-pages
M	.DS_Store
Switched to branch 'gh-pages'
Adams-MacBook-Pro-4:messages adamgreenspan$ git merge -X theirs master
Updating 54a112b..3c4bf01
Fast-forward
 messages/lab.js | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
Adams-MacBook-Pro-4:messages adamgreenspan$ git status
On branch gh-pages
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   ../.DS_Store

no changes added to commit (use "git add" and/or "git commit -a")
Adams-MacBook-Pro-4:messages adamgreenspan$ git push
warning: push.default is unset; its implicit value is changing in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the current behavior after the default changes, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

In Git 2.0, Git will default to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/tuftsdev/comp20-agreenspan.git
   54a112b..3c4bf01  gh-pages -> gh-pages
Adams-MacBook-Pro-4:messages adamgreenspan$ git add .
Adams-MacBook-Pro-4:messages adamgreenspan$ git commit -m "console message"
[gh-pages 6560e14] console message
 1 file changed, 1 insertion(+)
Adams-MacBook-Pro-4:messages adamgreenspan$ git status
On branch gh-pages
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   ../.DS_Store

no changes added to commit (use "git add" and/or "git commit -a")
Adams-MacBook-Pro-4:messages adamgreenspan$ git push
warning: push.default is unset; its implicit value is changing in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the current behavior after the default changes, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

In Git 2.0, Git will default to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Counting objects: 7, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 370 bytes | 0 bytes/s, done.
Total 4 (delta 3), reused 0 (delta 0)
To https://github.com/tuftsdev/comp20-agreenspan.git
   3c4bf01..6560e14  gh-pages -> gh-pages
Adams-MacBook-Pro-4:messages adamgreenspan$ git add .
Adams-MacBook-Pro-4:messages adamgreenspan$ git commit -m "console msg"
[gh-pages 63156f0] console msg
 1 file changed, 1 insertion(+), 1 deletion(-)
Adams-MacBook-Pro-4:messages adamgreenspan$ git push
warning: push.default is unset; its implicit value is changing in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the current behavior after the default changes, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

In Git 2.0, Git will default to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 359 bytes | 0 bytes/s, done.
Total 4 (delta 3), reused 0 (delta 0)
To https://github.com/tuftsdev/comp20-agreenspan.git
   6560e14..63156f0  gh-pages -> gh-pages
Adams-MacBook-Pro-4:messages adamgreenspan$ git add .
Adams-MacBook-Pro-4:messages adamgreenspan$ git commit -m "Debugging"
[gh-pages c2bf001] Debugging
 1 file changed, 5 insertions(+), 1 deletion(-)
Adams-MacBook-Pro-4:messages adamgreenspan$ git push
warning: push.default is unset; its implicit value is changing in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the current behavior after the default changes, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

In Git 2.0, Git will default to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 406 bytes | 0 bytes/s, done.
Total 4 (delta 3), reused 0 (delta 0)
To https://github.com/tuftsdev/comp20-agreenspan.git
   63156f0..c2bf001  gh-pages -> gh-pages
Adams-MacBook-Pro-4:messages adamgreenspan$ git add .
Adams-MacBook-Pro-4:messages adamgreenspan$ git commit -m "Debug time"
[gh-pages fac60ab] Debug time
 1 file changed, 1 insertion(+), 1 deletion(-)
Adams-MacBook-Pro-4:messages adamgreenspan$ git push
warning: push.default is unset; its implicit value is changing in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the current behavior after the default changes, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

In Git 2.0, Git will default to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 354 bytes | 0 bytes/s, done.
Total 4 (delta 3), reused 0 (delta 0)
To https://github.com/tuftsdev/comp20-agreenspan.git
   c2bf001..fac60ab  gh-pages -> gh-pages
Adams-MacBook-Pro-4:messages adamgreenspan$ git add .
Adams-MacBook-Pro-4:messages adamgreenspan$ git commit -m "one off error"
[gh-pages dd170ae] one off error
 1 file changed, 1 insertion(+), 1 deletion(-)
Adams-MacBook-Pro-4:messages adamgreenspan$ git push
warning: push.default is unset; its implicit value is changing in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the current behavior after the default changes, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

In Git 2.0, Git will default to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 370 bytes | 0 bytes/s, done.
Total 4 (delta 3), reused 0 (delta 0)
To https://github.com/tuftsdev/comp20-agreenspan.git
   fac60ab..dd170ae  gh-pages -> gh-pages
Adams-MacBook-Pro-4:messages adamgreenspan$ git add .
Adams-MacBook-Pro-4:messages adamgreenspan$ git commit -m "fixing for loop"
[gh-pages fb9b7db] fixing for loop
 1 file changed, 1 insertion(+), 1 deletion(-)
Adams-MacBook-Pro-4:messages adamgreenspan$ git push
warning: push.default is unset; its implicit value is changing in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the current behavior after the default changes, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

In Git 2.0, Git will default to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 357 bytes | 0 bytes/s, done.
Total 4 (delta 3), reused 0 (delta 0)
To https://github.com/tuftsdev/comp20-agreenspan.git
   dd170ae..fb9b7db  gh-pages -> gh-pages
Adams-MacBook-Pro-4:messages adamgreenspan$ git add .
Adams-MacBook-Pro-4:messages adamgreenspan$ git commit -m "testing"
[gh-pages ef7342f] testing
 1 file changed, 3 insertions(+), 7 deletions(-)
Adams-MacBook-Pro-4:messages adamgreenspan$ git push
warning: push.default is unset; its implicit value is changing in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the current behavior after the default changes, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

In Git 2.0, Git will default to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 378 bytes | 0 bytes/s, done.
Total 4 (delta 3), reused 0 (delta 0)
To https://github.com/tuftsdev/comp20-agreenspan.git
   fb9b7db..ef7342f  gh-pages -> gh-pages
Adams-MacBook-Pro-4:messages adamgreenspan$ git add .
Adams-MacBook-Pro-4:messages adamgreenspan$ git commit -m "JSON structure"
[gh-pages 272a77b] JSON structure
 1 file changed, 2 insertions(+), 2 deletions(-)
Adams-MacBook-Pro-4:messages adamgreenspan$ git push
warning: push.default is unset; its implicit value is changing in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the current behavior after the default changes, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

In Git 2.0, Git will default to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 386 bytes | 0 bytes/s, done.
Total 4 (delta 3), reused 0 (delta 0)
To https://github.com/tuftsdev/comp20-agreenspan.git
   ef7342f..272a77b  gh-pages -> gh-pages
Adams-MacBook-Pro-4:messages adamgreenspan$ git add .
Adams-MacBook-Pro-4:messages adamgreenspan$ git commit -m "for loops and innerHTML"
[gh-pages 5f99b4d] for loops and innerHTML
 1 file changed, 7 insertions(+), 3 deletions(-)
Adams-MacBook-Pro-4:messages adamgreenspan$ ls
data.json	index.html	lab.js		style.css
Adams-MacBook-Pro-4:messages adamgreenspan$ git push
warning: push.default is unset; its implicit value is changing in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the current behavior after the default changes, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

In Git 2.0, Git will default to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 437 bytes | 0 bytes/s, done.
Total 4 (delta 3), reused 0 (delta 0)
To https://github.com/tuftsdev/comp20-agreenspan.git
   272a77b..5f99b4d  gh-pages -> gh-pages
Adams-MacBook-Pro-4:messages adamgreenspan$ git add .
Adams-MacBook-Pro-4:messages adamgreenspan$ git commit -m "testing"
[gh-pages 84b01cb] testing
 1 file changed, 1 insertion(+)
Adams-MacBook-Pro-4:messages adamgreenspan$ git push
warning: push.default is unset; its implicit value is changing in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the current behavior after the default changes, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

In Git 2.0, Git will default to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 373 bytes | 0 bytes/s, done.
Total 4 (delta 3), reused 0 (delta 0)
To https://github.com/tuftsdev/comp20-agreenspan.git
   5f99b4d..84b01cb  gh-pages -> gh-pages
Adams-MacBook-Pro-4:messages adamgreenspan$ git add .
Adams-MacBook-Pro-4:messages adamgreenspan$ git commit -m "console test"
[gh-pages b3d80b0] console test
 1 file changed, 1 insertion(+), 5 deletions(-)
Adams-MacBook-Pro-4:messages adamgreenspan$ git push
warning: push.default is unset; its implicit value is changing in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the current behavior after the default changes, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

In Git 2.0, Git will default to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 397 bytes | 0 bytes/s, done.
Total 4 (delta 3), reused 0 (delta 0)
To https://github.com/tuftsdev/comp20-agreenspan.git
   84b01cb..b3d80b0  gh-pages -> gh-pages
Adams-MacBook-Pro-4:messages adamgreenspan$ git add .
Adams-MacBook-Pro-4:messages adamgreenspan$ git commit -m "testing console more"
[gh-pages d262cee] testing console more
 1 file changed, 1 insertion(+)
Adams-MacBook-Pro-4:messages adamgreenspan$ git push
warning: push.default is unset; its implicit value is changing in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the current behavior after the default changes, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

In Git 2.0, Git will default to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 395 bytes | 0 bytes/s, done.
Total 4 (delta 3), reused 0 (delta 0)
To https://github.com/tuftsdev/comp20-agreenspan.git
   b3d80b0..d262cee  gh-pages -> gh-pages
Adams-MacBook-Pro-4:messages adamgreenspan$ git add .
Adams-MacBook-Pro-4:messages adamgreenspan$ git commit -m "debug"
[gh-pages 50a48d9] debug
 1 file changed, 1 insertion(+), 1 deletion(-)
Adams-MacBook-Pro-4:messages adamgreenspan$ git push
warning: push.default is unset; its implicit value is changing in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the current behavior after the default changes, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

In Git 2.0, Git will default to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 379 bytes | 0 bytes/s, done.
Total 4 (delta 3), reused 0 (delta 0)
To https://github.com/tuftsdev/comp20-agreenspan.git
   d262cee..50a48d9  gh-pages -> gh-pages
Adams-MacBook-Pro-4:messages adamgreenspan$ git add .
Adams-MacBook-Pro-4:messages adamgreenspan$ git commit -m "fixing paren"
[gh-pages 6383bc1] fixing paren
 1 file changed, 3 insertions(+), 1 deletion(-)
Adams-MacBook-Pro-4:messages adamgreenspan$ git push
warning: push.default is unset; its implicit value is changing in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the current behavior after the default changes, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

In Git 2.0, Git will default to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 389 bytes | 0 bytes/s, done.
Total 4 (delta 3), reused 0 (delta 0)
To https://github.com/tuftsdev/comp20-agreenspan.git
   50a48d9..6383bc1  gh-pages -> gh-pages
Adams-MacBook-Pro-4:messages adamgreenspan$ git add .
Adams-MacBook-Pro-4:messages adamgreenspan$ git commit -m "fixing <"
[gh-pages aa47204] fixing <
 1 file changed, 1 insertion(+), 1 deletion(-)
Adams-MacBook-Pro-4:messages adamgreenspan$ git push
warning: push.default is unset; its implicit value is changing in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the current behavior after the default changes, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

In Git 2.0, Git will default to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 352 bytes | 0 bytes/s, done.
Total 4 (delta 3), reused 0 (delta 0)
To https://github.com/tuftsdev/comp20-agreenspan.git
   6383bc1..aa47204  gh-pages -> gh-pages
Adams-MacBook-Pro-4:messages adamgreenspan$ git add .
Adams-MacBook-Pro-4:messages adamgreenspan$ git commit -m "fixing <"
[gh-pages c86b484] fixing <
 1 file changed, 1 insertion(+), 1 deletion(-)
Adams-MacBook-Pro-4:messages adamgreenspan$ git push
warning: push.default is unset; its implicit value is changing in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the current behavior after the default changes, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

In Git 2.0, Git will default to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 348 bytes | 0 bytes/s, done.
Total 4 (delta 3), reused 0 (delta 0)
To https://github.com/tuftsdev/comp20-agreenspan.git
   aa47204..c86b484  gh-pages -> gh-pages
Adams-MacBook-Pro-4:messages adamgreenspan$ git add .
Adams-MacBook-Pro-4:messages adamgreenspan$ git commit -m "back to loop"
[gh-pages 6bb035c] back to loop
 1 file changed, 7 insertions(+), 7 deletions(-)
Adams-MacBook-Pro-4:messages adamgreenspan$ git push
warning: push.default is unset; its implicit value is changing in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the current behavior after the default changes, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

In Git 2.0, Git will default to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 479 bytes | 0 bytes/s, done.
Total 4 (delta 3), reused 0 (delta 0)
To https://github.com/tuftsdev/comp20-agreenspan.git
   c86b484..6bb035c  gh-pages -> gh-pages
Adams-MacBook-Pro-4:messages adamgreenspan$ git add .
Adams-MacBook-Pro-4:messages adamgreenspan$ git commit -m "onclick"
[gh-pages 1f79cf4] onclick
 1 file changed, 2 insertions(+), 2 deletions(-)
Adams-MacBook-Pro-4:messages adamgreenspan$ git push
warning: push.default is unset; its implicit value is changing in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the current behavior after the default changes, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

In Git 2.0, Git will default to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 381 bytes | 0 bytes/s, done.
Total 4 (delta 3), reused 0 (delta 0)
To https://github.com/tuftsdev/comp20-agreenspan.git
   6bb035c..1f79cf4  gh-pages -> gh-pages
Adams-MacBook-Pro-4:messages adamgreenspan$ git add .
Adams-MacBook-Pro-4:messages adamgreenspan$ git commit -m "onclick2"
[gh-pages 5455f39] onclick2
 1 file changed, 1 insertion(+), 1 deletion(-)
Adams-MacBook-Pro-4:messages adamgreenspan$ git push
warning: push.default is unset; its implicit value is changing in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the current behavior after the default changes, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

In Git 2.0, Git will default to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 361 bytes | 0 bytes/s, done.
Total 4 (delta 3), reused 0 (delta 0)
To https://github.com/tuftsdev/comp20-agreenspan.git
   1f79cf4..5455f39  gh-pages -> gh-pages
Adams-MacBook-Pro-4:messages adamgreenspan$ git add .
Adams-MacBook-Pro-4:messages adamgreenspan$ git commit -m "formatting"
[gh-pages 46eb50f] formatting
 1 file changed, 4 insertions(+), 5 deletions(-)
Adams-MacBook-Pro-4:messages adamgreenspan$ git push
warning: push.default is unset; its implicit value is changing in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the current behavior after the default changes, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

In Git 2.0, Git will default to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 385 bytes | 0 bytes/s, done.
Total 4 (delta 3), reused 0 (delta 0)
To https://github.com/tuftsdev/comp20-agreenspan.git
   5455f39..46eb50f  gh-pages -> gh-pages
Adams-MacBook-Pro-4:messages adamgreenspan$ git add .
Adams-MacBook-Pro-4:messages adamgreenspan$ git commit -m "fixed?"
[gh-pages 56a0f67] fixed?
 1 file changed, 3 insertions(+), 3 deletions(-)
Adams-MacBook-Pro-4:messages adamgreenspan$ git push
warning: push.default is unset; its implicit value is changing in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the current behavior after the default changes, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

In Git 2.0, Git will default to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 380 bytes | 0 bytes/s, done.
Total 4 (delta 3), reused 0 (delta 0)
To https://github.com/tuftsdev/comp20-agreenspan.git
   46eb50f..56a0f67  gh-pages -> gh-pages
Adams-MacBook-Pro-4:messages adamgreenspan$ git add .
Adams-MacBook-Pro-4:messages adamgreenspan$ git commit -m "format"
[gh-pages 7561835] format
 1 file changed, 2 insertions(+), 2 deletions(-)
Adams-MacBook-Pro-4:messages adamgreenspan$ git push
warning: push.default is unset; its implicit value is changing in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the current behavior after the default changes, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

In Git 2.0, Git will default to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 363 bytes | 0 bytes/s, done.
Total 4 (delta 3), reused 0 (delta 0)
To https://github.com/tuftsdev/comp20-agreenspan.git
   56a0f67..7561835  gh-pages -> gh-pages
Adams-MacBook-Pro-4:messages adamgreenspan$ git add .
Adams-MacBook-Pro-4:messages adamgreenspan$ git commit -m "format"
[gh-pages d03697f] format
 2 files changed, 5 deletions(-)
Adams-MacBook-Pro-4:messages adamgreenspan$ git push
warning: push.default is unset; its implicit value is changing in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the current behavior after the default changes, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

In Git 2.0, Git will default to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Counting objects: 12, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 467 bytes | 0 bytes/s, done.
Total 5 (delta 3), reused 0 (delta 0)
To https://github.com/tuftsdev/comp20-agreenspan.git
   7561835..d03697f  gh-pages -> gh-pages
Adams-MacBook-Pro-4:messages adamgreenspan$ git add .
Adams-MacBook-Pro-4:messages adamgreenspan$ git commit -m "css"
[gh-pages 5fc84f7] css
 1 file changed, 4 insertions(+)
Adams-MacBook-Pro-4:messages adamgreenspan$ git push
warning: push.default is unset; its implicit value is changing in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the current behavior after the default changes, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

In Git 2.0, Git will default to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 358 bytes | 0 bytes/s, done.
Total 4 (delta 3), reused 0 (delta 0)
To https://github.com/tuftsdev/comp20-agreenspan.git
   d03697f..5fc84f7  gh-pages -> gh-pages
Adams-MacBook-Pro-4:messages adamgreenspan$ git add .
Adams-MacBook-Pro-4:messages adamgreenspan$ git commit -m "Step 2"
[gh-pages 12e694d] Step 2
 2 files changed, 2 insertions(+), 5 deletions(-)
Adams-MacBook-Pro-4:messages adamgreenspan$ git push
warning: push.default is unset; its implicit value is changing in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the current behavior after the default changes, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

In Git 2.0, Git will default to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Counting objects: 13, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 465 bytes | 0 bytes/s, done.
Total 5 (delta 4), reused 0 (delta 0)
To https://github.com/tuftsdev/comp20-agreenspan.git
   5fc84f7..12e694d  gh-pages -> gh-pages
Adams-MacBook-Pro-4:messages adamgreenspan$ git add .
Adams-MacBook-Pro-4:messages adamgreenspan$ git commit -m "final formatting"
[gh-pages 3b20a01] final formatting
 2 files changed, 6 insertions(+), 1 deletion(-)
Adams-MacBook-Pro-4:messages adamgreenspan$ git push
warning: push.default is unset; its implicit value is changing in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the current behavior after the default changes, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

In Git 2.0, Git will default to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Counting objects: 13, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 518 bytes | 0 bytes/s, done.
Total 5 (delta 4), reused 0 (delta 0)
To https://github.com/tuftsdev/comp20-agreenspan.git
   12e694d..3b20a01  gh-pages -> gh-pages
Adams-MacBook-Pro-4:messages adamgreenspan$ vim README.md

Everything in lab.js is working. Took a while to figure out how to use innerHTML without overwriting the first element. The CSS file is not being implemented fo
r an unknown reason.

I worked with my housemate, Ian Leaman on fixing a github problem, as I accident
ally initialized within my local messages folder. He did not help with any of th
e content and was not able to fix the github issue as well. This project took ap
proximately 4 hours.

~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
-- INSERT --
