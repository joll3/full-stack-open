# [Fullstack Open](https://fullstackopen.com/en/)

## SETUP

[`brew install chromium`](https://formulae.brew.sh/cask/chromium) browser w dev tools open  
[JSON viewer extension](https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa)  
`mermaid` [websequencediagrams](https://www.websequencediagrams.com)

### [Node.js installation instructions](https://nodejs.org/en/download/package-manager/)

> Part updated on 17th January 2025. Node updated to version version `22.3.0`. Eslint configuration moved to eslint.config.js file

```zsh
brew install nvm
```

> Please note that upstream has asked us to make explicit managing nvm via Homebrew is unsupported by them and you should check any problems against the standard nvm install method prior to reporting.

You should create NVM's working directory if it doesn't exist:

`mkdir ~/.nvm`

Add the following to your shell profile e.g. ~/.profile or ~/.zshrc:

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh" # This loads nvm
[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" # This loads nvm bash_completion
```

> This setup will keep all Node versions safe from Homebrew changes, but load `nvm` from Homebrew location
>
> > You can set $NVM_DIR to any location, but leaving it unchanged from /opt/homebrew/opt/nvm will destroy any nvm-installed Node installations upon upgrade/reinstall.

`source ~/.zshrc` to apply changes to shell profile  
`nvm install 22.3.0`

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
