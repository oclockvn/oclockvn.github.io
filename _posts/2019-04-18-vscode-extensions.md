---
title: VsCode extensions
tags: ["vscode"]
---

There is an extension already [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)

### Manually

Unix:

```
code --list-extensions | xargs -L 1 echo code --install-extension
```

Windows:

```
code --list-extensions | % { "code --install-extension $_" }
```

### My extensions

(Updated in Apr 18, 2019)

```
code --install-extension alefragnani.Bookmarks
code --install-extension castwide.solargraph
code --install-extension christian-kohler.npm-intellisense
code --install-extension christian-kohler.path-intellisense
code --install-extension eamodio.gitlens
code --install-extension eg2.vscode-npm-script
code --install-extension gencer.html-slim-scss-css-class-completion
code --install-extension HookyQR.beautify
code --install-extension karigari.chat
code --install-extension misogi.ruby-rubocop
code --install-extension ms-vsliveshare.vsliveshare
code --install-extension ms-vsliveshare.vsliveshare-audio
code --install-extension ms-vsliveshare.vsliveshare-pack
code --install-extension PeterJausovec.vscode-docker
code --install-extension rebornix.ruby
code --install-extension robinbentley.sass-indented
code --install-extension shaharkazaz.git-merger
code --install-extension sianglim.slim
code --install-extension VisualStudioExptTeam.vscodeintellicode
code --install-extension vscodevim.vim
```
