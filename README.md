# [Fullstack Open](https://fullstackopen.com/en/)

Chromium browser w dev tools open

[JSON viewer extension](https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa)

## SETUP

[Personal Visual Studio Code setup](../../Sync/markdown/notes/programming.md#visual-studio-code-vscode), with `mermaid` [websequencediagrams](https://www.websequencediagrams.com)

### [Node.js installation instructions](https://nodejs.org/en/download/package-manager/)

```zsh
brew install nvm
```

Please note that upstream has asked us to make explicit managing
nvm via Homebrew is unsupported by them and you should check any
problems against the standard nvm install method prior to reporting.

You should create NVM's working directory if it doesn't exist:

```zsh
  mkdir ~/.nvm #done
  nvm install 16.13.2 #install node version required for course
  #grep 16.13.2 ~/.zsh_history
```

Add the following to ~/.zshrc or your desired shell
configuration file:

export NVM_DIR="$HOME/.nvm"
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh" # This loads nvm
[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" # This loads nvm bash_completion

You can set $NVM_DIR to any location, but leaving it unchanged from
/opt/homebrew/opt/nvm will destroy any nvm-installed Node installations
upon upgrade/reinstall.

```zsh
git config --global --edit
```

Node.js version >17 doesn't support older openssl setup
https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported

https://github.com/webpack/webpack/issues/14532#issuecomment-947012063

```zsh
export NODE_OPTIONS=--openssl-legacy-provider
```

```zsh
part1(main*)$ env
```

shows nvm enviroment paths and information about installation

## [0a General info](https://fullstackopen.com/en/part0/general_info)

### Parts and completion

Full Stack studies consist of the core course and multiple extensions. You can complete the studies in the extent of 5 to 14 credits.

Parts 0-5 (core course) - Full Stack Web Development (5 cr, CSM141081)
The number of credits and the grade for the course are based on the total number of submitted exercises for parts 0-7 (including exercises marked with an asterisk).

Credits and grades are calculated as follows:

| exercises | credits | grade |
| --------- | ------- | ----- |
| 138       | 7       | 5     |
| 127       | 6       | 5     |
| 116       | 5       | 5     |
| 105       | 5       | 4     |
| \>\>94    | 5       | 3<<   |
| 83        | 5       | 2     |
| 72        | 5       | 1     |

### Submitting exercises

[Submission system](https://studies.cs.helsinki.fi/stats/courses/fullstackopen/submissions)

recommended file structure

```file
part0
part1
  courseinfo
  unicafe
  anecdotes
part2
  courseinfo
  phonebook
  countries
```

### Exam

**!!MUST PASS!!** has no effect on grade
