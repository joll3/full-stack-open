# [Fullstack Open](https://fullstackopen.com/en/)

Chromium browser w dev tools open

[JSON viewer extension](https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa)

## 0b [Fundamentals of Web apps](https://studies.cs.helsinki.fi/exampleapp/)

### Traditional web applications

>In traditional web applications, the browser is "dumb". It only fetches HTML data from the server, and all application logic is on the server. A server can be created using Java Spring , Python Flask or Ruby on Rails to name just a few examples.

### AJAX (asynchronous javascript and XML)

revolutionary approach to fetching content using JavaScript included in HTML without rerendering the page

## SETUP

```bash
brew install nvm
```

Please note that upstream has asked us to make explicit managing
nvm via Homebrew is unsupported by them and you should check any
problems against the standard nvm install method prior to reporting.

You should create NVM's working directory if it doesn't exist:

```
  mkdir ~/.nvm #done
  nvm install 16.13.2 #install node version required for course
  #grep 16.13.2 ~/.zsh_history
```

Add the following to ~/.zshrc or your desired shell
configuration file:

  export NVM_DIR="$HOME/.nvm"
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion

You can set $NVM_DIR to any location, but leaving it unchanged from
/opt/homebrew/opt/nvm will destroy any nvm-installed Node installations
upon upgrade/reinstall.

```
git config --global --edit
```

Node.js version >17 doesn't support older openssl setup
https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported

https://github.com/webpack/webpack/issues/14532#issuecomment-947012063

```
export NODE_OPTIONS=--openssl-legacy-provider
```

```zsh
part1(main*)$ env 
```

shows nvm enviroment paths and information about installation

### 0 Fundamentals

- [submission system](https://studies.cs.helsinki.fi/stats/courses/fullstackopen)
- recommended file structure

```
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

- a service for creating [websequencediagrams](https://www.websequencediagrams.com)
- article about [Unified Modeling Language (UML) | Sequence Diagrams](https://www.geeksforgeeks.org/unified-modeling-language-uml-sequence-diagrams/)
