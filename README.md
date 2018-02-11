Discord_Burst_bot_helper
======================

Discord bot meant to help the burstneon discord guild.
Built with discord.js using nodejs



#### Table of Contents
* [Features](#features)
* [Usage](#usage)
  * [Requirements](#requirements)
  * [Downloading & Installing](#1-downloading--installing)
  * [Configuration](#2-configuration)
  * [Starting the Bot](#3-start-the-bot)
* [Donations](#donations)


#### Basic features

* Basic setup and getting started instructions via commands in discord
* Easy to add more commands

#### Requirements

* [Node.js](http://nodejs.org/) v7+ ([follow these installation instructions](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager))
  * I used node-v9.3.0-linux-arm7 on raspbian
* [Discord.js] (https://github.com/discordjs/discord.js)

If you use old versions of Node.js that may come with your system package manager then you will have problems. Follow the linked instructions to get the last stable versions.


#### 1) Downloading & Installing

Clone the repository and run `npm update` for all the dependencies to be installed:

```bash
git clone https://github.com/LoyalNine1487/Discord_Burst_bot_helper.git
cd Discord_Burst_bot_helper
npm update
```

#### 2) Configuration

Copy `config.json.example` to `config.json`
fill in the fields in `config.json` with your details (You can get your token here: https://discordapp.com/developers/applications/me)

#### 3) Start the bot

```bash
node .
```

If you want to want the bot headless I recommed useing screen or tmux.

Donations
---------

 * BTC: 3L29JYDCKVxK6LNVCprKAL14yRukcEhQtV
 * XMR: 4Amfi5NFFdm5syc4dVMDM7bjoqxU1zePNikR7y9MoDTBDfY1FLCSmi5WbwaVe4vUMveKAzAiA4j8xgUi29TpKXpm436kfec
 * ETH/ETC:  0x9DcF7f03d80CECFA9415141441e00FBC77dc1759

 Credits
---------

Api price data from coincap.io

